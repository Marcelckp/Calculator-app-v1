import React from 'react';
import { useSelector } from 'react-redux';
import './Screen.css';

function Screen() {
    
    const { value } = useSelector(state => state.count);

    return (
        <div className='Screen'>
            <div className='Screen-container'>
                {/* <div>
                    <h1 className="screen-previous">100</h1>
                </div> */}
                <div><h1 className="screenShape">{0 ||value}</h1></div>
            </div>
        </div>
    )
}

export default Screen
