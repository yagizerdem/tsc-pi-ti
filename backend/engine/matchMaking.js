var loop = null;
const db = require("../lib/db");

function activateMatchMaing() {
  if (!loop) {
    loop = setInterval(pair, 100);
  }
}

function clearMatchMaking() {
  if (loop) {
    clearInterval(loop);
    loop = null;
  }
}
function pair() {
  console.log("paried");
}
module.exports = { activateMatchMaing, clearMatchMaking };
