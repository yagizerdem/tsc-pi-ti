const { db } = require("../lib/db");

module.exports = (io, socket) => {
  function handler(reason) {
    console.log(`socket id : ${socket.id} disconencted , reason --> ${reason}`);
    db.removePlayer(socket.id);
  }

  socket.on("disconnect", handler);
};
