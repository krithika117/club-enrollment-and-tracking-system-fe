function logout() {
    sessionStorage.clear()
}

document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault()

})
firebase.auth().onAuthStateChanged((user) => {
    if (user && sessionStorage.length != 0) {
        login()
        console.log("Login auth");
    } else {
        logout()
    }
})

function login() {
    if (sessionStorage.length == 0) {
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                window.user = userCredential.user;
                sessionStorage.email = firebase.auth().currentUser.email;
                window.email = firebase.auth().currentUser.email;
                location.replace("home.php")
            })
            .catch((error) => {
                document.getElementById("message-error").innerHTML = error.message
            })
    } else {
        location.replace("home.php");
    }

}

function showPass() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}