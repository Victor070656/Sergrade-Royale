<?php
session_start();
include "../config/config.php";

if (!isset($_SESSION['sr_admin'])) {
    echo "<script>location.href = 'login.php';</script>";
}

$getAgents = $conn->query("SELECT u.*, c.company_name, c.office_address, c.country, c.phone as `office_phone`, c.email as `office_email`, c.website FROM `users` as u JOIN `companies` as c ON u.userid = c.agent_id  WHERE u.account_type = 'agent'");

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

    <script src="assets/js/jquery-3.6.min.js"></script>
    <script src="assets/js/datatables.min.js"></script>
    <link rel="stylesheet" href="assets/css/datatables.min.css">

    <!-- Favicon -->
    <link rel="icon" type="image/png" href="assets/images/favicon.png">
    <!-- Title -->
    <title>Sergrade Admin || Agents</title>
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
                    <div class="card shadow-sm bg-white border-0 rounded-10">

                        <div class="card-body  p-4">
                            <h4 class="mb-3">Agents</h4>
                            <div class="table-responsive">
                                <table id="tablee" class="w-100 mt-4 table table-bordered mb-0">
                                    <thead>
                                        <tr>
                                            <th class="col text-muted text-uppercase text-nowrap text-center"><small>First Name</small></th>
                                            <th class="col text-muted text-uppercase text-nowrap text-center"><small>Last Name</small></th>
                                            <th class="col text-muted text-uppercase text-nowrap text-center"><small>Phone Number</small></th>
                                            <th class="col text-muted text-uppercase text-nowrap text-center"><small>Email</small></th>
                                            <th class="col text-muted text-uppercase text-nowrap text-center"><small>Company Name</small></th>
                                            <th class="col text-muted text-uppercase text-nowrap text-center"><small>Company Address</small></th>
                                            <th class="col text-muted text-uppercase text-nowrap text-center"><small>Company Country</small></th>
                                            <th class="col text-muted text-uppercase text-nowrap text-center"><small>Company Phone</small></th>
                                            <th class="col text-muted text-uppercase text-nowrap text-center"><small>Company Email</small></th>
                                            <th class="col text-muted text-uppercase text-nowrap text-center"><small>Company Website</small></th>
                                            <th class="col text-muted text-uppercase text-nowrap text-center"><small>Joined On</small></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php
                                        while ($row = $getAgents->fetch_assoc()) {
                                        ?>
                                            <tr>
                                                <td class="text-center"><?= $row['firstname'] ?></td>
                                                <td class="text-center"><?= $row['lastname'] ?></td>
                                                <td class="text-center"><?= $row['phone'] ?></td>
                                                <td class="text-center"><?= $row['email'] ?></td>
                                                <td class="text-center"><?= $row['company_name'] ?></td>
                                                <td class="text-center"><?= $row['office_address'] ?></td>
                                                <td class="text-center"><?= $row['country'] ?></td>
                                                <td class="text-center"><?= $row['office_phone'] ?></td>
                                                <td class="text-center"><?= $row['office_email'] ?></td>
                                                <td class="text-center"><?= $row['website'] ?></td>
                                                <td class="text-center"><small><?= $row['created_at'] ?></small></td>
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
    <!-- <script src="assets/js/simplebar.min.js"></script>
    <script src="assets/js/apexcharts.min.js"></script>
    <script src="assets/js/amcharts.js"></script>
    <script src="assets/js/custom/ecommerce-chart.js"></script> -->
    <script src="assets/js/custom/custom.js"></script>
</body>

<!-- Mirrored from templates.hibootstrap.com/farol/ by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 05 Dec 2024 14:00:05 GMT -->

</html>