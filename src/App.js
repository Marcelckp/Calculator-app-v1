import React, { useState } from 'react'
import { useCookies } from 'react-cookie';
import './App.css';


//components
import Buttons from './Components/Buttons/Buttons';

function App() {

  const [cookies, setCookies] = useCookies(['theme'])

  const handleCookie = (val) => {
    setCookies('theme', val, {
      path: '/'
    });
  }

  const [theme, setTheme] = useState(cookies.theme || 1);
  const [calSheetClicked, setSheetClicked] = useState(false);
  // console.log(cookies);

  return (
    <div className={`App ${theme === '2' ? 'theme2' : theme === '3' ? 'theme3' : null}`}>
      <div className="calculatorBody">
        <div className={`calculatorHeader ${theme === '2' ? 'Theme-title-theme2' : theme === '3' ? 'Theme-title-theme3' : null}`}>
          <div className="title">
            <h1 onClick={() => setSheetClicked(false)}>calc</h1>
          </div>
          <div className='ThemeSlider'>
            <p onClick={() => {
              if (calSheetClicked) setSheetClicked(false);
              else setSheetClicked(true);
            }}>Calc History</p>
          </div>
          <div className="ThemeSlider">
            <p className={`Theme-Title`}>THEME</p>
            <div className='Theme-slider'>
              <p onClick={(e) => {
                handleCookie(e.target.innerText)
                setTheme(e.target.innerText)
              }}><span>1</span> <span>2</span> <span>3</span></p>
              {/* <button type='radio'>sold</button> */}
            </div>
          </div>
        </div>
        <Buttons class={theme} calSheet={calSheetClicked} />
      </div>
    </div>
  );
}

export default App;
