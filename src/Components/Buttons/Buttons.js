import { useState } from 'react';
import './Buttons.css';
import './Screen.css';

function Buttons(props) {

    
    const [calculation, setCalculation] = useState('');
    const [result, setResult] = useState(null);

    const addToValStr = num => {
        setResult(null)
        setCalculation(calculation + num);
    }

    const deleteFromValStr = () => {
        if (calculation.length === 0) {
            return;
        } else {
            let val = calculation.split('');
            val.pop();
            setCalculation(val.join(''));
        }
    }

    const resetCal = () => {
        setCalculation('');
        setResult(null);
    }

    const equalsPressed = () => {
        if (!result) {
            setResult(eval(calculation));
            // setCalculation('');
        } else {
            return
        }

        // console.log(eval(calculation));
    }

    console.log(props.class)

    return (
        <>
        <div className={`Screen`}>
            <div className={`Screen-container ${props.class === '2' ? 'Screen-container-theme2' : props.class === '3' ? 'Screen-container-theme3' : null}`}>
                {/* <div>
                    <h1 className="screen-previous"></h1>
                </div> */}
                {result || result === 0 ? 
                    <div><h1 className="screenShape" style={{color: '#D03F30'}}>{result}</h1></div>
                :
                    <div><h1 className="screenShape">{calculation || 0}</h1></div>}
                
            </div>
        </div>
        <div className="Buttons">
            <div className={`Buttons-container ${props.class === '2' ? 'Buttons-container-theme2' : props.class === '3' ? 'Buttons-container-theme3' : null}`}>
                    <button className={`btn hov ${props.class === '2' ? 'btn-pad-theme2' : props.class === '3' ? 'btn-pad-theme3' : null}`} onClick={() => addToValStr('7')}>7</button>

                    <button className={`btn hov ${props.class === '2' ? 'btn-pad-theme2' : props.class === '3' ? 'btn-pad-theme3' : null}`} onClick={(e) => addToValStr(e.target.innerText)}>8</button>

                    <button className={`btn hov ${props.class === '2' ? 'btn-pad-theme2' : props.class === '3' ? 'btn-pad-theme3' : null}`} onClick={(e) => addToValStr(e.target.innerText)}>9</button>

                    <button className={`calc-Del ${props.class === '2' ? 'func-theme2' : props.class === '3' ? 'func-theme3' : null}`} onClick={(e) => deleteFromValStr()}>DEL</button>

                    <button className={`btn hov ${props.class === '2' ? 'btn-pad-theme2' : props.class === '3' ? 'btn-pad-theme3' : null}`} onClick={(e) => addToValStr(e.target.innerText)}>4</button>

                    <button className={`btn hov ${props.class === '2' ? 'btn-pad-theme2' : props.class === '3' ? 'btn-pad-theme3' : null}`} onClick={(e) => addToValStr(e.target.innerText)}>5</button>

                    <button className={`btn hov ${props.class === '2' ? 'btn-pad-theme2' : props.class === '3' ? 'btn-pad-theme3' : null}`} onClick={(e) => addToValStr(e.target.innerText)}>6</button>

                    <button className={`btn hov ${props.class === '2' ? 'btn-pad-theme2' : props.class === '3' ? 'btn-pad-theme3' : null}`} onClick={(e) => addToValStr(e.target.innerText)}>+</button>

                    <button className={`btn hov ${props.class === '2' ? 'btn-pad-theme2' : props.class === '3' ? 'btn-pad-theme3' : null}`} onClick={(e) => addToValStr(e.target.innerText)}>1</button>

                    <button className={`btn hov ${props.class === '2' ? 'btn-pad-theme2' : props.class === '3' ? 'btn-pad-theme3' : null}`} onClick={(e) => addToValStr(e.target.innerText)}>2</button>

                    <button className={`btn hov ${props.class === '2' ? 'btn-pad-theme2' : props.class === '3' ? 'btn-pad-theme3' : null}`} onClick={(e) => addToValStr(e.target.innerText)}>3</button>

                    <button className={`btn hov ${props.class === '2' ? 'btn-pad-theme2' : props.class === '3' ? 'btn-pad-theme3' : null}`}onClick={() => addToValStr('-')}>-</button>

                    <button className={`btn hov ${props.class === '2' ? 'btn-pad-theme2' : props.class === '3' ? 'btn-pad-theme3' : null}`} onClick={() => addToValStr('.')}>.</button>

                    <button className={`btn hov ${props.class === '2' ? 'btn-pad-theme2' : props.class === '3' ? 'btn-pad-theme3' : null}`} onClick={(e) => addToValStr(e.target.innerText)}>0</button>

                    <button className={`btn hov ${props.class === '2' ? 'btn-pad-theme2' : props.class === '3' ? 'btn-pad-theme3' : null}`} onClick={() => addToValStr('/')}>/</button>

                    <button className={`btn hov ${props.class === '2' ? 'btn-pad-theme2' : props.class === '3' ? 'btn-pad-theme3' : null}`} onClick={() => addToValStr('*')}>X</button>

                    <button className={`ResetBtn ${props.class === '2' ? 'func-theme2' : props.class === '3' ? 'func-theme3' : null}`} onClick={() => resetCal()}>RESET</button>
                    <button className={`EqualBtn ${props.class === '2' ? 'EqualBtn-theme2' : props.class === '3' ? 'EqualBtn-theme3' : null}`} onClick={() => equalsPressed()}>=</button>
                
            </div>
        </div>
        </>
    )
}

export default Buttons
