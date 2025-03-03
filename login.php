<?php
session_start();
include "config/config.php";
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SERGRADE Overseas Education - Best Study Abroad Consultants</title>
  <link
    rel="shortcut icon"
    href="assets/img/logo.png"
    type="image/x-icon" />
  <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
  <!-- <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"
    /> -->
  <link rel="stylesheet" href="assets/css/styles.css" />
  <link
    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
    rel="stylesheet" />
</head>

<body>
  <main class="">
    <div class="container-fluid min-vh-100">
      <div class="row min-vh-100">
        <div class="col-md-7 position-relative d-md-block d-none">
          <img src="assets/img/login.jpeg" alt="" style="width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left:0">
        </div>
        <div class="col-md-5 overflow-y-auto bg-primary py-5 vh-100 d-flex flex-column justify-content-center">
          <form method="post" class="px-4">
            <div class="text-center mb-3">
              <h3 class="fw-bold text-light">Welcome Back</h3>
            </div>

            <div class="mb-3">
              <label for="email" class="form-label text-light"> Email Address</label>
              <input type="email" class="form-control" name="email" id="email" placeholder="abc@example.com">
            </div>
            <div class="mb-3">
              <label for="passwd" class="form-label text-light"> Password</label>
              <input type="password" class="form-control" name="passwd" id="passwd" placeholder="********">
            </div>
            <div class="">
              <p class="text-light">Don't have an account? <a href="register.php" class="text-body">Register</a></p>
              <button type="submit" name="reg" class="btn btn-dark w-100">LOGIN</button>
            </div>
            <?php
            if (isset($_POST["reg"])) {
              $email = $_POST["email"];
              $passwd = $_POST["passwd"];

              $check = mysqli_query($conn, "SELECT * FROM `users` WHERE `email` = '$email' AND `password` = '$passwd'");
              if (mysqli_num_rows($check) > 0) {
                $data = mysqli_fetch_assoc($check);
                if ($data["account_type"] == "agent") {
                  $_SESSION["sr_agent"] = $data["userid"];
                  echo "<script>alert('Login Successful'); location.href = 'agent'</script>";
                } else {
                  $_SESSION["sr_student"] = $data["userid"];
                  echo "<script>alert('Login Successful'); location.href = 'student'</script>";
                }
              } else {
                echo "<script>alert('Wrong login credentials')</script>";
              }
              // var_dump($uid);
            }
            ?>
          </form>
        </div>
      </div>
    </div>
  </main>

  <!-- scripts -->
  <script src="assets/js/bootstrap.bundle.min.js"></script>
</body>

</html>