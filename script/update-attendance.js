firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
      location.replace("index.php")
    }
    
  })
  
  function logout() {
    firebase.auth().signOut()
    localStorage.email = '';
    localStorage.stat=''
  }
  
  if(localStorage.stat!='2'){
    logout();
    location.replace("index.php");
}


$(document).ready(function () {
    // var email = "nss@gmail.com";
    var email = localStorage.email;
    var club = email.split('@')[0].toUpperCase();
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
            count = data.response.length;
        
            var select = document.getElementById("event_filter");
            // $('tbody').empty();
            for (var i = 0; i < data.response.length; i++) {
                var opt = $('<option value="'+data.response[i].event+'">'+data.response[i].event+'</option>');
                $('select').append(opt);        
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('Error: ' + textStatus + ' - ' + errorThrown);
        }

    });
    load_event_data();

    var count = 0;


    function load_event_data(query = "all") {
        console.log(query)
        // var email = "nss@gmail.com";
        var club = email.split('@')[0].toUpperCase();
        var server = "http://127.0.0.1:5000";
        $.ajax({
            method: "POST",
            url: server + "/attendance/view",
            contentType: 'application/json;charset=UTF-8',
            data: JSON.stringify({
                'query': query,
                'club': club,
            }),
            dataType: 'json',
            success: function (data) {
                count = data.response.length;
                console.log(data.response);
                $('tbody').empty();
                // console.log(new Date(data.response[0].date));
                // var today = new Date(data.response[0].date);
                // $('#date').val(today);
                document.getElementById("date").valueAsDate = new Date(data.response[0].date);                 
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
                        '<input type="number" name="attcheck" value="'+parseInt(data.response[i].attendance)+'" id="attcheck"  min="0" max="1"/>' +
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

    // var eventName = $("#event_filter:selected").val();
    // console.log(eventName)

    $("#eventUpdate").click(function () {
        var eventName = document.getElementById("event_filter").value;
        var date = $('#date').val();
        // var email = "nss@gmail.com";
        var club = email.split('@')[0].toUpperCase();

        var data1 = $("table tbody tr").map(function (i, row) {
            var data1 = $('td', row);
            // var attendance = '0'
            return {
                name: data1.eq(0).text().trim(),
                regNo: data1.eq(1).text().trim(),
                department: data1.eq(2).text().trim(),
                yearOfStudy: data1.eq(3).text().trim(),
                date: date,
                club: club,
                attendance: data1.eq(4).find("input").val(),
                eventName: eventName,
            }
        }).get();


        alert(data1);
        // console.log(data1);

        $.ajax({
            method: "POST",
            url: server + '/update/attendance',
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
                alert('updated');
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

    $('#event_filter').change(function () {
        console.log($('#hidden_value1').val($('#event_filter').val()));
        var query1 = $('#hidden_value1').val();
        load_event_data(query1);
    });
});