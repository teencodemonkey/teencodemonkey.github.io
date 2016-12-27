var app = angular.module('blogPage', ['ngRoute']);


app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            activetab: '/'
        })
        .when('/about', {
            templateUrl: 'about.html',
            activetab: 'about'
        })
        .when('/projects', {
            templateUrl: 'projects.html',
            activetab: 'projects'
        })
        
        $locationProvider.html5Mode(true);
});


app.controller('linkController', ['$scope', '$location', '$route', function ($scope, $location, $route) {

    $scope.isActive = function (route) {
        return route == $route.current.activetab;
    };

    $scope.$on('$viewContentLoaded', function(){
        Prism.highlightAll();
    });

}]);