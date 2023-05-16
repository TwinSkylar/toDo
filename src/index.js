import toDo from './todos.js';
import taskList from './taskList.js';
import {ScreenController} from './UIController.js';
import css from './styles.css';
import {isDate} from 'date-fns';


/*test cases*/
const a = new toDo("title1", "description 1", "dueDate", 5, "notes");
const b = new toDo("title2", "description 2", "dueDate", 1, "notes");
const c = new toDo("title3", "description 3", "dueDate", 10, "notes");
const d = new toDo("title4", "description 4", "dueDate", 6, "notes");
const e = new toDo("title5", "description 5", "dueDate", 4, "notes");
const f = new toDo("title6", "description 6", "dueDate", 5, "notes");
/*
console.log (a);
console.log (b);
console.log (c);
console.log (d);
console.log (e);
console.log (f);
*/
const list = new taskList();

list.addTask(a);
list.addTask(b);
list.addTask(c);
list.addTask(d);
list.addTask(e);
list.addTask(f);

console.log (list);

list.removeTask(a);

console.log (list);

ScreenController();