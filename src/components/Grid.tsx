import React, {useState} from "react";
import { initializeGrid } from "./utils/Grid";
import './css/Grid.css';
  
export default function SudokuGrid() {
    const [state, setState] = useState({ // State should move to app.tsx
        grid: initializeGrid(),
        isValid: true,
        deletingBox: false,
        settingBoxTotal: false,
        togglingSums: false,
        selectedCell: null,
    });

    return (
        // This is the grid that will be rendered. It will be updated by the state object.
        // All components need to be able to access the state object that will edit this grid.
        // maps through the grid, then each row, to define a div for each cell (I need this for adding extra non-input elements later)
        <div className="grid">
            {state.grid.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                    {row.map((cell, cellIndex) => (
                        <div
                            key={cell.id}
                            className={`cell ${cell.isSelected ? 'selected' : ''} ${cell.isIncorrect ? 'incorrect' : ''}`}
                            // onClick={() => handleCellClick(cell)}
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