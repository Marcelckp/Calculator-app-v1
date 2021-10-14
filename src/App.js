import React, { useState } from 'react'
import './App.css';

//components
import Buttons from './Components/Buttons/Buttons';

function App() {

  const [theme, setTheme] = useState(1)

  console.log(theme)
  return (
    <div className={`App ${theme === '2' ? 'theme2' : theme === '3' ? 'theme3' : null}`}>
      <div className="calculatorBody">
        <div className={`calculatorHeader ${theme === '2' ? 'Theme-title-theme2' : theme === '3' ? 'Theme-title-theme3' : null}`}>
          <div className="title">
            <h1>calc</h1>
          </div>
          <div className="ThemeSlider">
            <p className={`Theme-Title`}>THEME</p>
            <div className='Theme-slider'>
              <p onClick={(e) => setTheme(e.target.innerText)}><span>1</span>   <span>2</span>   <span>3</span></p>
              <button type='radio'>soldit</button>
            </div>
          </div>
        </div>

        <Buttons />
      </div>
    </div>
  );
}

export default App;
