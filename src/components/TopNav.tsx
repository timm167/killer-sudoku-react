import React from "react";
import "./css/TopNav.css";

export default function TopNav({ grid, state, stateSetters, gridSetters }) {

    const handleUndoClick = () => {
        console.log("Undo");
    }

    const handleResetClick = () => {
        console.log("Reset");
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
            <button className="top-nav-button reset-button" onClick={() => handleResetClick()}>
                Reset
            </button>
            <button className="top-nav-button save-button" onClick={() => handleSaveClick()}>
                Save
            </button>
            <button className="top-nav-button toggle-killer-button" onClick={() => handleKillerClick()}>
                Killer Mode <span>(Shft)</span>
            </button>
        </div>
    )
}