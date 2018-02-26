<?php
	include 'pessoa.php';
	$obj=new Pessoa();
	$result=$obj->deletar_pessoa($_GET['pessoa_id']);
	$message['message']=$result;
	echo json_encode($message);
?>