import { getBody } from "./sd";
import { gate, gateWithSpinner } from "./template";

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
export { printGate, clearBody, printGateWithSpinner };
