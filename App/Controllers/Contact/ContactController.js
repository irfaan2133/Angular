angular.module("myApp").controller("contactController", function ($scope) {
    $scope.message = "Thank you for visiting contact";
    $scope.SubmitForm = function () {
        alert("Thank you! We will contact you soon!")
    }
})
