import React, { useState } from 'react';
import { setState } from '../../feature/countSlice'
import { useDispatch } from 'react-redux';
import './Buttons.css'

function Buttons() {

    const dispatch = useDispatch();
    
    const [currentValStr, setCurrentValStr] = useState('');
    
    const [prevValStr, setPrevValStr] = useState('');

    const [operand, setOperand] = useState('');

    let str = '';

    const addToValStr = (num) => {
        if (currentValStr.length === '') {
            // setCurrentValStr(num)
            str += num
        } else setCurrentValStr(prevVal => prevVal + num);

        console.log("CURRENT VAL " +currentValStr)
        console.log('PREV VAL '+ prevValStr)

        console.log(str)

        dispatch(setState(currentValStr))
    }

    const setOperation = (operand) => {
        if (prevValStr) {
            console.log('calculation');
            if (operand === '+') setCurrentValStr(`${parseFloat(prevValStr) + parseFloat(currentValStr)}`);
            else if (operand === '-') setCurrentValStr(`${parseFloat(prevValStr) - parseFloat(currentValStr)}`)
            else if (operand === '*') setCurrentValStr(`${parseFloat(prevValStr) * parseFloat(currentValStr)}`)
            else if (operand === '/') setCurrentValStr(`${parseFloat(prevValStr) / parseFloat(currentValStr)}`)
            else return

            console.log(currentValStr)
        } else {
            setPrevValStr(currentValStr);
            setCurrentValStr('');
            setOperand(operand);
        }
        dispatch(setState(currentValStr))
    }

    const deleteFromValStr = () => {
        if (currentValStr) {
            let val = currentValStr.split('');
            val.pop();
            console.log(val)
            setCurrentValStr(val.join(''))
        } else {
            return
        }

        dispatch(setState(currentValStr))
    }

    const resetCal = () => {
        setOperand('');
        setPrevValStr('');
        setCurrentValStr('');
        dispatch(setState(currentValStr))
    }

    const equalsPressed = () => {
        if(prevValStr.length === 0) {
            setPrevValStr(currentValStr);
            setCurrentValStr('');
        } else {
            console.log('calculation');
            if (operand === '+') setCurrentValStr(`${parseFloat(prevValStr) + parseFloat(currentValStr)}`);
            else if (operand === '-') setCurrentValStr(`${parseFloat(prevValStr) - parseFloat(currentValStr)}`)
            else if (operand === '*') setCurrentValStr(`${parseFloat(prevValStr) * parseFloat(currentValStr)}`)
            else if (operand === '/') setCurrentValStr(`${parseFloat(prevValStr) / parseFloat(currentValStr)}`)
            else return

            console.log(currentValStr)
        }

        dispatch(setState(currentValStr))
    }

    const setDecimal = () => {
        dispatch(setState(currentValStr))
    }


    return (
        <div className="Buttons">
            <div className="Buttons-container">
            
                    <button className='btn' onClick={(e) => {
                        e.preventDefault()
                    setCurrentValStr(prevVal => prevVal + e.target.innerText)
                    dispatch(setState(currentValStr))
                    }}>7</button>

                    <button className='btn' onClick={(e) => addToValStr(e.target.innerText)}>8</button>

                    <button className='btn' onClick={(e) => addToValStr(e.target.innerText)}>9</button>

                    <button className="calc-Del" onClick={(e) => deleteFromValStr()}>DEL</button>

                    <button className='btn' onClick={(e) => addToValStr(e.target.innerText)}>4</button>

                    <button className='btn' onClick={(e) => addToValStr(e.target.innerText)}>5</button>

                    <button className='btn' onClick={(e) => addToValStr(e.target.innerText)}>6</button>

                    <button className='btn' onClick={() => setOperation('+')}>+</button>

                    <button className='btn' onClick={(e) => addToValStr(e.target.innerText)}>1</button>

                    <button className='btn' onClick={(e) => addToValStr(e.target.innerText)}>2</button>

                    <button className='btn' onClick={(e) => addToValStr(e.target.innerText)}>3</button>

                    <button className='btn'onClick={() => setOperation('-')}>-</button>

                    <button className='btn' onClick={() => setDecimal()}>.</button>

                    <button className='btn' onClick={(e) => addToValStr(e.target.innerText)}>0</button>

                    <button className='btn' onClick={() => setOperation('-')}>/</button>

                    <button className='btn' onClick={() => setOperation('*')}>X</button>

                    <button className='ResetBtn' onClick={() => resetCal()}>RESET</button>
                    <button className='EqualBtn' onClick={() => equalsPressed()}>=</button>
                
            </div>
        </div>
    )
}

export default Buttons
