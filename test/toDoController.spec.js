describe('toDoController', function() {

  beforeEach(module('toDo'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('toDoController')
  }));

  it("initialises with an empty 'task to add' term", function() {
    expect(ctrl.toDoTerm).toBeUndefined();
  });

});
