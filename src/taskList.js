export default class taskList {
  constructor(name) {
    this._taskList = [];
    this._projectName =name;
  }

  getTaskList() {
    return this.taskList;
  }

  getProjectName() {
    return this._projectName;
  }

  addTask(task) {
    this._taskList.push(task);
  }
  removeTask(task) {
    const index = (this._taskList.indexOf(task));
    this._taskList.splice(index, 1);
  }
}
