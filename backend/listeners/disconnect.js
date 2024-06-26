const sendAlert = require("../emitters/alert");
const { clearMatchMaking } = require("../engine/matchMaking");
const { SD } = require("../lib/SD");
const { db } = require("../lib/db");

module.exports = (io, socket) => {
  function handler(reason) {
    console.log(`socket id : ${socket.id} disconencted , reason --> ${reason}`);
    const palyerFormDb = db.getPlayerBySocketId(socket.id);
    if (palyerFormDb?.playerState == SD.playerStates.inMatch) {
      const roomFromDb = db.getRoomById(palyerFormDb.roomid);
      if (roomFromDb) {
        const opponentsocketid = roomFromDb.getOpponent(socket.id)?.socketid;
        sendAlert(opponentsocketid, "opponent left match");
      }
    }
    db.removePlayer(socket.id);
  }
  if (db.waitRoom.length < 2) {
    clearMatchMaking();
  }

  socket.on("disconnect", handler);
};
