<!-- کوئری ساخت دیتابیس -->
<!-- CREATE DATABASE registerdb; -->

<!-- کوئری ساخت جدول -->

<!-- CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phonenumber`varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
 -->

<?php

$fname =$_POST["fname"];
$lname =$_POST["fname"];
$phonenumber = $_POST["phonenumber"];
$email =$_POST["email"];
$password =$_POST["psw"];


$db = mysqli_connect('localhost','root','','registerdb');
$sql = "INSERT INTO users(name,email,phonenumber,password)
        VALUES('$fname','$email','$phonenumber','$password')";

mysqli_query($db, $sql);
mysqli_close($db);

echo "$fname عملیات با موفقیت انجام شد"



?>