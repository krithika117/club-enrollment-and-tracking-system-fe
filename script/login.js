var firebaseConfig = {
    apiKey: "AIzaSyBp14u4j3xmFnb705ZTJ9Ax65tt_VkEELc",
    authDomain: "attribuer-d1cf0.firebaseapp.com",
    projectId: "attribuer-d1cf0",
    storageBucket: "attribuer-d1cf0.appspot.com",
    messagingSenderId: "484926800191",
    appId: "1:484926800191:web:1e721fad46a6a20cdcd38a",
    measurementId: "G-VJCLPHV24Z"
};

firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth()

var email, password;
//   function validate_email(email) {
//     expression = /^[^@]+@\w+(\.\w+)+\w$/
//     if (expression.test(email) == true) {
//       // Email is good
//       return true
//     } else {
//       // Email is not good
//       return false
//     }
//   }

function login() {
    // Get all our input fields
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then(function () {
            // Declare user variable
            var user = auth.currentUser

            // DOne
            alert('User Logged In!!')

        })
        .catch(function (error) {
            // Firebase will use this to alert of its errors
            var error_code = error.code
            var error_message = error.message

            alert(error_message)
        })
}