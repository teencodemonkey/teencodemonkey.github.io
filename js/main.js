var app = angular.module('blogPage', []);

app.controller('linkController', ['$scope', function ($scope) {

    $scope.templateURL = 'home.html';

    $scope.showHome = function () {
        $scope.templateURL = 'home.html';
    };
    $scope.showAbout = function () {
        $scope.templateURL = 'about.html';
    };
    $scope.showProjects = function () {
        $scope.templateURL = 'projects.html';
    };

    $scope.isActive = function(route) {
        return route === $scope.templateURL;
    };


}]);