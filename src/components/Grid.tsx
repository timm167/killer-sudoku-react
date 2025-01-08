import React, {useState} from "react";
import './css/Grid.css';

// Define the Cell interface
interface Cell {
  id: string;
  row: any;
  column: any;
  cube: number;
  canFocus: boolean;
  value: string;
  isSelected: boolean;
  isIncorrect: boolean;
  inBox: undefined;
  boxSum: number;
  boxDeclaredSum: number;
  boxColor: string;
  isFixed: boolean;
}

// Helper function to get the cube index
function getCubeIndex(row: number, column: number): number {
  return Math.floor(row / 3) * 3 + Math.floor(column / 3);
}

// Helper function to initialize a cell
function initializeCell(row: number, column: number): Cell {
  return {
    id: `${row}-${column}`, // Unique identifier
    row: row, // Row index
    column: column, // Column index
    cube: getCubeIndex(row, column), // Cube index
    canFocus: true, // For graphics purposes
    value: '', // Value of the cell
    isSelected: false, // Helps keyboard navigation, input, and graphics
    isIncorrect: false, // Sets value to wrong when a constraint is violated
    inBox: undefined, // Will be useful for box constraints built later
    boxSum: 0, // Will be useful for box constraints built later
    boxDeclaredSum: 0, // Will be useful for box constraints built later
    boxColor: '', // Will be useful for box constraints built later
    isFixed: false // Fixes the value for backend or play. Only updates on save or send. NOT NEEDED UNTIL BACKEND BUILDING
  };
}

// Initialize the grid with cells
// Might want to move this to a utils file
function initializeGrid(): Cell[][] { // Cell[][] is a 2D array of cells that can be accessed by grid[row][column] (the same as in my prototype)
    const grid: Cell[][] = []; 
    for (let i = 0; i < 9; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < 9; j++) {
        row.push(initializeCell(i, j)); // This just returns the data for the cell. Cell can be created in the main component function. 
      }
      grid.push(row);
    }
    return grid;
  }
  

export default function SudokuGrid() {
    const [state, setState] = useState({
        grid: initializeGrid(),
        isValid: true,
        deletingBox: false,
        settingBoxTotal: false,
        togglingSums: false,
        selectedCell: null,
    });

    return (
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