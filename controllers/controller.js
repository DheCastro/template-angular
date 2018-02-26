angular.module("template_ang")
.controller("indexController", function($scope, $http){

	var vm = this;

	$scope.titulo = "Template Angular";

	this.carregarDados = function () {
        $http.get('crud/select.php').then(function (response) {
            vm.lista_pessoas = response.data.pessoa_data;
            $scope.total_row = response.data.total;
        });
    };
	
	this.inserirPessoa = function(pessoa){
		$http.post('crud/insert.php', pessoa).then(function (response) {
        vm.msg = response.data.message;
        document.getElementById("criar_pessoa_form").reset();
		vm.carregarDados();
		alert(vm.msg);
		});
    };

    this.deletarPessoa = function (id) {
        $http.delete('crud/delete.php?pessoa_id=' + id).then(function (response) {
            vm.msg = response.data.message;
            vm.carregarDados();
            alert(vm.msg);
        });
    };
	
})