<?php
header('content-type:text/html;charset=utf-8');
//1.接受用户准备要注册的用户名.
$userName = $_POST['userName'];

//2. 接受用户注册的密码
$userPwd = $_POST['userPwd'];

//3.把用户名和密码存进res数据库的user表中.
$sql = "insert into user(userName,userPwd) values('$userName','$userPwd')";
//2.1 引入工具
include_once "./Tools/phpToos.php";
$res = mysqli_excute_zsg($sql);
//7.判断
if($res > 0){
  //注册成功
  echo "注册成功,请<a href='./page/ndrc_detail_first_login.html'>返回登录</a>";
}else {
  
  echo "注册失败!";
 
}


?>



