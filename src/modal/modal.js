export default class customModal {
  constructor({
    titleText,
    descriptionText,
    expDateText,
    priorityText,
    notesText,
  }) {
    this.titleText = titleText;
    this.descriptionText = descriptionText;
    this.expDateText = expDateText;
    this.priorityText = priorityText;
    this.notesText = notesText;
  }

  createAndOpen(onConfirm, onCancel) {
    this.modalElem = document.createElement("div");
    this.modalElem.classList.add("modal");

    /*work around to allow the fade to show up*/
    setTimeout(() => {
      this.modalElem.classList.add("open");
    }, 50);

    const modalContentElem = document.createElement("div");
    modalContentElem.classList.add("content");
    this.modalElem.appendChild(modalContentElem);

    const titleTextElem = document.createElement("div");
    titleTextElem.classList.add("titleText");
    //Label
    const titleTextLabel = document.createElement("label");
    titleTextLabel.className = "title";
    titleTextElem.textContent = "Title:";
    titleTextElem.appendChild(titleTextLabel);
    //Input
    const titleTextInput = document.createElement("input");
    titleTextInput.id = "title";
    titleTextInput.className = "title";
    titleTextElem.appendChild(titleTextInput);
    titleTextInput.value=this.titleText;

    modalContentElem.appendChild(titleTextElem);

    //Container div
    const priorityTextElem = document.createElement("div");
    priorityTextElem.classList.add("priorityText");
    const sectionTitle = document.createElement("p");
    sectionTitle.textContent = "Priority";
    modalContentElem.appendChild(sectionTitle);
    //Label
    const priorityLowTextLabel = document.createElement("label");
    priorityLowTextLabel.for = "low";
    priorityLowTextLabel.textContent = "Low";
    priorityTextElem.appendChild(priorityLowTextLabel);
    //Input
    const priorityLowTextInput = document.createElement("input");
    priorityLowTextInput.id = "priority";
    priorityLowTextInput.className = "priority";
    priorityLowTextInput.type = "radio";
    priorityLowTextInput.name = "priority";
    priorityLowTextInput.value = "low";
    priorityTextElem.appendChild(priorityLowTextInput);
    //Container div

    //Label
    const priorityMedTextLabel = document.createElement("label");
    priorityMedTextLabel.for = "med";
    priorityMedTextLabel.textContent = "Med";
    priorityTextElem.appendChild(priorityMedTextLabel);
    //Input
    const priorityMedTextInput = document.createElement("input");
    priorityMedTextInput.id = "priority";
    priorityMedTextInput.className = "priority";
    priorityMedTextInput.type = "radio";
    priorityMedTextInput.name = "priority";
    priorityMedTextInput.value = "med";
    priorityTextElem.appendChild(priorityMedTextInput);

    //Label
    const priorityHighTextLabel = document.createElement("label");
    priorityHighTextLabel.for = "high";
    priorityHighTextLabel.textContent = "High";
    priorityTextElem.appendChild(priorityHighTextLabel);
    //Input
    const priorityHighTextInput = document.createElement("input");
    priorityHighTextInput.id = "priority";
    priorityHighTextInput.className = "priority";
    priorityHighTextInput.type = "radio";
    priorityHighTextInput.name = "priority";
    priorityHighTextInput.value = "high";
    priorityTextElem.appendChild(priorityHighTextInput);
//Sets the default task priority
    switch (this.priorityText) {
      case "low":
        priorityLowTextInput.checked = true;
        break;
      case "medium":
        priorityMedTextInput.checked = true;
        break;
      case "high":
        priorityHighTextInput.checked = true;
        break;
    }
    modalContentElem.appendChild(priorityTextElem);

    //Container div
    const expDateTextElem = document.createElement("div");
    expDateTextElem.classList.add("expDateText");
    //Label
    const expDateTextLabel = document.createElement("label");
    expDateTextLabel.className = "expDate";
    expDateTextElem.textContent = "Due Date:";
    expDateTextElem.appendChild(expDateTextLabel);
    //Input
    const expDateTextInput = document.createElement("input");
    expDateTextInput.id = "expDate";
    expDateTextInput.className = "expDate";
    expDateTextInput.type = "date";
    expDateTextInput.value=this.expDateText.toISOString().substr(0, 10);
    expDateTextElem.appendChild(expDateTextInput);

    modalContentElem.appendChild(expDateTextElem);

    const descriptionTextElem = document.createElement("div");
    descriptionTextElem.classList.add("descriptionText");
    //Label
    const descriptionTextLabel = document.createElement("label");
    descriptionTextLabel.className = "description";
    descriptionTextElem.textContent = "Description:";
    descriptionTextElem.appendChild(descriptionTextLabel);
    //Input
    const descriptionTextInput = document.createElement("input");
    descriptionTextInput.id = "description";
    descriptionTextInput.className = "description";
    descriptionTextInput.value=this.descriptionText;

    descriptionTextElem.appendChild(descriptionTextInput);

    modalContentElem.appendChild(descriptionTextElem);

    const cancelBtnElem = document.createElement("button");
    cancelBtnElem.classList.add("cancelBtnText");
    cancelBtnElem.textContent = "Cancel";
    cancelBtnElem.addEventListener("click", () => {
      onCancel("Cancelled");
      this.close();
    });

    modalContentElem.appendChild(cancelBtnElem);

    const confirmBtnElem = document.createElement("button");
    confirmBtnElem.classList.add("confirmBtnText");
    confirmBtnElem.textContent = "Save";

    confirmBtnElem.addEventListener("click", () => {
      onConfirm("Success");
      this.close();
    });
    modalContentElem.appendChild(confirmBtnElem);

    document.body.appendChild(this.modalElem);
  }

  open() {
    return new Promise((resolve, reject) => {
      this.createAndOpen(resolve, reject);
    });
  }

  close() {
    this.modalElem.classList.remove("open");
    setTimeout(() => {
      document.body.removeChild(this.modalElem);
    }, 50);
  }
}
