<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Enrollment Form</title>
  <!-- header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'); -->

  <!-- <?php include "navbar.php"   
  ?>  -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>


  <link rel="stylesheet" href="../style/form.css">
</head>

<body>
  <!-- <div class='light x1'></div>
  <div class='light1 x2'></div>
  <div class='light x3'></div>
  <div class='light x4'></div>
  <div class='light1 x5'></div>
  <div class='light x6'></div>
  <div class='light x7'></div>
  <div class='light1 x8'></div>
  <div class='light x9'></div> -->
  <h1 id="user"></h1><br>
  <div id="regForm" class="d-none">
    <h1>Enrollment Form</h1>
    <!-- basic details -->
    <!-- <div class="tab "> -->
    <!-- <label for="firstName">First Name</label> -->
    <input type="text" class="form-control" placeholder="First Name" id="firstName" />

    <!-- <label for="lastName">Last Name</label> -->
    <input type="text" class="form-control" placeholder="Last Name" id="lastName" />

    <!-- <label for="gender">Gender</label><br>
      Male<input type="radio" id="male" />
      Female<input type="radio" id="female" /> -->

    <!-- <label for="phoneNumber">Phone Number</label> -->
    <input type="text" class="form-control" placeholder="ex. 9876543210" id="phoneNumber" size="10" />
    <!-- 
      <label for="email">Email</label>
      <input type="email" class="form-control" placeholder="Email" id="email" /> -->

    <!-- <label for="rollNo">Roll No.</label> -->
    <input type="text" class="form-control" placeholder="Roll No." id="rollNo" size="7" />

    <!-- <label for="regNo">Register No.</label> -->
    <input type="text" class="form-control" placeholder="Register No. if applicable" id="regNo" size="12" />

    <!-- <label for="department">Department</label> -->
    <div class="select form-control">
      <select id="department">
        <option value="" selected hidden disabled>&nbsp;Select Department</option>
        <option value="CSE">&nbsp;CSE</option>
        <option value="ECE">&nbsp;ECE</option>
        <option value="EEE">&nbsp;EEE</option>
        <option value="IT">&nbsp;IT</option>
        <option value="Mech">&nbsp;Mech</option>
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
        <option value="Rotaract">&nbsp;Rotaract</option>
        <option value="NSO">&nbsp;NSO</option>
      </select>
    </div>
    <!-- Vacancy check we need to write some code -->
    <!-- </div> -->
    <!-- tech club choice -->
    <!-- <div class="tab "> -->
    <!-- <label for="techClubChoice1">Technical Club</label> -->
    <div class="select form-control">
      <select id="techClubChoice1">
        <option value="" selected hidden disabled>&nbsp;Select Club</option>
        <option value="Pattarai">&nbsp;Pattarai</option>
        <option value="IIC">&nbsp;IIC</option>
        <option value="BEAT">&nbsp;BEAT</option>
        <option value="Turbonites">&nbsp;Rotaract</option>
        <option value="MAD">&nbsp;MAD Club</option>
        <option value="ECEClub">&nbsp;ECE Club</option>
      </select>
      <!-- </div> -->
    </div>
    <!-- <label for="techClubChoice2">Technical Club</label> -->
    <div class="select form-control">
      <select id="techClubChoice2">
        <option value="Nil">&nbsp;Nil</option>
        <option value="Pattarai">&nbsp;Pattarai</option>
        <option value="IIC">&nbsp;IIC</option>
        <option value="BEAT">&nbsp;BEAT</option>
        <option value="Turbonites">&nbsp;Rotaract</option>
        <option value="MAD">&nbsp;MAD Club</option>
        <option value="ECEClub">&nbsp;ECE Club</option>
      </select>
    </div>

    <div style="overflow:auto;">
      <!-- <div style="float:right;"> -->
      <!-- <button type="button" id="prevBtn" onclick="nextPrev(-1)">Previous</button>
      <button type="button" id="nextBtn" onclick="nextPrev(1)">Next</button> -->
      <input type="button" id="signupSubmit" class="btn-info" value="Submit">

      <!-- </div> -->
    </div>
    <!-- Circles which indicates the steps of the form: -->
    <!-- <div style="text-align:center;margin-top:40px;">
      <span class="step"></span>
      <span class="step"></span>
      <span class="step"></span>
      <span class="step"></span>
    </div> -->
  </div>

  <div class="wrapper d-none">
		<h1>Hello, <span id="user1"></span></h1>
		<div class="container">
			
    Thank you for using Attribuer.<br>
    Please check your mail for the enrollment confirmation.
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
<script src="../script/form.js"></script>

</html>