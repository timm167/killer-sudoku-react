import React from "react";
import "./css/Solve.css";

export default function Solve({ grid, state, stateSetters, gridSetters }) {

    const handleImportClick = () => {
        console.log("Import");
    }

    const handleSolveClick = () => {
        console.log("Solve");
    }

    return (
        <div className="solve-buttons-holder">
            <button className="solve-nav import-button" onClick={() => handleImportClick()}>
                Import
            </button>
            <button className="solve-nav solve-button" onClick={() => handleSolveClick()}>
                Solve
            </button>
        </div>
    )
}