import React, {useState} from "react";
import {getCubeIndex} from '../utils/utils'

// Helper function to initialize a cell

function initializeCell(row, column) {
    const cell = {
        id: `${row}-${column}`, // Unique identifier
        row: row, // Row index
        column: column, // Column index
        cube: getCubeIndex(row, column), // Cube index
        canFocus: true, // For graphics purposes
        value: '', // Value of the cell
        isSelected: false, // Is the cell selected? Helps keyboard navigation and input
        isIncorrect: false, // Sets value to wrong when a constraint is violated
        inBox: undefined, // Will be useful for box constraints built later
        boxSum: 0, // Will be useful for box constraints built later
        boxDeclaredSum: 0, // Will be useful for box constraints built later
        boxColor: '', // Will be useful for box constraints built later
        isFixed: false, // Fixes the value for backend or play. Only updates on save or send. NOT NEEDED UNTIL BACKEND BUILDING
        // Note to self: simplify box logic as much as possible
        // Any more properties for box logic? 
        // Additional properties for cells allow for grid to be a single source of truth
    }
    return (
        <div>
            <input  
                type="text"
                className="cell cell-focus"
                autoComplete="off"
                value={cell.value} // Value of the cell
                // onChange={(e) => handleInputChange(e, row, column)} // Event handler
                // onClick={() => handleCellClick(row, column)} // Another event handler
            />
            {...cell}
        </div>
    )
}

// Helper function to initialize the grid

function initializeGrid() {
    const grid = []
    for (let i = 0; i < 9; i++) {
        const row = []
        for (let j = 0; j < 9; j++) {
            initializeCell(i, j)
        }
    }
    return grid
}

export default function Grid() {
    const [state, setState] = useState({
        grid: initializeGrid(),
        isValid: true,
        deletingBox: false,
        settingBoxTotal: false,
        togglingSums: false,
        selectedCell: null,
    });
}