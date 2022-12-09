import React, { useState, useEffect } from 'react'
import './BasicStrategyDrill.css'

const BasicStrategyDrill = () => {
  const cardFrontPath = 'http://localhost:3000/images/main';
  const cardBackPath = 'http://localhost:3000/images/backs';
  const basicStrategyChart = [
    {
      hand: '20',
      upcards: ['S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S']
    },
    {
      hand: '19',
      upcards: ['S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S']
    },
    {
      hand: '18',
      upcards: ['S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S']
    },
    {
      hand: '17',
      upcards: ['S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S']
    },
    {
      hand: '16',
      upcards: ['S', 'S', 'S', 'S', 'S', 'H', 'H', 'R', 'R', 'R']
    },
    {
      hand: '15',
      upcards: ['S', 'S', 'S', 'S', 'S', 'H', 'H', 'H', 'R', 'H']
    },
    {
      hand: '14',
      upcards: ['S', 'S', 'S', 'S', 'S', 'H', 'H', 'H', 'H', 'H']
    },
    {
      hand: '13',
      upcards: ['S', 'S', 'S', 'S', 'S', 'H', 'H', 'H', 'H', 'H']
    },
    {
      hand: '12',
      upcards: ['H', 'H', 'S', 'S', 'S', 'H', 'H', 'H', 'H', 'H']
    },
    {
      hand: '11',
      upcards: ['D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D']
    },
    {
      hand: '10',
      upcards: ['D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'H', 'H']
    },
    {
      hand: '9',
      upcards: ['H', 'D', 'D', 'D', 'D', 'H', 'H', 'H', 'H', 'H']
    },
    {
      hand: '8',
      upcards: ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H']
    },
    {
      hand: '7',
      upcards: ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H']
    },
    {
      hand: '6',
      upcards: ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H']
    },
    {
      hand: '5',
      upcards: ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H']
    },
    {
      hand: 'A9',
      upcards: ['S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S']
    },
    {
      hand: 'A8',
      upcards: ['S', 'S', 'S', 'S', 'D', 'S', 'S', 'S', 'S', 'S']
    },
    {
      hand: 'A7',
      upcards: ['D', 'D', 'D', 'D', 'D', 'S', 'S', 'H', 'H', 'H']
    },
    {
      hand: 'A6',
      upcards: ['H', 'D', 'D', 'D', 'D', 'H', 'H', 'H', 'H', 'H']
    },
    {
      hand: 'A5',
      upcards: ['H', 'H', 'D', 'D', 'D', 'H', 'H', 'H', 'H', 'H']
    },
    {
      hand: 'A4',
      upcards: ['H', 'H', 'D', 'D', 'D', 'H', 'H', 'H', 'H', 'H']
    },
    {
      hand: 'A3',
      upcards: ['H', 'H', 'H', 'D', 'D', 'H', 'H', 'H', 'H', 'H']
    },
    {
      hand: 'A2',
      upcards: ['H', 'H', 'H', 'D', 'D', 'H', 'H', 'H', 'H', 'H']
    },
    {
      hand: 'AA',
      upcards: ['Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y']
    },
    {
      hand: 'TT',
      upcards: ['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N']
    },
    {
      hand: '99',
      upcards: ['Y', 'Y', 'Y', 'Y', 'Y', 'N', 'Y', 'Y', 'N', 'N']
    },
    {
      hand: '88',
      upcards: ['Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y']
    },
    {
      hand: '77',
      upcards: ['Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'N', 'N', 'N', 'N']
    },
    {
      hand: '66',
      upcards: ['Y', 'Y', 'Y', 'Y', 'Y', 'N', 'N', 'N', 'N', 'N']
    },
    {
      hand: '55',
      upcards: ['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N']
    },
    {
      hand: '44',
      upcards: ['N', 'N', 'N', 'Y', 'Y', 'N', 'N', 'N', 'N', 'N']
    },
    {
      hand: '33',
      upcards: ['Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'N', 'N', 'N', 'N']
    },
    {
      hand: '22',
      upcards: ['Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'N', 'N', 'N', 'N']
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

  // TEST: KK --> 2
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
        return obj.upcards[dealerUpcardIndex] === (action === 'P' ? 'Y' : 'N');
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
      actions += 'P'
    }

    console.log({shadowShoe});
    console.log('----------');

    // if (shadowShoe.length < quarterShoe) {
    //   shadowShoe = fillShoe();

    //   console.log("Shoe after shuffle:");
    //   console.log({shadowShoe});
    //   console.log('----------');
    // }

    if (handVal === 21) {
      actions = '';
      setShowBlackjack(true);
      setTimeout(() => {
        setShowBlackjack(false);
      }, 2000);
    }

    setHeroCards(newHeroCards);
    setDealerCards(newDealerCards);
    setHeroHandValue(handVal);
    setAvailableActions(actions);
    setShoe(shadowShoe);
  }

  const getCardImage = (card) => {
    return `${cardFrontPath}/${card}.png`;
  }

  // TEST: ["Qh", "Ah"]
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
    //setShoe(shuffledDeck);
    setShoe(['4s', 'Kh', '2c', 'As']);
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
        <div>
          {isCorrect ? 'CORRECT' : 'WRONG'}
        </div>
      }
      {showBlackjack &&
        <div>
          BLACKJACK!!
        </div>
      }
      <div className='Dealer'>
        <div className='DealerHand'>
          <div className='Hand'>
            {dealerCards.map((card, index) => 
              <img 
                key={index} 
                src={index === 1 ? getCardImage(card) : cardBackPath + '/default_blue.png'}
                alt='card'
                width='75px'
                height='110px'
              />
            )}
            <br />
            <br />
          </div>
        </div>
      </div>
      <div className='Hero'>
        <div className='HeroHand'>
          <div className='Hand'>
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
        </div>
        <div className='Bet'>

        </div>
        <div className='BetOptions'>
            {availableActions.includes('H') &&
              <button onClick={e => handleShowResult('H')}>Hit</button>
            }
            {availableActions.includes('S') &&
              <button onClick={e => handleShowResult('S')}>Stand</button>
            }
            {availableActions.includes('D') &&
              <button onClick={e => handleShowResult('D')}>Double</button>
            }
            {availableActions.includes('P') &&
              <button onClick={e => handleShowResult('P')}>Split</button>
            }
            {availableActions.includes('R') &&
              <button onClick={e => handleShowResult('R')}>Surrender</button>
            }
          </div>
      </div>
    </div>
  )
}

export default BasicStrategyDrill