angular.module("template_ang")
.controller("indexController", function($scope, $http){

	var vm = this;

	$scope.titulo = "Template Angular";

	$scope.subNome = function(nome){
		alert(nome);
	}

	this.carregarDados = function (pessoa) {
        //var search_input = document.getElementById("search_input").value;
        $http.get('crud/select.php').then(function (response) {
            vm.lista_pessoas = response.data.pessoa_data;
            $scope.total_row = response.data.total;
        });
    };
	
	this.addPessoa = function(pessoa){
		$http.post('crud/insert.php', pessoa).then(function (response) {
        vm.msg = response.data.message;
        document.getElementById("criar_pessoa_form").reset();
		vm.carregarDados(pessoa);
		alert(vm.msg);
		});
    };
	
})