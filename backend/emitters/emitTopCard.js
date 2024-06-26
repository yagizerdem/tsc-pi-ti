const { getIo } = require("../socket-setup");

const io = getIo();
module.exports = (socketid, card) => {
  io.to(socketid).emit("cardattop", card);
};
