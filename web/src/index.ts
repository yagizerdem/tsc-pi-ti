import { getSocket, setBody, setPlayBtn, setSocket } from "./sd";
import { showAlert } from "./showAlert";
import { clearBody, printGate, printGateWithSpinner } from "./ui";

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

function registerListeners() {
  const socket = getSocket();

  socket.on("wait", () => {
    clearBody();
    printGateWithSpinner();
  });
  socket.on("alert", (message) => {
    showAlert(message);
  });
}
