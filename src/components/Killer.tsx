import React from 'react';
import './css/Killer.css';

export default function Killer({grid, state, stateSetters, gridSetters}) {

    const handleDeleteBoxClick = () => {
        console.log("Delete Box");
    }

    const handleSetBoxClick = () => {
        console.log("Set Box Total");
    }

    const handleCreateBoxClick = () => {
        console.log("Create Box");
    }

    const handleToggleColorClick = () => {
        console.log("Toggle Color");
    }

    return (
        <div className='killer-buttons'>
            <div className={`${state.killerMode ? '' : 'hidden'} `}>
                <button className="killer-button delete-box-button" onClick={handleDeleteBoxClick}>
                    Delete Box
                </button>
                <button className="killer-button set-box-total-button" onClick={handleSetBoxClick}>
                    Set Box Total
                </button>
                <button className="killer-button create-box-button" onClick={handleCreateBoxClick}>
                    Create Box <span>(Enter)</span>
                </button>
                <button className="killer-button toggle-color-button" onClick={handleToggleColorClick}>
                    Toggle Color
                </button>
            </div>
        </div>
    )
}