<?php
session_start();
include "../config/config.php";

if (!isset($_SESSION['sr_admin'])) {
    echo "<script>location.href = 'login.php';</script>";
}


if (!isset($_GET["id"])) {
    echo "<script>location.href = 'applicants.php';</script>";
    exit;
}
$applicant_id = $_GET["id"];

// $getAgentInfo = $conn->query("SELECT * FROM users WHERE userid = '$agent_id'");
// $agentInfo = $getAgentInfo->fetch_assoc();

$getApplicant = $conn->query("SELECT * FROM `applicants` WHERE `applicant_id` = '$applicant_id'");
if ($getApplicant->num_rows < 1) {
    echo "<script>location.href = 'applicants.php';</script>";
}
$applicant = $getApplicant->fetch_assoc();

if ($applicant["status"] == "approved") {
    echo "<script>location.href = 'applicants.php';</script>";
}

$agent_id = $applicant["agent_id"];
$getAgentInfo = $conn->query("SELECT * FROM users WHERE `userid` = '$agent_id'");

$getBonusAmount = mysqli_query($conn, "SELECT * FROM `bonus_amount`");
$bonusAmount = $getBonusAmount->fetch_assoc();
$bonus = $bonusAmount["amount"];


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
    <link rel="stylesheet" href="assets/css/simplebar.css">
    <link rel="stylesheet" href="assets/css/apexcharts.css">
    <link rel="stylesheet" href="assets/css/prism.css">
    <link rel="stylesheet" href="assets/css/rangeslider.css">
    <link rel="stylesheet" href="assets/css/sweetalert.min.css">
    <link rel="stylesheet" href="assets/css/quill.snow.css">
    <link rel="stylesheet" href="assets/css/style.css">

    <!-- Favicon -->
    <link rel="icon" type="image/png" href="../assets/img/logo.png">
    <!-- Title -->
    <title>Sergrade Admin || Approve Applicant</title>
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
                    <div class="card bg-white border-0 shadow-sm p-4">
                        <div class="text-center py-5">
                            <img src="assets/images/done.png" style="width: 80px;" alt="">
                            <h4>Approve Applicant</h4>
                            <p>Are you sure you want to approve this applicant? it cannot be undone</p>

                            <form method="post">
                                <button type="submit" name="send" class="btn btn-success">Approve</button>
                            </form>
                            <?php
                            if (isset($_POST["send"])) {
                                $update = mysqli_query($conn, "UPDATE `applicants` SET `status` = 'approved' WHERE `applicant_id` = '$applicant_id'");

                                if ($update) {
                                    if ($getAgentInfo->num_rows > 0) {
                                        $getCompanyInfo = $conn->query("SELECT * FROM `companies` WHERE `agent_id` = '$agent_id'");
                                        $companyInfo = $getCompanyInfo->fetch_assoc();
                                        $bal = $companyInfo["bal"];
                                        $newBal = $bal + $bonus;
                                        $updateBal = mysqli_query($conn, "UPDATE `companies` SET `bal` = '$newBal' WHERE `agent_id` = '$agent_id'");
                                    }
                                    echo "<script>alert('Application Approved!'); location.href='applicants.php'</script>";
                                }
                            }
                            ?>
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
    <script data-cfasync="false" src="../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
    <script src="assets/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/sidebar-menu.js"></script>
    <script src="assets/js/dragdrop.js"></script>
    <script src="assets/js/rangeslider.min.js"></script>
    <script src="assets/js/sweetalert.js"></script>
    <script src="assets/js/quill.min.js"></script>
    <script src="assets/js/data-table.js"></script>
    <script src="assets/js/prism.js"></script>
    <script src="assets/js/clipboard.min.js"></script>
    <script src="assets/js/feather.min.js"></script>
    <script src="assets/js/simplebar.min.js"></script>
    <script src="assets/js/apexcharts.min.js"></script>
    <script src="assets/js/amcharts.js"></script>
    <script src="assets/js/custom/ecommerce-chart.js"></script>
    <script src="assets/js/custom/custom.js"></script>
</body>

<!-- Mirrored from templates.hibootstrap.com/farol/ by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 05 Dec 2024 14:00:05 GMT -->

</html>