describe('toDoController', function() {

  beforeEach(module('toDo'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('toDoController')
  }));

  it("initialises with an empty 'task to add' term", function() {
    expect(ctrl.taskList).toBeUndefined();
    expect(ctrl.taskTerm).toBeUndefined();
  });

  describe('when adding a task', function() {
    var task =[
      {"task": 'make a todo list'}
      ];

    it('displays the added task', function() {
      ctrl.taskTerm = 'test';
      ctrl.addTask();
      expect(ctrl.taskList.items).toEqual(task);
    });
  });

});
