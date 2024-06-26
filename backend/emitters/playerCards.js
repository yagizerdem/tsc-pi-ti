const { getIo } = require("../socket-setup");
const io = getIo();
module.exports = (socketid, cards) => {
  io.to(socketid).emit("playercards", cards);
};
