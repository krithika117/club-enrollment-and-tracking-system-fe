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

    <?php include "navbar.php" ?>
    <link rel="stylesheet" href="../style/attendance.css">
</head>

<body>
    <div class="container">


        <h2>Update Event</h2>
        <select name="event_filter" id="event_filter" class="form-control">
        <option value="" selected hidden disabled>Select Event</option>    
        <!-- <option value="all">All Department</option>
            <option value="IT">IT</option>
            <option value="CSE">CSE</option>
            <option value="EEE">EEE</option>
            <option value="ECE">ECE</option>
            <option value="Mech">Mech</option> -->
        </select>
        <input type="hidden" name="hidden_value1" id="hidden_value1" />
        <input type="hidden" name="hidden_value2" id="hidden_value2" />
        <div style="clear:both"></div>
        <br>
        <!-- Event Name<br><input type="text" class="form-control" name="eventName" id="eventName" placehloder="Event Name"
            required><br> -->
        <!-- Date of Event<input type="date" class="form-control" placeholder="Date" id="date" required /> -->
        <!-- Date of Event <div id="date"></div> -->
        <div class="table-responsive">
            <table id="myTable" class="myTable table table-hover dark ">
                <br />

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Reg No.</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Year of Study</th>
                        <th>Date of Event</th>
                        <th>Attendance</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
        <!-- <br />
        <br />
        <br /><button id="btnSearch">Click</button> -->

        <div style="overflow:auto;">
            <input type="button" id="eventUpdate" class="btn-primary" value="Submit">
        </div>
    </div>
    <script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-analytics.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-auth.js"></script>
    <script src="./script/config.js"></script>
    <script src="./script/auth-check.js"></script>
    <script src="./script/update-attendance.js" defer></script>
</body>