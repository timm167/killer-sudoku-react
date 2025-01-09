import React from 'react';
import './css/Killer.css';

export default function Killer({grid, state}) {

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
        <div className="top-nav">
            <button className="navigation deleteBoxButton" onClick={() => handleDeleteBoxClick()}>
                Delete Box
            </button>
            <button className="navigation setBoxTotalButton" onClick={() => handleSetBoxClick()}>
                Set Box Total
            </button>
            <button className="navigation saveButton" onClick={() => handleCreateBoxClick()}>
                Create Box <span>(Enter)</span>
            </button>
            <button className="navigation killerButton" onClick={() => handleToggleColorClick()}>
                Toggle Color
            </button>
        </div>
    )
}