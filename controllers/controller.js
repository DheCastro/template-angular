angular.module("template_ang")
.controller("indexController", function($scope, $http){

	var vm = this;

	$scope.titulo = "Titulo Carteira";

	$scope.subNome = function(nome){
		alert(nome);
	}

	this.addPessoa = function(pessoa){
		$http.post('crud/insert.php', pessoa).then(function (response) {
        vm.msg = response.data.message;
        alert(vm.msg);
        document.getElementById("criar_pessoa_form").reset();
		});
    };

})