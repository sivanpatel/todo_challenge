toDoList.controller('toDoController', ['$scope', function($scope) {

  $scope.items = [];

  $scope.addTask = function() {
    if($scope.taskTerm !== '') {
      $scope.items.push({taskName: $scope.taskTerm,
                          done: false
                          });
      $scope.taskTerm = '';
    };
  };

  $scope.switchDone = function(task) {
    task.done = !task.done;
  };

  $scope.remove = function(item) {
    var index = $scope.items.indexOf(item);
    $scope.items.splice(index, 1);
  };

}]);
