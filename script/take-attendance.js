firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        logout()
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

if (sessionStorage.stat != '2') {
    logout();
    location.replace("login.php");
    sessionStorage.email = ''
    sessionStorage.stat = ''
    sessionStorage.clear()
}


$(document).ready(function () {
    load_club_data();

    var count = 0;
    var server = "https://attribuer.herokuapp.com";

    function load_club_data(query = "all") {
        console.log(query)
        var email = sessionStorage.email;
        var club = email.split('@')[0].toUpperCase();
        var server = "https://attribuer.herokuapp.com";
        $.ajax({
            method: "POST",
            url: server + "/attendance/club",
            contentType: 'application/json;charset=UTF-8',
            data: JSON.stringify({
                'club': club,
            }),
            dataType: 'json',
            success: function (data) {
                count = data.response.length;
                console.log(data.response);
                $('tbody').empty();
                for (var i = 0; i < data.response.length; i++) {
                    var row = $('<tr><td>' +
                        data.response[i].firstName +
                        '</td><td>' +
                        data.response[i].regNo +
                        '</td><td>' +
                        data.response[i].email +
                        '</td><td>' +
                        data.response[i].department +
                        '</td><td>' +
                        data.response[i].yearOfStudy +
                        '</td><td>' +
                        '<input type="number" name="attcheck" value="0" id="attcheck"  min="0" max="1"/>' +
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



    $("#eventSubmit").click(function () {

        var eventName = $('#eventName').val();
        var date = $('#date').val();
        var email = sessionStorage.email;
        var club = email.split('@')[0].toUpperCase();

        var data1 = $("table tbody tr").map(function (i, row) {
            var data1 = $('td', row);
            // var attendance = '0'
            return {
                name: data1.eq(0).text().trim(),
                regNo: data1.eq(1).text().trim(),
                email: data1.eq(2).text().trim(),
                department: data1.eq(3).text().trim(),
                yearOfStudy: data1.eq(4).text().trim(),
                eventName: eventName,
                date: date,
                club: club,
                attendance: data1.eq(5).find("input").val()
            }
        }).get();


        // alert(data1);
        // console.log(data1);

        $.ajax({
            method: "POST",
            url: server + '/insert/attendance',
            contentType: 'application/json;charset=UTF-8',
            data: JSON.stringify({
                'data': data1,
                'eventName': eventName,
                'date': date,
                'club': club

            }),
            dataType: "json",
            success: function (data) {
                console.log('done!')
                location.replace('eventlist.php')
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
    })


});