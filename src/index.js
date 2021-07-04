import "./style.css";
import "./SlideShow/slideShow.css";
import { makeSlideShow } from "./SlideShow/makeSlideShow";
import { picSlide, picSlide2 } from "./SlideShow/setPics";

const btn = document.getElementById(`menuBtn`);
const ul = document.getElementById("ul");

const slideShow_a = document.getElementById(`slideshow-a`);
const slideShow_b = document.getElementById(`slideshow-b`);

makeSlideShow(slideShow_a, `a`, picSlide);
makeSlideShow(slideShow_b, `b`, picSlide2);

btn.addEventListener(`click`, function () {
  ul.classList.toggle(`is-visible`);
});
