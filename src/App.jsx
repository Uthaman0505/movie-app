import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import MovieDetails from './components/movie-details/MovieDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} ></Route>
        <Route path='/:id/movie-details' element={<MovieDetails />} ></Route>
      </Routes>
    </Router>
  )
}

export default App



