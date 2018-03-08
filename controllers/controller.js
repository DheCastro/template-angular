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
        if(!document.getElementById("nome_pesquisa").value == ''){
            $http.get('crud/selectone.php?nome_pesquisa=' + nome_pesquisa).then(function (response) {
                $scope.lista_pessoas = response.data.pessoa_data;
            });
            document.getElementById("nome_pesquisa").value = '';
        }
    };

    $scope.listarTodos = function () {
        carregarDados();
    };

    $scope.editarPessoa = function (pessoa) {
        $scope.pessoa = pessoa;
        $(".modal").modal();
        $('#modal1').modal('open');
    };

    $scope.atualizarPessoa = function (pessoa) {
        $http.put('crud/update.php', $scope.pessoa).then(function (response) {
            $scope.msg = response.data.message;
            $('#modal1').modal('close');
            carregarDados();
            alert($scope.msg);
        });
    };

})