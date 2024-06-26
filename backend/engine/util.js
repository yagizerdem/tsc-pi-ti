const { Card } = require("../lib/card");
const { SD } = require("../lib/SD");
const { v4: uuidv4 } = require("uuid");
function createCards() {
  const allCards = [];
  for (let i = 1; i <= 10; i++) {
    allCards.push(
      new Card({ type: SD.cardTypes.karo, number: i + 1, id: uuidv4() })
    );
    allCards.push(
      new Card({ type: SD.cardTypes.kupa, number: i + 1, id: uuidv4() })
    );
    allCards.push(
      new Card({ type: SD.cardTypes.maca, number: i + 1, id: uuidv4() })
    );
    allCards.push(
      new Card({ type: SD.cardTypes.sinek, number: i + 1, id: uuidv4() })
    );
  }
  shuffle(allCards);
  return allCards;
}

function shuffle(arr) {
  var i = arr.length,
    j,
    temp;
  while (--i > 0) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
}

module.exports = { createCards };
