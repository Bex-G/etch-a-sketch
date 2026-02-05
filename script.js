const root = document.documentElement;

root.style.setProperty("--number", "16");

const screen = document.getElementById("screen");

document.addEventListener("DOMContentLoaded", function () {
  generatePixels(16);
});

function newSketchpad() {
  let input = prompt(
    "Choose a number between 16-100 to generate a new sketchpad grid.",
    16,
  );
  if (isNaN(input) || input < 16 || input > 100) {
    alert("Whoops! Invalid entry. Please choose a number between 16-100.");
    input = 16;
  }
  screen.innerHTML = "";
  generatePixels(input);
}

function generatePixels(input) {
  root.style.setProperty("--number", input);
  for (i = 0; i < input * input; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    box.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "black";
    });
    screen.appendChild(box);
  }
}
