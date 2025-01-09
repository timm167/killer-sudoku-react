import React, {useState} from "react";
import "./css/TopNav.css";

export default function TopNav({ grid, state, stateSetters, gridSetters }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleUndoClick = () => {
        setIsChecked(false);
    }

    const handleResetClick = () => {
        isChecked ? window.location.reload() : setIsChecked(true) // Requires a double click to reset
        setTimeout(() => {setIsChecked(false)}, 4000); // Resets the button after 4 seconds to avoid accidental resets
    }

    const handleSaveClick = () => {
        console.log("Save"); 
        // fill in later
    }

    const handleKillerClick = () => {
        stateSetters.setKillerMode(!state.killerMode);
        // This is all this button needs to do I think
        // Other logic will rely on the killer mode state
    }

    return (
        <div className="top-nav-buttons">
            <button className="top-nav-button undo-button" onClick={() => handleUndoClick()}>
                Undo <span>(Bsp)</span>
            </button>
            <button className={`top-nav-button reset-button`} onClick={() => handleResetClick()}>
                {isChecked ? 'Reset!': 'Reset'}
            </button>
            <button className="top-nav-button save-button" onClick={() => handleSaveClick()}>
                Save
            </button>
            <button 
                className={`top-nav-button toggle-killer-button ${state.killerMode ? 'exit-killer-mode' : ''}`} 
                onClick={() => handleKillerClick()}
            >
                {state.killerMode ? 'Back' : 'Killer Mode'} <span>(Shft)</span>
            </button>
        </div>
    )
}