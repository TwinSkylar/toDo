import customModal from "./modal/modal.js";
import { saveData, populateStorage } from "./appController.js";
import css from "./modal/modal.css";
import toDo from "./todos.js";
import binIcon from "./images/bin.svg";
import editIcon from "./images/edit.svg";

export function ScreenController(allProjects) {
  const home = document.getElementById("home");
  const projects = document.getElementById("projects");
  const content = document.getElementById("content");

  projects.replaceChildren();
  projects.appendChild(createProjectDoms(allProjects));
}

function renderPage(section, dom) {
  const content = document.getElementById(section);
  projects.replaceChildren();
  content.appendChild(dom);
}

function taskInformation(task, project) {
  //Check if this is adding a new task
  let title = task.getTitle();
  let description = task.getDescription();
  let expDate = task.getDueDate();
  let priority = task.getPriority();
  let notes = task.getNotes();

  const editModal = new customModal({
    titleText: title,
    descriptionText: description,
    expDateText: expDate,
    priorityText: priority,
    notesText: notes,
  });

  editModal
    .open()
    //updates the tasks with the modal value
    .then((value) => {
      //If this is a new
      if (title === "") {
        project.addTask(task);
      }
      task.update(value[0], value[1], new Date(value[2]), value[3], value[4]);
      saveData();
      displayProject(project);
    })
    .catch((err) => {
      // Nothing to do.
    });
}

//Creates a dom container for all the stored projects
function createProjectDoms(allProjects) {
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menuContainer");

  allProjects.forEach((element) => {
    const btn = document.createElement("button");
    btn.textContent = element.getName();
    btn.addEventListener("click", function () {
      displayProject(element);
    });
    menuContainer.appendChild(btn);
  });

  /*  Removes the add project button.  You can't add projects at this time.
  const addProject = document.createElement("button");
  addProject.textContent = "+ Add Project";
  addProject.addEventListener("click", (event) => {});
  menuContainer.appendChild(addProject);
  */

  /*Creates a delete all projects*/
  const delProject = document.createElement("button");
  delProject.textContent = "Generate projects";
  delProject.addEventListener("click", (event) => {
    localStorage.clear(0);
    populateStorage();
    const content = document.getElementById("content");
    content.replaceChildren();
  });
  menuContainer.appendChild(delProject);
  return menuContainer;
}

//Creates a dom container with all the tasks in a project
export function displayProject(project) {
  const dom = document.getElementById("content");
  const taskList = project.getTasks();

  dom.replaceChildren();

  //Populate the tasklist from the project
  taskList.getTaskList().forEach((task) => {
    const toDoContainer = document.createElement("div");

    toDoContainer.classList.add("toDo");
    toDoContainer.classList.add(task.getPriority());

    //Add the name of the task
    const taskName = document.createElement("div");
    taskName.textContent = task.getTitle();
    taskName.classList.add("taskName");

    //Add a checkbox to show completed tasks
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    //Adds a strikethrough to the text whenever the check box is ticked
    checkBox.addEventListener("change", (event) => {
      if (event.target.checked) {
        taskName.style.setProperty("text-decoration", "line-through");
      } else {
        taskName.style.setProperty("text-decoration", "none");
      }
    });

    //Add a button to get more details
    const editTask = new Image();
    editTask.src = editIcon;
    editTask.alt = "details";
    //details.textContent = "details";
    editTask.classList.add("taskDetails");
    editTask.addEventListener("click", (event) => {
      taskInformation(task, project);
    });

    //Display the due date for the task
    const taskDate = document.createElement("div");
    taskDate.textContent = task.getDueDate().toDateString().substr(0, 10);
    taskDate.classList.add("taskDate");

    //Add a delete for the task
    const del = new Image();
    del.src = binIcon;
    del.alt = "delete";
    del.classList.add("taskDel");
    del.addEventListener("click", (event) => {
      taskList.removeTask(task);
      saveData();
      displayProject(project);
    });

    //Sets the border color of each task to reflect the priority
    let borderColor = "red";
    if (task.getPriority() === "medium") {
      borderColor = "yellow";
    } else if (task.getPriority() === "low") {
      borderColor = "green";
    }
    toDoContainer.appendChild(checkBox);
    toDoContainer.appendChild(taskName);
    toDoContainer.appendChild(editTask);
    toDoContainer.appendChild(taskDate);
    toDoContainer.appendChild(del);

    toDoContainer.style.borderLeftColor = borderColor;
    //Attaches the task element to the content window
    dom.appendChild(toDoContainer);
  });

  //Add task button

  const addTask = document.createElement("button");
  addTask.textContent = "+ Add task";
  addTask.addEventListener("click", (event) => {
    const newTask = new toDo("", "", new Date(), "low", "");
    taskInformation(newTask, project);
  });
  dom.appendChild(addTask);
}
