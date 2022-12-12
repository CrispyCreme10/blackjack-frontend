const cardRanks = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
const cardSuits = ['h', 'd', 'c', 's'];

const fisherYatesShuffle = (deck) => {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const k = deck[i];
    deck[i] = deck[j];
    deck[j] = k
  }

  return deck;
}

export { fisherYatesShuffle, cardRanks, cardSuits };