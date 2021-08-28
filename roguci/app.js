const navSlide = () => {
  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav-links");
  [...nav.children].forEach((link, index) => {
    link.style.animationDelay = `${index / 4 + 0.2}s`;
  });
  //togle nav
  burger.addEventListener("click", _ => burger.classList.toggle("toggle"));
};

navSlide();
