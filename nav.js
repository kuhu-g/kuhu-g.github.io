const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav");
  const navLinks = document.querySelectorAll(".nav li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation){
        link.style.animation = "";

      } else{
        console.log("okay");
        link.style.animation = "navLinksFade 0.5s ease forwards";
      }
    });
    burger.classList.toggle("toggle");
  });


}

navSlide();