<?php
session_start();
include "../config/config.php";

if (!isset($_SESSION['sr_student'])) {
    echo "<script>location.href = '../login.php';</script>";
} else {
    $student_id = $_SESSION['sr_student'];
}

$getStudentInfo = $conn->query("SELECT * FROM users WHERE userid = '$student_id'");
$studentInfo = $getStudentInfo->fetch_assoc();

$getAllApplicants = $conn->query("SELECT * FROM applicants WHERE student_id = '$student_id'");
$applicantsA = $getAllApplicants->num_rows;
// 
$getPendingApplicants = $conn->query("SELECT * FROM applicants WHERE student_id = '$student_id' AND status = 'pending'");
$applicantsP = $getPendingApplicants->num_rows;
// 
$getRejectedApplicants = $conn->query("SELECT * FROM applicants WHERE student_id = '$student_id' AND status = 'rejected'");
$applicantsR = $getRejectedApplicants->num_rows;
// 
$getApprovedApplicants = $conn->query("SELECT * FROM applicants WHERE student_id = '$student_id' AND status = 'approved'");
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
    <link rel="icon" type="image/png" href="../assets/img/logo.png">
    <!-- Title -->
    <title>Sergrade Student || Applicants</title>
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
                            <div class="stats-box card shadow-sm bg-white border-0 rounded-10 mb-4">
                                <div class="card-body p-4">
                                    <div class="">
                                        <h3 class="fw-bold">Applicants</h3>
                                    </div>
                                    <div class="table-responsive">
                                        <table class="table table-borderless table-striped">
                                            <thead>
                                                <tr class="text-nowrap">
                                                    <th>First Name</th>
                                                    <th>Middle Name</th>
                                                    <th>Last Name</th>
                                                    <th>D.O.B</th>
                                                    <th>Country</th>
                                                    <th>State</th>
                                                    <th>Email</th>
                                                    <th>Marital Status</th>
                                                    <th>Desired Course</th>
                                                    <th>Desired Travel date</th>
                                                    <th>Status</th>
                                                    <th>Creation Date</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <?php
                                                if ($getAllApplicants->num_rows == 0) {
                                                    echo "<tr><td colspan='13' class='text-center'>No Applicants Yet</td></tr>";
                                                }
                                                while ($applicant = $getAllApplicants->fetch_assoc()) {
                                                ?>
                                                    <tr>
                                                        <td><?= $applicant['first_name'] ?></td>
                                                        <td><?= $applicant['middle_name'] ?></td>
                                                        <td><?= $applicant['surname'] ?></td>
                                                        <td><?= $applicant['date_of_birth'] ?></td>
                                                        <td><?= $applicant['country_of_birth'] ?></td>
                                                        <td><?= $applicant['state_of_origin'] ?></td>
                                                        <td><?= $applicant['email'] ?></td>
                                                        <td><?= $applicant['marital_status'] ?></td>
                                                        <td><?= $applicant['desired_course_abroad'] ?></td>
                                                        <td><?= $applicant['preferred_travel_date'] ?></td>
                                                        <td class="<?php
                                                                    if ($applicant['status'] == "pending") {
                                                                        echo 'text-warning';
                                                                    } elseif ($applicant['status'] == "rejected") {
                                                                        echo 'text-danger';
                                                                    } elseif ($applicant['status'] == "approved") {
                                                                        echo 'text-success';
                                                                    }
                                                                    ?>">
                                                            <?= ucfirst($applicant['status']) ?>
                                                        </td>
                                                        <td><?= $applicant['created_at'] ?></td>
                                                        <td>
                                                            <a href="view-applicant.php?id=<?= $applicant['applicant_id'] ?>" class="btn btn-primary">View</a>
                                                        </td>
                                                    </tr>
                                                <?php
                                                }
                                                ?>
                                            </tbody>
                                        </table>
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