let _io;
function setIo(io) {
  _io = io;
}
function getIo() {
  return _io;
}
module.exports = { getIo, setIo };
