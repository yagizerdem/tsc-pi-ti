class Player {
  constructor({ socketid = null, roomid = null, playerState = null }) {
    this.socketid = socketid;
    this.roomid = roomid;
    this.playerState = playerState;
  }
}
module.exports = { Player };
