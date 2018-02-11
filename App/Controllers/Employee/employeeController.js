angular.module("myApp").controller("employeeController", function ($scope, $http) {
    $scope.message = "Thank you for visiting our website";
    $http.get('data/Employee.json').success(function (data) {
        $scope.employees = data;
    });
})
