
<?php
header('content-type:text/html;charset=utf-8');
//1.接受用户登录输入的用户名和密码.post的方式.
$userName = $_POST['userName'];
$userPwd = $_POST['userPwd'];
//2.去数据表user1中查询有没有这个账号和密码. 如果查到了就说明账号密码没问题就要登录成功.

//2.2 准备sql语句并执行 查询
$sql = "select * from user where userName='$userName' and userPwd='$userPwd'";
//2.1 引入工具
include_once "./Tools/phpToos.php";
$arr = mysqli_excute_select($sql);

//3.判断
if(count($arr)>0){
  //说明账号密码正确,就登录成功,跳转到主页面
//  header('location:./ndrc_detail_first.html');
echo "登录成功,请<a href='./page/ndrc_detail_first.html'>点击此处返回</a>";
//  //登录成功,就用session来记录这个用户名
//  //先开启session
//  session_start();
//  //设置也给session.
//  $_SESSION['info'] = array($userName,$arr[0]['yuE']);
}else{
   //账号密码错误,请重新登录
   echo "账号密码错误,请<a href='./page/ndrc_detail_first_login.html'>重新登录</a>";
}



?>