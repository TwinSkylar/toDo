export default class toDo {
  constructor(t, d, date, p, n) {
    this._title = t;
    this._description = d;
    this._dueDate = date;
    this._priority = p;
    this._notes = n;
  }

  getTitle() {
    return this._title;
  }
  setTitle(title) {
    this._title = title;
  }
  getDescription() {
    return this._description;
  }
  setDescription(description) {
    this._description = description;
  }
  getDueDate() {
    return this._dueDate;
  }
  setDueDate(date){
    this._dueDate=date;
  }
  getPriority() {
    return this._priority;
  }
  setPriority(priority){
    this._priority=priority;
  }
  getNotes() {
    return this._notes;
  }
  setNote(notes){
    this_notes=notes;
  }

  update(t,d,date,p,n){
    this._title = t;
    this._description = d;
    this._dueDate = date;
    this._priority = p;
    this._notes = n;
  }
}


