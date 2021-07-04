import Pic1 from "./pic1.png";
import Pic2 from "./pic2.png";
import Pic3 from "./pic3.png";

let picSlide = [Pic1, Pic2, Pic3];
export const slideShow = document.getElementById(`slideshow`);

const btns = document.createElement(`div`);
btns.setAttribute(`id`, `btns`);

function btnComp(i) {
  const btn = document.createElement(`button`);
  btn.setAttribute(`type`, `button`);
  btn.setAttribute("id", `btn${i + 1}`);
  btn.setAttribute("class", `btns`);
  btns.appendChild(btn);
  btn.addEventListener(`click`, function () {
    btnSlideShow(i + 1);
  });
}
export function picComp() {
  makeLeftBtn();
  for (let i = 0; i < picSlide.length; i++) {
    makePhoto(i);
  }
  makeRightBtn();
  slideShow.appendChild(btns);
}

function makePhoto(i) {
  const photo = new Image();
  btnComp(i);
  photo.src = picSlide[i];
  photo.setAttribute("class", "pic");
  photo.setAttribute("id", `pic${i + 1}`);
  if (i == 0) {
    photo.classList.toggle(`is-active`);
  }
  photo.addEventListener(`click`, () => {
    slideShowFuncLeft();
  });
  slideShow.appendChild(photo);
}
function makeLeftBtn() {
  const leftBtn = document.createElement(`button`);
  leftBtn.setAttribute(`type`, `button`);
  leftBtn.setAttribute("id", `leftBtn`);
  leftBtn.setAttribute("class", `dirBtns`);
  leftBtn.innerText = "<";
  leftBtn.addEventListener(`click`, function () {
    slideShowFuncLeft();
  });
  btns.appendChild(leftBtn);
}
function makeRightBtn() {
  const rightBtn = document.createElement(`button`);
  rightBtn.setAttribute(`type`, `button`);
  rightBtn.setAttribute("id", `rightBtn`);
  rightBtn.setAttribute("class", `dirBtns`);
  rightBtn.innerText = ">";
  rightBtn.addEventListener(`click`, function () {
    slideShowFuncRight();
  });
  btns.appendChild(rightBtn);
}
export function slideShowFuncRight() {
  //runs on all of the children
  for (let i = 0; i < slideShow.children.length - 1; i++) {
    let pic = slideShow.children[i];
    //this element
    const element = document.getElementById(`pic${i + 1}`);
    //first element
    const fElement = document.getElementById(`pic${1}`);

    //if classlist has isactive
    if (element.classList.contains("is-active") == true) {
      //remove
      element.classList.toggle(`is-active`);
      if (element.nextSibling.getAttribute(`id`) === "btns") {
        fElement.classList.toggle(`is-active`);
        console.log(`activate first`);
      } else {
        document.getElementById(`pic${i + 2}`).classList.toggle(`is-active`);
        console.log(`activate next`);
      }
      break;
    }
  }
}
export function slideShowFuncLeft() {
  //runs on all of the children
  for (let i = slideShow.children.length - 1; i > 0; i--) {
    let pic = slideShow.children[i];
    //this element
    const element = document.getElementById(`pic${i}`);

    //first element
    const fElement = document.getElementById(
      `pic${slideShow.children.length - 1}`
    );

    //if classlist has isactive
    if (element.classList.contains("is-active") == true) {
      //remove
      element.classList.toggle(`is-active`);
      if (element.previousSibling == null) {
        fElement.classList.toggle(`is-active`);
      } else {
        document.getElementById(`pic${i - 1}`).classList.toggle(`is-active`);
      }
      break;
    }
  }
}

function btnSlideShow(num) {
  console.log(num);
  const numElement = document.getElementById(`pic${num}`);
  for (let i = 0; i < slideShow.children.length - 1; i++) {
    let pic = slideShow.children[i];
    //this element
    const element = document.getElementById(`pic${i + 1}`);

    //first element
    if (element.classList.contains("is-active") == true) {
      //remove
      element.classList.toggle(`is-active`);
      break;
    }
  }
  numElement.classList.toggle(`is-active`);
}
