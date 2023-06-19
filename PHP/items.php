<?php
    require_once('connection.php');

	header('Access-Control-Allow-Origin: http://localhost:3000');
	$id = $_POST['id'];
    $tableName = $_POST['tableName'];
	$array = mysqli_query($connection,"SELECT * FROM `$tableName` WHERE `theme_id`=$id");
	$new_array = mysqli_fetch_all($array);
	echo json_encode($new_array);
?>