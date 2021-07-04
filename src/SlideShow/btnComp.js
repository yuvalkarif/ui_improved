import { btnSlideShow } from "./btnSlideShow";

export function btnComp(i, parentElement, parentElementBtns, serial) {
  const btn = document.createElement(`button`);
  btn.setAttribute(`type`, `button`);
  btn.setAttribute("id", `btn${i + 1}`);
  btn.setAttribute("class", `btns`);
  parentElementBtns.appendChild(btn);
  btn.addEventListener(`click`, function () {
    btnSlideShow(i + 1, parentElement, serial);
  });
}
