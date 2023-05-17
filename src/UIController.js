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
    btn.addEventListener("click", function(){displayProject(element);});
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
  taskList.getTaskList().forEach((element) => {    
    const btn = document.createElement("button");
    btn.textContent = element.getTitle();
    dom.appendChild(btn);
  });

  //Add task button

  const addTask = document.createElement("button");
  addTask.textContent = "+ Add task";
  dom.appendChild(addTask);

  content.replaceChildren();
  content.appendChild(dom);  
}
