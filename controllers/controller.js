angular.module("template_ang")
.controller("indexController", function($scope, $http){

	$scope.titulo = "Template Angular";

	var carregarDados = function () {
        $http.get('crud/select.php').then(function (response) {
            $scope.lista_pessoas = response.data.pessoa_data;
            $scope.total_row = response.data.total;
        });
    };
	
    carregarDados();

	$scope.inserirPessoa = function(pessoa){
		$http.post('crud/insert.php', pessoa).then(function (response) {
        $scope.msg = response.data.message;
        document.getElementById("pessoa_nome").value = '';
		carregarDados();
		alert($scope.msg);
		});
    };

    $scope.deletarPessoa = function (id) {
        $http.delete('crud/delete.php?pessoa_id=' + id).then(function (response) {
            $scope.msg = response.data.message;
            carregarDados();
            alert($scope.msg);
        });
    };

    $scope.carregarPorNome = function (nome_pesquisa) {
        $http.get('crud/selectone.php?nome_pesquisa=' + nome_pesquisa).then(function (response) {
            $scope.lista_pessoas = response.data.pessoa_data;
        });
    };
	
})