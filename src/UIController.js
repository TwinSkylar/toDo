import projects from "./projects.js";

export function ScreenController(allProjects){
   const home = document.getElementById('home');
   const projects = document.getElementById('projects');
   const content = document.getElementById('content');

   projects.appendChild(createProjectDoms(allProjects));


}

function renderPage(section,dom){
    const content = document.getElementById(section);
    content.replaceChildren();
    content.appendChild(dom);
}

function createProjectDoms (allProjects){
    const menuContainer = document.createElement ("div");
    menuContainer.classList.add("menuContainer");
    
    allProjects.forEach(element => {
        const btn = document.createElement("button");
        btn.textContent=element.getName();
        menuContainer.appendChild(btn);
       });
       return menuContainer;

}