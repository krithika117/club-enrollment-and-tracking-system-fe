<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign In</title>
    <link rel="stylesheet" href="../style/login.css">
    <?php include "navbar.php" ?>
    <?php include "../dist/components/external.php" ?>
</head>

<body>
    <!-- <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
        <div class="shape"></div>
        <div class="shape"></div>
    </div> -->

    <form>
        <h3>Sign in</h3>
        <label for="username">Username</label>
        <input type="text" placeholder="Username" id="username">

        <label for="password">Password</label>
        <input type="password" class="toggle-password" placeholder="Password" id="password">
        <button>Log In</button>

    </form>

</body>

</html>