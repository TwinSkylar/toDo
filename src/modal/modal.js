export default class customModal {
  constructor({ titleText, descriptionText,expDateText,priorityText,notesText}) {
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

    const titleTextElem = document.createElement("p");
    titleTextElem.classList.add("titleText");
    titleTextElem.textContent = this.titleText;
    console.log ("hit should display: " + this + " and " + this.titleText);

    modalContentElem.appendChild(titleTextElem);

    const dateTextElem = document.createElement("p");
    dateTextElem.classList.add("expDateText");
    dateTextElem.textContent = this.expDateText;

    modalContentElem.appendChild(dateTextElem);

    const descriptionTextElem = document.createElement("p");
    descriptionTextElem.classList.add("descriptionText");
    descriptionTextElem.textContent = this.descriptionText;

    modalContentElem.appendChild(descriptionTextElem);

    const priorityTextElem = document.createElement("p");
    priorityTextElem.classList.add("priorityText");
    priorityTextElem.textContent = this.priorityText;
    modalContentElem.appendChild(priorityTextElem);


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
