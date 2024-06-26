const { SD } = require("../lib/SD");
const { db } = require("../lib/db");
const waitEmitter = require("../emitters/wait");
const alertEmitter = require("../emitters/alert");
module.exports = (io, socket) => {
  function handler() {
    const playerFromDb = db.getPlayerBySocketId(socket.id);
    if (playerFromDb.playerState != SD.playerStates.home) {
      alertEmitter(socket.id, "you are already searching match ... ");
      return;
    }

    playerFromDb.playerState = SD.playerStates.searching;
    db.addNewSocketToWaitRoom(socket.id);
    waitEmitter(socket.id);
  }
  socket.on("search", handler);
};
