export default class taskList {
  constructor(name) {
    this._taskList = [];
  }

  getTaskList() {
    return this._taskList;
  }

   addTask(task) {
    this._taskList.push(task);
    return true;
  }
  removeTask(task) {
    const index = (this._taskList.indexOf(task));
    this._taskList.splice(index, 1);
  }
}
