// Helper function to get the cube index
function getCubeIndex(row: number, column: number): number {
    return Math.floor(row / 3) * 3 + Math.floor(column / 3);
  }

// Define the Cell interface
// Not confident in the types but this seems okay. May need to adjust for box logic.
interface Cell {
    id: string;
    row: any;
    column: any;
    cube: number;
    canFocus: boolean;
    value: number;
    isSelected: boolean;
    isIncorrect: boolean;
    box: string | undefined;
    boxSum: number;
    boxDeclaredSum: number;
    boxColor: string;
    isFixed: boolean;
  }
  
// Helper function to initialize a cell
// This won't be used after creation. Data will be updated as part of state.
function initializeCell(row: number, column: number): Cell {
    return {
        id: `${row}-${column}`, // Unique identifier
        row: row, // Row index
        column: column, // Column index
        cube: getCubeIndex(row, column), // Cube index
        canFocus: true, // For graphics purposes
        value: 0, // Value of the cell (will have to make 0 invisible)
        isSelected: false, // Helps keyboard navigation, input, and graphics
        isIncorrect: false, // Sets value to wrong when a constraint is violated
        box: undefined, // Will be useful for box constraints built later
        boxSum: 0, // Will be useful for box constraints built later
        boxDeclaredSum: 0, // Will be useful for box constraints built later
        boxColor: '', // Will be useful for box constraints built later
        isFixed: false // Fixes the value for backend or play. Only updates on save or send. NOT NEEDED UNTIL BACKEND BUILDING
    };
}


// Initialize the grid with cells
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
export { initializeGrid };  // Export the function to initialize the grid