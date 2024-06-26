let BODY: HTMLBodyElement;
let SOCKET: Socket;
let PLAYBTN: HTMLButtonElement;
function setBody(data: HTMLBodyElement) {
  BODY = data;
  return BODY;
}
function getBody() {
  return BODY;
}
function setSocket(socket: Socket) {
  SOCKET = socket;
  return SOCKET;
}
function getSocket() {
  return SOCKET;
}
function setPlayBtn(btn: HTMLButtonElement) {
  PLAYBTN = btn;
  return PLAYBTN;
}
function getPlayBtn() {
  return PLAYBTN;
}

export { setBody, getBody, setSocket, getSocket, setPlayBtn, getPlayBtn };
