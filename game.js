const player = document.getElementById("player");
const world = document.getElementById("world");

let x = 500;
let y = 500;

const speed = 5;

/* 🕹 WASD */
document.addEventListener("keydown", (e) => {
  if (e.key === "w") y -= speed;
  if (e.key === "s") y += speed;
  if (e.key === "a") x -= speed;
  if (e.key === "d") x += speed;

  update();
});

/* 🎯 更新位置 */
function update() {
  // 邊界
  x = Math.max(0, Math.min(1960, x));
  y = Math.max(0, Math.min(1960, y));

  player.style.left = x + "px";
  player.style.top = y + "px";

  // 🌍 camera 跟隨（反向移動世界）
  world.style.transform =
    `translate(${-x + window.innerWidth/2}px, ${-y + window.innerHeight/2}px)`;
}

/* init */
update();
