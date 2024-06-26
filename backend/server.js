const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.static("public")); // serve static files

const http = require("http");
const server = http.createServer(app);
const { setIo, getIo } = require("./socket-setup");
const { Server } = require("socket.io");
setIo(new Server(server));
const io = getIo();
const { Player } = require("./lib/player");
const { SD } = require("./lib/SD");
const { db } = require("./lib/db");

const searchMatchListernes = require("./listeners/searchMatch");
const disconenctListener = require("./listeners/disconnect");
const chatListener = require("./listeners/chat");

io.on("connection", (socket) => {
  console.log(`new user connected , socket id --> ${socket.id}`);
  const newPlayer = new Player({
    socketid: socket.id,
    playerState: SD.playerStates.home,
  });
  db.addNewPlayer(newPlayer);

  // register listernes
  searchMatchListernes(io, socket);
  disconenctListener(io, socket);
  chatListener(io, socket);
});

io.of("/").adapter.on("delete-room", (roomid) => {
  const roomFromDb = db.getRoomById(roomid);
  if (roomFromDb) {
    db.delteRoom(roomFromDb.roomid);
  }
});
server.listen(3000, () => {
  console.log("listening on *:3000");
});
