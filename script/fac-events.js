firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        logout();
        location.replace("login.php")
    }

})

function logout() {
    firebase.auth().signOut()
    sessionStorage.email = '';
    sessionStorage.stat = ''
    sessionStorage.clear()
    location.replace("login.php")
}

if (sessionStorage.stat != '1') {
    logout();

}

function prompt_val() {
    $('#prompt').append("<img src='../dist/images/pinkfil.svg'><br>Please use the filters to view data.");
}

$(document).ready(function () {
    prompt_val()

    function load_select(query) {
        var email = sessionStorage.email;
        var club = query;
        var server = "http://127.0.0.1:5000";
        $.ajax({

            method: "POST",
            url: server + "/attendance/selectmenu",
            contentType: 'application/json;charset=UTF-8',
            data: JSON.stringify({
                'club': club,
            }),
            dataType: 'json',
            success: function (data) {
                $('tbody').empty();
                count = data.response.length;
                if (count == 0) {
                    document.querySelector('#prompt').classList.remove('d-none');
                    $('#prompt').empty();
                    $('#event_filter').empty();
                    $('#prompt').append("<img src='../dist/images/empty.gif'><br>No events yet");
                    $('#event_filter').append('<option value="" selected hidden disabled>No events yet</option>');
                } else {
                    var select = document.getElementById("event_filter");
                    $('#event_filter').empty();
                    $('#prompt').empty();
                    $('#prompt').append("<img src='../dist/images/pinkfil.svg'><br>Select Event");
                    $('#event_filter').append('<option value="" selected hidden disabled>Select Event</option>');
                    for (var i = 0; i < data.response.length; i++) {
                        var opt = $('<option value="' + data.response[i].event + '">' + data.response[i].event + '</option>');
                        $('#event_filter').append(opt);
                    }
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log('Error: ' + textStatus + ' - ' + errorThrown);
            }

        });
    }
    // load_event_data();

    var count = 0;


    function load_event_data(query1, query2) {

        var dept = (sessionStorage.email).split('@')[0];

        var server = "http://127.0.0.1:5000";
        $.ajax({
            method: "POST",
            url: server + "/attendance/fac/view",
            contentType: 'application/json;charset=UTF-8',
            data: JSON.stringify({
                'dept': dept,
                'query': query2,
                'club': query1,
            }),
            dataType: 'json',
            success: function (data) {
                $('tbody').empty();
                if (data.response.length == 0) {
                    document.querySelector('#prompt').classList.remove('d-none');
                    $('#prompt').empty();
                    $('#prompt').append("<img src='../dist/images/empty.gif'><br>No data found, please try another query.");
                } else {
                    document.querySelector('#prompt').classList.add('d-none');
                    for (var i = 0; i < data.response.length; i++) {
                        var row = $('<tr><td>' +
                            data.response[i].name +
                            '</td><td>' +
                            data.response[i].regNo +
                            '</td><td>' +
                            data.response[i].department +
                            '</td><td>' +
                            data.response[i].yearOfStudy +
                            '</td><td>' +
                            data.response[i].attendance +
                            '</td></tr>');
                        $('tbody').append(row);
                        console.log('done')
                    }
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert('Error: ' + textStatus + ' - ' + errorThrown);
            }

        });
    }


    $('#club_filter').change(function () {
        console.log($('#hidden_value1').val($('#club_filter').val()));
        var query1 = $('#hidden_value1').val();
        load_select(query1);

    });
    $('#event_filter').change(function () {
        console.log($('#hidden_value2').val($('#event_filter').val()));
        var query1 = $('#hidden_value1').val(); //Club
        var query2 = $('#hidden_value2').val(); //Event
        console.log(query2)
        load_event_data(query1, query2);

    });
});