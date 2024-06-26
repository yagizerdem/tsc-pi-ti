const {
  activateMatchMaing,
  clearMatchMaking,
} = require("../engine/matchMaking");
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
    if (this.waitRoom.length >= 2) {
      activateMatchMaing();
    }
  }
  removeSocketFromWaitRoom(socketid) {
    this.waitRoom = this.waitRoom.filter((item) => item != socketid);
    if (this.waitRoom.length < 2) {
      clearMatchMaking();
    }
  }
}

const db = new DB();

module.exports = { db };
