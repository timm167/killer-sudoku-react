import React, {useState} from "react";
import "./css/TopNav.css";

export default function TopNav({ grid, state, stateSetters, gridSetters }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleUndoClick = () => {
        setIsChecked(false);
    }

    const handleResetClick = () => {
        isChecked ? window.location.reload() : setIsChecked(true)
        setTimeout(() => {setIsChecked(false)}, 3000);
    }

    const handleSaveClick = () => {
        console.log("Save");
    }

    const handleKillerClick = () => {
        stateSetters.setKillerMode(!state.killerMode);
    }

    return (
        <div className="top-nav-buttons">
            <button className="top-nav-button undo-button" onClick={() => handleUndoClick()}>
                Undo <span>(Bsp)</span>
            </button>
            <button className={`top-nav-button reset-button`} onClick={() => handleResetClick()}>
                {isChecked ? 'Are you sure?': 'Reset'}
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