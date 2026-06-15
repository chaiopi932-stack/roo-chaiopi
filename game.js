function showScene(id) {
  document.querySelectorAll(".scene").forEach(s => {
    s.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}

/* LOGIN → CHAR */
function goChar() {
  showScene("char");
}

/* CHAR → GAME */
function enterGame() {
  showScene("game");
  console.log("GAME START");
}
