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
  const win = document.querySelector(".window");

  // 防呆：避免找不到
  if (!win) {
    console.log("window not found");
    return;
  }

  // 淡出效果
  win.style.transition = "0.6s ease";
  win.style.opacity = "0";
  win.style.transform = "translate(-50%, -50%) scale(0.9)";

  // 0.6秒後真正移除
  setTimeout(() => {
    win.style.display = "none";
    console.log("Login window hidden");
  }, 600);
}
