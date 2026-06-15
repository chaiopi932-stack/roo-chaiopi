console.log("GAME READY");

const text = "Welcome to Midgard...";
let i = 0;

function typing() {
  const el = document.getElementById("typing");
  if (!el) return;

  if (i < text.length) {
    el.innerHTML += text[i];
    i++;
    setTimeout(typing, 50);
  }
}
typing();

function login() {
  const login = document.getElementById("login");
  const loading = document.getElementById("loading");
  const game = document.getElementById("game");

  login.style.transition = "0.5s";
  login.style.opacity = "0";

  setTimeout(() => {
    login.style.display = "none";

    loading.style.display = "block";

    setTimeout(() => {
      loading.style.display = "none";
      game.style.display = "block";
    }, 1500);

  }, 500);
}
