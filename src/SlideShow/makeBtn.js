import { slideShowFuncLeft, slideShowFuncRight } from "./slideShowFunc";
export function makeLeftBtn(parentElement, parentElementBtns, serial) {
  const leftBtn = document.createElement(`button`);
  leftBtn.setAttribute(`type`, `button`);
  leftBtn.setAttribute("id", `leftBtn`);
  leftBtn.setAttribute("class", `dirBtns`);
  leftBtn.innerText = "<";
  leftBtn.addEventListener(`click`, function () {
    slideShowFuncLeft(parentElement, serial);
  });
  parentElementBtns.appendChild(leftBtn);
}
export function makeRightBtn(parentElement, parentElementBtns, serial) {
  const rightBtn = document.createElement(`button`);
  rightBtn.setAttribute(`type`, `button`);
  rightBtn.setAttribute("id", `rightBtn`);
  rightBtn.setAttribute("class", `dirBtns`);
  rightBtn.innerText = ">";
  rightBtn.addEventListener(`click`, function () {
    slideShowFuncRight(parentElement, serial);
  });
  parentElementBtns.appendChild(rightBtn);
}
