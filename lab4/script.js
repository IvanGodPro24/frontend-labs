const imgContainer = document.querySelector(".image-container");
const buttons = document.querySelector(".buttons");

const addBtn = document.getElementById("add");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const removeBtn = document.getElementById("remove");

const n = 12;
const targetIndex = (n % 10) + 1;
let toggledId = false;
let toggledQuery = false;

const firstElement = document.getElementById(`p${targetIndex}`);

firstElement.addEventListener("click", function () {
  toggledId = !toggledId;
  this.style.backgroundColor = toggledId ? "black" : "#f0f0f0";
  this.style.color = toggledId ? "white" : "black";
});

const nextElement = document.querySelector(`#p${targetIndex + 1}`);

if (nextElement) {
  nextElement.addEventListener("click", function () {
    toggledQuery = !toggledQuery;
    this.style.backgroundColor = toggledQuery ? "darkblue" : "#f0f0f0";
    this.style.color = toggledQuery ? "yellow" : "black";
  });
}

addBtn.addEventListener("click", () => {
  if (!document.getElementById("main-image")) {
    const img = document.createElement("img");
    img.id = "main-image";
    img.src = "./img/1.jpg";
    img.alt = "main";
    img.width = 500;
    imgContainer.insertBefore(img, buttons);
  }
});

increaseBtn.addEventListener("click", () => {
  const img = document.getElementById("main-image");
  if (img) {
    img.style.transform = "scale(1.3)";
  }
});

decreaseBtn.addEventListener("click", () => {
  const img = document.getElementById("main-image");
  if (img) {
    img.style.transform = "scale(0.8)";
  }
});

removeBtn.addEventListener("click", () => {
  const img = document.getElementById("main-image");
  if (img) img.remove();
});
