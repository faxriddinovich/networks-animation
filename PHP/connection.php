<?php
    $servername = "localhost"; // Replace with your MySQL server name if not running locally
    $username = "asleshka_"; // Replace with your MySQL username
    $password = "main_user_asleshka"; // Replace with your MySQL password
    $database = "networks"; // Replace with your MySQL database name

    // Create a connection

    $connection = mysqli_connect($servername, $username, $password, $database);

    // Check connection
    if (!$connection) {
        die("Connection failed: " . mysqli_connect_error());
    }

    // echo "connected successfully"
?>
