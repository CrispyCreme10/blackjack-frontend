import React from 'react'
import BasicStrategyDrill from './containers/basic_strategy_drill/BasicStrategyDrill';
import Sidebar from './containers/sidebar/Sidebar';

import './App.css';

// FONT AWESOME
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight, faArrowLeft, faHouse, faMinus, faRankingStar } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowRight, faArrowLeft, faHouse, faMinus, faRankingStar);

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <BasicStrategyDrill />
    </div>
  );
}

export default App;
