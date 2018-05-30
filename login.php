<?php
include ("conn.php");
$tel = isSet($_GET["tel"]) ? $_GET["tel"] : '';
$pwd = isSet($_GET["pwd"]) ? $_GET["pwd"] : '';
$sql1 = "select count(*) as Num from user where tel='" . $tel . "' and password='" . $pwd . "'";
$result1= $conn -> query($sql1);
$row1 = $result1 -> fetch_assoc();
if ($row1["Num"] == 1) {
	echo '{"status":"sucess","msg":"登陆成功"}';
} else {
	echo '{"status":"error","msg":"登录失败：用户名不存在"}';
}
?>