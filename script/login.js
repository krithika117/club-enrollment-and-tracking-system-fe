

function logout() {
    
    localStorage.clear()

  }

document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault()

})
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // login()
    }
    else{
        logout()
    }
})

function login() {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            window.user = userCredential.user;
            localStorage.email = firebase.auth().currentUser.email;
            window.email = firebase.auth().currentUser.email;
            location.replace("home.php")
        })
        .catch((error) => {
            document.getElementById("message-error").innerHTML = error.message
        })
}

function showPass() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }