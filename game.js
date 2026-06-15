console.log("GAME READY");

const text = "Welcome to Midgard...";
let i = 0;

/* ================= TYPING ================= */
function typing() {
  const el = document.getElementById("typing");
  if (!el) return;

  if (i === 0) el.innerHTML = "";

  if (i < text.length) {
    el.innerHTML += text[i];
    i++;
    setTimeout(typing, 50);
  }
}

/* ================= LOGIN ================= */
function login() {
  showScene("loading");

  let p = 0;
  let bar = document.querySelector(".bar");

  let t = setInterval(() => {
    p += 2;

    if (bar) bar.style.width = p + "%";

    if (p >= 100) {
      clearInterval(t);

      showScene("char"); // ⭐ 正確：進角色選擇
    }
  }, 25);
}

/* ================= CHARACTER SELECT ================= */
function enterGame(job) {
  console.log("Selected:", job);

  showScene("game");

  startGame(job);
}

/* ================= GAME START ================= */
function startGame(job) {
  console.log("GAME STARTED:", job);

  i = 0; // reset typing

  typing();
}
