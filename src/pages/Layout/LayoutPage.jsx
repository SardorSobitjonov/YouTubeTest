import React from 'react'
import { Link } from 'react-router-dom'
import "./LayoutPage.css"
import Sub1 from "../../img/img-1.svg"
import Sub2 from "../../img/img-2.svg"
import Sub3 from "../../img/img-3.svg"


const LayoutPage = ({handleLayout}) => {
  return (
    <div className="layout w-100">
    {/* <div className="d-flex align-items-center">
    <button onClick={handleLayout} className="btn border-0 py-1"><i className='bi bi-list fs-3'></i></button>
    <img className='logoIcon' src={YoutubeLogo} alt="Logo" />
    <img className='logo' src={YoutubeText} alt="Logo" />
    </div> */}
      <ul className='layoutList'>
        <li className='layoutItem'>
          <i className="bi bi-house"></i>
          <Link to={'/'} className="layoutLink">Home</Link>
        </li>
    
        <li className='layoutItem'>
        <i className="bi bi-fire"></i>
          <Link to={'/'} className="layoutLink">Tranding</Link>
        </li>
    
        <li className='mb-3 layoutItem'>
        <i className="bi bi-folder2-open"></i>
          <Link to={'/subscriptions'} className="layoutLink">Subscription</Link>
        </li>
        <li className='layoutItem'>
        <i className="bi bi-folder"></i>
          <Link to={'/library'} className="layoutLink">Library</Link>
        </li>
        <li className='layoutItem'>
        <i className="bi bi-file-earmark-text"></i>
          <Link to={'/history'} className="layoutLink">History</Link>
        </li>
        <li className='layoutItem'>
        <i className="bi bi-alarm"></i>
          <Link to={'/watch'} className="layoutLink">Watch later</Link>
        </li>
        <li className='layoutItem'>
        <i className="bi bi-star"></i>
          <Link to={'/favorites'} className="layoutLink">Favorites</Link>
        </li>
        <li className='layoutItem'>
        <i className="bi bi-heart"></i>
          <Link to={'/likedvideo'} className="layoutLink">Liked videos</Link>
        </li>
        <li className='layoutItem'>
        <i className="bi bi-music-note-beamed"></i>
          <Link to={'/music'} className="layoutLink">Music</Link>
        </li>
        <li className='layoutItem'>
        <i className="bi bi-controller"></i>
          <Link to={'/games'} className="layoutLink">Games</Link>
        </li>
        <li className='layoutItem'>
        <i className="bi bi-chevron-down"></i>
          <button className='layoutLink border-0 bg-transparent'>Show more</button>
        </li>

        <li className='layoutItem py-3'>
          <h5>Subscriptions</h5>
        </li>
        <li className='layoutItem'>
          <img src={Sub1} alt="Error"/>
          <Link to={'/'} className="layoutLink">Gussie Singleton</Link>
        </li>
        <li className='layoutItem'>
          <img src={Sub2} alt="Error"/>
          <Link to={'/'} className="layoutLink">Nora Francis</Link>
        </li>
        <li className='layoutItem'>
          <img src={Sub3} alt="Error"/>
          <Link to={'/'} className="layoutLink">Belle Briggs</Link>
        </li>
        <li className="layoutItem pt-5">
          <i className="bi bi-gear"></i>
          <button className='layoutLink border-0 bg-transparent'>Settings</button>
        </li>
        
    
      </ul>
    </div>
  )
}

export default LayoutPage