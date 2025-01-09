import React, {useEffect, useState} from 'react'
import { initializeGrid } from "./components/utils/Grid";
import SudokuGrid from './components/Grid'
import initialState from './app-utils/initialState'
import './App.css' 

function App() {
  const [grid, setGrid] = useState(initializeGrid()); 
  const [state, setState] = useState(initialState)  

  useEffect(() => {
    console.log(state);
    console.log(grid);
  }, [state, grid])

  return (
    <>
      <div>
        <h1>Killer Sudoku</h1>
      </div>
      <div>
        <SudokuGrid grid={grid} state={state}/>
      </div>
    </>
  )
}

export default App
