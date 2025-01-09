// Utility functions or constants
import React, {useEffect, useState} from 'react'
import { initializeGrid } from "./components/utils/Grid";
import initialState from './app-utils/initialState'

// Components
import SudokuGrid from './components/Grid'
import TopNav from './components/TopNav'
import Killer from './components/Killer'
import Solve from './components/Solve'

// Styles
import './App.css' 

function App() {
  const [grid, setGrid] = useState(initializeGrid()); // Sets the grid initially ready for logic to handle its data
  const [state, setState] = useState(initialState) // Sets the state of the app to the initial state 

  // State update functions using the spread operator to update grid
  // ADD FUNCTIONS HERE LATER
  // NOT REALLY SURE WHAT THESE LOOK LIKE YET

  // State update functions using spread operator to update state

  // Function to set the isValid state
  const setIsValid = (value: boolean) => {
    setState(prevState => ({
      ...prevState,
      isValid: value,
    }));
  };

  // Function to set the deletingBox state
  const setDeletingBox = (value: boolean) => {
    setState(prevState => ({
      ...prevState,
      deletingBox: value,
    }));
  };

  // Function to set the settingBoxTotal
  const setSettingBoxTotal = (value: boolean) => {
    setState(prevState => ({
      ...prevState,
      settingBoxTotal: value,
    }));
  };

  // Function to set the togglingSums state
  const setTogglingSums = (value: boolean) => {
    setState(prevState => ({
      ...prevState,
      togglingSums: value,
    }));
  };

  // Function to set the killerMode state
  const setKillerMode = (value: boolean) => {
    setState(prevState => ({
      ...prevState,
      killerMode: value,
    }));
  };

    // Not 100% sure what to do with this yet
  const handleSelectedCell = (value: any) => {
    // fill in later
  };

  // For debugging will delete later
  useEffect(() => {
    console.log(state);
    console.log(grid);
  }, [state, grid])

  return (
    <>
      <div className='container'>
        <h1>Killer Sudoku</h1>
      </div>
      <div>
        {/* TopNav component renders 4 buttons: Undo, Reset, Save, Toggle Killer Mode */}
        <TopNav grid={grid} state={state}/>
      </div>
      <div className='container'>
        {/* SudokuGrid container renders the grid itself */}
        <SudokuGrid grid={grid} state={state}/>
      </div>
      <div className='container'>
        {/* Killer component renders 4 buttons: Delete Box, Set Box Total, Create Box, and Toggle Color */}
        <Killer grid={grid} state={state}/>
      </div>
      <div className='container'>
        {/* Solve renders 2 buttons: Import, and solve */}
        <Solve grid={grid} state={state}/>
      </div>
    </>
  )
}

// Exports to be rendered in main.tsx
export default App
