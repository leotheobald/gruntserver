// public/src/js/controllers/MainCtrl.js
angular.module('MainCtrl', [])

.controller('mainController', ['$scope', function($scope) {

  $scope.heading = 'A scope heading ';
  $scope.message = 'A scope messsage!';
  $scope.data = [
    {
        document: "Passport",
        documentID: "PA DFTG-234",
        name: "Bob",
        mode: "fa-user",
        arrival: "25 jan 2016"
    },
    {
        document: "Passport",
        documentID: "PA DFTG-2345",
        name: "Fred",
        mode: "fa-car",
        arrival: "25 Sep 2016"
    },
    {
        document: "EU ID",
        documentID: "EU-DFTG-2345",
        name: "Caro",
        mode: "fa-plane",
        arrival: "25 Sep 2016"
    }  
  ];

}]);
