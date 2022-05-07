<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="../style/login.css">
    <?php include "navbar.php" ?>
    <?php include "../dist/components/external.php" ?>
    
    <script src="https://www.gstatic.com/firebasejs/9.8.0/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.8.0/firebase-auth-compat.js"></script>
    


</head>

<body>
    <!-- // <div class="background">
        // <div class="shape"></div>
        // <div class="shape"></div>
        // <div class="shape"></div>
        // <div class="shape"></div>
        // </div> -->

    <div id="form">
        <h3>Login</h3>


        <label for="email">Email</label>
        <input type="email" placeholder="Email" id="email" />

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password">
        
         <button onclick="login()">Log In</button>

</div>

</body>
<script src="../script/login.js"></script>
   
</html>