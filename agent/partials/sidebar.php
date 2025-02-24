<div class="sidebar-area" id="sidebar-area">
    <div class="logo position-relative">
        <a href="index-2.html" class="d-block text-decoration-none">
            <img src="assets/images/logo-icon.png" alt="logo-icon">
            <span class="logo-text fw-bold text-dark">Sergrade</span>
        </a>
        <button class="sidebar-burger-menu bg-transparent p-0 border-0 opacity-0 z-n1 position-absolute top-50 end-0 translate-middle-y" id="sidebar-burger-menu">
            <i data-feather="x"></i>
        </button>
    </div>

    <aside id="layout-menu" class="layout-menu menu-vertical menu active" data-simplebar>
        <ul class="menu-inner">
            <li class="menu-item open">
                <a href="index.php" class="menu-link">
                    <i data-feather="grid" class="menu-icon tf-icons"></i>
                    <span class="title">Dashboard</span>
                </a>
            </li>

            <li class="menu-item">
                <a href="add-applicant.php" class="menu-link ">
                    <i data-feather="layers" class="menu-icon tf-icons"></i>
                    <span class="title">Add Applicant</span>
                </a>
            </li>

            <li class="menu-item">
                <a href="applicants.php" class="menu-link ">
                    <i data-feather="layers" class="menu-icon tf-icons"></i>
                    <span class="title">Applicants</span>
                </a>
            </li>
            <li class="menu-item">
                <a href="bonus.php" class="menu-link ">
                    <i data-feather="layers" class="menu-icon tf-icons"></i>
                    <span class="title">Bonus</span>
                </a>
            </li>

            <!-- <li class="menu-item">
                <a href="javascript:void(0);" class="menu-link menu-toggle active">
                    <i data-feather="mail" class="menu-icon tf-icons"></i>
                    <span class="title">Email</span>
                </a>
                <ul class="menu-sub">
                    <li class="menu-item">
                        <a href="inbox.html" class="menu-link">
                            Inbox
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="read-email.html" class="menu-link">
                            Read Email
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="snooozed.html" class="menu-link">
                            Snooozed
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="draft.html" class="menu-link">
                            Draft
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="sent-mail.html" class="menu-link">
                            Sent Mail
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="trash-email.html" class="menu-link">
                            Trash
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="spam.html" class="menu-link">
                            Spam
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="starred.html" class="menu-link">
                            Starred
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="important.html" class="menu-link">
                            Important
                        </a>
                    </li>
                </ul>
            </li> -->

        </ul>
    </aside>

    <div class="bg-white z-1 admin">
        <div class="d-flex align-items-center admin-info border-top">
            <div class="flex-shrink-0">
                <a href="profile.html" class="d-block">
                    <img src="assets/images/admin.jpg" class="rounded-circle wh-54" alt="admin">
                </a>
            </div>
            <div class="flex-grow-1 ms-3 info">
                <a href="profile.php" class="d-block name"><?= $agentInfo["firstname"] ?? "" ?></a>
                <a href="logout.php">Log Out</a>
            </div>
        </div>
    </div>
</div>