<?php
	include 'pessoa.php';
	$obj=new Pessoa();
	$pessoa_data=$obj->busca_pessoa_por_nome($_GET['nome_pesquisa']);
	echo json_encode($pessoa_data);
?>