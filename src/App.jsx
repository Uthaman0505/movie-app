import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} ></Route>
      </Routes>
    </Router>
  )
}

export default App



