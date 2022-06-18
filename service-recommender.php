<!DOCTYPE html>
<html lang="en">

<head>
  <title>Recommendation Quiz</title>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <?php include "navbar.php" ?>
  <link rel="stylesheet" href="../style/rec.css">
  <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
  <script src="./script/service-rec.js" defer></script>

</head>

<body>
  <div class="container">
    <h1>Which Service Club Fits you best?</h1>
    <div class="restart-button">
      <button id="restart">↻ Reset Quiz</button>
    </div>


    <!-- <div class="slideshow-container"> -->

    <div class="mySlides">
      <h2>1. How frequently do you prefer to participate in club activities?</h2>

      <div class="question">

        <div class="answer-choice">
          <button id="q1a1">
            <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fbass.jpg?v=1597270130301"
            alt="bass"
          /> -->
            <div class="desc">Weekly</div>
          </button>
        </div>
        <div class="answer-choice">
          <button id="q1a2">
            <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fvocal.jp2?v=1597261677869"
            alt="vocals"
          /> -->
            <div class="desc">Monthly</div>
          </button>
        </div>
        <div class="answer-choice">
          <button id="q1a3">
            <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fpiano.jp2?v=1597261584113"
            alt="piano"
          /> -->
            <div class="desc">Quarterly</div>
          </button>
        </div>
        <div class="answer-choice">
          <button id="q1a4">
            <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fguitar.jp2?v=1597261480765"
            alt="guitar"
          /> -->
            <div class="desc">Annually</div>
          </button>
        </div>
        <div class="answer-choice">
          <button id="q1a5">
            <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fguitar.jp2?v=1597261480765"
            alt="guitar"
          /> -->
            <div class="desc">Never</div>
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
            <div class="desc">Mostly Indoors</div>
          </button>
        </div>
        <div class="answer-choice">
          <button id="q2a3">
            <div class="desc">Mostly Outdoors</div>
          </button>
        </div>
        <div class="answer-choice">
          <button id="q2a2">
            <div class="desc">Rarely indoors</div>
          </button>
        </div>
        <div class="answer-choice">
          <button id="q2a4">
            <div class="desc">Rarely outdoors</div>
          </button>
        </div>
        <div class="answer-choice">
          <button id="q2a5">
            <div class="desc">All of the above</div>
          </button>
        </div>
      </div>
    </div>

    <div class="mySlides">
      <h2>3. Which of the following would you appreciate the most?</h2>
      <!-- <button id="clear-q3" class="clear">↻</button></h2> -->
      <div class="question">
        <div class="answer-choice">
          <button id="q3a1">
            <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Ffire.jpg?v=1597299667685"
            alt="fire"
          /> -->
            <div class="desc">Social-based services</div>
          </button>
        </div>
        <div class="answer-choice">
          <button id="q3a2">
            <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fair.jpg?v=1597299901769"
            alt="air"
          /> -->
            <div class="desc">Humanitarian services</div>
          </button>
        </div>
        <div class="answer-choice">
          <button id="q3a3">
            <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fwater.jpg?v=1597299934501"
            alt="water"
          /> -->
            <div class="desc">Cadet-based services</div>
          </button>
        </div>
        <div class="answer-choice">
          <button id="q3a5">
            <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fearth.jpg?v=1597299955549"
            alt="earth"
          /> -->
            <div class="desc">Community services</div>
          </button>
        </div>
        <div class="answer-choice">
          <button id="q3a4">
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
      <h2>4. How many hours do you prefer to devote to club events as a volunteer?</h2>
      <!-- <button id="clear-q4" class="clear">↻</button></h2> -->
      <div class="question">
        <div class="answer-choice">
          <button id="q4a5">
            <div class="desc">
              1 hour</div>
            <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fbright-colours.png?v=1597328002113"
            alt="bright colours"
          /> -->
          </button>
        </div>
        <div class="answer-choice">
          <button id="q4a4">
            <div class="desc">
              2 hours</div>
            <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fmuted-colours.png?v=1597328231356"
            alt="muted colours"
          /> -->
          </button>
        </div>
        <div class="answer-choice">
          <button id="q4a3">
            <div class="desc">
              3 hours</div>
            <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fcool-colours.png?v=1597328091906"
            alt="cool-toned colours"
          /> -->
          </button>
        </div>
        <div class="answer-choice">
          <button id="q4a2">
            <div class="desc">
              4 hours</div>
            <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fwarm-colours.png?v=1597328097654"
            alt="warm-toned colours"
          /> -->
          </button>
        </div>
        <div class="answer-choice">
          <button id="q4a1">
            <div class="desc">
              5 hours</div>
            <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fwarm-colours.png?v=1597328097654"
            alt="warm-toned colours"
          /> -->
          </button>
        </div>
      </div>
    </div>
    <div class="mySlides">
      <h2>5. What do you consider to be your most important contribution to the club?</h2>
      <!-- <button id="clear-q5" class="clear">↻</button></h2> -->
      <div class="question">
        <div class="answer-choice">
          <button id="q5a1">
            <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fpartying.jpg?v=1597331695599"
            alt="partying"
          /> -->
            <div class="desc">Organize events</div>
          </button>
        </div>
        <div class="answer-choice">
          <button id="q5a2">
            <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fstudying.jpg?v=1597331730558"
            alt="studying/working"
          /> -->
            <div class="desc">Volunteering to almost every event</div>
          </button>
        </div>
        <div class="answer-choice">
          <button id="q5a3">
            <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fwatchingmovie.jp2?v=1597331749164"
            alt="watching a movie"
          /> -->
            <div class="desc">Sufficiently productive</div>
          </button>
        </div>
        <div class="answer-choice">
          <button id="q5a4">
            <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Froadtrip.jpg?v=1597331766126"
            alt="On a road trip"
          /> -->
            <div class="desc">Time invested</div>
          </button>
        </div>
        <div class="answer-choice">
          <button id="q5a5">
            <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Froadtrip.jpg?v=1597331766126"
            alt="On a road trip"
          /> -->
            <div class="desc">Complete tasks as a team</div>
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