
<?php
	session_start();

	$tel=$_POST["tel"] ? $_POST["tel"] : "";
	$pwd=$_POST["pwd"] ? $_POST["pwd"] : "";

	include("conn.php");
	$sql1="select count(*) as num1 from user where tel='".$tel."'";
	$result1=$conn->query($sql1);
	

	$row1=$result1->fetch_assoc();
	
	if($row1['num1'] == 0){
		$sql2="insert into user(tel,password) values('{$tel}','{$pwd}')";

		$result2=$conn->query($sql2);

		if(true){
			$_SESSION['tel']=$tel;
			echo '{"status":"success","msg":"注册成功"}';
		}else{
			echo '{"status":"error","msg":"注册失败"}';
		}

	}else if($row1['num1'] == 1){
		echo '{"status":"error","msg":"用户已存在，请重新注册"}';
	}
	

	mysqli_close($conn);
	
?>