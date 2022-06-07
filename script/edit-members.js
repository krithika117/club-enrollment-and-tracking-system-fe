var email = sessionStorage.email;
console.log(email)

// var email;
// email = firebase.auth().currentUser.email;
firebase.auth().onAuthStateChanged((user) => {
  if (!user || sessionStorage.length == 0) {
    // sessionStorage.email = '';
    // sessionStorage.stat = ''
    logout()
    sessionStorage.clear()

  } else {
    if ((email.split('@')[0]) == "admin") {
      document.querySelector('#dept_filter').classList.remove('d-none');
      // document.querySelector('#adminonly').classList.remove('d-none');
      // document.querySelector('#fac').classList.remove('d-none');

    } else {
      document.querySelector('#dept_filter').classList.add('d-none');
    }


  }
})

function logout() {
  firebase.auth().signOut()
  sessionStorage.email = '';
  sessionStorage.stat = ''
  sessionStorage.clear()
  location.replace("login.php")
}


function prompt_val() {
  $('#prompt').append("<img src='../dist/images/img.svg'><br>Please use the filters to view data.");
}
email = sessionStorage.email;
$(document).ready(function () {
  prompt_val();
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
        if (data.response.length == 0) {
          document.querySelector('#prompt').classList.remove('d-none');
          $('#prompt').empty();
          $('#prompt').append("<img src='../dist/images/smile.svg'><br>No data found, please try another query.");
        } else {
          document.querySelector('#prompt').classList.add('d-none');
          for (var i = 0; i < data.response.length; i++) {
            document.querySelector('#prompt').classList.add('d-none');
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

    sessionStorage.name = firstName;
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/i;

    if (email != "") {
      if (!regex.test(email)) {
        // $('#msg').html('<span style="color: red;">Invalid email address</span>');

      } else if ((email.split('@').pop()) != 'licet.ac.in') {
        alert("Please use valid LICET Mail alone.");
      } else if (email == "" || firstName == "" || lastName == "" || phoneNumber == "" || rollNo == "" || department == "" || yearOfStudy == "" || serviceClubChoice == "" || techClubChoice1 == "") {
        alert("Please fill all details.");

      } else {
        $.ajax({
          method: "POST",
          url: server + '/validate',
          crossDomain: true,
          data: {
            // 'name': name,
            'email': email,
            // 'stat': sessionStorage.stat;
            // 'password': pwd
          },

          success: function (response) {
            // Start
            if (response.message == "clear") {
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
            } else {
              alert("User Mail ID Already Exists.");
            }
            // AJAXEnd
          },
          error: function (err) {
            console.log(err);
          }
        });
      }
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
    if (confirm("Are you sure you wanna delete?") == true) {
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
    } else {

    }

  });


});