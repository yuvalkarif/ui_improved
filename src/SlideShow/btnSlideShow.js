export function btnSlideShow(num, parentElement, serial) {
  const numElement = document.getElementById(`pic${serial}${num}`);
  for (let i = 0; i < parentElement.children.length - 1; i++) {
    let pic = parentElement.children[i];
    //this element
    const element = document.getElementById(`pic${serial}${i + 1}`);

    //first element
    if (element.classList.contains("is-active") == true) {
      //remove
      element.classList.toggle(`is-active`);
      break;
    }
  }
  numElement.classList.toggle(`is-active`);
}
