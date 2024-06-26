let BODY: HTMLBodyElement;
let SOCKET: Socket;
let PLAYBTN: HTMLButtonElement;
let CHATINPUT: HTMLInputElement;
let CHATBTN: HTMLButtonElement;
let LEAVEBTN: HTMLButtonElement;
let SCREEN: HTMLDivElement;
let ROW: HTMLDivElement;
let CMAIN: HTMLDivElement;
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
function setChatInput(input: HTMLInputElement) {
  CHATINPUT = input;
  return CHATINPUT;
}
function getChatInput() {
  return CHATINPUT;
}
function setChatBtn(btn: HTMLButtonElement) {
  CHATBTN = btn;
  return CHATBTN;
}
function getChatBtn() {
  return CHATBTN;
}
function setLeaveBtn(btn: HTMLButtonElement) {
  LEAVEBTN = btn;
  return LEAVEBTN;
}
function getLeaveBtn() {
  return LEAVEBTN;
}
function setScreen(screen: HTMLDivElement) {
  SCREEN = screen;
  return SCREEN;
}
function getScreen() {
  return SCREEN;
}
function setRow(div: HTMLDivElement) {
  ROW = div;
  return ROW;
}
function getRow() {
  return ROW;
}
function setCmain(div: HTMLDivElement) {
  CMAIN = div;
  return CMAIN;
}
function getCmain() {
  return CMAIN;
}

export {
  setBody,
  getBody,
  setSocket,
  getSocket,
  setPlayBtn,
  getPlayBtn,
  setChatInput,
  getChatInput,
  setChatBtn,
  getChatBtn,
  setLeaveBtn,
  getLeaveBtn,
  setScreen,
  getScreen,
  setRow,
  getRow,
  setCmain,
  getCmain,
};
