const { getIo } = require("../socket-setup");
const io = getIo();
module.exports = (socketid, message) => {
  io.to(socketid).emit("chat", message);
};
