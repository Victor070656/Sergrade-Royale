<?php
// Files to be zipped (Provide full path if necessary)
// $files = [
//     "asset",
//     "files/file2.jpg",
//     "files/file3.pdf"
// ];

// // ZIP file name
// $zipFileName = "download.zip";

// // Initialize ZipArchive
// $zip = new ZipArchive();
// if ($zip->open($zipFileName, ZipArchive::CREATE | ZipArchive::OVERWRITE) === TRUE) {

//     // Add files to ZIP
//     foreach ($files as $file) {
//         if (file_exists($file)) {
//             $zip->addFile($file, basename($file));
//         }
//     }

//     // Close ZIP
//     $zip->close();

//     // Set headers to trigger download
//     header('Content-Type: application/zip');
//     header('Content-Disposition: attachment; filename="' . $zipFileName . '"');
//     header('Content-Length: ' . filesize($zipFileName));
//     readfile($zipFileName);

//     // Delete the ZIP file after download (optional)
//     unlink($zipFileName);
//     exit;
// } else {
//     echo "Failed to create ZIP file.";
// }



