<?php
	require_once('connection.php');

	header('Access-Control-Allow-Origin: http://localhost:3000');
	$table = $_POST['title'];
	$array = mysqli_query($connection,"SELECT * FROM $table");
	$new_array = mysqli_fetch_all($array);
	echo json_encode($new_array);
?>