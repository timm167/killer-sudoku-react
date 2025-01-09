// Utility functions or constants
import React, {useEffect, useState} from 'react'
import { initializeGrid } from "./components/utils/Grid";
import initialState from './app-utils/initialState'

// Components
import SudokuGrid from './components/Grid'
import TopNav from './components/TopNav'
import Killer from './components/Killer'

// Styles
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
      <div className='app-container'>
        <h1>Killer Sudoku</h1>
      </div>
      <div>
        <TopNav grid={grid} state={state}/>
      </div>
      <div className='grid-container'>
        <SudokuGrid grid={grid} state={state}/>
      </div>
      <div>
        <Killer grid={grid} state={state}/>
      </div>
    </>
  )
}

export default App
