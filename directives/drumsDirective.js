angular.module('app').directive('drumsDirective', function(){
  return {
    restrict: 'E',
    templateUrl: 'directives/drumsDirective.html',
    controller: 'drumsCtrl'
  }

})
