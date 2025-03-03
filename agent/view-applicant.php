<?php
session_start();
include "../config/config.php";

if (!isset($_SESSION['sr_agent'])) {
    echo "<script>location.href = '../login.php';</script>";
} else {
    $agent_id = $_SESSION['sr_agent'];
}


if (!isset($_GET["id"])) {
    echo "<script>location.href = 'applicants.php';</script>";
    exit;
}
$applicant_id = $_GET["id"];

$getAgentInfo = $conn->query("SELECT * FROM users WHERE userid = '$agent_id'");
$agentInfo = $getAgentInfo->fetch_assoc();

$getApplicant = $conn->query("SELECT * FROM `applicants` WHERE `agent_id` = '$agent_id' AND `applicant_id` = '$applicant_id'");
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
    <link rel="icon" type="image/png" href="../assets/img/logo.png">
    <!-- Title -->
    <title>Sergrade Agent || View Applications</title>
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
                                        <div class="text-center mb-4">
                                            <h3 class="fw-bold">
                                                Add Applicant
                                            </h3>
                                        </div>
                                        <div class="row row-gap-3">
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label for="fname" class="form-label">First name</label> <span class="text-danger">*</span>
                                                    <input type="text" class="form-control" id="fname" value="<?= $applicant['first_name'] ?>" name="fname" required>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label for="mname" class="form-label">Middle name</label>
                                                    <input type="text" class="form-control" id="mname" value="<?= $applicant['middle_name'] ?>" name="mname">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label for="lname" class="form-label">Last name</label> <span class="text-danger">*</span>
                                                    <input type="text" class="form-control" id="lname" value="<?= $applicant['surname'] ?>" name="lname" required>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label for="dob" class="form-label">Date of birth</label> <span class="text-danger">*</span>
                                                    <input type="date" class="form-control" id="dob" value="<?= $applicant['date_of_birth'] ?>" name="dob" required>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label for="country" class="form-label">Country</label> <span class="text-danger">*</span>
                                                    <input type="text" class="form-control" id="country" value="<?= $applicant['country_of_birth'] ?>" name="country" required>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label for="state" class="form-label">State of Origin</label> <span class="text-danger">*</span>
                                                    <input type="text" class="form-control" id="state" value="<?= $applicant['state_of_origin'] ?>" name="state" required>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label for="email" class="form-label">Email Address</label> <span class="text-danger">*</span>
                                                    <input type="email" class="form-control" id="email" value="<?= $applicant['email'] ?>" name="email" required>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label for="marital" class="form-label">Marital Status</label> <span class="text-danger">*</span>
                                                    <select name="marital" id="marital" class="form-control form-select" required>
                                                        <option <?= $applicant['marital_status'] == 'Single' ? 'selected' : '' ?>>Single</option>
                                                        <option <?= $applicant['marital_status'] == 'Married' ? 'selected' : '' ?>>Married</option>
                                                        <option <?= $applicant['marital_status'] == 'Divorced' ? 'selected' : '' ?>>Divorced</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label for="no_of_child" class="form-label">Number of children</label>
                                                    <input type="text" class="form-control" id="no_of_child" value="<?= $applicant['number_of_children'] ?>" name="no_of_child">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label for="trav_with_fam" class="form-label">Are you planning to travel with your wife/husband/children</label>
                                                    <select name="trav_with_fam" id="trav_with_fam" class="form-control form-select">
                                                        <option <?= $applicant['traveling_with_family'] == 'No' ? 'selected' : '' ?>>No</option>
                                                        <option <?= $applicant['traveling_with_family'] == 'Yes' ? 'selected' : '' ?>>Yes</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label for="first_child_age" class="form-label">How old is your oldest child </label>
                                                    <input type="number" class="form-control" id="first_child_age" value="<?= $applicant['oldest_child_age'] ?>" name="first_child_age">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label for="course_choice" class="form-label">What course will you like to study abroad</label> <span class="text-danger">*</span>
                                                    <input type="text" class="form-control" id="course_choice" value="<?= $applicant['desired_course_abroad'] ?>" name="course_choice" required>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label for="first_deg" class="form-label">What is your first degree course</label> <span class="text-danger">*</span>
                                                    <input type="text" class="form-control" id="first_deg" value="<?= $applicant['first_degree_course'] ?>" name="first_deg" required>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label for="sponsor" class="form-label">Who is your sponsor</label>
                                                    <input type="text" class="form-control" id="sponsor" value="<?= $applicant['sponsor_name'] ?>" name="sponsor">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label for="travel_date" class="form-label">When will you like to travel</label> <span class="text-danger">*</span>
                                                    <input type="date" class="form-control" id="travel_date" value="<?= $applicant['preferred_travel_date'] ?>" name="travel_date" required>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label for="visa_refusal" class="form-label">Do you have any visa refusals of any country</label>
                                                    <select name="visa_refusal" id="visa_refusal" class="form-control form-select">
                                                        <option <?= $applicant['visa_refusals'] == 'No' ? 'selected' : '' ?>>No</option>
                                                        <option <?= $applicant['visa_refusals'] == 'Yes' ? 'selected' : '' ?>>Yes</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label for="visa_held" class="form-label">Do you have visa to any country</label>
                                                    <select name="visa_held" id="visa_held" class="form-control form-select">
                                                        <option <?= $applicant['visa_held'] == 'No' ? 'selected' : '' ?>>No</option>
                                                        <option <?= $applicant['visa_held'] == 'Yes' ? 'selected' : '' ?>>Yes</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label for="overstayed" class="form-label">Have you overstayed in any country</label>
                                                    <select name="overstayed" id="overstayed" class="form-control form-select">
                                                        <option <?= $applicant['overstayed_any_country'] == 'No' ? 'selected' : '' ?>>No</option>
                                                        <option <?= $applicant['overstayed_any_country'] == 'Yes' ? 'selected' : '' ?>>Yes</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label for="family_abroad" class="form-label">Do you have any family member abroad</label>
                                                    <select name="family_abroad" id="family_abroad" class="form-control form-select">
                                                        <option <?= $applicant['has_family_abroad'] == 'No' ? 'selected' : '' ?>>No</option>
                                                        <option <?= $applicant['has_family_abroad'] == 'Yes' ? 'selected' : '' ?>>Yes</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label for="fam_country" class="form-label">What country does your family abroad live in</label>
                                                    <input type="text" class="form-control" id="fam_country" value="<?= $applicant['family_abroad_country'] ?>" name="fam_country">
                                                </div>
                                            </div>
                                            <div class="">
                                                <button type="submit" name="add" class="btn btn-dark">UPDATE APPLICANT</button>
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