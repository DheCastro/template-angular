angular.module('template_ang', ['ngRoute'])
.config(function ($routeProvider, $locationProvider) {
    //retirar o hashbang da url
    $locationProvider.hashPrefix('');
    //$locationProvider.html5Mode(true);
    $routeProvider
    .when("/home",{
        templateUrl:"templates/home.html",
        controller:"indexController",
        controllerAs: "indControl"
    })

    $routeProvider.otherwise({redirectTo:"/home"});
});