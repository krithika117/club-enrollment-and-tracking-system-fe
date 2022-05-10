<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="../style/login.css">

    <?php include "navbar.php" ?>


</head>

<body>

    <!-- // <div class="background">
        // <div class="shape"></div>
        // <div class="shape"></div>
        // <div class="shape"></div>
        // <div class="shape"></div>
        // </div> -->

    <form onsubmit="login()" id="loginForm">
        <h3>Login</h3>


        <label for="email">Email</label>
        <input type="email" placeholder="Email" id="email" autocomplete="off" required="" />

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" autocomplete="off" required="">

        <button type="submit">Log In</button>
        <p id="message-error"></p>

    </form>

</body>

<?php include "external.php" ?>
<!-- <script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-analytics.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-auth.js"></script> -->




<script src="../script/login.js"></script>

</html>