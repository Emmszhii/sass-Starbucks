const drops = document.querySelectorAll(".links__item h4");

const onDropDownLinks = (e) => {
  const element = e.currentTarget;
  element.nextElementSibling.classList.toggle("open");
  element.querySelector("i").classList.toggle("open");
};

drops.forEach((drop) => {
  drop.addEventListener("click", onDropDownLinks);
});
