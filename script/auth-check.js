function logout() {
  firebase.auth().signOut()
  sessionStorage.email = '';
  sessionStorage.stat = ''
  sessionStorage.clear()
  location.replace("login.php")
}


$(document).ready(() => {
  //console.log('in2')
  firebase.auth().onAuthStateChanged((user) => {
    //console.log('in1')
    if (user) {
      //console.log('in')
      window.user = user;
      var server = "http://127.0.0.1:5000";
      var email = firebase.auth().currentUser.email

      if (email != "") {

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
              //console.log(response)
              sessionStorage.stat = response.isAdmin;
              sessionStorage.email = response.email;
              if (response.message == "exists") {
                if (response.isAdmin == '0') { //If student
                  if (((location.href.split('/').pop()) == 'view.php') || ((location.href.split('/').pop()) == 'edit-members.php') || ((location.href.split('/').pop()) == 'eventlist.php') || ((location.href.split('/').pop()) == 'take-attendance.php') || ((location.href.split('/').pop()) == 'update-attendance.php')) {
                    logout();
                    sessionStorage.email = ''
                    sessionStorage.stat = ''
                    sessionStorage.clear()

                  }
                  if ((location.href.split('/').pop()) == 'home.php') {
                    document.getElementById('scView').innerHTML = response.serviceClubChoice;
                    document.getElementById('tcView1').innerHTML = response.techClubChoice1;
                    document.getElementById('tcView2').innerHTML = response.techClubChoice2;
                 
                    document.querySelector('#regForm').classList.add('d-none');
                    document.querySelector('.wrapper').classList.remove('d-none');
                  }

                }

                // Admin
                if (response.isAdmin == '1' || response.isAdmin == '2' || response.isAdmin == '3') {

                  if ((email.split('@')[0]) != "admin") {

                    if ((location.href.split('/').pop()) == 'edit-members.php') {
                      console.log('im workin')
                      logout();
                      sessionStorage.email = ''
                      sessionStorage.stat = ''
                      sessionStorage.clear()
                    }
                    if (response.isAdmin != '2') {
                      if (((location.href.split('/').pop()) == 'update-attendance.php') || ((location.href.split('/').pop()) == 'take-attendance.php' || ((location.href.split('/').pop()) == 'eventlist.php'))) {
                        console.log('im workin')
                        logout();
                        sessionStorage.email = ''
                        sessionStorage.stat = ''
                        sessionStorage.clear()
                      }
                    }
                  }
                  if ((location.href.split('/').pop()) == 'home.php') {
                    document.querySelector('#regForm').classList.add('d-none');
                    // document.querySelector('#fac').classList.remove('d-none');
                    document.querySelector('.wrapper-admin').classList.remove('d-none');
                    // document.querySelector('#listForm').classList.add('d-none');

                    console.log('hi')
                  }
                }


              } else if (response.message == "clear") {
                //console.log('clear')
                // if ((location.href.split('/').pop()) == 'view.php') {
                //   logout();
                //   sessionStorage.email = ''
                //   sessionStorage.stat = ''
                //   sessionStorage.clear()
                // }
                // if ((location.href.split('/').pop()) == 'edit-members.php') {
                //   logout();
                //   sessionStorage.email = ''
                //   sessionStorage.stat = ''
                //   sessionStorage.clear()
                // }
                if (((location.href.split('/').pop()) == 'view.php') || ((location.href.split('/').pop()) == 'edit-members.php') || ((location.href.split('/').pop()) == 'eventlist.php') || ((location.href.split('/').pop()) == 'take-attendance.php') || ((location.href.split('/').pop()) == 'update-attendance.php')) {
                  logout();
                  sessionStorage.email = ''
                  sessionStorage.stat = ''
                  sessionStorage.clear()
                }
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
          ////         console.log('bad')
          //     },
          // 409: function () {
          //     $('#loading').hide();
          //     $('#msg').html(
          //         '<span style="color: red;">You are already registered user</span>'
          //     );
          ////     console.log('exists')
          // }
          // },
          error: function (err) {
            //console.log(err);
          }
        });
      } else {
        //console.log('insuff')
      }
      // });

    }
  })
})