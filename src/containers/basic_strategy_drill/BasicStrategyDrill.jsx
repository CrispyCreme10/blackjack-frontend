import React, { useState, useEffect } from 'react'

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
  const [dealerCards, setDealerCards] = useState([]);
  const [heroCards, setHeroCards] = useState([]);
  const [heroHandValue, setHeroHandValue] = useState('');
  const [availableActions, setAvailableActions] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(undefined);

  const basicStrategyCompare = (action) => {
    const card1 = heroCards[0][0]; 
    const card2 = heroCards[1][0];
    let dealerUpcard = dealerCards[1][0];
    if (['J', 'Q', 'K'].includes(dealerUpcard)) {
      dealerUpcard = 'T';
    }
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

  const handleHit = (e) => {
    setIsCorrect(basicStrategyCompare('H'));

    handleShowResult();
  }

  const handleStand = (e) => {
    setIsCorrect(basicStrategyCompare('S'));

    handleShowResult();
  }

  const handleDouble = (e) => {
    setIsCorrect(basicStrategyCompare('D'));

    handleShowResult();
  }

  const handleSplit = (e) => {
    setIsCorrect(basicStrategyCompare('P'));

    handleShowResult();
  }

  const handleSurrender = (e) => {
    setIsCorrect(basicStrategyCompare('R'));

    handleShowResult();
  }

  const handleShowResult = () => {
    setShowResult(true);

    setTimeout(() => {
      setShowResult(false);
      handleDeal();
    }, 3000);
  }

  const fillShoe = () => {
    let cards = [];
    for(let i = 0; i < cardSuits.length; i++) {
      for(let j = 0; j < cardRanks.length; j++) {
        cards.push(cardRanks[j] + cardSuits[i])
      }
    }

    setShoe(fisherYatesShuffle(cards));
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
    setHeroCards(prev => []);
    setDealerCards(prev => []);

    const card1 = shoe.pop();
    const card2 = shoe.pop();
    setHeroCards(prev => [...prev, card1]);
    setDealerCards(prev => [...prev, card2]);

    const card3 = shoe.pop();
    const card4 = shoe.pop();
    setHeroCards(prev => [...prev, card3]);
    setDealerCards(prev => [...prev, card4]);

    setShoe(shoe);
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

    return lowVal === highVal ? lowVal : lowVal + (highVal < 21 ? `/${highVal}` : '')
  }

  useEffect(() => {
    fillShoe();
    handleDeal();
  }, []);

  useEffect(() => {
    if (heroCards.length > 0) {
      const handVal = calculateHand(heroCards);
      setHeroHandValue(handVal);
  
      let actions = 'HSDR';
      if (heroCards[0][0] === heroCards[1][0]) {
        actions += 'P'
      }
      setAvailableActions(actions);
    }
  }, [heroCards])

  return (
    <div className='BasicStrategyDrill'>
      {showResult &&
        <div>
          {isCorrect ? 'CORRECT' : 'WRONG'}
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
              <button onClick={e => handleHit(e)}>Hit</button>
            }
            {availableActions.includes('S') &&
              <button onClick={e => handleStand(e)}>Stand</button>
            }
            {availableActions.includes('D') &&
              <button onClick={e => handleDouble(e)}>Double</button>
            }
            {availableActions.includes('P') &&
              <button onClick={e => handleSplit(e)}>Split</button>
            }
            {availableActions.includes('R') &&
              <button onClick={e => handleSurrender(e)}>Surrender</button>
            }
          </div>
      </div>
    </div>
  )
}

export default BasicStrategyDrill