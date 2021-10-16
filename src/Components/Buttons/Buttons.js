import { useState } from 'react';
import './Buttons.css';
import './Screen.css';

function Buttons(props) {

    
    const [calculation, setCalculation] = useState('');
    const [result, setResult] = useState(null);

    const [completedCalculations, setCompletedCalculations] = useState([]);

    const operands = ['*', '+', '/', '-', '.'];

    console.log(props.calSheet)

    const addToValStr = num => {
        if (num === '/' || num === '*' || num === '+' || num === '-' || num === '.'){
            if (calculation.length > 1 && operands.includes(calculation.slice(-1))) {
                return;
            } else {
                setResult(null)
                setCalculation(calculation + num)
            }
        } else {
            setResult(null)
            setCalculation(calculation + num);
        }
    }

    const deleteFromValStr = () => {
        if (calculation === '') {
            return;
        } else {
            let val = calculation.toString().split('')||0;
            val.pop();
            setCalculation(val.join(''));
            setResult('');
        }
    }

    const resetCal = () => {
        setCalculation('');
        setResult(null);
    }

    const equalsPressed = () => {
        if (!result && !operands.includes(calculation.slice(-1))) {
            setResult(eval(calculation));
            setCalculation(eval(calculation));

            setCompletedCalculations(prevVal => [...prevVal, calculation])
        } else if (!result && operands.includes(calculation.slice(-1))) {
            alert('Check Your calculation you evaluated a incomplete sum')
        }
    }

    console.log(completedCalculations)

    return (
        <div>
            {props.calSheet ? 
            <div className={`calSheet-container ${props.class === '2' ? 'calSheet-container-th2' : props.class === '3' ? 'calSheet-container-th3' : null}`}>
                <p>Calculation History</p>
                <div className={`cal-showcase`}>
                    {completedCalculations.map((arr, i) => {
                        return <div key={i} className={`cal ${props.class === '2' ? 'cal-showcase-th2' : props.class === '3' ? 'cal-showcase-th3' : null}`}>
                            <span className='indexNo'> ( {i} ) </span>
                            <p>{arr} = <span>{ eval(arr) }</span></p>
                        </div>
                    })}
                </div>
            </div> :
            <>
                <div className={`Screen`}>
                    <div className={`Screen-container ${props.class === '2' ? 'Screen-container-theme2' : props.class === '3' ? 'Screen-container-theme3' : null}`}>
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
            }
        </div>
    )
}

export default Buttons
