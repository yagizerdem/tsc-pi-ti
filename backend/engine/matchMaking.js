const { SD } = require("../lib/SD");
const { db } = require("../lib/db");
const { v4: uuidv4 } = require("uuid");
const { Room } = require("../lib/room");
const { createCards } = require("./util");
const emitStartGame = require("../emitters/startGame");
const { getIo } = require("../socket-setup");
const emitTopCard = require("../emitters/emitTopCard");
const emitPlayerCards = require("../emitters/playerCards");
var loop = null;
const io = getIo();

function activateMatchMaing() {
  if (!loop) {
    loop = setInterval(() => pair(db), 100);
  }
}

function clearMatchMaking() {
  if (loop) {
    clearInterval(loop);
    loop = null;
  }
}
function pair(db) {
  if (db.waitRoom.length < 2) {
    clearMatchMaking();
    return;
  }
  const s1 = db.shiftSocketFromWaitRoom();
  const s2 = db.shiftSocketFromWaitRoom();
  const p1 = db.getPlayerBySocketId(s1);
  const p2 = db.getPlayerBySocketId(s2);

  p1.playerState = SD.playerStates.inMatch;
  p2.playerState = SD.playerStates.inMatch;
  const roomid = uuidv4();
  p1.roomid = roomid;
  p2.roomid = roomid;
  const newRoom = new Room();
  newRoom.roomid = roomid;
  newRoom.turn = SD.colors.white;
  newRoom.whitePlayer = p1;
  newRoom.blackPlayer = p2;
  newRoom.allCards = createCards();
  newRoom.tableCards = [];
  newRoom.whiteCards = newRoom.allCards.splice(-5);
  newRoom.blackCards = newRoom.allCards.splice(-5);

  db.addRoom(newRoom);

  emitStartGame(p1.socketid);
  emitStartGame(p2.socketid);

  emitTopCard(p1.socketid, newRoom.tableCards[0]);
  emitTopCard(p2.socketid, newRoom.tableCards[0]);

  emitPlayerCards(p1.socketid, newRoom.whiteCards);
  emitPlayerCards(p2.socketid, newRoom.blackCards);

  const socket1 = io.sockets.sockets.get(p1.socketid);
  const socket2 = io.sockets.sockets.get(p2.socketid);
  socket1.join(newRoom.roomid);
  socket2.join(newRoom.roomid);
}

module.exports = { activateMatchMaing, clearMatchMaking };
