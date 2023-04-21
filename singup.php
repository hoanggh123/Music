/*Đăng kí với PHP*/
<?php
  session_start();
  include('db_connect.php');
  $msg = false;
  if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $user_name =$_POST['user_name'];
    $user_email = $_POST['user_email'];
    $user_password = $_POST['user_password'];
    $user_re_password = $_POST['user_re_password'];
    if(!empty($user_name) && !empty($user_email) && !empty($user_password) && !is_numeric($user_name)){
      if ($user_password === $user_re_password) {
        $query = "insert into user (user,email,password) VALUES ('$user_name','$user_email','$user_password')";
        mysqli_query($con,$query);
        header("Location:login.php");
      }else{
        $msg = "Pass not match";

      }
    }
  }else{

  }
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/style.css" />
    <link
      rel="icon"
      href="https://open.spotifycdn.com/cdn/images/favicon32.b64ecc03.png"
      type="image/icon type"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css"
    />
    <title>Mussic</title>
  </head>
  <body>
    <header>
      <div class="left_bx1">
        <div class="content">
          <form action="" method="post">
            <h3>Đăng kí</h3>
            <div class="card">
              <label for="name">Tài khoản</label>
              <input
                type="text"
                name="user_name"
                placeholder="Vui lòng nhập tài khoản"
              />
            </div>
            <div class="card">
                <label for="email">Email</label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Vui lòng nhập email của bạn"
                />
              </div>
            <div class="card">
              <label for="password">Mật khẩu</label>
              <input
                type="password"
                name="user_password"
                placeholder="Vui lòng nhập mật khẩu"
              />
            </div>
            <div class="card">
                <label for="re_password">Nhập lại mật khẩu</label>
                <input
                  type="password"
                  name="user_re_password"
                  placeholder="Vui lòng nhập lại mật khẩu"
                />
              </div>
            <input class="submit" type="submit" value="Login" />
            <div class="check">
              <input type="checkbox" name="" id="" /><span>Remember</span>
            </div>
            <p>Bạn đã có tài khoản ?<a href="login.html">Đăng kí ngay</a></p>
          </form>
        </div>
      </div>
      <div class="right_bx1">
        <img src="img/login_png.jpg" alt="" />
        <?php
          echo ('<h3>'.$msg.'</h3>');
        ?>
      </div>
    </header>
    <script src="js/app.js"></script>
  </body>
</html>
