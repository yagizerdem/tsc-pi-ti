const { getIo } = require("../socket-setup");
const io = getIo();
module.exports = (socketid) => {
  io.to(socketid).emit("wait");
};
