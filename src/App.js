import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import LayoutPage from './pages/Layout/LayoutPage';
import Tranding from './pages/Tranding';
import Video from './pages/Video/Video';

function App() {
  return (
    <>
    <div>

      <Header />
      <div className='d-flex'>
          <LayoutPage />
          <Home />
        </div>

      <Video />
    </div>

    </>
  );
}

export default App;
