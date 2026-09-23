const btn = document.getElementById("btn");
const colorBtn = document.getElementById("colorBtn"); // Your icon button ID
const msg = document.getElementById("msg");
const box = document.getElementById("box");

const colors = ["blue", "red", "green", "purple", "orange", "teal"];
let colorIndex = 0;

// Handle the "Click Me" button
if (btn) {
  btn.addEventListener("click", () => {
    if (msg) {
      msg.textContent = "You clicked it!";
    }
  });
} else {
  console.error("Element with id 'btn' not found.");
}

// Handle the "Change Color" Icon Button
if (colorBtn) {
  colorBtn.addEventListener("click", () => {
    if (box) {
      box.style.backgroundColor = colors[colorIndex];
      colorIndex = (colorIndex + 1) % colors.length;
    }
  });
} else {
  console.error("Element with id 'colorBtn' not found.");
}