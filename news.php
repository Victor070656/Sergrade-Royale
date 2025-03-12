<?php
session_start();
include "config/config.php";

require "vendor/autoload.php";

$getEvents = $conn->query("SELECT * FROM `events` ORDER BY `id` DESC");
$allEvents = $getEvents->fetch_all(MYSQLI_ASSOC);
$records_per_page = 10;

$paginator = new Zebra_Pagination();
$paginator->records(count($allEvents));
$paginator->records_per_page($records_per_page);

$events = array_slice(
  $allEvents,
  (($paginator->get_page() - 1) * $records_per_page),
  $records_per_page
);


?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sergrade Royale Overseas Education - Best Study Abroad Consultants</title>
  <link
    rel="shortcut icon"
    href="assets/img/logo.png"
    type="image/x-icon" />
  <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
    rel="stylesheet" />
  <link rel="stylesheet" href="assets/css/styles.css" />
  <link rel="stylesheet" href="vendor/stefangabos/zebra_pagination/public/css/zebra_pagination.css">
  <link
    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
    rel="stylesheet" />
  <style>
    * {
      font-family: 'Montserrat', sans-serif;
    }
  </style>
</head>

<body>
  <!-- navbar -->
  <?php include "partials/header.php"; ?>
  <!-- end navbar -->

  <main>
    <!-- hero -->
    <section
      class="w-100 py-5 bg-primary position-relative overflow-hidden"
      style="">
      <!-- bg -->
      <img
        src="assets/img/svg/new-palace.png"
        alt=""
        style="top: 30px"
        class="opacity-25 position-absolute end-0 object-fit-contain z-0" />
      <img
        src="assets/img/svg/abt-bg-star.svg"
        alt=""
        style="top: 60px"
        class="position-absolute end-0 object-fit-contain" />
      <!-- / bg -->
      <div class="container py-5  position-relative z-2">
        <div class="row py-5 align-items-center">
          <div class="col-12 text-center">
            <h1 class="text-light fw-semibold ">
              News & Events
            </h1>

          </div>

        </div>
      </div>
    </section>
    <!-- end hero -->


    <!-- webinar -->
    <section class="py-5 position-relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style="position: absolute; top: 0; z-index: 0">
        <path
          fill="#0099ff"
          fill-opacity=".1"
          d="M0,224L60,229.3C120,235,240,245,360,229.3C480,213,600,171,720,160C840,149,960,171,1080,181.3C1200,192,1320,192,1380,192L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
      </svg>
      <div class="container" style="position: relative; z-index: 1">
        <!-- <div class="text-center mb-4">
          <h1 class="fw-bold">Webinars & Events</h1>
        </div> -->
        <div class="row align-items-center">
          <?php
          if (count($events) > 0) {
            foreach ($events as $event) {
          ?>
              <div class="col-md-4">
                <div
                  class="rounded-4 bg-light shadow"
                  style="border-radius: 15px !important">
                  <div class="">
                    <img
                      src="assets/uploads/event/<?= $event['image'] ?>"
                      alt=""
                      style="height: 200px; width: 100%; object-fit: cover;"
                      class="img-fluid rounded-4" />
                  </div>
                  <div class="p-3">
                    <div class="">
                      <span class="badge bg-primary"><?= ucfirst($event["post_type"]); ?></span>
                    </div>
                    <small class="text-primary mb-3">
                      <?= date("d M, Y", strtotime($event['event_date'])); ?>
                    </small>
                    <h4 class="mb-3 text-truncate text-capitalize"><?= $event['title'] ?></h4>
                    <p class="mb-3" style="max-height: 100px; overflow: hidden;">
                      <?= $event['body'] ?>
                    </p>
                    <a
                      href="event-details.php?id=<?= $event['id'] ?>"
                      class="text-decoration-none"
                      style="color: #ff6b56">Details <i class="bx bx-chevron-right"></i></a>
                  </div>
                </div>
              </div>
          <?php
            }
          }
          ?>
        </div>
        <div class="text-center mt-5">
          <?php $paginator->render(); ?>
        </div>
      </div>
    </section>


  </main>

  <!--  -->
  <footer class="py-5" style="background-color: #0e1b2c">
    <div class="container">
      <!-- footer top -->
      <div class="">
        <div class="text-center mb-4">
          <h3 class="text-light">Stay updated with Sergrade Royale Overseas</h3>
        </div>
        <form class="pb-5 border-bottom border-secondary-subtle">
          <div class="row row-gap-4">
            <div class="col-md-4">
              <input
                type="text"
                placeholder="Email ID"
                class="form-control form-control-lg" />
            </div>
            <div class="col-md-4">
              <select name="" id="" class="form-select form-select-lg">
                <option value="" disabled hidden selected>
                  Interested In?
                </option>
                <option>Student</option>
                <option>Institute</option>
                <option>Partner</option>
                <option>Franchisee</option>
              </select>
            </div>
            <div class="col-md-4">
              <button class="btn cta-btn btn-lg w-100">Subscribe Now</button>
            </div>
          </div>
        </form>
      </div>

      <!-- footer middle -->

      <div class="row py-5 border-bottom border-secondary-subtle">
        <div class="col-md-3 text-light">
          <img src="" alt="" />
          <h5 class="">About Sergrade Royale Overseas</h5>
          <p>
            We are the fastest growing EdTech brand operating across
            geographies, facilitating international student recruitments by
            connecting students, recruitment entrepreneurs and global
            universities through our high-tech online platform –
            coursefinder.ai
          </p>
        </div>
        <div class="col-md-3">
          <div class="d-flex flex-column row-gap-3">
            <p class="lead mb-0 text-secondary">Study Destinations</p>
            <div class="d-flex flex-column text-light row-gap-2">
              <span class="">United States</span>
              <span class="">Canada</span>
              <span class="">United Kingdom</span>
              <span class="">Ireland</span>
              <span class="">Australia</span>
              <span class="">New Zealand</span>
              <span class="">Europe</span>
              <span class="">Asia</span>
            </div>
            <p class="lead mb-0 text-secondary">Login To</p>
            <div class="d-flex flex-column text-light row-gap-2">
              <span class="">Find my Course</span>
              <span class="">Elan Loans</span>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="d-flex flex-column row-gap-3">
            <p class="lead mb-0 text-secondary">Services for Students</p>
            <div class="d-flex flex-column text-light row-gap-2">
              <span class="">Counselling</span>
              <span class="">Test Preparation</span>
              <span class="">Course, Country & University Selection</span>
              <span class="">Applications & Admission</span>
              <span class="">Scholarships</span>
              <span class="">Internship</span>
              <span class="">Education Loan</span>
              <span class="">Visa Processing</span>
              <span class="">Allied Services</span>
            </div>
            <p class="lead mb-0 text-secondary">Services for Institutions</p>
            <p class="lead mb-0 text-secondary">Services for Partners</p>
            <p class="lead mb-0 text-secondary">Services for Franchisee</p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="d-flex flex-column row-gap-3">
            <p class="lead mb-0 text-secondary">Company</p>
            <div class="d-flex flex-column text-light row-gap-2">
              <span class="">About Us</span>
              <span class="d-flex column-gap-3 align-items-center">
                <span>Careers</span>
                <a href="#" class="btn btn-primary btn-sm"> WE'RE HIRING </a>
              </span>
              <span class="">News & Events</span>
              <span class="">Corporate Social Responsibility</span>
              <span class="">CSR Policy</span>
              <span class="">Blog</span>
              <span class="">POSH Policy</span>
              <span class="">Contact Us</span>
              <span class="">How to Choose an Education Agent ?</span>
            </div>
            <p class="lead mb-0 text-secondary">Search Universities</p>
            <p class="lead mb-0 text-secondary">
              <span>Upcoming Events</span>
              <a href="#" class="btn btn-primary btn-sm">NEW!</a>
            </p>
            <p class="lead mb-0 text-secondary">
              Become Sergrade Royale Certified Counselor
            </p>
            <p class="lead mb-0 text-secondary">Book Online Counselling</p>
            <p class="lead mb-0 text-secondary">USA Online Counselling</p>
          </div>
        </div>
      </div>

      <!-- footer bottom -->
      <div class="py-4">
        <div class="border-bottom">
          <div class="text-center mb-4">
            <h3 class="text-light">Global Accreditations & Recognitions</h3>
          </div>
          <div class="row justify-content-md-between align-items-center mb-5 row-gap-4">
            <div class="col-md-2 col-6 text-center">
              <img
                src="assets/img/svg/rec/01.png"
                alt=""
                class="img-fluid text-center" />
            </div>
            <div class="col-md-2 col-6 text-center">
              <img
                src="assets/img/svg/rec/02.png"
                alt=""
                class="img-fluid text-center" />
            </div>
            <div class="col-md-2 col-6 text-center">
              <img
                src="assets/img/svg/rec/03.png"
                alt=""
                class="img-fluid text-center" />
            </div>
            <div class="col-md-2 col-6 text-center">
              <img
                src="assets/img/svg/rec/04.png"
                alt=""
                class="img-fluid text-center" />
            </div>
            <div class="col-md-2 col-6 text-center">
              <img
                src="assets/img/svg/rec/05.png"
                alt=""
                class="img-fluid text-center" />
            </div>
          </div>
        </div>
        <!--  -->
        <div class="py-3 mt-4">
          <div class="d-flex flex-column flex-lg-row column-gap-2 row-gap-2 align-items-center">
            <div class="col-md-4 text-light">
              <i class="bx bxl-facebook p-2 rounded-circle fs-6 border"></i>
              <i class="bx bxl-instagram p-2 rounded-circle fs-6 border"></i>
              <i class="bx bxl-linkedin p-2 rounded-circle fs-6 border"></i>
              <i class="bx bxl-youtube p-2 rounded-circle fs-6 border"></i>
            </div>
            <div class="col-md-8">
              <div class="d-flex flex-column flex-md-row column-gap-3 row-gap-3 text-secondary text-center">
                <small>Copyright © Sergrade Royale Overseas Education 2004-2024</small>
                <small>Terms & Conditions</small>
                <small>Privacy Policy</small>
                <small>Payment Terms</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>

  <!-- scripts -->
  <script src="assets/js/bootstrap.bundle.min.js"></script>
  <script src="vendor/stefangabos/zebra_pagination/public/javascript/zebra_pagination.js"></script>
</body>

</html>