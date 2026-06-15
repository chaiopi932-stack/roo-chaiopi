console.log("JS LOADED");

const text = "Welcome to Midgard...";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text[i];
    i++;
    setTimeout(typing, 50);
  }
}
typing();

function login() {
  const win = document.querySelector(".window");
  win.style.transition = "0.5s";
  win.style.opacity = "0";

  setTimeout(() => {
    win.style.display = "none";
  }, 500);
}
