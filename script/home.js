firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    location.replace("login.php")
  } else {
    email = firebase.auth().currentUser.email;
    document.getElementById('user').innerHTML = "Hello, " + email.split('@')[0] + " :)";
    document.getElementById('user1').innerHTML = "Hello, " + email.split('@')[0] + " :)";
  }
})


function logout() {
  firebase.auth().signOut()
  localStorage.email = ''
  localStorage.stat = ''
  localStorage.clear()
}


var server = "https://attribuer.herokuapp.com";
$(document).ready(function () {
  $('#signupSubmit').on('click', function (e) {
    e.preventDefault();
    $('#loading').show();
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var phoneNumber = $('#phoneNumber').val();
    var email = firebase.auth().currentUser.email
    var rollNo = $('#rollNo').val();
    var regNo = $('#regNo').val();
    var department = $("#department :selected").val();
    var yearOfStudy = $("#yearOfStudy :selected").val();
    var serviceClubChoice = $("#serviceClubChoice :selected").val();
    var techClubChoice1 = $("#techClubChoice1 :selected").val();
    var techClubChoice2 = $("#techClubChoice2 :selected").val();

    localStorage.name = firstName;

    // console.log(firstName)
    // console.log(lastName)
    // console.log(phoneNumber)
    // console.log(email)
    // console.log(rollNo)
    // console.log(regNo)
    // console.log(department)
    // console.log(yearOfStudy)
    // console.log(serviceClubChoice)
    // console.log(techClubChoice1)
    // console.log(techClubChoice2)

    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/i;

    if (email != "") {
      if (!regex.test(email)) {
        $('#msg').html('<span style="color: red;">Invalid email address</span>');
        // LICET Domain Validation
      } 
      else if ((email.split('@').pop()) != 'licet.ac.in') {
        alert("Please use valid LICET Mail alone.");
      }
      else if(phoneNumber.length!=10){
        alert("Please enter valid 10 digit Mobile Number.");

      }
      else if (email == "" || firstName == "" || lastName == "" || phoneNumber == "" || rollNo == "" || department == "" || yearOfStudy == "" || serviceClubChoice == "" || techClubChoice1 == "") {
        alert("Please fill all details.");
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
            location.replace('home.php')


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
});