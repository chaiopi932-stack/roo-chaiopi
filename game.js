console.log("GAME READY");

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
  const login = document.getElementById("login");
  const loading = document.getElementById("loading");
  const game = document.getElementById("game");

  // LOGIN fade out
  login.style.transition = "0.5s";
  login.style.opacity = "0";

  setTimeout(() => {
    login.style.display = "none";

    // LOADING
    loading.style.display = "block";

    setTimeout(() => {
      loading.style.display = "none";
      game.style.display = "block";
    }, 1500);

  }, 500);
}
