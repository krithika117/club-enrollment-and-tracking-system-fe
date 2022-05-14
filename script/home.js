firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    location.replace("index.php")
  } else {
    email = firebase.auth().currentUser.email;
    document.getElementById('user').innerHTML = "Hello, " + email.split('@')[0];
    document.getElementById('user1').innerHTML = "Hello, " + email.split('@')[0];

  }
})


function logout() {
  firebase.auth().signOut()
  localStorage.email = ''
}

// var currentTab = 0; // Current tab is set to be the first tab (0)
// showTab(currentTab); // Display the current tab

// function showTab(n) {
//   // This function will display the specified tab of the form...
//   var x = document.getElementsByClassName("tab");
//   x[n].style.display = "block";
//   //... and fix the Previous/Next buttons:
//   if (n == 0) {
//     document.getElementById("prevBtn").style.display = "none";
//   } else {
//     document.getElementById("prevBtn").style.display = "inline";
//   }
//   if (n == (x.length - 1)) {
//     document.getElementById("nextBtn").innerHTML = "Submit";
//   } else {
//     document.getElementById("nextBtn").innerHTML = "Next";
//   }
//   //... and run a function that will display the correct step indicator:
//   fixStepIndicator(n)
// }

// function nextPrev(n) {
//   // This function will figure out which tab to display
//   var x = document.getElementsByClassName("tab");
//   // Exit the function if any field in the current tab is invalid:
//   if (n == 1 && !validateForm()) return false;
//   // Hide the current tab:
//   x[currentTab].style.display = "none";
//   // Increase or decrease the current tab by 1:
//   currentTab = currentTab + n;
//   // if you have reached the end of the form...
//   if (currentTab >= x.length) {
//     // ... the form gets submitted:
//     document.getElementById("regForm").submit();
//     return false;
//   }
//   // Otherwise, display the correct tab:
//   showTab(currentTab);
// }

// function validateForm() {
//   // This function deals with validation of the form fields
//   var x, y, i, valid = true;
//   x = document.getElementsByClassName("tab");
//   y = x[currentTab].getElementsByTagName("input");
//   // A loop that checks every input field in the current tab:
//   for (i = 0; i < y.length; i++) {
//     // If a field is empty...
//     if (y[i].value == "") {
//       // add an "invalid" class to the field:
//       y[i].className += " invalid";
//       // and set the current valid status to false
//       valid = false;
//     }
//   }
//   // If the valid status is true, mark the step as finished and valid:
//   if (valid) {
//     document.getElementsByClassName("step")[currentTab].className += " finish";
//   }
//   return valid; // return the valid status
// }

// function fixStepIndicator(n) {
//   // This function removes the "active" class of all steps...
//   var i, x = document.getElementsByClassName("step");
//   for (i = 0; i < x.length; i++) {
//     x[i].className = x[i].className.replace(" active", "");
//   }
//   //... and adds the "active" class on the current step:
//   x[n].className += " active";
// }

var server = "http://127.0.0.1:5000";
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