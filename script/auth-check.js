$(document).ready(() => {
  console.log('in2')
  firebase.auth().onAuthStateChanged((user) => {
    console.log('in1')
    if (user) {
      console.log('in')
      window.user = user;
      var server = "http://127.0.0.1:5000";
      // $(document).ready(function () {
      // $('#loading').show();
      // var name = $('#fullname').val();
      // var email = $('#email').val();
      var email = firebase.auth().currentUser.email
      console.log(firebase.auth().currentUser.email)

      if (email != "") {

        $.ajax({
          method: "POST",
          url: server + '/validate',
          crossDomain: true,
          data: {
            // 'name': name,
            'email': email,
            // 'password': pwd
          },

          success: function (response) {
              console.log(response)
              console.log(response.message)

              // Admin or Student based on isAdmin
              if (response.message == "exists") {
                document.getElementById('user1').innerHTML += email.split('@')[0];
                // Student
                if (response.isAdmin == '0') {
                  console.log('exist')
                  document.getElementById('user1').innerHTML += email.split('@')[0];
                  document.querySelector('#regForm').classList.add('d-none');
                  document.querySelector('#listForm').classList.add('d-none');
                  document.querySelector('#fac').classList.add('d-none');
                  document.querySelector('.wrapper').classList.remove('d-none');
                }

                // Admin
                if (response.isAdmin == '1') {
                  console.log('exist')
                  // document.getElementById('user1').innerHTML += email.split('@')[0];
                  document.getElementById("user2").innerHTML = "Hello, " + user.email.split('@')[0];
                  document.querySelector('#regForm').classList.add('d-none');
                  document.querySelector('#listForm').classList.add('d-none');
                  document.querySelector('#fac').classList.remove('d-none');
                  document.querySelector('.wrapper-admin').classList.remove('d-none');
                }


              } else if (response.message == "clear") {
                console.log('clear')
                document.querySelector('#regForm').classList.remove('d-none');
                document.querySelector('.wrapper').classList.add('d-none');
              }
            }

            ,
          // statusCode: {
          //     400: function () {
          //         $('#loading').hide();
          //         $('#msg').html(
          //             '<span style="color: red;">Bad request parameters</span>'
          //         );
          //         console.log('bad')
          //     },
          // 409: function () {
          //     $('#loading').hide();
          //     $('#msg').html(
          //         '<span style="color: red;">You are already registered user</span>'
          //     );
          //     console.log('exists')
          // }
          // },
          error: function (err) {
            console.log(err);
          }
        });
      } else {
        console.log('insuff')
      }
      // });

    }
  })
})