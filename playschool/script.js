const controls = document.querySelectorAll(".controls li");
const lists = document.querySelectorAll(".controls li .bullet");

controls.forEach(control => {
  control.addEventListener("click", () => {
    const list = control.querySelector(".bullet");
    const slider = document.querySelector(".slider img");
    lists.forEach(child => child.classList.remove("active"));
    list.classList.add("active");
    slider.classList.add("blink");
    setTimeout(() => slider.classList.remove("blink"), 1000);
    slider.setAttribute("src", `./assets/slider/slider${list.textContent}.jpg`);
  });
});
