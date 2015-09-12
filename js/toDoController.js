toDoList.controller('toDoController', [function() {

  var self = this;



  self.addTask = function() {
    self.taskList = {
      "items": [
        {"task": "make a todo list"}
      ]
    };
  };


}]);
