class Room {
  constructor() {
    this.roomid = null;
    this.whitePlayer = null;
    this.blackPlayer = null;
    this.turn = null;
    this.whiteCards = [];
    this.blackCards = [];
    this.tableCards = [];
    this.allCards = [];
    this.whitePoint = 0;
    this.blackPoint = 0;
  }
  getOpponent(socketid) {
    if (this.whitePlayer.socketid == socketid) return this.blackPlayer;
    return this.whitePlayer;
  }
}
module.exports = { Room };
