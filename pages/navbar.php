<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!--  -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
        integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
    <link rel="stylesheet" href="../style/navbar.css">
</head>

<body>
    <main class="main">
        <header class="header">
            <div class="wrap d-flex">
                <h1 class="logo">
                    <a href=""><img src="../dist/images/licet.png" alt=""></a>
                </h1>
                <!-- <nav class="menu">
                    <ul>
                        <li><a href="">Sign In</a></li>
                        <li><a href="">View Members</a></li>
                        <li><a href="">Form</a></li>
                        <li><a href="">Allotment</a></li>
                    </ul>
                </nav> -->
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
                        <!-- <li><a href="login.php">Sign In</a></li> -->
                        <li id="user"></li>
                        <!-- <a href="login.php">Sign In</a> -->
                        <li><a href="faculty-view.php">View Members</a></li>
                        <li><a href="form.php">Form</a></li>
                        <li><a href="" onclick="javascript:logout()">Sign out</a></li>
                    </ul>
                </nav>
                <footer>2022 © Attribuer</footer>
            </div>
        </header>
    </main>
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>

    <script>
        $(document).ready(function () {
            $(".sidemenu-toggler").click(function () {
                $(".sidemenu").addClass("active");
            });
            $(".close").click(function () {
                $(".sidemenu").removeClass("active");
            });
        });

        function logout() {
            firebase.auth().signOut()
        }
    </script>
</body>

</html>