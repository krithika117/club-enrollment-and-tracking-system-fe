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

  <script src="../script/service-rec.js" defer></script>
  
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Questrial&display=swap");
  </style>
</head>

<body>
  <h1>Which Service Club Fits you best?</h1>

  <div class="restart-button">
    <button id="restart">↻ Reset Quiz</button>
  </div><!-- First Question <-->
  <div class="container">
    <h2>Which instrument sound do you prefer?
      <!-- <button id="clear-q1" class="clear">↻</button></h2> -->
      <div class="question">

        <div class="answer-choice">
          <button id="q1a1">
            <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fbass.jpg?v=1597270130301"
            alt="bass"
          /> -->
            <div class="desc">Bass</div>
          </button>
        </div>
        <div class="answer-choice">
          <button id="q1a2">
            <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fvocal.jp2?v=1597261677869"
            alt="vocals"
          /> -->
            <div class="desc">Vocals</div>
          </button>
        </div>
        <div class="answer-choice">
          <button id="q1a3">
            <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fpiano.jp2?v=1597261584113"
            alt="piano"
          /> -->
            <div class="desc">Piano</div>
          </button>
        </div>
        <div class="answer-choice">
          <button id="q1a4">
            <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fguitar.jp2?v=1597261480765"
            alt="guitar"
          /> -->
            <div class="desc">Guitar</div>
          </button>
        </div>
        <div class="answer-choice">
          <button id="q1a5">
            <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fguitar.jp2?v=1597261480765"
            alt="guitar"
          /> -->
            <div class="desc">Guitar</div>
          </button>
        </div>

      </div>

      <!-- Second Question <-->
      <h2>Which instrument sound do you prefer?
        <!-- <button id="clear-q2" class="clear">↻</button></h2> -->
        <div class="question">
          <div class="answer-choice">
            <button id="q2a1">
              <div class="desc">Guitar</div>
            </button>
          </div>
          <div class="answer-choice">
            <button id="q2a2">
              <div class="desc">Guitar</div>
            </button>
          </div>
          <div class="answer-choice">
            <button id="q2a3">
              <div class="desc">Guitar</div>
            </button>
          </div>
          <div class="answer-choice">
            <button id="q2a4">
              <div class="desc">Guitar</div>
            </button>
          </div>
          <div class="answer-choice">
            <button id="q2a5">
              <div class="desc">Guitar</div>
            </button>
          </div>
        </div>

        <!-- Third Question <-->
        <h2>Which instrument sound do you prefer?
          <!-- <button id="clear-q3" class="clear">↻</button></h2> -->
          <div class="question">
            <div class="answer-choice">
              <button id="q3a1">
                <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Ffire.jpg?v=1597299667685"
            alt="fire"
          /> -->
                <div class="desc">Fire</div>
              </button>
            </div>
            <div class="answer-choice">
              <button id="q3a2">
                <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fair.jpg?v=1597299901769"
            alt="air"
          /> -->
                <div class="desc">Air</div>
              </button>
            </div>
            <div class="answer-choice">
              <button id="q3a3">
                <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fwater.jpg?v=1597299934501"
            alt="water"
          /> -->
                <div class="desc">Water</div>
              </button>
            </div>
            <div class="answer-choice">
              <button id="q3a4">
                <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fearth.jpg?v=1597299955549"
            alt="earth"
          /> -->
                <div class="desc">Earth</div>
              </button>
            </div>
            <div class="answer-choice">
              <button id="q3a5">
                <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fearth.jpg?v=1597299955549"
            alt="earth"
          /> -->
                <div class="desc">Earth</div>
              </button>
            </div>
          </div>

          <!-- Fourth Question <-->
          <h2>Which instrument sound do you prefer?
            <!-- <button id="clear-q4" class="clear">↻</button></h2> -->
            <div class="question">
              <div class="answer-choice">
                <button id="q4a1">
                  <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fbright-colours.png?v=1597328002113"
            alt="bright colours"
          /> -->
                </button>
              </div>
              <div class="answer-choice">
                <button id="q4a2">
                  <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fmuted-colours.png?v=1597328231356"
            alt="muted colours"
          /> -->
                </button>
              </div>
              <div class="answer-choice">
                <button id="q4a3">
                  <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fcool-colours.png?v=1597328091906"
            alt="cool-toned colours"
          /> -->
                </button>
              </div>
              <div class="answer-choice">
                <button id="q4a4">
                  <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fwarm-colours.png?v=1597328097654"
            alt="warm-toned colours"
          /> -->
                </button>
              </div>
              <div class="answer-choice">
                <button id="q4a5">
                  <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fwarm-colours.png?v=1597328097654"
            alt="warm-toned colours"
          /> -->
                </button>
              </div>
            </div>

            <!-- Fifth Question <-->
            <h2>Which instrument sound do you prefer?
              <!-- <button id="clear-q5" class="clear">↻</button></h2> -->
              <div class="question">
                <div class="answer-choice">
                  <button id="q5a1">
                    <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fpartying.jpg?v=1597331695599"
            alt="partying"
          /> -->
                    <div class="desc">Attending Parties</div>
                  </button>
                </div>
                <div class="answer-choice">
                  <button id="q5a2">
                    <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fstudying.jpg?v=1597331730558"
            alt="studying/working"
          /> -->
                    <div class="desc">Studying/Working</div>
                  </button>
                </div>
                <div class="answer-choice">
                  <button id="q5a3">
                    <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fwatchingmovie.jp2?v=1597331749164"
            alt="watching a movie"
          /> -->
                    <div class="desc">Watching a movie</div>
                  </button>
                </div>
                <div class="answer-choice">
                  <button id="q5a4">
                    <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Froadtrip.jpg?v=1597331766126"
            alt="On a road trip"
          /> -->
                    <div class="desc">On a road trip</div>
                  </button>
                </div>
                <div class="answer-choice">
                  <button id="q5a5">
                    <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Froadtrip.jpg?v=1597331766126"
            alt="On a road trip"
          /> -->
                    <div class="desc">On a road trip</div>
                  </button>
                </div>
              </div>

              <!-- Sixth Question <-->
              <h2>Which instrument sound do you prefer?
                <!-- <button id="clear-q6" class="clear">↻</button></h2> -->
                <div class="question">
                  <div class="answer-choice">
                    <button id="q6a1">
                      <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Ffamily.jpg?v=1597335437713"
            alt="friends/family"
          /> -->
                      <div class="desc">Friends/Family</div>
                    </button>
                  </div>
                  <div class="answer-choice">
                    <button id="q6a2">
                      <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fmyself.jpg?v=1597335424260"
            alt="myself"
          /> -->
                      <div class="desc">Myself</div>
                    </button>
                  </div>
                  <div class="answer-choice">
                    <button id="q6a3">
                      <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fmy%20partner.jpg?v=1597335376667"
            alt="my partner"
          /> -->
                      <div class="desc">My partner</div>
                    </button>
                  </div>
                  <div class="answer-choice">
                    <button id="q6a4">
                      <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fnewpeople.jpg?v=1597335393683"
            alt="new people"
          /> -->
                      <div class="desc">New people</div>
                    </button>
                  </div>
                  <div class="answer-choice">
                    <button id="q6a5">
                      <!-- <img
            src="https://cdn.glitch.com/2b28f74a-8a02-4992-9bf6-c975d2b04cbb%2Fnewpeople.jpg?v=1597335393683"
            alt="new people"
          /> -->
                      <div class="desc">New people</div>
                    </button>
                  </div>
                </div>

                <!-- <div class="result">
      <h2 id="result">Your result is...</h2>
    </div>
    <div class="restart-button">
      <button id="restart">↻</button>
    </div> -->
  </div>
</body>

</html>