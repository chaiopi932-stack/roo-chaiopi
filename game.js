console.log("JS LOADED");

function login() {
  const win = document.querySelector(".window");

  win.style.transition = "0.5s";
  win.style.opacity = "0";

  setTimeout(() => {
    win.style.display = "none";
  }, 500);
}
