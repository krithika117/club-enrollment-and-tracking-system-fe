<html>

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>Student List</title>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" />
  <?php include "navbar.php" ?>
  <link rel="stylesheet" href="./style/view.css">
</head>

<body>
  <div class="container">
    <br />
    <h2 id="studview" align="center">Students</h2><br />
    <select name="dept_filter" id="dept_filter" class="form-control filter d-none">
    <option value="" selected hidden disabled>Select Department</option>  
    <option value="all">All Department</option>
      <option value="IT">IT</option>
      <option value="CSE">CSE</option>
      <option value="EEE">EEE</option>
      <option value="ECE">ECE</option>
      <option value="Mech">Mech</option>
    </select>
    <br>
    <select name="year_filter" id="year_filter" class="form-control filter">
    <option value="" selected hidden disabled>Select Year</option>
      <option value="all">All Year</option>
      <option value="I">I</option>
      <option value="II">II</option>
      <option value="III">III</option>
      <option value="IV">IV</option>
    </select>

    <input type="hidden" name="hidden_value1" id="hidden_value1" />
    <input type="hidden" name="hidden_value2" id="hidden_value2" />
    <div style="clear:both"></div>
    <br />
    <div class="lds-ellipsis d-none">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    <div class="table-responsive">
      <table id="myTable" class="table table-hover dark ">
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Year of Study</th>
            <th>Service Club</th>
            <th>Technical Club 1</th>
            <th>Technical Club 2</th>
          </tr>
        </thead>
        
        <tbody></tbody>
      </table>
      <div id="prompt"></div>
    </div>
    <br />
    <br />
    <br />
  </div>


</body>
<script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-analytics.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-auth.js"></script>


<script src="./script/config.js"></script>
<script src="./script/auth-check.js"></script>
<script src="./script/view.js"></script>

</html>