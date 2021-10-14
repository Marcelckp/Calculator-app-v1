import React, { useState } from 'react'
import './App.css';

//components
import Screen from './Components/Screen/Screen';
import Buttons from './Components/Buttons/Buttons';

function App() {

  return (
    <div className="App">
      <div className="calculatorBody">
        <div className="calculatorHeader">
          <div className="title">
            <h1>calc</h1>
          </div>
          <div className="ThemeSlider">
            <p className="Theme-Title">THEME</p>
            <div className='Theme-slider'>
              <p><span>1</span>   <span>2</span>   <span>3</span></p>
              <button type='radio'>soldit</button>
            </div>
          </div>
        </div>

        <div className="screen">
          <Screen />
        </div>
        
        <Buttons />
      </div>
    </div>
  );
}

export default App;
