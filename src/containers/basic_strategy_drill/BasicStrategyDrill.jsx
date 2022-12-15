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

    let actions = 'HSDRI';
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
  const actionColorMaps = {
    'S': 'chart-yellow',
    'D': 'chart-green',
    'R': 'chart-green',
    'Y': 'chart-green'
  }

  const upcardHeader = 
    <tr>
      <th></th>
      {upcards.map((val, index) => 
        <th key={index}>{val}</th>
      )}
    </tr>

  const hardTable = 
    <table className="info-table hard-table">
      <thead>
        <tr>
          <th colSpan="11" className="table-header">Hard Totals</th>
        </tr>
      {upcardHeader}
      </thead>
      <tbody>
        {hardChart.map((val, index) => 
          <tr key={index}>
            <th>{val.hand}</th>
            {val.upcards.map((upcard, ind) => 
              <td key={ind} className={actionColorMaps[upcard]}>{upcard}</td>
            )}
          </tr>
        )}
      </tbody>
    </table>

  const softTable = 
    <table className="info-table soft-table">
      <thead>
        <tr>
          <th colSpan="11" className="table-header">Soft Totals</th>
        </tr>
        {upcardHeader}
      </thead>
      <tbody>
        {softChart.map((val, index) => 
          <tr key={index}>
            <th>{val.hand.slice(0,1) + ',' + val.hand.slice(1,2)}</th>
            {val.upcards.map((upcard, ind) => 
              <td key={ind} className={actionColorMaps[upcard]}>{upcard}</td>
            )}
          </tr>
        )}
      </tbody>
    </table>

  const pairTable = 
    <table className="info-table pair-table">
      <thead>
        <tr>
          <th colSpan="11" className="table-header">Pair Splitting</th>
        </tr>
        {upcardHeader}
      </thead>
      <tbody>
        {pairChart.map((val, index) => 
          <tr key={index}>
            <th>{val.hand.slice(0,1) + ',' + val.hand.slice(1,2)}</th>
            {val.upcards.map((upcard, ind) => 
              <td key={ind} className={actionColorMaps[upcard]}>{upcard}</td>
            )}
          </tr>
        )}
      </tbody>
    </table>

  const legendTable = 
    <table className="legend-table">
      <thead>
        <th colSpan="2" className="table-header">Key</th>
      </thead>
      <tbody>
        <tr>
          <th className="chart-white">H</th>
          <td>Hit</td>
        </tr>
        <tr>
          <th className="chart-yellow">S</th>
          <td>Stand</td>
        </tr>
        <tr>
          <th className="chart-green">D</th>
          <td>Double</td>
        </tr>
        <tr>
          <th className="chart-green">Y</th>
          <td>Split the Pair</td>
        </tr>
        <tr>
          <th  className="chart-white">N</th>
          <td>Don't Split the Pair</td>
        </tr>
        <tr>
          <th className="chart-green">R</th>
          <td>Surrender</td>
        </tr>
      </tbody>
    </table>

  const correctHandsPercent = totalHands > 0 ? (correctHands / totalHands * 100).toFixed(2) : '0'

  return (
    <div className='BasicStrategyDrill'>
      <div className="Play">
        <div className="PageOptions">

        </div>
        <div className="ResultsText">
          {showResult &&
            <span>{isCorrect ? 'CORRECT' : 'WRONG'}</span>
          }
          {showBlackjack &&
            <span>BLACKJACK!!</span>
          }
        </div>
        <div className="Stats">
          <span>Accuracy</span>
          <span>{correctHands} / {totalHands}</span>
          <span>{correctHandsPercent}%</span>
        </div>
        <div className="Cards">
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
          </div>
        </div>
        <div className='BetOptions'>
          <button 
            className="ActionBtn"
            onClick={e => handleShowResult(HIT)}
            disabled={!availableActions.includes(HIT)}
          >
            Hit
          </button>
          <button 
            className="ActionBtn"
            onClick={e => handleShowResult(STAND)}
            disabled={!availableActions.includes(STAND)}
          >
            Stand
          </button>
          <button 
            className="ActionBtn"
            onClick={e => handleShowResult(DOUBLE)}
            disabled={!availableActions.includes(DOUBLE)}
          >
            Double
          </button>
          <button
            className="ActionBtn"
            onClick={e => handleShowResult(SPLIT)}
            disabled={!availableActions.includes(SPLIT)}
          >
            Split
          </button>
          <button 
            className="ActionBtn"
            onClick={e => handleShowResult(SURRENDER)}
            disabled={!availableActions.includes(SURRENDER)}
          >
            Surrender
          </button>
          <button 
            className="ActionBtn"
            onClick={e => handleShowResult(INSURANCE)}
            disabled={!availableActions.includes(INSURANCE)}
          >
            Insurance
          </button>
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