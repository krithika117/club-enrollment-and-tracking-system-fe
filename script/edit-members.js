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
  var server = "http://127.0.0.1:5000";

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

    if (query1 || query2) {
      load_admin_data(query1, query2);
    } else {
      load_fac_data(query1);
    }

  });

  $('#signupSubmit').on('click', function (e) {
    e.preventDefault();
    $('#loading').show();
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var phoneNumber = $('#phoneNumber').val();
    var email = $('#email').val();
    // var email = firebase.auth().currentUser.email
    var rollNo = $('#rollNo').val();
    var regNo = $('#regNo').val();
    var department = $("#department :selected").val();
    var yearOfStudy = $("#yearOfStudy :selected").val();
    var serviceClubChoice = $("#serviceClubChoice :selected").val();
    var techClubChoice1 = $("#techClubChoice1 :selected").val();
    var techClubChoice2 = $("#techClubChoice2 :selected").val();

    localStorage.name = firstName;

    console.log(firstName)
    console.log(lastName)
    console.log(phoneNumber)
    console.log(email)
    console.log(rollNo)
    console.log(regNo)
    console.log(department)
    console.log(yearOfStudy)
    console.log(serviceClubChoice)
    console.log(techClubChoice1)
    console.log(techClubChoice2)

    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/i;

    if (email != "") {
      if (!regex.test(email)) {
        $('#msg').html('<span style="color: red;">Invalid email address</span>');
      } else {
        $.ajax({
          method: "POST",
          url: server + '/register',
          contentType: 'application/json;charset=UTF-8',
          data: JSON.stringify({
            'firstName': firstName,
            'lastName': lastName,
            'phoneNumber': phoneNumber,
            'email': email,
            'rollNo': rollNo,
            'regNo': regNo,
            'department': department,
            'yearOfStudy': yearOfStudy,
            'serviceClubChoice': serviceClubChoice,
            'techClubChoice1': techClubChoice1,
            'techClubChoice2': techClubChoice2,
          }),
          dataType: "json",
          success: function (data) {
            // $('#signupform').hide();
            // $('#loading').hide();
            // $('#msg').html('<span style="color: green;">You are registered successfully</span>');
            console.log('done!')
            location.replace('view.php')


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
      }
    } else {
      $('#loading').hide();
      $('#msg').html('<span style="color: red;">All fields are required</span>');
    }
  });
  // $('#insert_form').on("submit", function (event) {
  //     var server = "http://127.0.0.1:5000";
  //     event.preventDefault();
  //     if ($('#name').val() == "") {
  //         alert("Name is required");
  //     } else if ($('#address').val() == '') {
  //         alert("Address is required");
  //     } else if ($('#designation').val() == '') {
  //         alert("Designation is required");
  //     } else {
  //         $.ajax({
  //             url: server + "/insert",
  //             method: "POST",
  //             data: $('#insert_form').serialize(),
  //             beforeSend: function () {
  //                 $('#insert').val("Inserting");
  //             },
  //             success: function (data) {
  //                 $('#add_data_Modal').modal('hide');
  //                 if (data == 'success') {
  //                     window.location.href = "/";
  //                 }
  //             }
  //         });
  //     }
  // });

});