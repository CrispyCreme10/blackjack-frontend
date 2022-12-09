import React, { useState, useEffect } from 'react'
import './BasicStrategyDrill.css'

const BasicStrategyDrill = () => {
  const cardFrontPath = 'http://localhost:3000/images/main';
  const cardBackPath = 'http://localhost:3000/images/backs';

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

  const cardRanks = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
  const cardSuits = ['h', 'd', 'c', 's'];

  const [shoe, setShoe] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [showBlackjack, setShowBlackjack] = useState(false);
  const [isCorrect, setIsCorrect] = useState(undefined);
  const [shoeSize, setShoeSize] = useState(1);
  const [correctHands, setCorrectHands] = useState(0);
  const [totalHands, setTotalHands] = useState(0);

  const [dealerCards, setDealerCards] = useState([]);
  const [heroCards, setHeroCards] = useState([]);
  const [heroHandValue, setHeroHandValue] = useState('');
  const [availableActions, setAvailableActions] = useState([]);

  const quarterShoe = shoeSize * 52 / 4;

  const convertFaceCard = (card) => {
    return ['J', 'Q', 'K'].includes(card) ? 'T' : card;
  }

  const basicStrategyCompare = (action) => {
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

  const handleShowResult = (action) => {
    const choseCorrectly = basicStrategyCompare(action);

    setIsCorrect(choseCorrectly);
    if (choseCorrectly) {
      setCorrectHands(prev => prev + 1);
    }

    setTotalHands(prev => prev + 1);

    setShowResult(true);
    setTimeout(() => {
      setShowResult(false);
      handleDeal();
    }, 2000);
  }

  const fillShoe = () => {
    let cards = [];
    for (let x = 0; x < shoeSize; x++) {
      for (let i = 0; i < cardSuits.length; i++) {
        for (let j = 0; j < cardRanks.length; j++) {
          cards.push(cardRanks[j] + cardSuits[i])
        }
      }
    }

    return fisherYatesShuffle(cards);
  }

  const fisherYatesShuffle = (deck) => {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const k = deck[i];
      deck[i] = deck[j];
      deck[j] = k
    }

    return deck;
  }

  const handleDeal = () => {
    let shadowShoe = shoe;
    console.log({shadowShoe});
    const heroCard1 = shadowShoe.pop();
    const dealerDownCard = shadowShoe.pop();
    const heroCard2 = shadowShoe.pop();
    const dealerUpcard = shadowShoe.pop();

    const newDealerCards = [dealerDownCard, dealerUpcard];
    const newHeroCards = [heroCard1, heroCard2];
    const handVal = calculateHand(newHeroCards);

    console.log('Dealer Upcard: ' + dealerUpcard);
    console.log('Hero Cards: ' + newHeroCards);
    console.log('Hero Hand Val: ' + handVal);

    let actions = 'HSDR';
    if (newHeroCards[0][0] === newHeroCards[1][0]) {
      actions += SPLIT
    }

    console.log({shadowShoe});
    console.log('----------');

    if (shadowShoe.length < quarterShoe) {
      shadowShoe = fillShoe();

      console.log("Shoe after shuffle:");
      console.log({shadowShoe});
      console.log('----------');
    }

    const is21 = handVal === '21';

    setHeroCards(newHeroCards);
    setDealerCards(newDealerCards);
    setHeroHandValue(handVal);
    setAvailableActions(is21 ? '' : actions);
    setShoe(shadowShoe);
    if (is21) {
      setShowBlackjack(true);
      setTimeout(() => {
        setShowBlackjack(false);
        handleDeal();
      }, 2000);
    }
  }

  const getCardImage = (card) => {
    return `${cardFrontPath}/${card}.png`;
  }

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

  const initShoe = () => {
    const shuffledDeck = fillShoe();
    setShoe(shuffledDeck);
    //setShoe(['6s', '5s', 'Ah', '3c', '4s', 'Kh', '2c', 'As', 'Ts', 'Js', 'Qh', '2c']);
  }

  useEffect(() => {
    initShoe();
  }, []);

  useEffect(() => {
    if (shoe.length > 0) {
      handleDeal();
    }
  }, [shoe]);

  return (
    <div className='BasicStrategyDrill'>
      {totalHands > 0 &&
        <div className="Stats">
          {correctHands} / {totalHands} {(correctHands / totalHands * 100).toFixed(2)}%
        </div>
      }
      {showResult &&
        <div className="Results-Text">
          {isCorrect ? 'CORRECT' : 'WRONG'}
        </div>
      }
      {showBlackjack &&
        <div className="Blackjack-Text">
          BLACKJACK!!
        </div>
      }
      <div className='Dealer'>
        <div className='DealerHand'>
          {dealerCards.map((card, index) => 
            <img 
              key={index} 
              src={index === 1 ? getCardImage(card) : cardBackPath + '/default_blue.png'}
              alt='card'
              width='75px'
              height='110px'
            />
          )}
        </div>
      </div>
      <br />
      <br />
      <div className='Hero'>
        <div className='HeroHand'>
          {heroCards.map((card, index) => 
            <img 
              key={index} 
              src={getCardImage(card)}
              alt='card'
              width='75px'
              height='110px'
            />
          )}
        </div>
        <div className='BetOptions'>
            {availableActions.includes(HIT) &&
              <button onClick={e => handleShowResult(HIT)}>Hit</button>
            }
            {availableActions.includes(STAND) &&
              <button onClick={e => handleShowResult(STAND)}>Stand</button>
            }
            {availableActions.includes(DOUBLE) &&
              <button onClick={e => handleShowResult(DOUBLE)}>Double</button>
            }
            {availableActions.includes(SPLIT) &&
              <button onClick={e => handleShowResult(SPLIT)}>Split</button>
            }
            {availableActions.includes(SURRENDER) &&
              <button onClick={e => handleShowResult(SURRENDER)}>Surrender</button>
            }
            {availableActions.includes(INSURANCE) &&
              <button onClick={e => handleShowResult(INSURANCE)}>Insurance</button>
            }
          </div>
      </div>
    </div>
  )
}

export default BasicStrategyDrill