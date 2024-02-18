import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import LayoutPage from './pages/Layout/LayoutPage';
import Channel from './pages/ChannelPage/Channel'
import Header from './pages/Header';
import { useState } from 'react';
import Video from './pages/Video/Video';
 
const App = () => {
  const [layoutOpen, setlayoutOpen] = useState(true)

  const handleLayout = () => {
    setlayoutOpen(!layoutOpen)
  }

  return(
    <>
      <div>
        <Header handleLayout={handleLayout}/>
        <div className='d-flex w-100'>
          <div className="layoutFlex">
            {
              layoutOpen && <LayoutPage/>
            }
          </div>
          <div>
          <Routes>
            <Route path='/' element={<Home handleLayout={handleLayout}/>}/>
            <Route path='/video' element={<Video/>}/>
            <Route path='/channel' element={<Channel/>}/>
          </Routes>
          {
            <Video /> && (<div className='d-none'><LayoutPage /></div>)
          }
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
