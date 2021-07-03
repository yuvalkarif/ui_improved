import Pic1 from "./pic1.png";
import Pic2 from "./pic2.png";
import Pic3 from "./pic3.png";

let picSlide = [Pic1, Pic2, Pic3];
export const slideShow = document.getElementById(`slideshow`);

export function picComp() {
  let photo;
  for (let i = 0; i < picSlide.length; i++) {
    photo = new Image();
    photo.src = picSlide[i];
    photo.setAttribute("class", "pic");
    photo.setAttribute("id", `pic${i + 1}`);
    if (i == 0) {
      photo.classList.toggle(`is-active`);
    }
    slideShow.appendChild(photo);
  }
}

export function slideShowFunc() {
  //runs on all of the children
  for (let i = 0; i < slideShow.children.length; i++) {
    let pic = slideShow.children[i];
    //this element
    const element = document.getElementById(`pic${i + 1}`);
    //first element
    const fElement = document.getElementById(`pic${1}`);

    //if classlist has isactive
    if (element.classList.contains("is-active") == true) {
      //remove
      element.classList.toggle(`is-active`);
      console.log(element.nextSibling);
      if (element.nextSibling == null) {
        fElement.classList.toggle(`is-active`);
      } else {
        document.getElementById(`pic${i + 2}`).classList.toggle(`is-active`);
        console.log(`activate next`);
      }
      break;
    }
  }
}
