import React, { useState } from 'react'
import LayoutPage from '../pages/Layout/LayoutPage'
import menu from ".././img/menu.svg"
import menu2 from ".././img/menu2.svg"
import menu3 from ".././img/menu3.svg"
import YoutubeLogo from ".././img/YoutubeLogo.svg"
import YoutubeText from ".././img/YoutubeText.svg"
import Home from '../pages/Home'



const Header = () => {

  return (
    <>
        <div className="border py-1 nav">
            <div style={{width: '95%'}} className="flex justify-content-between m-auto">
            <div className="d-flex align-items-center">
                <div>
                    <button className="btn border-0 py-1"><i className='bi bi-list fs-3'></i></button>
                    <img src={YoutubeLogo} alt="Logo" />
                    <img src={YoutubeText} alt="Logo" />
                </div>
            </div>
            <div className="searchBox d-flex w-50 btn-group searchItem">
                    <input type="search" placeholder='Search' className='searchInp'/>
                    <button className='btn border border-start-0 searchBtn'><i className='bi bi-search'></i></button>
            </div>
            <div className='flex mb-2'>
                <button className="btn fs-4"><img src={menu2} alt="Error" /></button>
                <button className="btn fs-4"><img src={menu} alt="Error" /></button>
                <button className="btn fs-4"><img src={menu3} alt="Error" /></button>
                <button className="btn navBtn"><i className='bi bi-person fs-5'></i></button>
            </div>
            </div>
        </div>
    </>
  )
}

export default Header