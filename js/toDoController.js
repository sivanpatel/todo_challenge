toDoList.controller('toDoController', ['$scope', function($scope) {

  var self = this;

  $scope.items = [];

  $scope.addTask = function() {
    if($scope.taskTerm !== '') {
      $scope.items.push({taskName: $scope.taskTerm, done: false});
      $scope.taskTerm = '';
    };
  };

  $scope.switchDone = function(item) {
    item.done = !item.done;
  };
}]);
