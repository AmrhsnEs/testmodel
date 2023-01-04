<?php
$username = $_POST["username"];
$pass = $_POST["pass"];

$db = mysqli_connect('localhost','root','','registerdb');
$username = mysqli_real_escape_string($db, $username);
$pass = mysqli_real_escape_string($db, $pass);
$sql = "SELECT * FROM `users` WHERE email = '$username' and password = '$pass'";
        $result = mysqli_query($db, $sql);
        $rows = mysqli_num_rows($result);
        if ($rows == 1) {
        $_SESSION['username'] = $username;
        echo "hello $username";
        } else {
            echo "<div>
                  <h3>نام کاربری و یا رمز عبور اشتباه است</h3><br/>
                  <p>بازگشت به صفحه قبل<a href='login.html'> از اینجا</a> کلیک کنید.</p>
                  </div>";
        }

    
    ?>