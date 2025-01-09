import React, { useEffect } from 'react';
import './css/Killer.css';

export default function Killer({grid, state, stateSetters, gridSetters}) {

    const handleDeleteBoxClick = () => {
        stateSetters.setDeletingBox(!state.deletingBox);
    }

    const handleSetBoxClick = () => {
        stateSetters.setSettingBoxTotal(!state.settingBoxTotal);
    }

    const handleCreateBoxClick = () => {
        stateSetters.setCreatingBox(!state.creatingBox);
    }

    const handleToggleColorClick = () => {
        console.log(state.currentColorsArray);
        console.log(state.currentColorsArray[state.currentColorsArray.length - 1]);   
        stateSetters.setCurrentColorsArray()
    }

    return (
        <div className='killer-buttons'>
            <div className={`inner-killer-buttons ${state.killerMode ? '' : 'hidden'} `}>
                <button className="killer-button delete-box-button" onClick={handleDeleteBoxClick}>
                    Delete Box
                </button>
                <button className="killer-button set-box-total-button" onClick={handleSetBoxClick}>
                    Set Box Total
                </button>
                <button className="killer-button create-box-button" onClick={handleCreateBoxClick}>
                    Create Box <span>(Enter)</span>
                </button>
                <button 
                    className={`killer-button toggle-color-button ${state.currentColorsArray[state.currentColorsArray.length - 1]}`} 
                    onClick={handleToggleColorClick}
                >
                    Toggle Color
                </button>
            </div>
        </div>
    )
}