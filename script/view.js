firebase.auth().onAuthStateChanged((user) => {
    if (!user || sessionStorage.length == 0) {
        logout()
    }
})

function logout() {
    firebase.auth().signOut()
    sessionStorage.email = '';
    sessionStorage.stat = ''
    sessionStorage.clear()
    location.replace("login.php")
}


var email = sessionStorage.email;
console.log(email)

// var email;
// email = firebase.auth().currentUser.email;
firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        logout();
        location.replace("login.php")

    } else {
        if ((email.split('@')[0]) == "admin") {
            document.querySelector('#dept_filter').classList.remove('d-none');
        } else {
            document.querySelector('#dept_filter').classList.add('d-none');
        }


    }
})


function prompt_val() {
    $('#prompt').append("<img src='../dist/images/img.svg'><br>Please use the filters to view data.");
}

email = sessionStorage.email;
$(document).ready(function () {
    // prompt_val();
    prompt_val();
    // Load Faculty Data
    function load_fac_data(query = 'all') {
        console.log(query)

        var server = "http://127.0.0.1:5000";
        $.ajax({
            method: "POST",
            url: server + "/fetchrecords/dept",
            contentType: 'application/json;charset=UTF-8',
            data: JSON.stringify({
                'query2': query,
                'email': email,
            }),
            dataType: 'json',
            success: function (data) {

                console.log(data.response)
                $('tbody').empty();
                if (data.response.length == 0) {
                    document.querySelector('#prompt').classList.remove('d-none');
                    $('#prompt').empty();
                    $('#prompt').append("<img src='../dist/images/smile.svg'><br>No records found, please try another query.");
                } else {
                    document.querySelector('#prompt').classList.add('d-none');
                    for (var i = 0; i < data.response.length; i++) {
                        var row = $('<tr><td>' + data.response[i].firstName + '</td><td>' +
                            data.response[i]
                            .department + '</td><td>' + data.response[i].yearOfStudy +
                            '</td><td>' +
                            data.response[i].serviceClubChoice + '</td><td>' + data
                            .response[i]
                            .techClubChoice1 + '</td><td>' + data.response[i]
                            .techClubChoice2 +
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

    function load_admin_data(query1 = 'all', query2 = 'all') {
        var server = "http://127.0.0.1:5000";
        $.ajax({
            method: "POST",
            url: server + "/fetchrecords/admin",
            contentType: 'application/json;charset=UTF-8',
            data: JSON.stringify({
                'query1': query1,
                'query2': query2,
                'email': email
            }),
            dataType: 'json',
            success: function (data) {

                // console.log(data.response)
                // console.log(data.response.length)
                $('tbody').empty();
                if (data.response.length == 0) {
                    document.querySelector('#prompt').classList.remove('d-none');
                    $('#prompt').empty();
                    $('#prompt').append("<img src='../dist/images/smile.svg'><br>No data found, please try another query.");
                } else {
                    document.querySelector('#prompt').classList.add('d-none');
                    for (var i = 0; i < data.response.length; i++) {
                        var row = $('<tr><td>' + data.response[i].firstName + '</td><td>' +
                            data.response[i]
                            .department + '</td><td>' + data.response[i].yearOfStudy +
                            '</td><td>' +
                            data.response[i].serviceClubChoice + '</td><td>' + data
                            .response[i]
                            .techClubChoice1 + '</td><td>' + data.response[i]
                            .techClubChoice2 +
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

    function load_club_data(query = 'all') {
        document.querySelector('#prompt').classList.add('d-none');
        console.log(query)
        var club = email.split('@')[0].toUpperCase();
        var server = "http://127.0.0.1:5000";
        $.ajax({
            method: "POST",
            url: server + "/fetchrecords/club",
            contentType: 'application/json;charset=UTF-8',
            data: JSON.stringify({
                'query2': query,
                'email': email,
                'club': club,
            }),
            dataType: 'json',
            success: function (data) {
                $('tbody').empty();
                if (data.response.length == 0) {
                    document.querySelector('#prompt').classList.remove('d-none');
                    $('#prompt').empty();
                    $('#prompt').append("<img src='../dist/images/smile.svg'><br>No records found, please try another query.");
                } else {
                    document.querySelector('#prompt').classList.add('d-none');
                    for (var i = 0; i < data.response.length; i++) {
                        var row = $('<tr><td>' + data.response[i].firstName + '</td><td>' +
                            data.response[i]
                            .department + '</td><td>' + data.response[i].yearOfStudy +
                            '</td><td>' +
                            data.response[i].serviceClubChoice + '</td><td>' + data
                            .response[i]
                            .techClubChoice1 + '</td><td>' + data.response[i]
                            .techClubChoice2 +
                            '</td></tr>');
                        $('tbody').append(row);
                        console.log('done')
                    }
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log('Error: ' + textStatus + ' - ' + errorThrown);
            }

        });
    }


    $('.filter').change(function () {
        console.log($('#hidden_value1').val($('#dept_filter').val()));
        console.log($('#hidden_value2').val($('#year_filter').val()));

        var query1 = $('#hidden_value1').val();
        var query2 = $('#hidden_value2').val();
        if (sessionStorage.stat == '1') {
            load_fac_data(query2);
        } else if (sessionStorage.stat == '3') {
            load_admin_data(query1, query2);
        } else if (sessionStorage.stat == '2') {
            load_club_data(query2);
        }

    });

});