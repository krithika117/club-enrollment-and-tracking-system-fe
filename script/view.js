var email = localStorage.email;
console.log(email)

// var email;
// email = firebase.auth().currentUser.email;
firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        location.replace("index.php")

    } else {
        if ((email.split('@')[0]) == "admin") {
            document.querySelector('#dept_filter').classList.remove('d-none');
            document.querySelector('#adminonly').classList.remove('d-none');
            document.querySelector('#fac').classList.remove('d-none');
        } else {
            document.querySelector('#dept_filter').classList.add('d-none');
        }


    }
})

function logout() {
    firebase.auth().signOut()
    localStorage.email = ''
}

email = localStorage.email;
$(document).ready(function () {
    load_admin_data();
    // Load Faculty Data
    function load_fac_data(query = 'all') {
        console.log(query)
        var server = "http://127.0.0.1:5000";
        $.ajax({
            method: "POST",
            url: server + "/fetchrecords",
            contentType: 'application/json;charset=UTF-8',
            data: JSON.stringify({
                'query2': query,
                'email': email
            }),
            dataType: 'json',
            success: function (data) {
                console.log(data.response)
                $('tbody').empty();
                for (var i = 0; i <= data.response.length; i++) {
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
            url: server + "/fetchrecords",
            contentType: 'application/json;charset=UTF-8',
            data: JSON.stringify({
                'query1': query1,
                'query2': query2,
                'email': email,
            }),
            dataType: 'json',
            success: function (data) {
                console.log(data.response)
                $('tbody').empty();
                for (var i = 0; i <= data.response.length; i++) {
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
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert('Error: ' + textStatus + ' - ' + errorThrown);
            }

        });
    }


    $('.filter').change(function () {
        console.log($('#hidden_value1').val($('#dept_filter').val()));
        console.log($('#hidden_value2').val($('#year_filter').val()));

        var query1 = $('#hidden_value1').val();
        var query2 = $('#hidden_value2').val();
        if (query1 && query2) {
            load_admin_data(query1, query2);
        } else {
            load_fac_data(query2);
        }

    });

});