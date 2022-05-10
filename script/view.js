var email;
firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        location.replace("index.php")
        email = firebase.auth().currentUser.email;
    } else {
        // document.getElementById("user").innerHTML = "Hello, " + user.email.split('@')[0];

    }
})

function logout() {
    firebase.auth().signOut()
}
// console.log(window.email);
// email = firebase.auth().currentUser.email;
email = localStorage.email
email1 = email.split('@')[0].substring(1);
$(document).ready(function () {
    load_data();
    var email = 'dit@gmail.com';
    // const email = firebase.auth().currentUser.email;
    // const email = localStorage.email;
    function load_data(query = '') {
        // var email = firebase.auth().currentUser.email;
        console.log(query)
        var server = "http://127.0.0.1:5000";
        $.ajax({
            method: "POST",
            url: server + "/fetchrecords",
            contentType: 'application/json;charset=UTF-8',
            data: JSON.stringify({
                'query': query,
                // 'email': 'dit@gmail.com'
            }),
            dataType: 'json',
            success: function (data) {
                // const email = localStorage.email;

                console.log(data.response)
                $('tbody').empty();

                //Departments
                for (var i = 0; i <= data.response.length; i++) {
                    console.log((email1) == ((data.response[i].department).toLowerCase()))
                    if ((email1) == ((data.response[i].department).toLowerCase())) {
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
                    //Admin                    
                    else if (email1 == 'dmin') {
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
                        }
                    }
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert('Error: ' + textStatus + ' - ' + errorThrown);
            }

        });
    }

    $('#search_filter').change(function () {

        $('#hidden_value').val($('#search_filter').val());
        var query = $('#hidden_value').val();
        load_data(query);
    });

});