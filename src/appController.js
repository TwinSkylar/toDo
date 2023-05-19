import projects from "./projects.js";
import list from "./taskList.js";
import toDo from './todos.js';
import {ScreenController} from './UIController.js';

const allProjects = [];
const test = 'testing';

export function populateStorage() {
  /*test cases*/
  let dataArray = [];

  dataArray.push(new toDo("title1", "description 1",  randomDate(), "low", "notes"));
  dataArray.push(new toDo("title2", "description 2",  randomDate(), "low", "notes"));
  dataArray.push(new toDo("title3", "description 3",  randomDate(), "medium", "notes"));
  dataArray.push(new toDo("title4", "description 4",  randomDate(), "high", "notes"));
  dataArray.push(new toDo("title5", "description 5",  randomDate(), "medium", "notes"));
  dataArray.push(new toDo("title7", "description 6",  randomDate(), "high", "notes"));


  //const list = new taskList();
  const project1 = new projects('first project');
  const project2 = new projects('second project');
  dataArray.forEach((element) => {
    project1.addTask(element);
  });

  dataArray = [];
  dataArray.push(new toDo("proj1", "description 1", randomDate(), "high", "notes"));
  dataArray.push(new toDo("proj2", "description 2", randomDate(), "high", "notes"));
  dataArray.push(new toDo("proj3", "description 3", randomDate(), "low", "notes"));

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

function randomDate() {
  var startDate = new Date().getTime();
  var endDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
  var space = endDate - startDate;
  var timestamp = Math.round(Math.random() * space);
  timestamp += startDate;

  return new Date(timestamp);
}