<?php
session_start();
include "../config/config.php";

if (!isset($_SESSION['sr_admin'])) {
    echo "<script>location.href = 'login.php';</script>";
}

$getApplications = $conn->query("SELECT * FROM `users`");
$applications = $getApplications->fetch_assoc();

$getAllApplicants = $conn->query("SELECT a.*, u.firstname, u.lastname FROM `applicants` as a LEFT JOIN `users` as u ON a.agent_id = u.userid");
$applicantsA = $getAllApplicants->num_rows;

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
    <!-- <link rel="stylesheet" href="assets/css/datatables.min.css"> -->

    <script src="assets/js/jquery-3.6.min.js"></script>
    <script src="assets/js/datatables.min.js"></script>
    <link rel="stylesheet" href="assets/css/datatables.min.css">


    <!-- Favicon -->
    <link rel="icon" type="image/png" href="../assets/img/logo.png">
    <!-- Title -->
    <title>Sergrade Admin || Applicants</title>
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
                                        <table id="tablee" class="table table-borderless table-striped mt-4">
                                            <thead>
                                                <tr class="text-nowrap">
                                                    <th>First Name</th>
                                                    <th>Middle Name</th>
                                                    <th>Last Name</th>
                                                    <th>D.O.B</th>
                                                    <th>Agent</th>
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
                                                        <td><?= $applicant['firstname'] . " " . $applicant['lastname'] ?></td>
                                                        <td><?= $applicant['country_of_birth'] ?></td>
                                                        <td><?= $applicant['state_of_origin'] ?></td>
                                                        <td><?= $applicant['email'] ?></td>
                                                        <td><?= $applicant['marital_status'] ?></td>
                                                        <td><?= $applicant['desired_course_abroad'] ?></td>
                                                        <td><?= $applicant['preferred_travel_date'] ?></td>
                                                        <td>
                                                            <?php
                                                            if ($applicant['status'] == "pending") {
                                                                echo "<span class='badge bg-warning text-dark'>Pending</span>";
                                                            } else if ($applicant['status'] == "approved") {
                                                                echo "<span class='badge bg-success'>Approved</span>";
                                                            } else {
                                                                echo "<span class='badge bg-danger'>Rejected</span>";
                                                            }
                                                            ?>
                                                        </td>
                                                        <td>
                                                            <small><?= date("d-m-Y H:i", strtotime($applicant['created_at'])) ?></small>
                                                        </td>
                                                        <td>

                                                            <div class="dropdown open">
                                                                <a
                                                                    class="btn btn-sm"
                                                                    type="button"
                                                                    id="triggerId"
                                                                    data-bs-toggle="dropdown"
                                                                    aria-haspopup="true"
                                                                    aria-expanded="false">
                                                                    <i data-feather="more-vertical" class=""></i>
                                                                </a>
                                                                <div class="dropdown-menu" aria-labelledby="triggerId">
                                                                    <a class="dropdown-item" href="view-applicant.php?id=<?= $applicant['applicant_id'] ?>">View</a>
                                                                    <a class="dropdown-item text-danger <?= $applicant['status'] != "pending" ? "disabled" : ""; ?>" href="reject-applicant.php?id=<?= $applicant['applicant_id'] ?>">Reject</a>
                                                                    <a class="dropdown-item text-success <?= $applicant['status'] != "pending" ? "disabled" : ""; ?>"" href=" approve-applicant.php?id=<?= $applicant['applicant_id'] ?>">Approve</a>
                                                                </div>
                                                            </div>

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
    <!-- <script src="assets/js/datatables.min.js"></script>
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            let table = new DataTable("#tablee");
        });
    </script> -->

    <script>
        $(document).ready(function() {
            $('#tablee').DataTable({
                "scrollX": "100%",
            });
        });
    </script>


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
    <script src="assets/js/custom/custom.js"></script>
</body>

<!-- Mirrored from templates.hibootstrap.com/farol/ by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 05 Dec 2024 14:00:05 GMT -->

</html>