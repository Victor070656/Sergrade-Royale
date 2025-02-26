<?php
session_start();
include "../config/config.php";

if (!isset($_SESSION['sr_admin'])) {
    echo "<script>location.href = 'login.php';</script>";
}


$getAllApplicants = $conn->query("SELECT * FROM applicants");
$applicantsA = $getAllApplicants->num_rows;
// 
$getPendingApplicants = $conn->query("SELECT * FROM `applicants` WHERE `status` = 'pending'");
$applicantsP = $getPendingApplicants->num_rows;
// 
$getRejectedApplicants = $conn->query("SELECT * FROM `applicants` WHERE `status` = 'rejected'");
$applicantsR = $getRejectedApplicants->num_rows;
// 
$getApprovedApplicants = $conn->query("SELECT * FROM `applicants` WHERE `status` = 'approved'");
$applicantsAP = $getApprovedApplicants->num_rows;
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
    <link rel="icon" type="image/png" href="assets/images/favicon.png">
    <!-- Title -->
    <title>Sergrade Admin || Dashboard</title>
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

            <div class="py-4">
                <h2 class="fw-bold">
                    <?php
                    if (date("H") < 12) {
                        echo "Good Morning ⛅";
                    } elseif (date("H") < 17) {
                        echo "Good Afternoon 🌞";
                    } else {
                        echo "Good Evening 🌙";
                    }
                    ?>, Admin
                </h2>
            </div>
            <div class="row justify-content-center">
                <div class="col-12">
                    <div class="row justify-content-center">
                        <div class="col-md-6">
                            <div class="stats-box card shadow-sm bg-white border-0 rounded-10 mb-4">
                                <div class="card-body p-4">
                                    <div class="d-flex justify-content-between align-items-center pb-1">
                                        <div class="flex-grow-1 me-3">
                                            <h3 class="body-font fw-bold fs-3 mb-2"><?= $applicantsA ?? 0 ?></h3>
                                            <span>Total Applications</span>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <div class="icon transition">
                                                <i class="flaticon-donut-chart"></i>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="stats-box card shadow-sm bg-white border-0 rounded-10 mb-4">
                                <div class="card-body p-4">
                                    <div class="d-flex justify-content-between align-items-center pb-1">
                                        <div class="flex-grow-1 me-3">
                                            <h3 class="body-font fw-bold fs-3 mb-2"><?= $applicantsP ?? 0 ?></h3>
                                            <span class="text-warning">Pending Applications</span>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <div class="icon transition">
                                                <i class="flaticon-donut-chart"></i>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="stats-box card shadow-sm bg-white border-0 rounded-10 mb-4">
                                <div class="card-body p-4">
                                    <div class="d-flex justify-content-between align-items-center pb-1">
                                        <div class="flex-grow-1 me-3">
                                            <h3 class="body-font fw-bold fs-3 mb-2"><?= $applicantsR ?? 0 ?></h3>
                                            <span class="text-danger">Rejected Applications</span>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <div class="icon transition">
                                                <i class="flaticon-donut-chart"></i>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="stats-box card shadow-sm bg-white border-0 rounded-10 mb-4">
                                <div class="card-body p-4">
                                    <div class="d-flex justify-content-between align-items-center pb-1">
                                        <div class="flex-grow-1 me-3">
                                            <h3 class="body-font fw-bold fs-3 mb-2"><?= $applicantsAP ?? 0 ?></h3>
                                            <span class="text-success">Approved Applications</span>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <div class="icon transition">
                                                <i class="flaticon-donut-chart"></i>
                                            </div>
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
                <p class="fs-14">© <span class="text-primary">SERGRADE</span></p>
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