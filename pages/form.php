<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Enrollment Form</title>
  <?php include "navbar.php" ?>
  <?php include "../dist/components/external.php" ?>
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

  <form id="regForm">
    <h1>Enrollment Form</h1>
    <!-- basic details -->
    <div class="tab ">
    <label for="firstName">First Name</label>
      <input type="text" placeholder="First Name" id="firstName" />

      <label for="lastName">Last Name</label>
      <input type="text" placeholder="Last Name" id="lastName" />

      <!-- <label for="gender">Gender</label><br>
      Male<input type="radio" id="male" />
      Female<input type="radio" id="female" /> -->

      <label for="phoneNumber">Phone Number</label>
      <input type="text" placeholder="ex. 9876543210" id="phoneNumber" size="10" />

      <label for="email">Email</label>
      <input type="email" placeholder="Email" id="email" />

      <label for="rollNo">Roll No.</label>
      <input type="text" placeholder="Roll No." id="rollNo" size="7" />

      <label for="regNo">Register No.</label>
      <input type="text" placeholder="Register No. if applicable" id="regNo" size="12" />

      <label for="department">Department</label>
      <div class="select">
        <select>
          <option value="" selected hidden disabled>Select Department</option>
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
          <option value="EEE">EEE</option>
          <option value="IT">IT</option>
          <option value="Mech">Mech</option>
        </select>
      </div>
      <label for="yearOfStudy">Year of Study</label>
      <div class="select">
        <select>
          <option value="" disabled hidden selected>Select Year</option>
          <option value="I">I</option>
          <option value="II">II</option>
          <option value="III">III</option>
          <option value="IV">IV</option>
        </select>
      </div>
        <label for="username">Username</label>
        <input type="text" placeholder="Username" id="username">

        <label for="password">Password</label>
        <input type="password" class="toggle-password" placeholder="Password" id="password">


    </div>
    <!-- service club choice -->
    <div class="tab ">
      <label for="serviceClub">Service Club</label>
      <div class="select">
        <select>
          <option value="NCC">NCC</option>
          <option value="NSS">NSS</option>
          <option value="YRC">YRC</option>
          <option value="Rotaract">Rotaract</option>
          <option value="NSO">NSO</option>
        </select>
      </div>
      <!-- Vacancy check we need to write some code -->
    </div>
    <!-- tech club choice -->
    <div class="tab ">
      <label for="technicalClub1">Technical Club</label>
      <div class="select">
        <select>
          <option value="Pattarai">Pattarai</option>
          <option value="IIC">IIC</option>
          <option value="BEAT">BEAT</option>
          <option value="Turbonites">Rotaract</option>
          <option value="MAD">MAD Club</option>
          <option value="ECEClub">ECE Club</option>
        </select>
      </div>

      <label for="technicalClub2">Technical Club</label>
      <div class="select">
        <select>
          <option value="Pattarai">Pattarai</option>
          <option value="IIC">IIC</option>
          <option value="BEAT">BEAT</option>
          <option value="Turbonites">Rotaract</option>
          <option value="MAD">MAD Club</option>
          <option value="ECEClub">ECE Club</option>
        </select>
      </div>
    </div>
    <div style="overflow:auto;">
      <!-- <div style="float:right;"> -->
      <button type="button" id="prevBtn" onclick="nextPrev(-1)">Previous</button>
      <button type="button" id="nextBtn" onclick="nextPrev(1)">Next</button>
      <!-- </div> -->
    </div>
    <!-- Circles which indicates the steps of the form: -->
    <div style="text-align:center;margin-top:40px;">
      <span class="step"></span>
      <span class="step"></span>
      <span class="step"></span>
      <span class="step"></span>
    </div>
  </form>

</body>
<script src="../script/form.js"></script>

</html>