const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 3000 });

let players = [];

wss.on("connection", (ws) => {

  let player = { x: 100, y: 100 };
  players.push(player);

  ws.on("message", (msg) => {
    let data = JSON.parse(msg);

    if (data.type === "move") {
      player.x = data.x;
      player.y = data.y;

      broadcast();
    }
  });

  ws.on("close", () => {
    players = players.filter(p => p !== player);
  });

  function broadcast() {
    wss.clients.forEach(client => {
      if (client.readyState === 1) {
        client.send(JSON.stringify({ players }));
      }
    });
  }
});

console.log("Server running ws://localhost:3000");
