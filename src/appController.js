import projects from "./projects.js";
import list from "./taskList.js";
import toDo from './todos.js';
import {ScreenController} from './UIController.js';

const allProjects = [];
const test = 'testing';

export function populateStorage() {
  /*test cases*/
  let dataArray = [];

  dataArray.push(new toDo("title1", "description 1", "dueDate", 5, "notes"));
  dataArray.push(new toDo("title2", "description 2", "dueDate", 1, "notes"));
  dataArray.push(new toDo("title3", "description 3", "dueDate", 10, "notes"));
  dataArray.push(new toDo("title4", "description 4", "dueDate", 6, "notes"));
  dataArray.push(new toDo("title5", "description 5", "dueDate", 4, "notes"));
  dataArray.push(new toDo("title7", "description 6", "dueDate", 5, "notes"));


  //const list = new taskList();
  const project1 = new projects('first project');
  const project2 = new projects('second project');
  dataArray.forEach((element) => {
    project1.addTask(element);
  });

  dataArray = [];
  dataArray.push(new toDo("proj1", "description 1", "dueDate", 4, "notes"));
  dataArray.push(new toDo("proj2", "description 2", "dueDate", 2, "notes"));
  dataArray.push(new toDo("proj3", "description 3", "dueDate", 1, "notes"));

  dataArray.forEach((element) => {
    project2.addTask(element);
  });
  
  addProject (project1);
  addProject (project2);

  ScreenController(allProjects);
}

export function addProject (project){
    allProjects.push(project);
}