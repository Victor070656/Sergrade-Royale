<?php include "config/config.php"; ?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SERGRADE Overseas Education - Best Study Abroad Consultants</title>
  <link
    rel="shortcut icon"
    href="assets/img/svg/kc_favicon.ico"
    type="image/x-icon" />
  <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
    rel="stylesheet" />
  <link rel="stylesheet" href="assets/css/styles.css" />
  <link
    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
    rel="stylesheet" />
  <style>
    * {
      font-family: 'Montserrat', sans-serif;
    }
  </style>
</head>

<body>
  <main class="">
    <div class="container-fluid min-vh-100">
      <div class="row min-vh-100">
        <div class="col-md-7 position-relative d-md-block d-none">
          <img src="assets/img/login.jpeg" alt="" style="width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left:0">
        </div>
        <div class="col-md-5 overflow-y-auto bg-primary py-5 vh-100">
          <form method="post" class="px-4">
            <div class="text-center mb-3">
              <h3 class="fw-bold text-light">Create Your Account</h3>
            </div>
            <div class="mb-3">
              <label for="firstname" class="form-label text-light"> First Name</label>
              <input type="text" class="form-control" name="firstname" id="firstname" placeholder="John">
            </div>
            <div class="mb-3">
              <label for="lastname" class="form-label text-light"> Last Name</label>
              <input type="text" class="form-control" name="lastname" id="lastname" placeholder="Doe">
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label text-light"> Mobile Number <small class="text-secondary-subtle">(Including country code)</small></label>
              <input type="tel" class="form-control" name="phone" id="phone" placeholder="E.g: +234 xxx xxxx xxx">
            </div>
            <div class="mb-3">
              <label for="email" class="form-label text-light"> Email Address</label>
              <input type="email" class="form-control" name="email" id="email" placeholder="abc@example.com">
            </div>
            <div class="mb-3">
              <label for="passwd" class="form-label text-light"> Password</label>
              <input type="password" class="form-control" name="passwd" id="passwd" placeholder="********">
            </div>
            <div class="mb-3">
              <p class="form-label text-light">
                Account Type
              </p>
              <label for="student" class="form-label text-light me-2">
                <input type="radio" class="" name="account" id="student" value="student">
                Student
              </label>
              <label for="agent" class="form-label text-light">
                <input type="radio" class="" name="account" id="agent" value="agent">
                Agent
              </label>
            </div>
            <div class="">
              <p class="text-light">Already have an account? <a href="login.php" class="text-body">Login</a></p>
              <button type="submit" name="reg" class="btn btn-dark w-100">REGISTER</button>
            </div>
            <?php
            if (isset($_POST["reg"])) {
              $uid = uniqid();
              $first = $_POST["firstname"];
              $last = $_POST["lastname"];
              $phone = $_POST["phone"];
              $email = $_POST["email"];
              $passwd = $_POST["passwd"];
              $account = $_POST["account"];

              $checkEmail = mysqli_query($conn, "SELECT * FROM `users` WHERE `email` = '$email'");
              if (mysqli_num_rows($checkEmail) > 0) {
                echo "<script>alert('Email Already in use')</script>";
              } else {
                $insert = mysqli_query($conn, "INSERT INTO `users` (`userid`, `firstname`, `lastname`, `phone`, `email`, `password`, `account_type`) VALUES ('$uid', '$first', '$last', '$phone', '$email', '$passwd', '$account')");
                if ($insert) {
                  echo "<script>alert('Registered Successfully'); location.href = 'login.php'</script>";
                } else {
                  echo "<script>alert('Registration failed')</script>";
                }
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