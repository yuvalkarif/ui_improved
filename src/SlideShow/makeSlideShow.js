import { makeLeftBtn, makeRightBtn } from "./makeBtn";
import { makePhoto } from "./makePhoto";

export function makeSlideShow(parentElement, serial, picSlide) {
  const parentElementBtns = document.createElement(`div`);
  parentElementBtns.setAttribute(`id`, `btns`);
  makeLeftBtn(parentElement, parentElementBtns, serial);

  for (let i = 0; i < picSlide.length; i++) {
    makePhoto(i, parentElement, parentElementBtns, serial, picSlide);
  }
  makeRightBtn(parentElement, parentElementBtns, serial);
  parentElement.appendChild(parentElementBtns);
}
