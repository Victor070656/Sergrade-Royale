<?php
session_start();
include "../config/config.php";

if (!isset($_SESSION['sr_admin'])) {
    echo "<script>location.href = 'login.php';</script>";
}



$getAdminInfo = $conn->query("SELECT * FROM `admin`");
$adminInfo = $getAdminInfo->fetch_assoc();




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
    <title>Sergrade Admin || Add Blog</title>
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

                                        <div class="col-12">
                                            <form method="post" enctype="multipart/form-data">
                                                <div class="text-center mb-4">
                                                    <h4 class="fw-bold">
                                                        Add Blog
                                                    </h4>
                                                </div>
                                                <div class="row row-gap-3">

                                                    <div class="col-12">
                                                        <div class="">
                                                            <label for="title" class="form-label">Title</label> <span class="text-danger">*</span>
                                                            <input type="text" class="form-control" id="title" name="title" required>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="">
                                                            <label for="password" class="form-label">Body</label> <span class="text-danger">*</span>
                                                            <textarea class="form-control" id="password" name="body" rows="9" required></textarea>
                                                        </div>
                                                    </div>

                                                    <div class="col-12">
                                                        <div class="">
                                                            <label for="image" class="form-label">Image <small>(Landscape image preferred)</small></label> <span class="text-danger">*</span>
                                                            <input type="file" class="form-control" id="image" name="image" required>
                                                        </div>
                                                    </div>

                                                    <div class="">
                                                        <button type="submit" name="add" class="btn btn-dark">ADD</button>
                                                    </div>
                                                </div>
                                                <?php
                                                if (isset($_POST["add"])) {
                                                    $title = $_POST["title"];
                                                    $body = $_POST["body"];
                                                    $image = date("dmyHis") . $_FILES["image"]["name"];
                                                    $tmp_name = $_FILES["image"]["tmp_name"];
                                                    $path = "../assets/uploads/blog/" . $image;
                                                    if (move_uploaded_file($tmp_name, $path)) {
                                                        $add = $conn->query("INSERT INTO `blogs`(`title`, `body`, `image`) VALUES ('$title', '$body', '$image')");
                                                        if ($add) {
                                                            echo "<script>alert('Blog added successfully'); location.href = 'blogs.php'</script>";
                                                        } else {
                                                            echo "<script>alert('An error occured')</script>";
                                                        }
                                                    } else {
                                                        echo "<script>alert('An error occured')</script>";
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