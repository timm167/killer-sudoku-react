import React from "react";
import "./css/TopNav.css";

export default function TopNav({ grid, state }) {

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
        console.log("Killer Mode");
    }

    return (
        <div className="top-nav">
            <button className="navigation" onClick={() => handleUndoClick()}>
                Undo <span>(Bsp)</span>
            </button>
            <button className="navigation" onClick={() => handleResetClick()}>
                Reset
            </button>
            <button className="navigation" onClick={() => handleSaveClick()}>
                Save
            </button>
            <button className="navigation" onClick={() => handleKillerClick()}>
                Killer Mode <span>(Shft)</span>
            </button>
        </div>
    )
}