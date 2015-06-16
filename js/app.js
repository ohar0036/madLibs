
angular.module('madLibsApp', [])
  .controller('madLibsCtrl', function($scope) {
    $scope.newValue = function(gender) {
      if (gender === 'male'){
        $('#maleText').show();
        $('.words').show();
        $('#femaleText').hide();
      }
      else if (gender === 'female'){
        $('#femaleText').show();
        $('.words').show();
        $('#maleText').hide();
      }

    };

  });