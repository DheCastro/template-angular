<?php 

include 'pessoa.php';
$obj=new Pessoa();
$data = json_decode(file_get_contents("php://input"));
$result=$obj->criar_pessoa($data);
$message['message']=$result;
echo json_encode($message);

?>