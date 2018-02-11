
var app = angular.module("myApp", ['ngRoute']);

app.controller('myCtrl', function ($scope) {
    $scope.message = "Thank you for visiting our website";
})

app.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'App/Controllers/Employee/employee.html',
            controller: 'employeeController'
        })
        .when('/aboutUs', {
            templateUrl: 'App/Controllers/About/aboutUs.html',
            controller: 'aboutController'
        })
        .when('/contactUs', {
            templateUrl: 'App/Controllers/Contact/contactUs.html',
            controller: 'contactController'
        })
        .otherwise({
            redirectTo: '/home'
        });
});

