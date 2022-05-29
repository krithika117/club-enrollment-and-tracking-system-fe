<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Student List</title>

    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" /> -->
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script> 
      
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" /> 
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script> 

    <?php include "navbar.php" ?>
    <body>
    <div class="table-responsive">
        <table id="myTable" class="table table-hover dark ">
            <br />
            <!-- <button type="button" data-toggle="modal" data-target="#add_data_Modal" class="btn"><i
                    class="fa fa-user-plus"></i> Add Events</button><br /> -->
                    <button type="button" onclick="location.href='take-attendance.php';" class="btn"><i
                    class="fa fa-user-plus"></i> Add Events</button><br />

            <thead>
                <tr>
                    <th>Event Name</th>
                    <th>Date</th>
                    <th>Club</th>
                    <!-- <th>Headcount</th> -->
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    </div>
    <br />
    <br />
    <br />
    </div>

    <div id="add_data_Modal" class="modal">
         <div class="modal-dialog">
              <div class="modal-content">
                   <div class="modal-header">
                        <h4 class="modal-title">Add Event</h4>    
                    <button type="button" class="close" data-dismiss="modal">×</button>
                       </div>
                   <div class="modal-body">
                        <div id="insert_form">
                        <input type="text" class="form-control" placeholder="Event Name" id="eventName" />
                        <input type="date" class="form-control" placeholder="Date" id="date" />

                        <div class="select form-control">
                            <select id="clubChoice">
                                <option value="" selected hidden disabled>&nbsp;Select Club</option>
                                <option value="NCC">&nbsp;NCC</option>
                                <option value="NSS">&nbsp;NSS</option>
                                <option value="YRC">&nbsp;YRC</option>
                                <option value="ROTARACT">&nbsp;Rotaract</option>
                                <option value="NSO">&nbsp;NSO</option>
                                <option value="IIC">&nbsp;IIC</option>
                                <option value="BEAT">&nbsp;BEAT</option>
                                <option value="MAD">&nbsp;MAD Club</option>
                                <option value="ECEClub">&nbsp;ECE Club</option>
                            </select>
                        </div>
                        <input type="text" class="form-control" placeholder="Head Count" id="headcount" />

                        <div style="overflow:auto;">
                            <input type="button" id="eventSubmit" class="btn-info" value="Submit">
                        </div>
                    </div>
                       </div>
                  </div>
             </div>
    </div>
</body>
<script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-analytics.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-auth.js"></script>


<!-- <script src="../script/config.js"></script>
<script src="../script/auth-check.js"></script>
<script src="../script/view.js"></script> -->
<script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-analytics.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-auth.js"></script>
<script src="../script/config.js"></script>
<script src="../script/auth-check.js"></script>
<script src="../script/create-event.js"></script>

</html>