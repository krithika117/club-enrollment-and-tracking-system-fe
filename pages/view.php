<html>

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>Student List</title>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" />
  <?php include "navbar.php" ?>
  <link rel="stylesheet" href="../style/view.css">
</head>

<body>
  <div class="container">
    <br />
    <h2 align="center">Students</h2><br />
    <select name="search_filter" id="search_filter" class="form-control">
      <option value="">Select Option</option>
      <option value="I">I</option>
      <option value="II">II</option>
      <option value="III">III</option>
      <option value="IV">IV</option>
    </select>
    <input type="hidden" name="hidden_value" id="hidden_value" />
    <div style="clear:both"></div>
    <br />
    <div class="table-responsive">
      <table id="myTable" class="table dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Year of Study</th>
            <th>Service Club</th>
            <th>Technical Club - 1</th>
            <th>Technical Club - 2</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
    <br />
    <br />
    <br />
  </div>


</body>
<script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-analytics.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-auth.js"></script>


<script src="../script/config.js"></script>
<script src="../script/auth-check.js"></script>
<script src="../script/view.js"></script>

</html>