<?php
session_start();
include "../config/config.php";

if (!isset($_SESSION['sr_agent'])) {
    echo "<script>location.href = '../login.php';</script>";
} else {
    $agent_id = $_SESSION['sr_agent'];
}



$getAgentInfo = $conn->query("SELECT * FROM users WHERE userid = '$agent_id'");
$agentInfo = $getAgentInfo->fetch_assoc();

$getCompanyInfo = $conn->query("SELECT * FROM `companies` WHERE `agent_id` = '$agent_id'");
$companyInfo = $getCompanyInfo->fetch_assoc();



?>
<!DOCTYPE html>
<html lang="zxx">

<!-- Mirrored from templates.hibootstrap.com/farol/ by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 05 Dec 2024 13:56:58 GMT -->

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Links Of CSS File -->
    <link rel="stylesheet" href="assets/css/remixicon.css">
    <link rel="stylesheet" href="assets/css/flaticon.css">
    <link rel="stylesheet" href="assets/css/sidebar-menu.css">
    <!-- <link rel="stylesheet" href="assets/css/simplebar.css">
    <link rel="stylesheet" href="assets/css/apexcharts.css">
    <link rel="stylesheet" href="assets/css/prism.css">
    <link rel="stylesheet" href="assets/css/rangeslider.css">
    <link rel="stylesheet" href="assets/css/sweetalert.min.css">
    <link rel="stylesheet" href="assets/css/quill.snow.css"> -->
    <link rel="stylesheet" href="assets/css/style.css">

    <!-- Favicon -->
    <link rel="icon" type="image/png" href="../assets/img/logo.png">
    <!-- Title -->
    <title>Sergrade Agent || Profile</title>
</head>

<body>
    <!-- Start Preloader Area -->
    <!-- <div class="preloader" id="preloader">
            <div class="preloader">
                <div class="waviy position-relative">
                    <span class="d-inline-block">F</span>
                    <span class="d-inline-block">A</span>
                    <span class="d-inline-block">R</span>
                    <span class="d-inline-block">O</span>
                    <span class="d-inline-block">L</span>
                </div>
            </div>
        </div> -->
    <!-- End Preloader Area -->

    <!-- Start Sidebar Area -->
    <?php
    include "partials/sidebar.php";
    ?>
    <!-- End Sidebar Area -->

    <!-- Start Main Content Area -->
    <div class="container-fluid">
        <div class="main-content d-flex flex-column">

            <!-- Start Header Area -->
            <?php
            include "partials/header.php";
            ?>
            <!-- End Header Area -->

            <!-- Start Body Content Area -->
            <div class="row justify-content-center">
                <div class="col-12">
                    <div class="row justify-content-center">
                        <div class="col-12">
                            <div class="stats-box card bg-white border-0 rounded-10 mb-4">
                                <div class="card-body px-4 py-5">
                                    <div class="row">

                                        <div class="col-md-6">
                                            <form method="post">
                                                <div class="text-center mb-4">
                                                    <h5 class="fw-bold">
                                                        Personal Info
                                                    </h5>
                                                </div>
                                                <div class="row row-gap-3">
                                                    <div class="">
                                                        <div class="">
                                                            <label for="fname" class="form-label">First name</label> <span class="text-danger">*</span>
                                                            <input type="text" class="form-control" id="fname" value="<?= $agentInfo['firstname'] ?>" name="fname" required>
                                                        </div>
                                                    </div>

                                                    <div class="">
                                                        <div class="">
                                                            <label for="lname" class="form-label">Last name</label> <span class="text-danger">*</span>
                                                            <input type="text" class="form-control" id="lname" value="<?= $agentInfo['lastname'] ?>" name="lname" required>
                                                        </div>
                                                    </div>
                                                    <div class="">
                                                        <div class="">
                                                            <label for="phone" class="form-label">Mobile Number</label>
                                                            <input type="tel" class="form-control" id="phone" value="<?= $agentInfo['phone'] ?>" name="phone">
                                                        </div>
                                                    </div>
                                                    <div class="">
                                                        <div class="">
                                                            <label for="email" class="form-label">Email Address</label> <span class="text-danger">*</span>
                                                            <input type="email" class="form-control" id="email" value="<?= $agentInfo['email'] ?>" name="email" required>
                                                        </div>
                                                    </div>
                                                    <div class="">
                                                        <div class="">
                                                            <label for="password" class="form-label">password</label> <span class="text-danger">*</span>
                                                            <input type="password" class="form-control" id="password" value="<?= $agentInfo['password'] ?>" name="password" required>
                                                        </div>
                                                    </div>

                                                    <div class="">
                                                        <button type="submit" name="add" class="btn btn-dark">UPDATE PROFILE</button>
                                                    </div>
                                                </div>
                                                <?php
                                                if (isset($_POST["add"])) {
                                                    // $applicationid = uniqid();
                                                    $fname = $_POST["fname"];
                                                    $lname = $_POST["lname"];
                                                    $phone = $_POST["phone"];
                                                    $email = $_POST["email"];
                                                    $password = $_POST["password"];

                                                    $sql = "
                                                    UPDATE `users` SET
                                                    `firstname` = '$fname', 
                                                    `lastname` = '$lname',
                                                    `phone` = '$phone',
                                                    `email` = '$email',
                                                    `password` = '$password'
                                                    WHERE `userid` = '$agent_id'
                                                    ";

                                                    $insert = mysqli_query($conn, $sql);
                                                    if ($insert) {
                                                        echo "<script>alert('Profile Updated Successfully!'); location.href='profile.php'</script>";
                                                    } else {
                                                        echo "<script>alert('Failed to update Profile')</script>";
                                                    }
                                                }
                                                ?>
                                            </form>
                                        </div>
                                        <div class="col-md-6">
                                            <form method="post">
                                                <div class="text-center mb-4">
                                                    <h5 class="fw-bold">
                                                        Company Info
                                                    </h5>
                                                </div>
                                                <div class="row row-gap-3">
                                                    <div class="">
                                                        <div class="">
                                                            <label for="name" class="form-label">Company Name</label> <span class="text-danger">*</span>
                                                            <input type="text" class="form-control" id="name" value="<?= $companyInfo['company_name'] ?? "" ?>" name="name" required>
                                                        </div>
                                                    </div>

                                                    <div class="">
                                                        <div class="">
                                                            <label for="addr" class="form-label">Company Address</label> <span class="text-danger">*</span>
                                                            <input type="text" class="form-control" id="addr" value="<?= $companyInfo['office_address'] ?? "" ?>" name="addr" required>
                                                        </div>
                                                    </div>
                                                    <div class="">
                                                        <div class="">
                                                            <label for="country" class="form-label">Country</label> <span class="text-danger">*</span>
                                                            <input type="text" class="form-control" id="country" value="<?= $companyInfo['country'] ?? "" ?>" name="country" required>
                                                        </div>
                                                    </div>
                                                    <div class="">
                                                        <div class="">
                                                            <label for="phone" class="form-label">Mobile Number</label> <span class="text-danger">*</span>
                                                            <input type="tel" class="form-control" id="phone" value="<?= $companyInfo['phone'] ?? "" ?>" name="phone" required>
                                                        </div>
                                                    </div>
                                                    <div class="">
                                                        <div class="">
                                                            <label for="email" class="form-label">Email Address</label> <span class="text-danger">*</span>
                                                            <input type="email" class="form-control" id="email" value="<?= $companyInfo['email'] ?? "" ?>" name="email" required>
                                                        </div>
                                                    </div>
                                                    <div class="">
                                                        <div class="">
                                                            <label for="website" class="form-label">Website</label> <span class="text-danger">*</span>
                                                            <input type="url" class="form-control" id="website" value="<?= $companyInfo['website'] ?? "" ?>" name="website" required>
                                                        </div>
                                                    </div>

                                                    <div class="">
                                                        <button type="submit" name="update" class="btn btn-dark">UPDATE COMPANY</button>
                                                    </div>
                                                </div>
                                                <?php
                                                if (isset($_POST["update"])) {
                                                    // $applicationid = uniqid();
                                                    $name = $_POST["name"];
                                                    $addr = $_POST["addr"];
                                                    $country = $_POST["country"];
                                                    $phone = $_POST["phone"];
                                                    $email = $_POST["email"];
                                                    $website = $_POST["website"];

                                                    if (mysqli_num_rows($getCompanyInfo) > 0) {
                                                        $sql = "
                                                        UPDATE `companies` SET
                                                        `company_name` = '$name', 
                                                        `office_address` = '$addr',
                                                        `country` = '$country',
                                                        `phone` = '$phone',
                                                        `email` = '$email',
                                                        `website` = '$website'
                                                        WHERE `agent_id` = '$agent_id'
                                                        ";
                                                    } else {
                                                        $sql = "
                                                        INSERT INTO `companies`(`agent_id`,`company_name`, `office_address`, `country`, `phone`, `email`, `website`) 
                                                        VALUES ('$agent_id', '$name', '$addr', '$country', '$phone', '$email', '$website')
                                                        ";
                                                    }



                                                    $insert = mysqli_query($conn, $sql);
                                                    if ($insert) {
                                                        echo "<script>alert('Company Updated Successfully!'); location.href='profile.php'</script>";
                                                    } else {
                                                        echo "<script>alert('Failed to update Company')</script>";
                                                    }
                                                }
                                                ?>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <!-- End Body Content Area -->

            <div class="flex-grow-1"></div>

            <!-- Start Footer Area -->
            <footer class="footer-area bg-white text-center rounded-top-10">
                <p class="fs-14">© <span class="text-primary">SERGRADE ROYALE</span></p>
            </footer>
            <!-- End Footer Area -->
        </div>
    </div>
    <!-- Start Main Content Area -->

    <!-- Start Theme Setting Area -->

    <!-- End Theme Setting Area -->

    <!-- Link Of JS File -->

    <script src="assets/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/sidebar-menu.js"></script>
    <!-- <script src="assets/js/dragdrop.js"></script>
    <script src="assets/js/rangeslider.min.js"></script>
    <script src="assets/js/sweetalert.js"></script>
    <script src="assets/js/quill.min.js"></script>
    <script src="assets/js/data-table.js"></script>
    <script src="assets/js/prism.js"></script>
    <script src="assets/js/clipboard.min.js"></script> -->
    <script src="assets/js/feather.min.js"></script>
    <!-- <script src="assets/js/simplebar.min.js"></script>
    <script src="assets/js/apexcharts.min.js"></script>
    <script src="assets/js/amcharts.js"></script>
    <script src="assets/js/custom/ecommerce-chart.js"></script> -->
    <script src="assets/js/custom/custom.js"></script>
</body>

<!-- Mirrored from templates.hibootstrap.com/farol/ by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 05 Dec 2024 14:00:05 GMT -->

</html>