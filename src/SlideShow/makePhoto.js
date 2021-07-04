import { btnComp } from "./btnComp";

export function makePhoto(
  i,
  parentElement,
  parentElementBtns,
  serial,
  picSlide
) {
  const photo = new Image();
  btnComp(i, parentElement, parentElementBtns, serial);
  photo.src = picSlide[i];
  photo.setAttribute("class", `pic ${serial}`);
  photo.setAttribute("id", `pic${serial}${i + 1}`);
  if (i == 0) {
    photo.classList.toggle(`is-active`);
  }
  parentElement.appendChild(photo);
}
