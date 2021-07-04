import "./style.css";
import { picComp } from "./slideshow";
import { slideShow, slideShowFunc } from "./slideshow";

const btn = document.getElementById(`menuBtn`);
const ul = document.getElementById("ul");
picComp();

btn.addEventListener(`click`, function () {
  ul.classList.toggle(`is-visible`);
});
