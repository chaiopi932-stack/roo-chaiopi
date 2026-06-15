console.log("GAME READY");

const text = "Welcome to Midgard...";
let i = 0;

/* ================= TYPING ================= */
function typing() {
  const el = document.getElementById("typing");
  if (!el) return;

  if (i === 0) el.innerHTML = ""; // 🔥 reset

  if (i < text.length) {
    el.innerHTML += text[i];
    i++;
    setTimeout(typing, 50);
  }
}

/* ================= LOGIN FLOW ================= */
function login() {
  const login = document.getElementById("login");
  const loading = document.getElementById("loading");
  const game = document.getElementById("game");

  login.style.opacity = "0";

  setTimeout(() => {
    login.style.display = "none";

    loading.style.display = "flex";

    let p = 0;
    let bar = document.querySelector(".bar");

    let t = setInterval(() => {
      p += 2;
      if (bar) bar.style.width = p + "%";

      if (p >= 100) {
        clearInterval(t);

        loading.style.display = "none";

        game.style.display = "block";

        startGame(); // 🔥 建議加
      }
    }, 25);

  }, 400);
}

/* ================= GAME START ================= */
function startGame() {
  console.log("GAME STARTED");

  typing(); // 🔥 進遊戲才打字
}
