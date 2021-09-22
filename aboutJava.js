window.onbeforeunload = function() {
  window.scrollTo({top: 0, behavior: "smooth"});
 // document.getElementById("main").style.visibility = "hidden";

  }


/*const carouselSlide = document.querySelector(".carouselSlide");
const carouselImages = document.querySelectorAll(".card");

const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

let counter = 1;
//const size = carouselImages[0].clientWidth;
//const size = carouselImages.getBoundingClientRect().width;

const size = 450;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener("click", ()=>{
  carouselSlide.style.transition = "transform 0.4 ease-in-out";
  counter ++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

})

prevBtn.addEventListener("click", ()=>{
  carouselSlide.style.transition = "transform 0.4 ease-in-out";
  counter --;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

})

carouselSlide.addEventListener("transitionend", ()=>{
  //carouselSlide.ontransitionend = () => {
  console.log(carouselImages[counter]);
  if(carouselImages[counter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    console.log("none");
    counter = 3;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

  }
});*/