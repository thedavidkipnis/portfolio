
import './index.css'
import MainPage from './components/MainPage';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className='NavBarStrip'></div>
      <MainPage />
    </div>
  );
}

export default App;
