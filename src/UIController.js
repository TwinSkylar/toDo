import projects from "./projects.js";

export function ScreenController(allProjects) {
  const home = document.getElementById("home");
  const projects = document.getElementById("projects");
  const content = document.getElementById("content");

  projects.appendChild(createProjectDoms(allProjects));
}

function renderPage(section, dom) {
  const content = document.getElementById(section);
  content.replaceChildren();
  content.appendChild(dom);
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
  return menuContainer;
}

//Creates a dom container with all the tasks in a project
function displayProject(project) {
  const dom = document.createElement("div");
  const content = document.getElementById("content");
  const taskList = project.getTasks();

  //Populate the tasklist from the project
  taskList.getTaskList().forEach((task) => {
    const toDoContainer = document.createElement("div");

    toDoContainer.classList.add("toDo");
    toDoContainer.classList.add(task.getPriority());

      //Add the name of the task
    const taskName = document.createElement("div");
    taskName.textContent = task.getTitle();

    //Add a checkbox to show completed tasks
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    //Adds a strikethrough to the text whenever the check box is ticked
    checkBox.addEventListener("change", event=>{
        if(event.target.checked){
            taskName.style.setProperty("text-decoration", "line-through");
        }
        else{
            taskName.style.setProperty("text-decoration", "none");
        }
    });



    //Add a button to get more details
    const details = document.createElement("div");
    details.textContent = "details";

    //Add a button to get more details
    const taskDate = document.createElement("div");
    taskDate.textContent = "Date";

    //Add an edit for the task
    const edit = document.createElement("div");
    edit.textContent = "edit";

    //Add a delete for the task
    const del = document.createElement("div");
    del.textContent = "delete";

    del.addEventListener("click", event=>{
       taskList.removeTask(task);
       displayProject(project);
    });

    toDoContainer.appendChild(checkBox);
    toDoContainer.appendChild(taskName);
    toDoContainer.appendChild(details);
    toDoContainer.appendChild(taskDate);
    toDoContainer.appendChild(edit);
    toDoContainer.appendChild(del);

    //Attaches the task element to the content window
    dom.appendChild(toDoContainer);
  });

  //Add task button

  const addTask = document.createElement("button");
  addTask.textContent = "+ Add task";
  dom.appendChild(addTask);

  content.replaceChildren();
  content.appendChild(dom);
}
