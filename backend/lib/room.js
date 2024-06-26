class Room {
  constructor() {
    this.whitePlayer = null;
    this.blackPlayer = null;
    this.turn = null;
    this.whiteCards = [];
    this.blackCards = [];
    this.tableCards = [];
    this.whitePoint = 0;
    this.blackPoint = 0;
  }
}
module.exports = { Room };
