// React Imports
import React, { useState, useEffect } from 'react'

// Other Imports
import { basicStrategyCompare, calculateHand, hardChart, softChart, pairChart, upcards, HIT, STAND, DOUBLE, SPLIT, SURRENDER, INSURANCE } from '../../modules/blackjack-handler.js'
import { fisherYatesShuffle, cardRanks, cardSuits } from '../../modules/deck-handler.js'

// CSS Imports
import './BasicStrategyDrill.css'

const BasicStrategyDrill = () => {
  const cardFrontPath = 'http://localhost:3000/images/main';
  const cardBackPath = 'http://localhost:3000/images/backs';

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

  const handleShowResult = (action) => {
    const choseCorrectly = basicStrategyCompare(action, heroCards, dealerCards, heroHandValue);

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

  const initShoe = () => {
    const shuffledDeck = fillShoe();
    setShoe(shuffledDeck);
    // DEBUG
    // setShoe(['6s', '5s', 'Ah', '3c', '4s', 'Kh', '2c', 'As', 'Ts', 'Js', 'Qh', '2c']);
  }

  useEffect(() => {
    initShoe();
  }, []);

  useEffect(() => {
    if (shoe.length > 0) {
      handleDeal();
    }
  }, [shoe]);

  // JSX
  const upcardHeader = 
    <thead>
      <tr>
        <th></th>
        {upcards.map((val, index) => 
          <th key={index}>{val}</th>
        )}
      </tr>
    </thead>

  const hardTable = 
    <table>
      {upcardHeader}
      <tbody>
        {hardChart.map((val, index) => 
          <tr key={index}>
            <th>{val.hand}</th>
            {val.upcards.map((upcard, ind) => 
              <td key={ind}>{upcard}</td>
            )}
          </tr>
        )}
      </tbody>
    </table>

  const softTable = 
    <table>
      {upcardHeader}
      <tbody>
        {softChart.map((val, index) => 
          <tr key={index}>
            <th>{val.hand}</th>
            {val.upcards.map((upcard, ind) => 
              <td key={ind}>{upcard}</td>
            )}
          </tr>
        )}
      </tbody>
    </table>

  const pairTable = 
    <table>
      {upcardHeader}
      <tbody>
        {pairChart.map((val, index) => 
          <tr key={index}>
            <th>{val.hand}</th>
            {val.upcards.map((upcard, ind) => 
              <td key={ind}>{upcard}</td>
            )}
          </tr>
        )}
      </tbody>
    </table>

  const legendTable = 
    <table>
      
    </table>

  return (
    <div className='BasicStrategyDrill'>
      <div className="Play">
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
                width='80px'
                height='120px'
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
                width='80px'
                height='120px'
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
      <div className="Info">
        {hardTable}
        {softTable}
        {pairTable}
        {legendTable}
      </div>
    </div>
  )
}

export default BasicStrategyDrill