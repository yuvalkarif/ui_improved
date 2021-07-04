export function slideShowFuncRight(parentElement, serial) {
  //runs on all of the children
  for (let i = 0; i < parentElement.children.length - 1; i++) {
    let pic = parentElement.children[i];
    //this element
    const element = document.getElementById(`pic${serial}${i + 1}`);
    //first element
    const fElement = document.getElementById(`pic${serial}${1}`);

    //if classlist has isactive
    if (element.classList.contains("is-active") == true) {
      //remove
      element.classList.toggle(`is-active`);
      if (element.nextSibling.getAttribute(`id`) === "btns") {
        fElement.classList.toggle(`is-active`);
      } else {
        document
          .getElementById(`pic${serial}${i + 2}`)
          .classList.toggle(`is-active`);
      }
      break;
    }
  }
}
export function slideShowFuncLeft(parentElement, serial) {
  //runs on all of the children
  for (let i = parentElement.children.length - 1; i > 0; i--) {
    let pic = parentElement.children[i];
    //this element
    const element = document.getElementById(`pic${serial}${i}`);

    //first element
    const fElement = document.getElementById(
      `pic${serial}${parentElement.children.length - 1}`
    );

    //if classlist has isactive
    if (element.classList.contains("is-active") == true) {
      //remove
      element.classList.toggle(`is-active`);
      if (element.previousSibling == null) {
        fElement.classList.toggle(`is-active`);
      } else {
        document
          .getElementById(`pic${serial}${i - 1}`)
          .classList.toggle(`is-active`);
      }
      break;
    }
  }
}
