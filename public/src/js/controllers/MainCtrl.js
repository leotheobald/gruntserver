// public/src/js/controllers/MainCtrl.js
angular.module('MainCtrl', [])

.controller('mainController', ['$scope', function($scope) {

  $scope.heading = 'A scope heading ';
  $scope.message = 'A scope messsage!';
  $scope.data = [
    {
        name: "Bob",
        arrival: "25 jan 2016"
    },
    {
        name: "Fred",
        arrival: "25 Sep 2016"
    }  
  ];

}]);
