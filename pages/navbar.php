<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
        integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
    <link rel="stylesheet" href="../style/navbar.css">
</head>

<body>
    <main class="main">
        <header class="header">
            <div class="wrap d-flex">
                <h2 class="logo">
                    <!-- <a href="index.php"><img src="../dist/images/licet.png" alt=""></a> -->
                    <a href="index.php"><img src="../dist/images/attlog.svg" alt=""></a>
                </h2>
            </div>
            <a href="javascript:void(0);" class="sidemenu-toggler">
                <span></span>
                <span></span>
                <span></span>
            </a>
            <div class="sidemenu">
                <a href="javascript:void(0);" class="close"></a>
                <nav>
                    <ul>
                        <li id="user"></li>
                        <li id="signIn"><a href="login.php">Sign In</a></li>
                        <li id="homeNav"><a href="home.php">Home</a></li>
                        <li id="viewMembers" class="d-none"><a href="view.php">View Members</a></li>
                        <li id="participation" class=""><a href="participation.php">Participated Events</a></li>
                        <li id="editMembers" class="d-none"><a href="edit-members.php">Add/Delete Students</a></li>

                        <li id="fac-att" class="d-none"><a href="fac-events.php">View Events</a></li>
                        <li id="createEvents" class="d-none"><a href="eventlist.php">Create Events</a></li>
                        <li id="viewAtt" class="d-none"><a href="update-attendance.php">View/Update Attendance</a></li>
                        <li id="recom"><a href="rec.php">Recommender</a></li>
                        <li id="quit"><a href="" onclick="javascript:logout()">Sign out</a></li>
                    </ul>
                </nav>
                <footer>2022 © Attribuer</footer>
            </div>
        </header>
    </main>
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="../script/navbar.js"></script>


</body>

</html>