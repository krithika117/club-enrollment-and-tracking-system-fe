<!DOCTYPE html>
<html lang="en">

<head>
  <title>Recommendation Quiz</title>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <?php include "loader.php"?>
  <?php include "navbar.php" ?>
  <link rel="stylesheet" href="./style/rec.css">
  <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
  <script src="./script/tech-rec.js" defer></script>

</head>

<body>
  <div class="container">
    <h1>Which Technical Club Fits you best?</h1>
    <div class="restart-button">
      <button id="restart">↻ Reset Quiz</button>
    </div>


    <!-- <div class="slideshow-container"> -->

    <div class="mySlides">
      <h2>1. Would you like to join a club which </h2>

      <div class="question">

        <div class="answer-choice">
          <button id="q1a1">
            <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fbass.jpg?v=1597270130301"
            alt="bass"
          /> -->
            <div class="desc">Designs and develop a automobile product</div>
          </button>
        </div>
        <div class="answer-choice">
          <button id="q1a2">
            <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fvocal.jp2?v=1597261677869"
            alt="vocals"
          /> -->
            <div class="desc">Improves innovation and entrepreneurship qualities</div>
          </button>
        </div>
        <div class="answer-choice">
          <button id="q1a3">
            <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fpiano.jp2?v=1597261584113"
            alt="piano"
          /> -->
            <div class="desc">is a non official organization which involves artists, academicians</div>
          </button>
        </div>
        <div class="answer-choice">
          <button id="q1a4">
            <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fguitar.jp2?v=1597261480765"
            alt="guitar"
          /> -->
            <div class="desc">focuses on entrepreneurship and the power of it</div>
          </button>
        </div>
        <div class="answer-choice">
          <button id="q1a5">
            <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fguitar.jp2?v=1597261480765"
            alt="guitar"
          /> -->
            <div class="desc">Involving and dealing with electronic devices</div>
          </button>
        </div>

      </div>

    </div>

    <div class="mySlides">
      <h2>2. Do you favour activities that take place inside or outside?</h2>
      <!-- <button id="clear-q2" class="clear">↻</button></h2> -->
      <div class="question">
        <div class="answer-choice">
          <button id="q2a1">
            <div class="desc">Hardware implementation</div>
          </button>
        </div>
        <div class="answer-choice">
          <button id="q2a3">
            <div class="desc">Software implementation</div>
          </button>
        </div>
        <div class="answer-choice">
          <button id="q2a5">
            <div class="desc">Electronic initiatives</div>
          </button>
        </div>
        <div class="answer-choice">
          <button id="q2a4">
            <div class="desc">Business innovation</div>
          </button>
        </div>
        <div class="answer-choice">
          <button id="q2a2">
            <div class="desc">All of the above</div>
          </button>
        </div>
      </div>
    </div>

    <div class="mySlides">
      <h2>3. What events would you like to attend?</h2>
      <!-- <button id="clear-q3" class="clear">↻</button></h2> -->
      <div class="question">
        <div class="answer-choice">
          <button id="q3a4">
            <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Ffire.jpg?v=1597299667685"
            alt="fire"
          /> -->
            <div class="desc">Workshops</div>
          </button>
        </div>
        <div class="answer-choice">
          <button id="q3a2">
            <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fair.jpg?v=1597299901769"
            alt="air"
          /> -->
            <div class="desc">Seminars</div>
          </button>
        </div>
        <div class="answer-choice">
          <button id="q3a5">
            <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fwater.jpg?v=1597299934501"
            alt="water"
          /> -->
            <div class="desc">Hackathon</div>
          </button>
        </div>
        <div class="answer-choice">
          <button id="q3a1">
            <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fearth.jpg?v=1597299955549"
            alt="earth"
          /> -->
            <div class="desc">Symposium</div>
          </button>
        </div>
        <div class="answer-choice">
          <button id="q3a3">
            <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fearth.jpg?v=1597299955549"
            alt="earth"
          /> -->
            <div class="desc">All of the above</div>
          </button>
        </div>

      </div>
    </div>
    <div class="mySlides">
      <h2>4. What is your preferred mode of work?</h2>
      <!-- <button id="clear-q4" class="clear">↻</button></h2> -->
      <div class="question">
        <div class="answer-choice">
          <button id="q4a4">
            <div class="desc">
            Online</div>
            <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fbright-colours.png?v=1597328002113"
            alt="bright colours"
          /> -->
          </button>
        </div>
        <div class="answer-choice">
          <button id="q4a2">
            <div class="desc">
            Offline</div>
            <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fmuted-colours.png?v=1597328231356"
            alt="muted colours"
          /> -->
          </button>
        </div>
        <div class="answer-choice">
          <button id="q4a1">
            <div class="desc">
            Working after college hours</div>
            <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fcool-colours.png?v=1597328091906"
            alt="cool-toned colours"
          /> -->
          </button>
        </div>
        <div class="answer-choice">
          <button id="q4a5">
            <div class="desc">
            Working during weekends</div>
            <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fwarm-colours.png?v=1597328097654"
            alt="warm-toned colours"
          /> -->
          </button>
        </div>
        <div class="answer-choice">
          <button id="q4a3">
            <div class="desc">
            Any mode feasible</div>
            <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fwarm-colours.png?v=1597328097654"
            alt="warm-toned colours"
          /> -->
          </button>
        </div>
      </div>
    </div>
    <div class="mySlides">
      <h2>5. How many days/hours would you be willing to travel for camps/contests etc.?</h2>
      <!-- <button id="clear-q5" class="clear">↻</button></h2> -->
      <div class="question">
        <div class="answer-choice">
          <button id="q5a3">
            <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fpartying.jpg?v=1597331695599"
            alt="partying"
          /> -->
            <div class="desc">One evening</div>
          </button>
        </div>
        <div class="answer-choice">
          <button id="q5a5">
            <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fstudying.jpg?v=1597331730558"
            alt="studying/working"
          /> -->
            <div class="desc">One day</div>
          </button>
        </div>
        <div class="answer-choice">
          <button id="q5a2">
            <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fwatchingmovie.jp2?v=1597331749164"
            alt="watching a movie"
          /> -->
            <div class="desc">Two days</div>
          </button>
        </div>
        <div class="answer-choice">
          <button id="q5a4">
            <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Froadtrip.jpg?v=1597331766126"
            alt="On a road trip"
          /> -->
            <div class="desc">Three days</div>
          </button>
        </div>
        <div class="answer-choice">
          <button id="q5a1">
            <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Froadtrip.jpg?v=1597331766126"
            alt="On a road trip"
          /> -->
            <div class="desc">One week</div>
          </button>
        </div>
      </div>

    </div>

    <!-- <a class="prev" onclick="plusSlides(-1)">❮</a> -->
    <a class="next" onclick="plusSlides(1)">❯</a>

  </div>

  <div class="dot-container d-none">
    <span class="dot" onclick="currentSlide(1)"></span>
    <span class="dot" onclick="currentSlide(2)"></span>
    <span class="dot" onclick="currentSlide(3)"></span>
  </div>
  </div>


</body>

</html>