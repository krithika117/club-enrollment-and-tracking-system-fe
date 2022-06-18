firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        logout()
        location.replace("login.php")
    }

})

function dateConv(d) {
    return new Intl.DateTimeFormat('en-IN').format(new Date(d));
}

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
var club = (sessionStorage.email).split('@')[0].toUpperCase();
$(document).ready(function () {
    load_event_data();

    function load_event_data() {
        // console.log(query)
        var club = (sessionStorage.email).split('@')[0].toUpperCase();
        var server = "https://attribuer.herokuapp.com";
        $.ajax({
            method: "POST",
            url: server + "/viewevent",
            contentType: 'application/json;charset=UTF-8',
            data: JSON.stringify({
                'club': club,
            }),
            dataType: 'json',
            success: function (data) {
                $('tbody').empty();
                console.log(data.response)
                if (data.response.length == 0) {
                    document.querySelector('#prompt').classList.remove('d-none');
                    $('#prompt').empty();
                    $('#prompt').append("<img src='/dist/images/smilep.svg' width='150'><br>Looks like you're yet to create an event :)");
                } else {
                    document.querySelector('#prompt').classList.add('d-none');

                    for (var i = 0; i < data.response.length; i++) {
                        var row = $('<tr><td>' + data.response[i].event + '</td><td>' +
                            dateConv(data.response[i].date) + '</td><td>' + data.response[i].club + '</td><td>' +
                            '<a title="Delete" class="delete1" data-toggle="tooltip"  id="' + data.response[i].event + '"><i class="fa fa-trash-o"></i></a></td></tr>');
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



    $('#eventSubmit').on('click', function (e) {
        e.preventDefault();
        $('#loading').show();
        var eventName = $('#eventName').val();
        var date = $('#date').val();
        var clubChoice = $("#clubChoice :selected").val();
        var headcount = $('#headcount').val();

        if (eventName != "") {
            var server = "https://attribuer.herokuapp.com";
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

    $(document).on("click", '.delete1', function (e) {
        e.preventDefault();
        // var firstName = $('#firstName').val();
        // $(this).parents("tr").remove();
        // $(".add-new").removeAttr("disabled");
        var event = $(this).attr("id");
        console.log(event);
        // var string = id;
        var server = "https://attribuer.herokuapp.com";
        if (confirm("Are you sure you wanna delete?") == true) {
            $.ajax({
                method: "POST",
                url: server + "/delete/event",
                contentType: 'application/json;charset=UTF-8',
                data: JSON.stringify({
                    'event': event,
                    'club': club,
                }),
                dataType: 'json',
                success: function (data) {
                    // alert("Deleted");
                    location.replace('eventlist.php')
                },
                error: function (err) {
                    console.log(err);
                }
            })
        } else {

        }

    });
});