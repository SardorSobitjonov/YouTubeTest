import React, { useState, useEffect } from 'react'
import menu from ".././img/menu.svg"
import menu2 from ".././img/menu2.svg"
import menu3 from ".././img/menu3.svg"
import YoutubeLogo from ".././img/YoutubeLogo.svg"
import YoutubeText from ".././img/YoutubeText.svg"
import axios from "axios"



const Header = ({handleLayout}) => {
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])
  const [searchTitle, setSearchTitle] = useState("")
  const [showSearchInput, setShowSearchInput] = useState(false);

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true)
      const response  = await axios.get("https://jsonplaceholder.typicode.com/todos") 
      setPosts(response.data);
      setLoading(false)
    }

    loadPosts()
  }, [])

  const handleSearch = () => {
    setLoading(!loading)
  }

  return (
    <>
        <div className="py-1 pe-2 Header">
            <div className="d-flex justify-content-between w-100">
            <div className="d-flex align-items-center">
                    <button onClick={handleLayout} className="btn border-0 py-1 layoutFlex"><i className='bi bi-list fs-3'></i></button>
                    <img className='logoIcon' src={YoutubeLogo} alt="Logo" />
                    <img className='logo' src={YoutubeText} alt="Logo" />
            </div>
            <div className='d-flex w-100 justify-content-between align-items-center navButtons'>
                <div className="searchBox btn-group" style={{width: '60%'}}>
                  <div>
                        <input type="search" placeholder='Search' className='searchInp' onClick={handleSearch} onChange={(e)=> setSearchTitle(e.target.value)}/>
                        <div className="resSearch">
                        {showSearchInput && (
                          <div className="searchHideBox">
                           <input type="search" placeholder='Search' style={{height: '30px', outline: 'none'}} onClick={handleSearch} onChange={(e)=> setSearchTitle(e.target.value)}/>
                           <button onClick={()=> setShowSearchInput(!showSearchInput)} className="btn btn-light"><i className='bi bi-x-lg'></i></button>
                          </div>
                        )}
                        <button onClick={() => setShowSearchInput(!showSearchInput)} className='btn btn-ligth d-none searchBtn'><i className='bi bi-search'></i></button>
                        </div>
                        {
                          loading ? (
                            posts?.slice(0, 25).filter((value)=> {
                            if(searchTitle === ""){
                              return value
                            }else if (
                              value.title.toLowerCase().includes(searchTitle.toLowerCase())
                            ){
                              return value
                            }
                          })
                
                          .map((item) => <div style={{position: 'relative', zIndex: '1', background: '#fff', height: '50px', border: '1px solid grey',borderRadius: '5px', display: 'flex', alignItems: 'center', zIndex: '1' }}>
                             <h6 className="searchResult" key={item?.id}>{item?.title}</h6>
                          </div>)
                          ) : ("")
                        }
                  </div>
                </div>
                <div className='flex mb-2'>
                    <button className="btn fs-4 headerBtn"><img src={menu2} alt="Error" /></button>
                    <button className="btn fs-4 headerBtn"><img src={menu} alt="Error" /></button>
                    <button className="btn fs-4 headerBtn"><img src={menu3} alt="Error" /></button>
                    <button className="btn navBtn"><i className='bi bi-person fs-5'></i></button>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Header