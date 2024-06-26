import { getBody, getScreen } from "./sd";
import { gate, gateWithSpinner, table } from "./template";

function printGate() {
  const body = getBody();
  body.innerHTML = gate;
}
function clearBody() {
  const body = getBody();
  body.innerHTML = null;
}
function printGateWithSpinner() {
  const body = getBody();
  body.innerHTML = gateWithSpinner;
}
function printTable() {
  const body = getBody();
  body.innerHTML = table;
}
function pushChat(message: String) {
  const wrapper = `<div class="message">${message}</div>`;
  const screen = getScreen();
  screen.innerHTML += wrapper;
}
export { printGate, clearBody, printGateWithSpinner, printTable, pushChat };
