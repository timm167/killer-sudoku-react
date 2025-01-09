import React from "react";
import './css/Grid.css';
  
export default function SudokuGrid({grid, state, stateSetters, gridSetters}) {

    const handleCellChange = (e, cell) => {
        cell.value = e.target.value;
        // fill in later
    }
    
    const handleCellClick = (cell) => {
        // fill in later
    }
    return (
        // maps through the grid, then each row, to define a div for each cell (I need this for adding extra non-input elements later)
        <div className={`grid ${state.deletingBox ? 'highlight-grid' : ''}`}>
            {grid.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                    {row.map((cell, cellIndex) => (
                        <div
                            key={cell.id}
                            className={`cell ${cell.isSelected ? 'selected' : ''} ${cell.isIncorrect ? 'incorrect' : ''}`}
                            onClick={() => handleCellClick(cell)}
                            onChange={(e) => handleCellChange(e, cell)}
                        >
                            <input 
                                type="text"
                                value={cell.value}
                            />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}