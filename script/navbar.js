$(document).ready(function () {    
    $(".sidemenu-toggler").click(function () {
        $(".sidemenu").addClass("active");
    });
    $(".close").click(function () {
        $(".sidemenu").removeClass("active");
    });
});

function logout() {
    firebase.auth().signOut()
    location.replace('index.php')
    sessionStorage.email = ''
    sessionStorage.stat = ''
    sessionStorage.clear()
}

if ((location.href.split('/').pop()) == 'index.php') {
    document.querySelector('#quit').classList.add('d-none');
    document.querySelector('#participation').classList.add('d-none');
} else {
    document.querySelector('#signIn').classList.add('d-none');
}

if (sessionStorage.stat == '1') { //Faculty Controls
    document.querySelector('#viewMembers').classList.remove('d-none');
    document.querySelector('#participation').classList.add('d-none');
}

if (sessionStorage.stat == '2') { //Club-in-charge Controls
    document.querySelector('#viewMembers').classList.remove('d-none');
    document.querySelector('#viewAtt').classList.remove('d-none');
    document.querySelector('#createEvents').classList.remove('d-none');
    document.querySelector('#participation').classList.add('d-none');
}

if (sessionStorage.stat == '3') { //Admin Controls
    document.querySelector('#editMembers').classList.remove('d-none');
    document.querySelector('#viewMembers').classList.remove('d-none');
    document.querySelector('#participation').classList.add('d-none');
}


