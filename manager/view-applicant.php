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


$getApplicant = $conn->query("SELECT * FROM `applicants` WHERE `applicant_id` = '$applicant_id'");
if ($getApplicant->num_rows < 1) {
    echo "<script>location.href = 'applicants.php';</script>";
}
$applicant = $getApplicant->fetch_assoc();
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
    <title>Sergrade Agent Dashboard</title>
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
                                    <form method="post">
                                        <div class="text-center mb-5">
                                            <h3 class="fw-bold">
                                                Application #<?= $applicant['applicant_id'] ?>
                                            </h3>
                                        </div>
                                        <div class="row row-gap-3">
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label for="fname" class="form-label fs-6">First name:</label>
                                                    <p><b><?= $applicant['first_name'] ?></b></p>

                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label for="mname" class="form-label fs-6">Middle name:</label>
                                                    <p><b><?= $applicant['middle_name'] ?></b></p>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label for="lname" class="form-label fs-6">Last name:</label>
                                                    <p><b><?= $applicant['surname'] ?></b></p>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label for="dob" class="form-label fs-6">Date of birth:</label>
                                                    <p><b><?= $applicant['date_of_birth'] ?></b></p>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label for="country" class="form-label fs-6">Country:</label>
                                                    <p><b><?= $applicant['country_of_birth'] ?></b></p>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label for="state" class="form-label fs-6">State of Origin:</label>
                                                    <p><b><?= $applicant['state_of_origin'] ?></b></p>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label for="email" class="form-label fs-6">Email Address:</label>
                                                    <p><b><?= $applicant['email'] ?></b></p>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label for="marital" class="form-label fs-6">Marital Status:</label>
                                                    <p><b><?= $applicant['marital_status'] ?></b></p>

                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label for="no_of_child" class="form-label fs-6">Number of children:</label>
                                                    <p><b><?= $applicant['number_of_children'] ?></b></p>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label for="trav_with_fam" class="form-label fs-6">Are you planning to travel with your wife/husband/children:</label>
                                                    <p><b><?= $applicant['traveling_with_family'] ?></b></p>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label for="first_child_age" class="form-label fs-6">How old is your oldest child:</label>
                                                    <p><b><?= $applicant['oldest_child_age'] ?></b></p>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label for="course_choice" class="form-label fs-6">What course will you like to study abroad:</label>
                                                    <p><b><?= $applicant['desired_course_abroad'] ?></b></p>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label for="first_deg" class="form-label fs-6">What is your first degree course:</label>
                                                    <p><b><?= $applicant['first_degree_course'] ?></b></p>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label for="sponsor" class="form-label fs-6">Who is your sponsor:</label>
                                                    <p><b><?= $applicant['sponsor_name'] ?></b></p>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label for="travel_date" class="form-label fs-6">When will you like to travel:</label>
                                                    <p><b><?= $applicant['preferred_travel_date'] ?></b></p>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label for="visa_refusal" class="form-label fs-6">Do you have any visa refusals of any country:</label>
                                                    <p><b><?= $applicant['visa_refusals'] ?></b></p>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label for="visa_held" class="form-label fs-6">Do you have visa to any country:</label>
                                                    <p><b><?= $applicant['visa_held'] ?></b></p>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label for="overstayed" class="form-label fs-6">Have you overstayed in any country:</label>
                                                    <p><b><?= $applicant['overstayed_any_country'] ?></b></p>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label for="family_abroad" class="form-label fs-6">Do you have any family member abroad:</label>
                                                    <p><b><?= $applicant['has_family_abroad'] ?></b></p>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label for="fam_country" class="form-label fs-6">What country does your family abroad live in:</label>
                                                    <p><b><?= $applicant['family_abroad_country'] ?></b></p>
                                                </div>
                                            </div>
                                        </div>
                                        <?php
                                        if (isset($_POST["add"])) {
                                            // $applicationid = uniqid();
                                            $fname = $_POST["fname"];
                                            $mname = $_POST["mname"];
                                            $lname = $_POST["lname"];
                                            $dob = $_POST["dob"];
                                            $country = $_POST["country"];
                                            $state = $_POST["state"];
                                            $email = $_POST["email"];
                                            $marital = $_POST["marital"];
                                            $no_of_child = $_POST["no_of_child"];
                                            $trav_with_fam = $_POST["trav_with_fam"];
                                            $first_child_age = $_POST["first_child_age"];
                                            $course_choice = $_POST["course_choice"];
                                            $first_deg = $_POST["first_deg"];
                                            $sponsor = $_POST["sponsor"];
                                            $travel_date = $_POST["travel_date"];
                                            $visa_refusal = $_POST["visa_refusal"];
                                            $visa_held = $_POST["visa_held"];
                                            $overstayed = $_POST["overstayed"];
                                            $family_abroad = $_POST["family_abroad"];
                                            $fam_country = $_POST["fam_country"];

                                            $sql = "
                                            UPDATE `applicants` SET
                                            `first_name` = '$fname', 
                                            `middle_name` = '$mname',
                                            `surname` = '$lname',
                                             `date_of_birth` = '$dob',
                                             `country_of_birth` = '$country',
                                             `state_of_origin` = '$state',
                                             `email` = '$email',
                                             `marital_status` = '$marital',
                                             `number_of_children` = '$no_of_child',
                                             `traveling_with_family` = '$trav_with_fam',
                                             `oldest_child_age` = '$first_child_age',
                                             `desired_course_abroad` = '$course_choice',
                                             `first_degree_course` = '$first_deg',
                                             `sponsor_name` = '$sponsor',
                                             `preferred_travel_date` = '$travel_date',
                                             `visa_refusals` = '$visa_refusal',
                                             `visa_held` = '$visa_held',
                                             `overstayed_any_country` = '$overstayed',
                                             `has_family_abroad` = '$family_abroad',
                                             `family_abroad_country` = '$fam_country'
                                            WHERE `applicant_id` = '$applicant_id'
                                            ";

                                            $insert = mysqli_query($conn, $sql);
                                            if ($insert) {
                                                echo "<script>alert('Application Updated Successfully!'); location.href='applicants.php'</script>";
                                            } else {
                                                echo "<script>alert('Failed to add Applicant')</script>";
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