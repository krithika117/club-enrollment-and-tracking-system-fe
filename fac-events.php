<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Student List</title>

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script> 
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" /> 
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script> 
    <?php include "loader.php"?>
    <?php include "navbar.php" ?>
    <link rel="stylesheet" href="./style/attendance.css">
</head>

<body>
    <div class="container">


        <h2>View Events</h2>
        <select name="club_filter" id="club_filter" class="form-control filter">
            <option value="" selected hidden disabled>Select Club</option>
            <option value="NCC">&nbsp;NCC</option>
            <option value="NSS">&nbsp;NSS</option>
            <option value="YRC">&nbsp;YRC</option>
            <option value="ROTARACT">&nbsp;Rotaract</option>
            <option value="NSO">&nbsp;NSO</option>
            <option value="IIC">&nbsp;IIC</option>
            <option value="BEAT">&nbsp;BEAT</option>
            <option value="TEAMTURBONITES">&nbsp;TURBONITES</option>
            <option value="MAD">&nbsp;MAD Club</option>
            <option value="ELECTRONICS">&nbsp;Electronics Club</option>
        </select>
        <br>

        <select name="event_filter" id="event_filter" class="form-control filter">
            <option value="" selected hidden disabled>Select Club to view events</option>
        </select>
        <input type="hidden" name="hidden_value1" id="hidden_value1" />
        <input type="hidden" name="hidden_value2" id="hidden_value2" />
        <div style="clear:both"></div>
        <br>
        <!-- Event Name<br><input type="text" class="form-control" name="eventName" id="eventName" placehloder="Event Name"
            required><br> -->
       
        <div class="table-responsive">
            <table id="myTable" class="myTable table table-hover dark ">
                <br />

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Reg No.</th>
                        <th>Department</th>
                        <th>Year of Study</th>
                        <th>Attendance</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
            <div id="prompt"></div>
        </div>

      
    <script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-analytics.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-auth.js"></script>
    <script src="./script/config.js"></script>
    <script src="./script/auth-check.js"></script>
    <script src="./script/fac-events.js" defer></script>
</body>