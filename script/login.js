// document.getElementById("form").addEventListener("submit",(event)=>{
//     event.preventDefault()
// })

// firebase.auth().onAuthStateChanged((user)=>{
//     if(user){
//         console.log(user.uid)
//         location.replace("home.php")
//     }
// })

// function login(){
//     const email = document.getElementById("email").value
//     const password = document.getElementById("password").value
//     firebase.auth().signInWithEmailAndPassword(email, password)
//     .catch((error)=>{
//         console.log(error.message)
//         document.getElementById("message-error").innerHTML = error.message
//     })
// }

// // function signUp(){
// //     const email = document.getElementById("email").value
// //     const password = document.getElementById("password").value
// //     firebase.auth().createUserWithEmailAndPassword(email, password)
// //     .catch((error) => {
// //         document.getElementById("error").innerHTML = error.message
// //     });
// // }

// // function forgotPass(){
// //     const email = document.getElementById("email").value
// //     firebase.auth().sendPasswordResetEmail(email)
// //     .then(() => {
// //         alert("Reset link sent to your email id")
// //     })
// //     .catch((error) => {
// //         document.getElementById("error").innerHTML = error.message
// //     });
// // }

function logout() {
    // firebase.auth().signOut()
    // sessionStorage.email = '';
    // sessionStorage.stat = ''
    sessionStorage.clear()
    // location.replace("login.php")
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
            sessionStorage.email = firebase.auth().currentUser.email;
            window.email = firebase.auth().currentUser.email;
            location.replace("home.php")
        })
        .catch((error) => {
            document.getElementById("message-error").innerHTML = error.message
        })
}