import projects from "./projects.js";
import toDo from "./todos.js";
import { ScreenController, displayProject } from "./UIController.js";

let allProjects = [];

export function populateStorage() {
  //localStorage.clear();
  if (!localStorage.getItem("projectNumber")) {
    /*test cases*/
    let dataArray = [];

    dataArray.push(
      new toDo("title1", "description 1", randomDate(), "low", "notes")
    );
    dataArray.push(
      new toDo("title2", "description 2", randomDate(), "low", "notes")
    );
    dataArray.push(
      new toDo("title3", "description 3", randomDate(), "medium", "notes")
    );
    dataArray.push(
      new toDo("title4", "description 4", randomDate(), "high", "notes")
    );
    dataArray.push(
      new toDo("title5", "description 5", randomDate(), "medium", "notes")
    );
    dataArray.push(
      new toDo("title7", "description 6", randomDate(), "high", "notes")
    );

    //const list = new taskList();
    const project1 = new projects("first project");
    const project2 = new projects("second project");
    dataArray.forEach((element) => {
      project1.addTask(element);
    });

    dataArray = [];
    dataArray.push(
      new toDo("proj1", "description 1", randomDate(), "high", "notes")
    );
    dataArray.push(
      new toDo("proj2", "description 2", randomDate(), "high", "notes")
    );
    dataArray.push(
      new toDo("proj3", "description 3", randomDate(), "low", "notes")
    );

    dataArray.forEach((element) => {
      project2.addTask(element);
    });

    addProject(project1);
    addProject(project2);
    saveData();
  } else {
    getData();
  }
  ScreenController(allProjects);
}

export function addProject(project) {
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

function saveData() {
  console.log("length is: + " + allProjects.length);

  //Store the number of projects

  window.localStorage.setItem("projectNumber", allProjects.length);

  //Stores the project object to local storage
  for (let i = 0; i < allProjects.length; i++) {
    //Stores the project name
    window.localStorage.setItem("project" + i, JSON.stringify(allProjects[i]));
    console.log("saving: " + allProjects[i].getTaskSize());
    window.localStorage.setItem(
      "project" + i + "Tasks",
      JSON.stringify(allProjects[i].getTaskSize())
    );
  }
}

function getData() {
  const projectNumber = window.localStorage.getItem("projectNumber");

  for (let i = 0; i < projectNumber; i++) {
    //Gets the project name
    const project = window.localStorage.getItem("project" + i);

    //Gets the number of tasks in the project
    const taskSize = window.localStorage.getItem("project" + i + "Tasks");
    let projectObject = JSON.parse(project);

    //Creates a new project from the data retrieved
    const newProject = new projects(projectObject["_name"]);

    for (let i = 0; i < taskSize; i++) {
      let JSONTask = new Array(projectObject._tasks._taskList[i]);
      let newTask = new toDo(
        JSONTask[0]._title,
        JSONTask[0]._description,
        new Date(JSONTask[0]._dueDate),
        JSONTask[0].priority,
        JSONTask[0]._notes
      );
      newProject.addTask(newTask);
    }
    addProject(newProject);
  }
}
