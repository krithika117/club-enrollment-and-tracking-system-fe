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
      url: server + "/fetchrecords/admin",
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
            '</td><td>' +
            '<a title="Delete" class="delete" data-toggle="tooltip"  id="' + data.response[i].email + '"><i class="fa fa-trash-o"></i></a></td></tr>');
            // <a class="edit" title="Edit" data-toggle="tooltip" id="' + data.response[i].email + '"><i class="fa fa-pencil">&nbsp;&nbsp;</i></a>
          $('tbody').append(row);
          console.log('done')
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
    if (localStorage.stat == '1') {
        load_fac_data(query2);
    } else if (localStorage.stat == '3') {
        load_admin_data(query1, query2);
    } else if (localStorage.stat == '2') {
        load_club_data(query2);
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

  $(document).on("click", '.delete', function (e) {
    e.preventDefault();
    // var firstName = $('#firstName').val();
    // $(this).parents("tr").remove();
    // $(".add-new").removeAttr("disabled");
    var emailDeletion = $(this).attr("id");
    console.log(emailDeletion);
    // var string = id;
    var server = "http://127.0.0.1:5000";
    alert("Are you sure you wanna delete?");
    $.ajax({
      method: "POST",
      url: server + "/delete_user",
      contentType: 'application/json;charset=UTF-8',
      data: JSON.stringify({
        'emailDeletion': emailDeletion,
      }),
      dataType: 'json',
      success: function (data) {
        // alert("Deleted");
        location.replace('edit-members.php')
      },
      error: function (err) {
        console.log(err);
      }
    })

  });

});