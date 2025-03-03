-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 03, 2025 at 08:26 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sergrade_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `email`, `password`) VALUES
(1, 'admin@admin.com', 'admin123');

-- --------------------------------------------------------

--
-- Table structure for table `applicants`
--

CREATE TABLE `applicants` (
  `id` int(11) NOT NULL,
  `applicant_id` varchar(30) NOT NULL,
  `agent_id` varchar(30) DEFAULT NULL,
  `student_id` varchar(30) DEFAULT NULL,
  `first_name` varchar(100) NOT NULL,
  `middle_name` varchar(100) DEFAULT NULL,
  `surname` varchar(100) NOT NULL,
  `date_of_birth` date NOT NULL,
  `country_of_birth` varchar(100) NOT NULL,
  `state_of_origin` varchar(100) NOT NULL,
  `email` varchar(150) DEFAULT NULL,
  `marital_status` varchar(50) DEFAULT NULL,
  `number_of_children` int(11) DEFAULT NULL,
  `traveling_with_family` varchar(40) DEFAULT NULL,
  `oldest_child_age` int(11) DEFAULT NULL,
  `desired_course_abroad` varchar(255) NOT NULL,
  `first_degree_course` varchar(255) DEFAULT NULL,
  `sponsor_name` varchar(255) DEFAULT NULL,
  `preferred_travel_date` date NOT NULL,
  `visa_refusals` varchar(40) DEFAULT NULL,
  `visa_held` varchar(255) DEFAULT NULL,
  `overstayed_any_country` varchar(40) DEFAULT NULL,
  `has_family_abroad` varchar(40) DEFAULT NULL,
  `family_abroad_country` varchar(150) DEFAULT NULL,
  `status` enum('pending','rejected','approved') NOT NULL DEFAULT 'pending',
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `applicants`
--

INSERT INTO `applicants` (`id`, `applicant_id`, `agent_id`, `student_id`, `first_name`, `middle_name`, `surname`, `date_of_birth`, `country_of_birth`, `state_of_origin`, `email`, `marital_status`, `number_of_children`, `traveling_with_family`, `oldest_child_age`, `desired_course_abroad`, `first_degree_course`, `sponsor_name`, `preferred_travel_date`, `visa_refusals`, `visa_held`, `overstayed_any_country`, `has_family_abroad`, `family_abroad_country`, `status`, `created_at`, `updated_at`) VALUES
(1, '67b546a98d094', '67b32175da66d', NULL, 'Francesca', 'Patience', 'Robinson', '1983-05-25', 'Sed accusantium qui ', 'Esse fuga Commodo ', 'typyfu@example.com', 'Divorced', 540, 'Yes', 43, 'Qui nihil atque culp', 'Id incididunt beatae', 'Velit quod qui excep', '1976-09-20', 'Yes', 'Yes', 'Yes', 'Yes', 'Illo culpa perferen', 'approved', '2025-02-19 03:49:13', '2025-02-25 11:36:52'),
(2, '67b87fd9cca04', NULL, '67b8766d4b052', 'Alea', 'Joan', 'Preston', '1982-07-14', 'Nulla tenetur soluta', 'Temporibus in dolor ', 'guducikak@example.com', 'Married', 85, 'Yes', 97, 'Consequatur assumend', 'Fuga Nemo quia qui ', 'Duis eveniet ut off', '1993-08-22', 'No', 'Yes', 'No', 'No', 'Vel possimus dignis', 'rejected', '2025-02-21 14:30:01', '2025-02-25 09:06:55');

-- --------------------------------------------------------

--
-- Table structure for table `bonus_amount`
--

CREATE TABLE `bonus_amount` (
  `id` int(11) NOT NULL,
  `amount` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bonus_amount`
--

INSERT INTO `bonus_amount` (`id`, `amount`) VALUES
(1, 5000);

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

CREATE TABLE `companies` (
  `id` int(11) NOT NULL,
  `agent_id` varchar(20) NOT NULL,
  `company_name` varchar(50) NOT NULL,
  `office_address` varchar(255) NOT NULL,
  `country` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `website` varchar(255) NOT NULL,
  `bal` float NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `companies`
--

INSERT INTO `companies` (`id`, `agent_id`, `company_name`, `office_address`, `country`, `phone`, `email`, `website`, `bal`, `created_at`) VALUES
(1, '67b32175da66d', 'Shaw and Wilson Traders', 'Burt Britt Co', 'Romania', '+1 (467) 495-7454', 'rosigu@example.com', 'https://www.sapovuh.info', 0, '2025-02-21 12:34:37');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `userid` varchar(50) NOT NULL,
  `firstname` varchar(30) NOT NULL,
  `lastname` varchar(30) NOT NULL,
  `phone` varchar(30) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(20) NOT NULL,
  `account_type` varchar(20) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `userid`, `firstname`, `lastname`, `phone`, `email`, `password`, `account_type`, `created_at`) VALUES
(1, '67b32175da66d', 'Kaseem', 'Rollins', '+1 (843) 782-6603', 'abc@example.com', 'Pa$$w0rd!', 'agent', '2025-02-17 12:45:57'),
(2, '67b8766d4b052', 'Imani', 'Dawson', '+1 (821) 248-9231', 'fam@example.com', '000000', 'student', '2025-02-21 13:49:49');

-- --------------------------------------------------------

--
-- Table structure for table `withdrawals`
--

CREATE TABLE `withdrawals` (
  `id` int(11) NOT NULL,
  `agent_id` varchar(20) NOT NULL,
  `bank` varchar(50) NOT NULL,
  `acct_name` varchar(50) NOT NULL,
  `acct_num` varchar(20) NOT NULL,
  `amount` float NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'pending',
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `withdrawals`
--

INSERT INTO `withdrawals` (`id`, `agent_id`, `bank`, `acct_name`, `acct_num`, `amount`, `status`, `created_at`) VALUES
(1, '67b32175da66d', 'Sequi Bank', 'Justina Park', '2009004001', 5000, 'pending', '2025-02-26 16:22:27');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `applicants`
--
ALTER TABLE `applicants`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `applicantid` (`applicant_id`);

--
-- Indexes for table `bonus_amount`
--
ALTER TABLE `bonus_amount`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `userid` (`userid`) USING BTREE;

--
-- Indexes for table `withdrawals`
--
ALTER TABLE `withdrawals`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `applicants`
--
ALTER TABLE `applicants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `bonus_amount`
--
ALTER TABLE `bonus_amount`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `companies`
--
ALTER TABLE `companies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `withdrawals`
--
ALTER TABLE `withdrawals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
