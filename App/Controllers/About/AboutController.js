angular.module("myApp").controller("aboutController", function ($scope,$http) {
    $http.get('https://api.github.com/users/abhilashrocks').success(function (data) {
        $scope.data = data;
      
    });
})



