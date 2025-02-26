<?php
session_start();
include "../config/config.php";

if (!isset($_SESSION['sr_agent'])) {
    echo "<script>location.href = '../login.php';</script>";
} else {
    $agent_id = $_SESSION['sr_agent'];
}

$getAgentInfo = $conn->query("SELECT * FROM `users` WHERE userid = '$agent_id'");
$agentInfo = $getAgentInfo->fetch_assoc();

$getCompanyInfo = $conn->query("SELECT * FROM `companies` WHERE `agent_id` = '$agent_id'");
if (mysqli_num_rows($getCompanyInfo) < 1) {
    echo "<script>location.href = 'profile.php';alert('Fill in your company information!')</script>";
}
$company = $getCompanyInfo->fetch_assoc();

$getApprovedApplicants = $conn->query("SELECT * FROM applicants WHERE agent_id = '$agent_id' AND status = 'approved'");
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
    <title>Sergrade Agent || Bonus</title>
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
                        <div class="col-md-6">
                            <div class="stats-box card shadow-sm bg-white border-0 rounded-10 mb-4">
                                <div class="card-body p-4">
                                    <div class="d-flex justify-content-between align-items-center pb-1">
                                        <div class="flex-grow-1 me-3">
                                            <h3 class="body-font fw-bold fs-3 mb-2">₦<?= $company["bal"] ?? 0 ?></h3>
                                            <span>Bonus</span>
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
                                            <span class="text-success">Approved Applicants</span>
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
                        <marquee direction="left">
                            <p class="mb-2">
                                For every approved applicant, you get a bonus of 5,000.
                            </p>
                        </marquee>
                        <!-- <form method="post">
                            <button type="submit" name="withdraw" class="btn btn-primary">Withdraw</button>
                        </form> -->

                        <!-- Button trigger modal -->
                        <div class="">
                            <button
                                type="button"
                                class="btn btn-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#modalId">
                                Withdraw Bonus
                            </button>
                        </div>


                        <!-- Modal -->
                        <div
                            class="modal fade"
                            id="modalId"
                            tabindex="-1"
                            role="dialog"
                            aria-labelledby="modalTitleId"
                            aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="modalTitleId">
                                            Withdrawal
                                        </h5>
                                        <button
                                            type="button"
                                            class="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form method="post">
                                            <p>You are about to withdraw your bonus of <b>₦<?= $company["bal"] ?></b></p>
                                            <input type="text" name="bank" placeholder="Bank Name" class="form-control mb-3">
                                            <input type="text" name="acct_name" placeholder="Account Name" class="form-control mb-3">
                                            <input type="text" name="acct_num" placeholder="Account Number" class="form-control mb-3">
                                    </div>
                                    <div class="modal-footer">
                                        <button type="submit" name="withdraw" class="btn btn-primary">Withdraw</button>
                                        </form>
                                        <button
                                            type="button"
                                            class="btn btn-secondary"
                                            data-bs-dismiss="modal">
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <script>
                            var modalId = document.getElementById('modalId');

                            modalId.addEventListener('show.bs.modal', function(event) {
                                // Button that triggered the modal
                                let button = event.relatedTarget;
                                // Extract info from data-bs-* attributes
                                let recipient = button.getAttribute('data-bs-whatever');

                                // Use above variables to manipulate the DOM
                            });
                        </script>
                        <?php
                        if (isset($_POST['withdraw'])) {
                            $bank = $_POST['bank'];
                            $acct_name = $_POST['acct_name'];
                            $acct_num = $_POST['acct_num'];
                            $bal = $company["bal"];

                            if ($bal < 1) {
                                echo "<script>alert('You do not have any bonus to withdraw!')</script>";
                            } else {
                                $withdraw = $conn->query("INSERT INTO withdrawals (agent_id, bank, acct_name, acct_num, amount) VALUES ('$agent_id', '$bank', '$acct_name', '$acct_num', '$bal')");

                                $withdrawal = $conn->query("UPDATE companies SET bal = 0 WHERE agent_id = '$agent_id'");
                                if ($withdraw && $withdrawal) {
                                    echo "<script>alert('Withdrawal Successful!')</script>";
                                } else {
                                    echo "<script>alert('Withdrawal Failed!')</script>";
                                }
                            }
                        }
                        ?>

                        <div class="col-12">
                            <div class="table-responsive mt-4">
                                <table class="table table-borderless table-striped table-hover align-middle">
                                    <thead>
                                        <tr>
                                            <th scope="col">S/N</th>
                                            <th scope="col">Bank</th>
                                            <th scope="col">Account Name</th>
                                            <th scope="col">Account Number</th>
                                            <th scope="col">Amount</th>
                                            <th scope="col">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php
                                        $getWithdrawals = $conn->query("SELECT * FROM withdrawals WHERE agent_id = '$agent_id' ORDER BY `id` DESC");
                                        $sn = 1;
                                        while ($withdrawal = $getWithdrawals->fetch_assoc()) {
                                        ?>
                                            <tr>
                                                <td><?= $sn ?></td>
                                                <td><?= $withdrawal["bank"] ?></td>
                                                <td><?= $withdrawal["acct_name"] ?></td>
                                                <td><?= $withdrawal["acct_num"] ?></td>
                                                <td>₦<?= $withdrawal["amount"] ?></td>
                                                <td><?= $withdrawal["created_at"] ?></td>
                                            </tr>
                                        <?php
                                            $sn++;
                                        }
                                        if (mysqli_num_rows($getWithdrawals) < 1) {
                                            echo "<tr><td colspan='6' class='text-center'>No Withdrawals Yet!</td></tr>";
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