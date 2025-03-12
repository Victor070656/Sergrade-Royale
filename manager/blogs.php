<?php
session_start();
include "../config/config.php";

if (!isset($_SESSION['sr_admin'])) {
    echo "<script>location.href = 'login.php';</script>";
}

$getBlogs = $conn->query("SELECT * FROM `blogs` ORDER BY `id` DESC");

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
    <!-- <link rel="icon" type="image/png" href="assets/images/favicon.png"> -->
    <!-- Title -->
    <title>Sergrade Admin || Blogs</title>
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
                            <h4 class="mb-3">Blogs</h4>
                            <div class="table-responsive">
                                <table id="tablee" class="w-100 mt-4 table table-bordered mb-0">
                                    <thead>
                                        <tr>
                                            <th class="col text-muted text-uppercase text-nowrap text-center"><small>Image</small></th>
                                            <th class="col text-muted text-uppercase text-nowrap text-center"><small>Title</small></th>
                                            <th class="col text-muted text-uppercase text-nowrap text-center"><small>Body</small></th>
                                            <th class="col text-muted text-uppercase text-nowrap text-center"><small>Create Date</small></th>
                                            <th class="col text-muted text-uppercase text-nowrap text-center"><small>Action</small></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php
                                        while ($row = $getBlogs->fetch_assoc()) {
                                        ?>
                                            <tr>
                                                <td class="">
                                                    <a href="<?= "../assets/uploads/blog/" . $row['image'] ?>" target="_blank" rel="noopener noreferrer">
                                                        <img src="<?= "../assets/uploads/blog/" . $row['image'] ?>" style="height: 70px; width:auto;" alt="">
                                                    </a>
                                                </td>
                                                <td class=""><?= $row['title'] ?></td>
                                                <td class="text-truncate" style="max-width: 400px;"><?= $row['body'] ?></td>
                                                <td class=""><small><?= $row['created_at'] ?></small></td>
                                                <td class="">
                                                    <a href="edit-blog.php?id=<?= $row['id'] ?>" class="btn btn-primary btn-sm mb-1">Edit</a>
                                                    <a href="delete-blog.php?id=<?= $row['id'] ?>" class="btn btn-danger btn-sm mb-1">Delete</a>
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
    <script src="assets/js/clipboard.min.js"></script>
    <script src="assets/js/simplebar.min.js"></script>
    <script src="assets/js/apexcharts.min.js"></script>
    <script src="assets/js/amcharts.js"></script>
    <script src="assets/js/custom/ecommerce-chart.js"></script> -->
    <script src="assets/js/feather.min.js"></script>
    <script src="assets/js/custom/custom.js"></script>
</body>

<!-- Mirrored from templates.hibootstrap.com/farol/ by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 05 Dec 2024 14:00:05 GMT -->

</html>