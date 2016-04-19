angular.module('app').directive('pianoDirective', function(){
  return {
    restric: 'E',
    templateUrl: 'directives/pianoDirective.html',
    controller: 'pianoCtrl'
  }
})
