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
            <h3>Đăng nhập</h3>
            <div class="card">
              <label for="name">Tài khoản</label>
              <input
                type="text"
                name="user_name"
                placeholder="Vui lòng nhập tài khoản"
              />
            </div>
            <div class="card">
              <label for="password">Mật khẩu</label>
              <input
                type="password"
                name="password"
                placeholder="Vui lòng nhập mật khẩu"
              />
            </div>
            <input class="submit" type="submit" value="Login" />
            <div class="check">
              <input type="checkbox" name="" id="" /><span>Remember</span>
            </div>
            <p>Bạn chưa có tài khoản ?<a href="singup.html">Đăng kí ngay</a></p>
          </form>
        </div>
      </div>
      <div class="right_bx1">
        <img src="img/login_png.jpg" alt="">
        <h3>
          Inccorect Password
        </h3>
      </div>
    </header>
    <script src="js/app.js"></script>
  </body>
</html>