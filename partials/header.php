<header class="position-sticky top-0" style="z-index: 100">
    <nav class="navbar navbar-expand-lg bg-primary text-light">
        <div class="container-fluid px-2 px-lg-5">
            <a class="navbar-brand" href="./">
                <h4 class="text-light mb-0"><b>Sergrade Royale</b></h4>
            </a>
            <button
                class="navbar-toggler btn-sm border-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="bx bx-menu fs-3 text-light"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul
                    class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center gap-2">
                    <li class="nav-item dropdown position-static">
                        <a
                            class="nav-link dropdown-toggle text-light"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Study Destinations
                        </a>
                        <ul class="dropdown-menu position-absolute left-0 w-100">
                            <div class="w-100">
                                <div class="container p-2">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <a
                                                href="login.php"
                                                class="nav-link d-flex align-items-center gap-2">
                                                <img
                                                    src="assets/img/flags/usa.png"
                                                    alt=""
                                                    style="width: 35px" />
                                                <span>USA</span>
                                            </a>
                                        </div>
                                        <div class="col-md-4">
                                            <a
                                                href="login.php"
                                                class="nav-link d-flex align-items-center gap-2">
                                                <img
                                                    src="assets/img/flags/ireland.png"
                                                    alt=""
                                                    style="width: 35px" />
                                                <span>Ireland</span>
                                            </a>
                                        </div>
                                        <div class="col-md-4">
                                            <a
                                                href="login.php"
                                                class="nav-link d-flex align-items-center gap-2">
                                                <img
                                                    src="assets/img/flags/europe.png"
                                                    alt=""
                                                    style="width: 35px" />
                                                <span>Europe</span>
                                            </a>
                                        </div>
                                        <div class="col-md-4">
                                            <a
                                                href="login.php"
                                                class="nav-link d-flex align-items-center gap-2">
                                                <img
                                                    src="assets/img/flags/canada.png"
                                                    alt=""
                                                    style="width: 35px" />
                                                <span>Canada</span>
                                            </a>
                                        </div>
                                        <div class="col-md-4">
                                            <a
                                                href="login.php"
                                                class="nav-link d-flex align-items-center gap-2">
                                                <img
                                                    src="assets/img/flags/australia.png"
                                                    alt=""
                                                    style="width: 35px" />
                                                <span>Australia</span>
                                            </a>
                                        </div>
                                        <div class="col-md-4">
                                            <a
                                                href="login.php"
                                                class="nav-link d-flex align-items-center gap-2">
                                                <img
                                                    src="assets/img/flags/asia.png"
                                                    alt=""
                                                    style="width: 35px" />
                                                <span>Asia</span>
                                            </a>
                                        </div>
                                        <div class="col-md-4">
                                            <a
                                                href="login.php"
                                                class="nav-link d-flex align-items-center gap-2">
                                                <img
                                                    src="assets/img/flags/uk.png"
                                                    alt=""
                                                    style="width: 35px" />
                                                <span>United Kingdom</span>
                                            </a>
                                        </div>
                                        <div class="col-md-4">
                                            <a
                                                href="login.php"
                                                class="nav-link d-flex align-items-center gap-2">
                                                <img
                                                    src="assets/img/flags/newz.png"
                                                    alt=""
                                                    style="width: 35px" />
                                                <span>New Zealand</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="news.php">News & Events</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="blog.php">Blog</a>
                    </li>

                    <li class="nav-item">
                        <?php
                        if (isset($_SESSION["sr_student"])) {
                        ?>
                            <a href="student"
                                class="btn btn-light text-danger main-btn second-btn d-flex align-items-center gap-2"
                                style="font-size: smaller"><i class="bx bxs-grid fs-6 m-0"></i>
                                <span>Dashboard</span>
                            </a>
                        <?php
                        } elseif (isset($_SESSION["sr_agent"])) {
                        ?>
                            <a href="agent"
                                class="btn btn-light text-danger main-btn second-btn d-flex align-items-center gap-2"
                                style="font-size: smaller"><i class="bx bxs-grid fs-6 m-0"></i>
                                <span>Dashboard</span>
                            </a>
                        <?php
                        } else {
                        ?>
                            <a href="login.php"
                                class="btn btn-light text-danger main-btn second-btn d-flex align-items-center gap-2"
                                style="font-size: smaller"><i class="bx bxs-user fs-6 m-0"></i>
                                <span>Login</span>
                            </a>
                        <?php
                        }
                        ?>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>