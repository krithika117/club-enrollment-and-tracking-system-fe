<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home</title>
  <?php include "navbar.php"?>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <link rel="stylesheet" href="../style/home.css">
</head>

<body>

  <h1 id="user"></h1><br>
  <form id="regForm" class="d-none" method="POST">
    <h1>Enrollment Form</h1><br>
    <input type="text" class="form-control" placeholder="First Name" id="firstName" required="">
    <input type="text" class="form-control" placeholder="Last Name" id="lastName" required="">
    <input type="text" class="form-control" placeholder="ex. 9876543210" id="phoneNumber" size="10" required="">
    <!-- 
      <label for="email">Email</label>
      <input type="email" class="form-control" placeholder="Email" id="email" required=""/> -->

    <!-- <label for="rollNo">Roll No.</label> -->
    <input type="text" class="form-control" placeholder="Roll No." id="rollNo" size="7" required="">

    <!-- <label for="regNo">Register No.</label> -->
    <input type="text" class="form-control" placeholder="Register No. if applicable" id="regNo" size="12" required="">

    <!-- <label for="department">Department</label> -->
    <div class="select form-control">
      <select id="department">
        <option value="" selected hidden disabled>&nbsp;Select Department</option>
        <option value="CSE">&nbsp;CSE</option>
        <option value="ECE">&nbsp;ECE</option>
        <option value="EEE">&nbsp;EEE</option>
        <option value="IT">&nbsp;IT</option>
        <option value="MECH">&nbsp;MECH</option>
      </select>
    </div>
    <!-- <label for="yearOfStudy">Year of Study</label> -->
    <div class="select form-control">
      <select id="yearOfStudy">
        <option value="" disabled hidden selected>&nbsp;Select Year</option>
        <option value="I">&nbsp;I</option>
        <option value="II">&nbsp;II</option>
        <option value="III">&nbsp;III</option>
        <option value="IV">&nbsp;IV</option>
      </select>
    </div>
    <!-- service club choice -->
    <!-- <div class="tab "> -->
    <!-- <label for="serviceClubChoice">Service Club</label> -->
    <div class="select form-control">
      <select id="serviceClubChoice">
        <option value="" selected hidden disabled>&nbsp;Select Club</option>
        <option value="NCC">&nbsp;NCC</option>
        <option value="NSS">&nbsp;NSS</option>
        <option value="YRC">&nbsp;YRC</option>
        <option value="ROTARACT">&nbsp;Rotaract</option>
        <option value="NSO">&nbsp;NSO</option>
      </select>
    </div>
    <!-- Vacancy check we need to write some code -->
    <!-- </div> -->
    <!-- tech club choice -->
    <!-- <div class="tab "> -->
    <!-- <label for="techClubChoice1">Technical Clubwelcom</label> -->
    <div class="select form-control">
      <select id="techClubChoice1">
        <option value="" selected hidden disabled>&nbsp;Select Technical Club 1</option>
        <!-- <option value="Nil">&nbsp;NA</option> -->
        <!-- <option value="PATTARAI">&nbsp;Pattarai</option> -->
        <option value="IIC">&nbsp;IIC</option>
        <option value="BEAT">&nbsp;BEAT</option>
        <option value="TURBONITES">&nbsp;TURBONITES</option>
        <option value="MAD">&nbsp;MAD Club</option>
        <option value="ECECLUB">&nbsp;ECE Club</option>
      </select>
      <!-- </div> -->
    </div>
    <!-- <label for="techClubChoice2">Technical Club</label> -->
    <div class="select form-control">
      <select id="techClubChoice2">
        <option value="" selected hidden disabled>&nbsp;Select Technical Club 2 (Optional)</option>
        <option value="Nil">&nbsp;Nil</option>
        <!-- <option value="PATTARAI">&nbsp;Pattarai</option> -->
        <option value="IIC">&nbsp;IIC</option>
        <option value="BEAT">&nbsp;BEAT</option>
        <option value="TURBONITES">&nbsp;TURBONITES</option>
        <option value="MAD">&nbsp;MAD Club</option>
        <option value="ECECLUB">&nbsp;ECE Club</option>
      </select>
    </div>

    <div style="overflow:auto;">
      <!-- <div style="float:right;"> -->
      <!-- <button type="button" id="prevBtn" onclick="nextPrev(-1)">Previous</button>
      <button type="button" id="nextBtn" onclick="nextPrev(1)">Next</button> -->
      <!-- <input type="button" id="signupSubmit" class="btn-info" value="Submit"> -->
      <button type="submit" id="signupSubmit" class="btn-info">Submit</button>

      <!-- </div> -->
    </div>
    <!-- Circles which indicates the steps of the form: -->
    <!-- <div style="text-align:center;margin-top:40px;">
      <span class="step"></span>
      <span class="step"></span>
      <span class="step"></span>
      <span class="step"></span>
    </div> -->
</form>

  <div class="wrapper d-none">
    <h2 id="user1"></h2>
    <div class="container">
      Thank you for using Attribuer.
      You've enrolled to the following clubs.<br><br>
      Service Club: <span id="scView"></span><br>
      Technical Club 1: <span id="tcView1"></span><br>
      Technical Club 2: <span id="tcView2"></span><br><br>
      Please check your mail for the enrollment confirmation.
    </div>
  </div>
  </div>

  <div class="wrapper-admin d-none">
    <h2 id="user2">Welcome :)</h2>
    <div class="container">
      This is Attribuer, LICET's Club Enrollment and Teacking System<br>
      Visit the Members section to view student list.<br>
      <button class="button btn-primary" ><a href="view.php">Student List</a></button>
    </div>
  </div>
  </div>
</body>
<!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script> -->
<script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-analytics.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-auth.js"></script>


<script src="../script/config.js"></script>
<script src="../script/auth-check.js"></script>
<script src="../script/home.js"></script>

</html>