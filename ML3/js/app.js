
angular.module('madLibsApp', ['ngMessages'])
  .controller('madLibsCtrl', function($scope) {

    
    
    $scope.submitForm = function() {
      if( $scope.mlForm.$valid ) {
        console.log('this form is valid');
        $scope.display = 1;
      }
      else {
        console.log('this form is not valid');
      }
    };

    $scope.reset = function() {
      //console.log('reset');
      $scope.display = 0;
      $scope.maleName = null;
      $scope.dirtyTask = null;
      $scope.obnoxiousCeleb = null;
      $scope.jobTitle = null;
      $scope.celebrity = null;
      $scope.hugeNumber = null;
      $scope.tediousTask = null;
      $scope.uselessSkill = null;
      $scope.adjective = null;
      $scope.display = 0;
    };
    
    $scope.display = 0;

    });

