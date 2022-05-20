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
    <link rel="stylesheet" href="../style/edit-members.css">
</head>

<body>
    <div class="container">

        <h2>Students

        </h2>
             
        <select name="dept_filter" id="dept_filter" class="form-control filter d-none">
            <option value="all">All Department</option>
            <option value="IT">IT</option>
            <option value="CSE">CSE</option>
            <option value="EEE">EEE</option>
            <option value="ECE">ECE</option>
            <option value="Mech">Mech</option>
        </select>
        <br>
        <select name="year_filter" id="year_filter" class="form-control filter">
            <option value="all">All Year</option>
            <option value="I">I</option>
            <option value="II">II</option>
            <option value="III">III</option>
            <option value="IV">IV</option>
        </select>

        <input type="hidden" name="hidden_value1" id="hidden_value1" />
        <input type="hidden" name="hidden_value2" id="hidden_value2" />
        <div style="clear:both"></div>

        <div class="table-responsive">
            <table id="myTable" class="table table-hover dark ">
                <br />
                <button type="button" data-toggle="modal" data-target="#add_data_Modal" class="btn"><i
                        class="fa fa-user-plus"></i> Add
                    Students</button><br />
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Year of Study</th>
                        <th>Service Club</th>
                        <th>Technical Club 1</th>
                        <th>Technical Club 2</th>
                        <th>Actions</th>
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
                        <h4 class="modal-title">Add Student</h4>    <button type="button" class="close"
                        data-dismiss="modal">×</button>
                       </div>
                   <div class="modal-body">
                        <div id="insert_form">
                        <!-- <h1>Enrollment Form</h1> -->
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
                        <input type="text" class="form-control" placeholder="ex. 9876543210" id="phoneNumber"
                            size="10" />
                        <input type="email" class="form-control" placeholder="Email" id="email" />
                        <!-- 
      <label for="email">Email</label>
      <input type="email" class="form-control" placeholder="Email" id="email" /> -->

                        <!-- <label for="rollNo">Roll No.</label> -->
                        <input type="text" class="form-control" placeholder="Roll No." id="rollNo" size="7" />

                        <!-- <label for="regNo">Register No.</label> -->
                        <input type="text" class="form-control" placeholder="Register No. if applicable" id="regNo"
                            size="12" />

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
                                <option value="" selected hidden disabled>&nbsp;Select Club</option>
                                <option value="Nil">&nbsp;NA</option>
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

                       </div>
                <!--    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                       </div> -->
                  </div>
             </div>
    </div>
</body>
<script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-analytics.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-auth.js"></script>


<script src="../script/config.js"></script>
<script src="../script/auth-check.js"></script>
<script src="../script/edit-members.js"></script>

</html>