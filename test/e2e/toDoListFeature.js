describe('To do list', function() {

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  var addTask = element(by.className('task'));
  var addTaskButton = element(by.className('btn'));
  var taskList = element(by.className('task-list'));
  var deleteButton = element(by.className('btn-delete'));

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('To Do List');
  });

  // it('can add a task', function() {
  //   addTask.sendKeys('test');
  //   addTaskButton.click();
  //   expect(taskList.getText()).toEqual('test');
  // });

  it('can delete a task', function() {
    addTask.sendKeys('test');
    addTaskButton.click();
    deleteButton.click();
    expect(taskList.getText()).toEqual('');
  });
});
