angular.module("carteira")
.controller("indexController", function($scope){

	$scope.titulo = "Titulo Carteira";

	$scope.subNome = function(nome){
		alert(nome);
	}

});