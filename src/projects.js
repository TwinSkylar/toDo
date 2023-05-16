import taskList from './taskList.js';

export default class Project {
  constructor(name) {
    this._name = name;
    this._tasks = new taskList();
  }

  getName() {
    return this._name;
  }
  setName(name) {
    this._name = name;
  }
  getTasks() {
    return this._tasks;
  }
  addTask(task) {
    this._tasks.addTask(task);
  }
}
