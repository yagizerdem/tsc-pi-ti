import {
  getChatInput,
  getRow,
  getScreen,
  getSocket,
  setBody,
  setChatBtn,
  setChatInput,
  setCmain,
  setLeaveBtn,
  setPlayBtn,
  setRow,
  setScreen,
  setSocket,
} from "./sd";
import { showAlert } from "./showAlert";
import {
  clearBody,
  printGate,
  printGateWithSpinner,
  printTable,
  pushChat,
} from "./ui";

const { io } = require("socket.io-client");

window.onload = init;

function init() {
  setSocket(
    io.connect(`http://localhost:${3000}`, {
      transports: ["websocket"],
    })
  );
  setBody(document.querySelector("body"));
  printGate();
  const playButton = setPlayBtn(document.querySelector("#playbtn"));
  playButton.addEventListener("click", findMatch);
  registerListeners();
}
function findMatch() {
  const socket = getSocket();
  socket.emit("search");
}
function sendChat() {
  const socket = getSocket();
  const input = getChatInput();
  const message = input.value;
  socket.emit("chat", message);
}
function recieveChat(message: String) {
  pushChat(message);
}
function leave() {
  window.location.reload();
}
function cardattop(card: Object) {
  // console.log(card, "card at top");
}
function playercards(cards: object) {
  console.log("player cards", cards);
  const row = getRow();
  console.log(row);
}
function registerListeners() {
  const socket = getSocket();

  socket.on("wait", () => {
    clearBody();
    printGateWithSpinner();
  });
  socket.on("alert", (message) => {
    showAlert(message);
  });
  socket.on("startgame", () => {
    clearBody();
    printTable();
    showAlert("game started");
    const chatbtn = setChatBtn(
      document.querySelectorAll(".table .screen button")[0] as HTMLButtonElement
    );
    setChatInput(
      document.querySelectorAll(".table .screen input")[0] as HTMLInputElement
    );
    const leaveBtn = setLeaveBtn(
      document.querySelectorAll(".table .screen button")[1] as HTMLButtonElement
    );
    setScreen(
      document.querySelectorAll(
        ".table .screen .chatscreen "
      )[0] as HTMLDivElement
    );
    setRow(document.querySelectorAll(".table .row ")[0] as HTMLDivElement);
    setCmain(document.querySelectorAll(".table .c-main ")[0] as HTMLDivElement);
    chatbtn.addEventListener("click", sendChat);
    leaveBtn.addEventListener("click", leave);
  });
  socket.on("chat", recieveChat);
  socket.on("cardattop", cardattop);
  socket.on("playercards", playercards);
}
