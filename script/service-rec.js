var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n >= slides.length) {
        // slideIndex = 1
        document.querySelector('.next').classList.add('d-none');

    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // for (i = 0; i < dots.length; i++) {
    //   dots[i].className = dots[i].className.replace(" active", "");
    // }
    slides[slideIndex - 1].style.display = "block";
    // dots[slideIndex - 1].className += " active";
}
//Global Variables
//Variables to track each possible quiz outcome.
var questionCount = 0;
var nssScore = 0;
var nccScore = 0;
var rotaractScore = 0;
var leafScore = 0;
var yrcScore = 0;

//Variables for each quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");
var q1a5 = document.getElementById("q1a5");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");
var q2a5 = document.getElementById("q2a5");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");
var q3a5 = document.getElementById("q3a5");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");
var q4a5 = document.getElementById("q4a5");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");
var q5a5 = document.getElementById("q5a5");


var result = document.getElementById("result");
var restart = document.getElementById("restart");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", nss);
q1a2.addEventListener("click", ncc);
q1a3.addEventListener("click", rotaract);
q1a4.addEventListener("click", leaf);
q1a5.addEventListener("click", yrc);
q1a1.addEventListener("click", disableBtn1);
q1a2.addEventListener("click", disableBtn1);
q1a3.addEventListener("click", disableBtn1);
q1a4.addEventListener("click", disableBtn1);
q1a5.addEventListener("click", disableBtn1);


q2a1.addEventListener("click", nss);
q2a2.addEventListener("click", ncc);
q2a3.addEventListener("click", rotaract);
q2a4.addEventListener("click", leaf);
q2a5.addEventListener("click", yrc);
q2a1.addEventListener("click", disableBtn2);
q2a2.addEventListener("click", disableBtn2);
q2a3.addEventListener("click", disableBtn2);
q2a4.addEventListener("click", disableBtn2);
q2a5.addEventListener("click", disableBtn2);

q3a1.addEventListener("click", nss);
q3a2.addEventListener("click", ncc);
q3a3.addEventListener("click", rotaract);
q3a4.addEventListener("click", leaf);
q3a5.addEventListener("click", yrc);
q3a1.addEventListener("click", disableBtn3);
q3a2.addEventListener("click", disableBtn3);
q3a3.addEventListener("click", disableBtn3);
q3a4.addEventListener("click", disableBtn3);
q3a5.addEventListener("click", disableBtn3);

q4a1.addEventListener("click", nss);
q4a2.addEventListener("click", ncc);
q4a3.addEventListener("click", rotaract);
q4a4.addEventListener("click", leaf);
q4a5.addEventListener("click", yrc);
q4a1.addEventListener("click", disableBtn4);
q4a2.addEventListener("click", disableBtn4);
q4a3.addEventListener("click", disableBtn4);
q4a4.addEventListener("click", disableBtn4);
q4a5.addEventListener("click", disableBtn4);

q5a1.addEventListener("click", nss);
q5a2.addEventListener("click", ncc);
q5a3.addEventListener("click", rotaract);
q5a4.addEventListener("click", leaf);
q5a5.addEventListener("click", yrc);
q5a1.addEventListener("click", disableBtn5);
q5a2.addEventListener("click", disableBtn5);
q5a3.addEventListener("click", disableBtn5);
q5a4.addEventListener("click", disableBtn5);
q5a5.addEventListener("click", disableBtn5);



restart.addEventListener("click", refresh);



//#TODO: Define quiz functions here
function disableBtn1() {
    document.getElementById("q1a1").disabled = true;
    document.getElementById("q1a2").disabled = true;
    document.getElementById("q1a3").disabled = true;
    document.getElementById("q1a4").disabled = true;
    document.getElementById("q1a5").disabled = true;
}

function disableBtn2() {
    document.getElementById("q2a1").disabled = true;
    document.getElementById("q2a2").disabled = true;
    document.getElementById("q2a3").disabled = true;
    document.getElementById("q2a4").disabled = true;
    document.getElementById("q2a5").disabled = true;
}

function disableBtn3() {
    document.getElementById("q3a1").disabled = true;
    document.getElementById("q3a2").disabled = true;
    document.getElementById("q3a3").disabled = true;
    document.getElementById("q3a4").disabled = true;
    document.getElementById("q3a5").disabled = true;
}

function disableBtn4() {
    document.getElementById("q4a1").disabled = true;
    document.getElementById("q4a2").disabled = true;
    document.getElementById("q4a3").disabled = true;
    document.getElementById("q4a4").disabled = true;
    document.getElementById("q4a5").disabled = true;
}

function disableBtn5() {
    document.getElementById("q5a1").disabled = true;
    document.getElementById("q5a2").disabled = true;
    document.getElementById("q5a3").disabled = true;
    document.getElementById("q5a4").disabled = true;
    document.getElementById("q5a5").disabled = true;
}


function nss() {
    nssScore += 1;
    questionCount += 1;
    //alert("One point to bad guy!");
    if (questionCount >= 5) {
        updateResult();

    }
}

function ncc() {
    nccScore += 1;
    questionCount += 1;
    //alert("One point to when the party's over!");
    if (questionCount >= 5) {
        updateResult();

    }
}

function rotaract() {
    rotaractScore += 1;
    questionCount += 1;
    //alert("One point to rotaract");
    if (questionCount >= 5) {
        updateResult();

    }
}

function leaf() {
    leafScore += 1;
    questionCount += 1;
    //alert("One point to leaf!");
    if (questionCount >= 5) {
        updateResult();

    }
}

function yrc() {
    yrcScore += 1;
    questionCount += 1;
    //alert("One point to yrc");
    if (questionCount >= 5) {
        updateResult();

    }
}

function updateResult() {
    if ((nssScore == 2 && nccScore == 2) && (rotaractScore == 2 || leafScore == 2)) {
        swal({
            title: "Attribuer Recommends",
            text: "NSS",
            type: "success"
        }).then(okay => {
            if (okay) {
                refresh()
            }
        });
    } else if ((rotaractScore == 2 && leafScore == 2) && (nssScore == 2 || nccScore == 2)) {
        swal({
            title: "Attribuer Recommends",
            text: "NSS",
            type: "success"
        }).then(okay => {
            if (okay) {
                refresh()
            }
        });
    }

    //Pair scoring {ncc,nss,rot,yrc,leaf}
    //NSS Combos
    else if (nssScore == 3 && nccScore == 3) {
        swal({
            title: "Attribuer Recommends",
            text: "NSS",
            type: "success"
        }).then(okay => {
            if (okay) {
                refresh()
            }
        });
    } else if (nssScore == 3 && rotaractScore == 3) {
        swal({
            title: "Attribuer Recommends",
            text: "NSS",
            type: "success"
        }).then(okay => {
            if (okay) {
                refresh()
            }
        });
    } else if (nssScore == 3 && leafScore == 3) {
        swal({
            title: "Attribuer Recommends",
            text: "NSS",
            type: "success"
        }).then(okay => {
            if (okay) {
                refresh()
            }
        });
    } else if (nssScore == 3 && yrcScore == 3) {
        swal({
            title: "Attribuer Recommends",
            text: "NSS",
            type: "success"
        }).then(okay => {
            if (okay) {
                refresh()
            }
        });
    }
    //NCC Combos
    else if (nccScore == 3 && rotaractScore == 3) {
        swal({
            title: "Attribuer Recommends",
            text: "NSS",
            type: "success"
        }).then(okay => {
            if (okay) {
                refresh()
            }
        });
    } else if (nccScore == 3 && yrcScore == 3) {
        swal({
            title: "Attribuer Recommends",
            text: "NSS",
            type: "success"
        }).then(okay => {
            if (okay) {
                refresh()
            }
        });
    } else if (nccScore == 3 && leafScore == 3) {
        swal({
            title: "Attribuer Recommends",
            text: "NSS",
            type: "success"
        }).then(okay => {
            if (okay) {
                refresh()
            }
        });
    }
    //Rotaract combos
    else if (rotaractScore == 3 && yrcScore == 3) {
        swal({
            title: "Attribuer Recommends",
            text: "NSS",
            type: "success"
        }).then(okay => {
            if (okay) {
                refresh()
            }
        });
    } else if (rotaractScore == 3 && leafScore == 3) {
        swal({
            title: "Attribuer Recommends",
            text: "NSS",
            type: "success"
        }).then(okay => {
            if (okay) {
                refresh()
            }
        });
    }
    //yrc combos
    else if (yrcScore == 3 && leafScore == 3) {
        swal({
            title: "Attribuer Recommends",
            text: "NSS",
            type: "success"
        }).then(okay => {
            if (okay) {
                refresh()
            }
        });
    }

    //Individual scoring
    else if (nssScore >= 3) {
        // swal("Your result is... bad guy!","success");
        swal({
            title: "Attribuer Recommends",
            text: "NSS",
            type: "success"
        }).then(okay => {
            if (okay) {
                refresh()
            }
        });

    } else if (nccScore >= 3) {
        swal({
            title: "Attribuer Recommends",
            text: "NSS",
            type: "success"
        }).then(okay => {
            if (okay) {
                refresh()
            }
        });

    } else if (rotaractScore >= 3) {
        // swal("Your result is... rotaract ft. Khalid!</i>","success");
        swal({
            title: "Attribuer Recommends",
            text: "NSS",
            type: "success"
        }).then(okay => {
            if (okay) {
                refresh()
            }
        });
        // swal("Attribuer Recommends", "Rotaract Club of LICET", "success");
        refresh();
    } else if (leafScore >= 3) {
        swal({
            title: "Attribuer Recommends",
            text: "NSS",
            type: "success"
        }).then(okay => {
            if (okay) {
                refresh()
            }
        });
    } else if (yrcScore >= 3) {
        swal({
            title: "Attribuer Recommends",
            text: "NSS",
            type: "success"
        }).then(okay => {
            if (okay) {
                refresh()
            }
        });
    } else {
        swal({
            title: "Attribuer Recommends",
            text: "NSS",
            type: "success"
        }).then(okay => {
            if (okay) {
                refresh()
            }
        });
    }

    // refresh();
}

function refresh() {

    // swal("Your result is...", "success");
    var questionCount = 0;
    var nssScore = 0;
    var nccScore = 0;
    var rotaractScore = 0;
    var yrcScore = 0;
    var leafScore = 0;
    document.getElementById("q1a1").disabled = false;
    document.getElementById("q1a2").disabled = false;
    document.getElementById("q1a3").disabled = false;
    document.getElementById("q1a4").disabled = false;
    document.getElementById("q1a5").disabled = false;

    document.getElementById("q2a1").disabled = false;
    document.getElementById("q2a2").disabled = false;
    document.getElementById("q2a3").disabled = false;
    document.getElementById("q2a4").disabled = false;
    document.getElementById("q2a5").disabled = false;

    document.getElementById("q3a1").disabled = false;
    document.getElementById("q3a2").disabled = false;
    document.getElementById("q3a3").disabled = false;
    document.getElementById("q3a4").disabled = false;
    document.getElementById("q3a5").disabled = false;

    document.getElementById("q4a1").disabled = false;
    document.getElementById("q4a2").disabled = false;
    document.getElementById("q4a3").disabled = false;
    document.getElementById("q4a4").disabled = false;
    document.getElementById("q4a5").disabled = false;

    document.getElementById("q5a1").disabled = false;
    document.getElementById("q5a2").disabled = false;
    document.getElementById("q5a3").disabled = false;
    document.getElementById("q5a4").disabled = false;
    document.getElementById("q5a5").disabled = false;


    // slideIndex = 1;
    showSlides(slideIndex = 1);
    location.replace("service-recommender.php");

}