<?php
session_start();
include "config/config.php";

$getEvents = $conn->query("SELECT * FROM `events` ORDER BY `id` DESC LIMIT 2");

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
      class="w-100 py-5 bg-primary position-relative"
      style="min-height: 100vh">
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
      <div class="container min-vh-100  position-relative z-2">
        <div class="row min-vh-100 align-items-center">
          <div class="col-md-6 order-last order-md-first">
            <h1 class="text-light fw-semibold">
              We are bringing overseas education within everyone’s reach
            </h1>
            <p class="mb-5 lead text-light lighter mt-2">
              Our Tech-enabled solutions help international students and
              recruitment partners choose the best global universities
            </p>
            <a href="login.php" class="btn cta-btn">Start Your Journey</a>
          </div>
          <div class="col-md-6 order-first order-md-last">
            <img
              src="assets/img/hero1.png"
              alt=""
              class="img-fluid"
              style="width: 90%; margin: auto" />
          </div>
        </div>
      </div>
    </section>
    <!-- end hero -->

    <!-- strength -->
    <section class="py-5">
      <div class="container py-5">
        <div class="mb-4">
          <h1 class="text-center fw-bold">Our Core Strengths</h1>
        </div>
        <div class="row px-3">
          <div class="col-md-4">
            <div class="text-center mb-3">
              <h1 class="fw-bold count" data-target="850" style="color: #fdaf4d">0</h1>
              <p class="fw-semibold">Global University Tie Ups</p>
              <small>
                Our students aren’t just pursuing their higher education, but
                their dreams and ambitions in eminent universities across the
                globe
              </small>
            </div>
          </div>
          <div class="col-md-4">
            <div class="text-center mb-3">
              <h1 class="fw-bold count" data-target="65" style="color: #ff6a56">0</h1>
              <p class="fw-semibold">Offices across the Globe</p>
              <small>
                We’re growing, we’re expanding and we’re doing that fast! Join
                the fastest growing EdTech brand in South and South-East Asia.
              </small>
            </div>
          </div>
          <div class="col-md-4">
            <div class="text-center mb-3">
              <h1 class="fw-bold count" data-target="26" style="color: #226cf5">0</h1>
              <p class="fw-semibold">Years of Industry Presence</p>
              <small>
                With over two decades of industry expertise, we know what’s
                best for you and that makes us really good at what we do!
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>

    <script>
      document.addEventListener("DOMContentLoaded", function() {
        const counters = document.querySelectorAll(".count");
        const options = {
          threshold: 1.0
        };

        const observer = new IntersectionObserver(function(entries, observer) {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = parseInt(entry.target.getAttribute("data-target"));
              let count = 0;
              const speed = target / 50; // Adjust speed here

              const updateCount = () => {
                if (count < target) {
                  count += Math.ceil(speed);
                  if (count > target) count = target;
                  entry.target.innerText = count + (target > 100 ? "+" : "");
                  setTimeout(updateCount, 20);
                }
              };
              updateCount();
              observer.unobserve(entry.target);
            }
          });
        }, options);

        counters.forEach((counter) => {
          observer.observe(counter);
        });
      });
    </script>

    <!-- end strength -->

    <!-- services -->
    <section class="py-5" style="background-color: #ffdcd8">
      <div class="container">
        <div class="text-center mb-5">
          <h1 class="fw-bold">Sergrade Royale Services & Offerings</h1>
        </div>
        <div class="row">
          <div class="col-md-7 order-last order-md-first">
            <h3 class="fw-semibold">For Students</h3>
            <p>
              With a keen ear for your choices and preferences, our
              counselling experience is so seamless that you will land in your
              dream university!
            </p>
            <p><b>Offerings</b></p>
            <ul class="list-item">
              <li>Virtual Coaching and Counselling</li>
              <li>Applications, Admissions & Visas</li>
              <li>High Value Scholarships and Study Loans</li>
            </ul>
            <a href="#" class="text-decoration-none" style="color: #ff6b56">See More <i class="bx bx-chevron-right"></i></a>
          </div>
          <div class="col-md-5 order-first order-md-last">
            <img
              src="assets/img/02.jpg"
              alt=""
              class="img-fluid mx-auto rounded-4 shadow-sm mb-4 mb-md-0 border border-5 border-danger-subtle" />
          </div>
        </div>
      </div>
    </section>
    <!-- ------ -->
    <!-- ------- -->
    <section class="py-5" style="background-color: #ffe7c9">
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <img
              src="assets/img/03.jpg"
              alt=""
              class="img-fluid mx-auto rounded-4 shadow-sm mb-4 mb-md-0 border border-5 border-warning-subtle" />
          </div>
          <div class="col-md-7">
            <h3 class="fw-semibold">For Partners</h3>
            <p>
              Work with our team and state-of-the-art technology and
              experience how they can be a game changer for your business
            </p>
            <p><b>Offerings</b></p>
            <ul class="list-item">
              <li>Innovative technology customized for your business</li>
              <li>Webinars by University Delegates and Sergrade Royale Experts</li>
              <li>Unparalleled end-to-end support</li>
            </ul>
            <a href="#" class="text-decoration-none" style="color: #ff6b56">See More <i class="bx bx-chevron-right"></i></a>
          </div>
        </div>
      </div>
    </section>
    <!-- ------- -->
    <section class="py-5" style="background-color: #dbe8ff">
      <div class="container">
        <div class="row">
          <div class="col-md-7 order-last order-md-first">
            <h3 class="fw-semibold">For Franchisees</h3>
            <p>
              Kickstart your business by joining the fastest growing and most
              trusted EdTech brand in the overseas education industry
            </p>
            <p><b>Offerings</b></p>
            <ul class="list-item">
              <li>Business solutions tailor made for your market</li>
              <li>Support for Operations, Events and Marketing</li>
              <li>Access to Sergrade Royales rich Knowledge Repository</li>
            </ul>
            <a href="#" class="text-decoration-none" style="color: #ff6b56">See More <i class="bx bx-chevron-right"></i></a>
          </div>
          <div class="col-md-5 order-first order-md-last">
            <img
              src="assets/img/07.webp"
              alt=""
              class="img-fluid mx-auto rounded-4 shadow-sm mb-4 mb-md-0 border border-5 border-info-subtle" />
          </div>
        </div>
      </div>
    </section>
    <!-- ------- -->
    <section class="py-5" style="background-color: #dbd9ff">
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <img
              src="assets/img/10.jpeg"
              alt=""
              class="img-fluid mx-auto rounded-4 shadow-sm mb-4 mb-md-0 border border-5 border-primary-subtle" />
          </div>
          <div class="col-md-7">
            <h3 class="fw-semibold">For Universities</h3>
            <p>
              Maximize your reach across geographies and exceed your student
              recruitment goals without compromising on quality.
            </p>
            <p><b>Offerings</b></p>
            <ul class="list-item">
              <li>Recruit students from diverse nationalities</li>
              <li>Access to Sergrade Royale’s extensive recruitment network</li>
              <li>Enhance brand visibility</li>
            </ul>
            <a href="#" class="text-decoration-none" style="color: #ff6b56">See More <i class="bx bx-chevron-right"></i></a>
          </div>
        </div>
      </div>
    </section>

    <!-- country -->
    <section class="py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <img src="assets/img/svg/country.jpeg" alt="" class="img-fluid" />
          </div>
          <div class="col-md-6">
            <h1 class="fw-bold mb-3">Sergrade Royale’s Multi Country Advantage</h1>
            <p class="lead mb-3">The World is your Campus!</p>
            <small>
              Aspire for more. Choose what suits you the best from 800+ global
              universities in 33 countries, world over. The choices and
              opportunities our universities offer are endless!
            </small>
            <br />
            <br />
            <a href="#" class="text-decoration-none" style="color: #ff6b56">See More <i class="bx bx-chevron-right"></i></a>
          </div>
        </div>
      </div>
    </section>

    <!-- webinar -->


    <!-- tech advantage -->
    <section class="py-5">
      <div class="container">
        <div class="text-center mb-5 col-md-9 mx-auto">
          <h1 class="px-md-5 px-1 fw-bold">
            Sergrade Royale’s Tech Advantage Sophisticated Online Platforms
          </h1>
        </div>
        <div class="row">
          <div class="col-md-6 order-md-1 order-2">
            <h3>
              Sergrade Royale’s Tech Prowess – An Uber-Efficient Online Platform
            </h3>
            <p>
              Welcome to our uber-efficient online platform for searching courses and managing applications!
            </p>
            <ul class="list-item2">
              <li>Search Near Perfect, ‘eligible’ courses</li>
              <li>‘One’ application, ‘multiple’ courses & universities</li>
              <li>Project commissions and process applications</li>
              <li>Submit & manage unlimited applications</li>
              <li>Enhance revenues through ancillary services</li>
            </ul>
            <a href="#" class="text-decoration-none" style="color: #ff6b56">coursefinder.ai <i class="bx bx-chevron-right"></i></a>
          </div>
          <div class="col-md-6 order-md-2 order-1">
            <img src="assets/img/svg/tech-adv.png" alt="" class="img-fluid" />
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-md-6 order-2">
            <h3>Fly High with Elan Loans</h3>
            <p>
              Availing an education loan to study in your dream university has
              never been easier!
            </p>
            <ul class="list-item2">
              <li>Study Loans through 20 leading banks</li>
              <li>Financial structuring to suit your university</li>
              <li>Hassle free documentation</li>
              <li>Pre-visa disbursal of loans</li>
              <li>Forex & Travel Insurance</li>
            </ul>
            <a href="#" class="text-decoration-none" style="color: #ff6b56">Elan loans <i class="bx bx-chevron-right"></i></a>
          </div>
          <div class="col-md-6 order-1">
            <img
              src="assets/img/svg/tech-adv2.png"
              alt=""
              class="img-fluid" />
          </div>
        </div>
      </div>
    </section>

    <!-- UNIVERSITIES -->
    <section class="py-5">
      <div class="container">
        <div class="text-center">
          <h1 class="fw-bold">Sergrade Royale’s eminent university tie-ups</h1>
          <p>
            We represent 69 of World’s Top 300 Universities according to QS
            World Rankings 2025
          </p>
        </div>
        <div class="row">
          <div class="col-6 col-md-3 px-5 py-3 border border-top-0">
            <img
              src="assets/img/svg/uni/nus.png"
              alt=""
              class="img-fluid object-fit-contain" />
          </div>
          <div class="col-6 col-md-3 px-5 py-3 border border-top-0">
            <img
              src="assets/img/svg/uni/berkeley.png"
              alt=""
              class="img-fluid object-fit-contain" />
          </div>
          <div class="col-6 col-md-3 px-5 py-3 border border-top-0">
            <img
              src="assets/img/svg/uni/unsw.png"
              alt=""
              class="img-fluid object-fit-contain" />
          </div>
          <div class="col-6 col-md-3 px-5 py-3 border border-top-0">
            <img
              src="assets/img/svg/uni/tuti.png"
              alt=""
              class="img-fluid object-fit-contain" />
          </div>
          <div class="col-6 col-md-3 px-5 py-3 border border-bottom-0">
            <img
              src="assets/img/svg/uni/mcgill.png"
              alt=""
              class="img-fluid object-fit-contain" />
          </div>
          <div class="col-6 col-md-3 px-5 py-3 border border-bottom-0">
            <img
              src="assets/img/svg/uni/monash.png"
              alt=""
              class="img-fluid object-fit-contain" />
          </div>
          <div class="col-6 col-md-3 px-5 py-3 border border-bottom-0">
            <img
              src="assets/img/svg/uni/queen.png"
              alt=""
              class="img-fluid object-fit-contain" />
          </div>
          <div class="col-6 col-md-3 px-5 py-3 border border-bottom-0">
            <img
              src="assets/img/svg/uni/bristol.png"
              alt=""
              class="img-fluid object-fit-contain" />
          </div>
        </div>
        <div class="text-center mt-5">
          <a href="#" class="text-decoration-none" style="color: #ff6b56">More Universities <i class="bx bx-chevron-right"></i></a>
        </div>
      </div>
    </section>

    <!-- UPDATES -->
    <section class="py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h1 class="fw-bold">Latest Sergrade Royale Updates</h1>
        </div>
        <div class="row align-items-center">
          <div class="col-md-4">
            <div
              class="rounded-4 p-5 position-relative shadow"
              style="
                  background-color: #fdaf4d;
                  padding-bottom: 80px !important;
                ">
              <h1 class="fw-bold mb-4">We're Hiring!</h1>
              <p class="lead mb-4">
                Join the fastest growing EdTech brand offering endless
                learning and growth opportunities and advance your career with
                us.
              </p>
              <a href="login.php" class="btn btn-light text-danger px-4 mb-5">Apply Now</a>
              <img
                src="assets/img/svg/kcupdatesline.svg"
                alt=""
                style="height: 120px; position: absolute; right: 0; bottom: 0"
                class="" />
            </div>
          </div>
          <?php
          if ($getEvents->num_rows > 0) {
            while ($event = $getEvents->fetch_assoc()) {
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
          } else {
            ?>
            <div class="py-3 px-3 text-center">
              <p>No Updates Yet</p>
            </div>
          <?php
          }
          ?>
          
        </div>
    </section>

    <!-- blog -->


    <!-- News -->
    <section class="py-5">
      <div class="container">
        <div class="text-center mb-3">
          <h1 class="fw-bold">Sergrade Royale in the News</h1>
        </div>
        <div class="row">
          <div class="col-6 col-md-3 px-5 py-3 border border-top-0">
            <img
              src="assets/img/svg/news/airc.png"
              alt=""
              class="img-fluid object-fit-contain" />
          </div>
          <div class="col-6 col-md-3 px-5 py-3 border border-top-0">
            <img
              src="assets/img/svg/news/pie.png"
              alt=""
              class="img-fluid object-fit-contain" />
          </div>
          <div class="col-6 col-md-3 px-5 py-3 border border-top-0">
            <img
              src="assets/img/svg/news/mint.png"
              alt=""
              class="img-fluid object-fit-contain" />
          </div>
          <div class="col-6 col-md-3 px-5 py-3 border border-top-0">
            <img
              src="assets/img/svg/news/hind.png"
              alt=""
              class="img-fluid object-fit-contain" />
          </div>
          <div class="col-6 col-md-3 px-5 py-3 border border-bottom-0">
            <img
              src="assets/img/svg/news/pie.png"
              alt=""
              class="img-fluid object-fit-contain" />
          </div>
          <div class="col-6 col-md-3 px-5 py-3 border border-bottom-0">
            <img
              src="assets/img/svg/news/money.png"
              alt=""
              class="img-fluid object-fit-contain" />
          </div>
          <div class="col-6 col-md-3 px-5 py-3 border border-bottom-0">
            <img
              src="assets/img/svg/news/vccircle.png"
              alt=""
              class="img-fluid object-fit-contain" />
          </div>
          <div class="col-6 col-md-3 px-5 py-3 border border-bottom-0">
            <img
              src="assets/img/svg/news/business.png"
              alt=""
              class="img-fluid object-fit-contain" />
          </div>
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
</body>

</html>