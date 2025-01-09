import React, { useEffect } from 'react';
import './css/Killer.css';

export default function Killer({grid, state, stateSetters, gridSetters}) {

    // Four functions below just handle the various buttons in the killer mode
    // Currently they just update state but they will need to do more later

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
        stateSetters.setCurrentColorsArray()
    }

    return (
        <div className='killer-buttons'>
            <div className={`inner-killer-buttons ${state.killerMode ? '' : 'hidden'} `}>
                <button 
                    className="killer-button delete-box-button" 
                    onClick={handleDeleteBoxClick}
                >
                    {`${state.deletingBox ? 'Select a Box' : 'Delete Box'}`}
                </button>
                <button 
                    className="killer-button set-box-total-button" 
                    onClick={handleSetBoxClick}
                >
                    {`${state.settingBoxTotal ? 'Set Box Sum' : 'Select a Box'}`}
                </button>
                <button className="killer-button create-box-button" onClick={handleCreateBoxClick}>
                    {`${state.creatingBox ? 'Place Box' : 'New Box'}`} <span>(Enter)</span>
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