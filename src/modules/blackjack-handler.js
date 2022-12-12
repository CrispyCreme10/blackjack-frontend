const HIT = 'H';
const STAND = 'S';
const DOUBLE = 'D';
const SPLIT = 'P';
const SURRENDER = 'R';
const INSURANCE = 'I';

const SPLIT_YES = 'Y';
const SPLIT_NO = 'N';

const basicStrategyChart = [
  {
    hand: '20',
    upcards: [STAND, STAND, STAND, STAND, STAND, STAND, STAND, STAND, STAND, STAND]
  },
  {
    hand: '19',
    upcards: [STAND, STAND, STAND, STAND, STAND, STAND, STAND, STAND, STAND, STAND]
  },
  {
    hand: '18',
    upcards: [STAND, STAND, STAND, STAND, STAND, STAND, STAND, STAND, STAND, STAND]
  },
  {
    hand: '17',
    upcards: [STAND, STAND, STAND, STAND, STAND, STAND, STAND, STAND, STAND, STAND]
  },
  {
    hand: '16',
    upcards: [STAND, STAND, STAND, STAND, STAND, HIT, HIT, SURRENDER, SURRENDER, SURRENDER]
  },
  {
    hand: '15',
    upcards: [STAND, STAND, STAND, STAND, STAND, HIT, HIT, HIT, SURRENDER, HIT]
  },
  {
    hand: '14',
    upcards: [STAND, STAND, STAND, STAND, STAND, HIT, HIT, HIT, HIT, HIT]
  },
  {
    hand: '13',
    upcards: [STAND, STAND, STAND, STAND, STAND, HIT, HIT, HIT, HIT, HIT]
  },
  {
    hand: '12',
    upcards: [HIT, HIT, STAND, STAND, STAND, HIT, HIT, HIT, HIT, HIT]
  },
  {
    hand: '11',
    upcards: [DOUBLE, DOUBLE, DOUBLE, DOUBLE, DOUBLE, DOUBLE, DOUBLE, DOUBLE, DOUBLE, DOUBLE]
  },
  {
    hand: '10',
    upcards: [DOUBLE, DOUBLE, DOUBLE, DOUBLE, DOUBLE, DOUBLE, DOUBLE, DOUBLE, HIT, HIT]
  },
  {
    hand: '9',
    upcards: [HIT, DOUBLE, DOUBLE, DOUBLE, DOUBLE, HIT, HIT, HIT, HIT, HIT]
  },
  {
    hand: '8',
    upcards: [HIT, HIT, HIT, HIT, HIT, HIT, HIT, HIT, HIT, HIT]
  },
  {
    hand: '7',
    upcards: [HIT, HIT, HIT, HIT, HIT, HIT, HIT, HIT, HIT, HIT]
  },
  {
    hand: '6',
    upcards: [HIT, HIT, HIT, HIT, HIT, HIT, HIT, HIT, HIT, HIT]
  },
  {
    hand: '5',
    upcards: [HIT, HIT, HIT, HIT, HIT, HIT, HIT, HIT, HIT, HIT]
  },
  {
    hand: 'A9',
    upcards: [STAND, STAND, STAND, STAND, STAND, STAND, STAND, STAND, STAND, STAND]
  },
  {
    hand: 'A8',
    upcards: [STAND, STAND, STAND, STAND, DOUBLE, STAND, STAND, STAND, STAND, STAND]
  },
  {
    hand: 'A7',
    upcards: [DOUBLE, DOUBLE, DOUBLE, DOUBLE, DOUBLE, STAND, STAND, HIT, HIT, HIT]
  },
  {
    hand: 'A6',
    upcards: [HIT, DOUBLE, DOUBLE, DOUBLE, DOUBLE, HIT, HIT, HIT, HIT, HIT]
  },
  {
    hand: 'A5',
    upcards: [HIT, HIT, DOUBLE, DOUBLE, DOUBLE, HIT, HIT, HIT, HIT, HIT]
  },
  {
    hand: 'A4',
    upcards: [HIT, HIT, DOUBLE, DOUBLE, DOUBLE, HIT, HIT, HIT, HIT, HIT]
  },
  {
    hand: 'A3',
    upcards: [HIT, HIT, HIT, DOUBLE, DOUBLE, HIT, HIT, HIT, HIT, HIT]
  },
  {
    hand: 'A2',
    upcards: [HIT, HIT, HIT, DOUBLE, DOUBLE, HIT, HIT, HIT, HIT, HIT]
  },
  {
    hand: 'AA',
    upcards: [SPLIT_YES, SPLIT_YES, SPLIT_YES, SPLIT_YES, SPLIT_YES, SPLIT_YES, SPLIT_YES, SPLIT_YES, SPLIT_YES, SPLIT_YES]
  },
  {
    hand: 'TT',
    upcards: [SPLIT_NO, SPLIT_NO, SPLIT_NO, SPLIT_NO, SPLIT_NO, SPLIT_NO, SPLIT_NO, SPLIT_NO, SPLIT_NO, SPLIT_NO]
  },
  {
    hand: '99',
    upcards: [SPLIT_YES, SPLIT_YES, SPLIT_YES, SPLIT_YES, SPLIT_YES, SPLIT_NO, SPLIT_YES, SPLIT_YES, SPLIT_NO, SPLIT_NO]
  },
  {
    hand: '88',
    upcards: [SPLIT_YES, SPLIT_YES, SPLIT_YES, SPLIT_YES, SPLIT_YES, SPLIT_YES, SPLIT_YES, SPLIT_YES, SPLIT_YES, SPLIT_YES]
  },
  {
    hand: '77',
    upcards: [SPLIT_YES, SPLIT_YES, SPLIT_YES, SPLIT_YES, SPLIT_YES, SPLIT_YES, SPLIT_NO, SPLIT_NO, SPLIT_NO, SPLIT_NO]
  },
  {
    hand: '66',
    upcards: [SPLIT_YES, SPLIT_YES, SPLIT_YES, SPLIT_YES, SPLIT_YES, SPLIT_NO, SPLIT_NO, SPLIT_NO, SPLIT_NO, SPLIT_NO]
  },
  {
    hand: '55',
    upcards: [SPLIT_NO, SPLIT_NO, SPLIT_NO, SPLIT_NO, SPLIT_NO, SPLIT_NO, SPLIT_NO, SPLIT_NO, SPLIT_NO, SPLIT_NO]
  },
  {
    hand: '44',
    upcards: [SPLIT_NO, SPLIT_NO, SPLIT_NO, SPLIT_YES, SPLIT_YES, SPLIT_NO, SPLIT_NO, SPLIT_NO, SPLIT_NO, SPLIT_NO]
  },
  {
    hand: '33',
    upcards: [SPLIT_YES, SPLIT_YES, SPLIT_YES, SPLIT_YES, SPLIT_YES, SPLIT_YES, SPLIT_NO, SPLIT_NO, SPLIT_NO, SPLIT_NO]
  },
  {
    hand: '22',
    upcards: [SPLIT_YES, SPLIT_YES, SPLIT_YES, SPLIT_YES, SPLIT_YES, SPLIT_YES, SPLIT_NO, SPLIT_NO, SPLIT_NO, SPLIT_NO]
  }
]
const upcards = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'A'];

const calculateHand = (hand) => {
  let lowVal = 0;
  let highVal = 0;
  hand.forEach(card => {
    const val = Number(card[0]);
    if (isNaN(val)) {
      if (card[0] === 'A') {
        lowVal += 1;
        highVal += 11;
      } else {
        lowVal += 10;
        highVal += 10;
      }
    } else {
      lowVal += val;
      highVal += val;
    }
  })

  if (highVal === 21) {
    return highVal.toString();
  } else if (lowVal === highVal) {
    return lowVal.toString();
  } else {
    return `${lowVal}/${highVal}`
  }
}

const convertFaceCard = (card) => {
  return ['J', 'Q', 'K'].includes(card) ? 'T' : card;
}

const basicStrategyCompare = (action, heroCards, dealerCards, heroHandValue) => {
  const card1 = convertFaceCard(heroCards[0][0]); 
  const card2 = convertFaceCard(heroCards[1][0]);
  let dealerUpcard = convertFaceCard(dealerCards[1][0]);
  const dealerUpcardIndex = upcards.indexOf(dealerUpcard);
  let cardStr = '';

  const card1IsAce = card1 === 'A';
  const card2IsAce = card2 === 'A';
  if (card1IsAce ^ card2IsAce) {
    if (card1IsAce) {
      cardStr = card1 + card2;
    } else {
      cardStr = card2 + card1;
    }

    const obj = basicStrategyChart.find(obj => obj.hand === cardStr);
    if (obj !== undefined) {
      return obj.upcards[dealerUpcardIndex] === action;
    } else {
      console.log('A obj not found');
    }
  } else if (card1 === card2) {
    cardStr = card1 + card2;

    const obj = basicStrategyChart.find(obj => obj.hand === cardStr);
    if (obj !== undefined) {
      return obj.upcards[dealerUpcardIndex] === (action === SPLIT ? SPLIT_YES : SPLIT_NO);
    } else {
      console.log('pair obj not found');
    }
  } else {
    cardStr = heroHandValue.toString();
    const obj = basicStrategyChart.find(obj => obj.hand === cardStr);
    if (obj !== undefined) {
      return obj.upcards[dealerUpcardIndex] === action;
    } else {
      console.log('pair obj not found');
    }
  }
}

const hardChart = basicStrategyChart.slice(3, 13);
const softChart = basicStrategyChart.slice(16, 24);
const pairChart = basicStrategyChart.slice(24);

export { basicStrategyCompare, calculateHand, hardChart, softChart, pairChart, upcards, HIT, STAND, DOUBLE, SPLIT, SURRENDER, INSURANCE };