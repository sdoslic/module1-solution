(function() {

  'use-strict';
  angular.module("LunchCheck", []).controller("LunchCheckController",
                                              LunchCheckController);

   LunchCheckController.$inject = ['$scope'];

   function LunchCheckController($scope){
     $scope.list = "";
     $scope.message = "";

     $scope.check = function() {

       if ($scope.list.length == 0) {
         $scope.message = "Please enter data first";
         return;
       }

       var count = $scope.list.split(",").length;
       if (count > 3) {
         $scope.message = "Too much!";
       }
       else {
         $scope.message = "Enjoy!";
       }
     }
   }
})();
