<?php
	include 'pessoa.php';
	$obj=new Pessoa();
	$lista_pessoas=$obj->listar_pessoas();
	echo json_encode($lista_pessoas);
?>