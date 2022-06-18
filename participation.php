<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <?php include "navbar.php"?>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <link rel="stylesheet" href="./style/attendance.css">
</head>

<body>
<h2>Events Attended</h2>
    <div class="table-responsive">
        <table id="myTable" class="table table-hover dark ">
            <thead>
                <tr>
                    <th>Name</th>
                    <!-- <th>Reg No</th> -->
                    <th>Event Name</th>
                    <th>Club</th>
                    <th>Attendance</th>
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
<script src="./script/participation.js"></script>

</html>