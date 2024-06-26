const { SD } = require("./SD");
class DB {
  constructor() {
    this.allPlayers = {};
    this.allRooms = {};
    this.waitRoom = [];
  }
  getAllRooms() {
    return this.allRooms;
  }
  getRoomById(roomid) {
    return this.allRooms[roomid];
  }
  addRoom(newRoom) {
    this.allRooms[newRoom.roomid] = newRoom;
  }
  delteRoom(roomid) {
    delete this.allRooms[roomid];
  }
  getAllPlayers() {
    return this.allPlayers;
  }
  getPlayerBySocketId(socketid) {
    return this.allPlayers[socketid];
  }
  addNewPlayer(newPlayer) {
    this.allPlayers[newPlayer.socketid] = newPlayer;
  }
  removePlayer(socketid) {
    if (this.allPlayers[socketid].playerState == SD.playerStates.searching) {
      db.removeSocketFromWaitRoom(socketid);
    }
    delete this.allPlayers[socketid];
  }
  getWaitRoom() {
    return this.waitRoom;
  }
  addNewSocketToWaitRoom(socketid) {
    this.waitRoom.push(socketid);
  }
  removeSocketFromWaitRoom(socketid) {
    this.waitRoom = this.waitRoom.filter((item) => item != socketid);
  }
  shiftSocketFromWaitRoom() {
    const socketid = this.waitRoom.shift();
    return socketid;
  }
}

const db = new DB();

module.exports = { db };
