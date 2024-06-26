const sendChat = require("../emitters/sendChat");
const { db } = require("../lib/db");
module.exports = (io, socket) => {
  function handler(message) {
    try {
      const playerFromDb = db.getPlayerBySocketId(socket.id);
      const roomFromDb = db.getRoomById(playerFromDb.roomid);
      const opponent = roomFromDb.getOpponent(socket.id);
      sendChat(opponent.socketid, message);
      sendChat(socket.id, message);
    } catch (err) {
      console.log(err);
    }
  }
  socket.on("chat", handler);
};
