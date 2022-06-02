firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        logout()
        location.replace("login.php")
    }

})

function logout() {
    firebase.auth().signOut()
    sessionStorage.email = '';
    sessionStorage.stat = '';
    sessionStorage.clear()
}

if (sessionStorage.stat != '2') {
    logout();
    location.replace("login.php");
    sessionStorage.email = '';
    sessionStorage.stat = '';
    sessionStorage.clear()
}

$(document).ready(function () {
    load_event_data();

    function load_event_data() {
        // console.log(query)
        var club = (sessionStorage.email).split('@')[0].toUpperCase();
        var server = "http://127.0.0.1:5000";
        $.ajax({
            method: "POST",
            url: server + "/viewevent",
            contentType: 'application/json;charset=UTF-8',
            data: JSON.stringify({
                'club': club,
            }),
            dataType: 'json',
            success: function (data) {
                console.log(data.response)
                $('tbody').empty();
                for (var i = 0; i < data.response.length; i++) {
                    var row = $('<tr><td>' + data.response[i].event + '</td><td>' +
                        data.response[i].date + '</td><td>' + data.response[i].club +
                        '</td></tr>');
                    $('tbody').append(row);
                    console.log('done')
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert('Error: ' + textStatus + ' - ' + errorThrown);
            }

        });
    }



    $('#eventSubmit').on('click', function (e) {
        e.preventDefault();
        $('#loading').show();
        var eventName = $('#eventName').val();
        var date = $('#date').val();
        var clubChoice = $("#clubChoice :selected").val();
        var headcount = $('#headcount').val();

        if (eventName != "") {
            var server = "http://127.0.0.1:5000";
            $.ajax({
                method: "POST",
                url: server + '/createevent',
                contentType: 'application/json;charset=UTF-8',
                data: JSON.stringify({
                    'event': eventName,
                    'date': date,
                    'clubChoice': clubChoice,
                }),
                dataType: "json",
                success: function (data) {
                    // $('#signupform').hide();
                    // $('#loading').hide();
                    // $('#msg').html('<span style="color: green;">You are registered successfully</span>');
                    console.log('done!')
                    location.replace('create-event.php')
                },
                statusCode: {
                    400: function () {
                        // $('#loading').hide();
                        console.log('<span style="color: red;">Bad request parameters</span>');
                    },
                    409: function () {
                        // $('#loading').hide();
                        console.log('<span style="color: red;">You are already registered user</span>');
                    }
                },
                error: function (err) {
                    console.log(err);
                }
            });

        } else {
            $('#loading').hide();
            $('#msg').html('<span style="color: red;">All fields are required</span>');
        }
    });
});