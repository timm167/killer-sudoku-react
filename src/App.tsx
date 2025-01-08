import React, {useState} from 'react'
import './App.css'
import SudokuGrid from './components/Grid'

function App() {

  return (
    <>
      <div>
        <h1>Killer Sudoku</h1>
      </div>
      <div>
        <SudokuGrid/>
      </div>
    </>
  )
}

export default App
