console.log("GAME JS LOADED");
const bgm = document.getElementById("bgm");
const click = document.getElementById("click");

bgm.src = "https://cdn.pixabay.com/download/audio/2022/03/15/audio_5c1b5d0d5d.mp3";

document.body.addEventListener("click", () => {
  bgm.play();
}, { once: true });

// 打字效果
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

// 登入
function login() {
  console.log("LOGIN FIRED");
}
