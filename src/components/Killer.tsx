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
        <div className="killer-buttons-holder">
            <button className="killer-nav deleteBoxButton" onClick={() => handleDeleteBoxClick()}>
                Delete Box
            </button>
            <button className="killer-nav setBoxTotalButton" onClick={() => handleSetBoxClick()}>
                Set Box Total
            </button>
            <button className="killer-nav createBoxButton" onClick={() => handleCreateBoxClick()}>
                Create Box <span>(Enter)</span>
            </button>
            <button className="killer-nav toggleColorButton" onClick={() => handleToggleColorClick()}>
                Toggle Color
            </button>
        </div>
    )
}