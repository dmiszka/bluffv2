import React, { useState } from 'react';
import '../css/Players.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';



const Players: React.FC = () => {
    const navigate = useNavigate();
    const mainPageHandler = () => {
        navigate("/Main");
    }

    const [rangeValue, setRangeValue] = useState<number>(3);
    const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(event.target.value);
        setRangeValue(newValue);
    }
    return (
        <div>
            
            <div className='kontener'>
                <h1>Wybierz ilość graczy!</h1>
                <h2>{rangeValue}</h2>
                <input type="range" min="2" max="6" value={rangeValue} onChange={handleRangeChange} className="slider" id='slider' />

                {/* <input type="button" value="Start!" onClick={mainPageHandler} className='btn'/> */}

                <a onClick={mainPageHandler} className="neon-button">Start!</a>


            </div>

        </div>
    );
}

export default Players;