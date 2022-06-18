<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" />
<!--  -->
<link rel="stylesheet" href="./style/attendance.css">

<body>
    <div class="container">

        <h2>Create Event</h2><br>
        Event Name<br><input type="text" class="form-control" name="eventName" id="eventName" required><br>
        Date of Event<input type="date" class="form-control" placeholder="Date" id="date" required />
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
            <input type="button" id="eventSubmit" class="btn-primary" value="Submit">
        </div>
    </div>
    <script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-analytics.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-auth.js"></script>
    <script src="./script/config.js"></script>
<script src="./script/auth-check.js"></script>
    <script src="./script/take-attendance.js" defer></script>
</body>