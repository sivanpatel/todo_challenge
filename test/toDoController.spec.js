'use strict';

describe('toDoController', function() {

  beforeEach(module('toDo'));

  var ctrl,
    scope;

  var task =[
    {"taskName": 'test', 'done': false}
    ];

  beforeEach(inject(function($controller) {
    scope = {};
    ctrl = $controller('toDoController', {
      $scope: scope
    });
  }));

  it("initialises with an empty 'task to add' term", function() {
    expect(ctrl.taskList).toBeUndefined();
    expect(ctrl.taskTerm).toBeUndefined();
  });

  describe('when adding a task', function() {

    it('displays the added task', function() {
      scope.taskTerm = 'test';
      scope.addTask();
      expect(scope.items).toEqual(task);
    });
  });

  it('should add an item and mark it as not done', function() {
    scope.taskTerm = 'test';
    scope.addTask();
    expect(scope.items[0].done).toBe(false);
  });

  it('should not add an item that has empty text', function() {
    scope.taskTerm = '';
    scope.addTask();
    expect(scope.items.length).toEqual(0);
  });

  it('should have an empty text field once the task has been added', function() {
    scope.taskTerm = 'test';
    scope.addTask();
    expect(scope.taskTerm).toEqual('')
  })

  describe('done', function() {

    it('should mark an item as done', function() {
      scope.item = {taskName: 'test', done: false}
      scope.switchDone(scope.item);
      expect(scope.item.done).toBe(true);
    });

  });
  
});
