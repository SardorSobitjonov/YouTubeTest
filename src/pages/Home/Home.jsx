import React, { useEffect, useState } from 'react'
import "./Home.css"
import Sub1 from '../../img/img-1.svg'
import { Link } from 'react-router-dom';

const Home = ({handleLayout}) => {
  const [video, setVideo] = useState([]);
  const [videoRec, setVideoRec] = useState([]);
  const [videoChan, setVideoChan] = useState([]);
  const [homeCarouselRec, setHomeCarouselRec] = useState([]);
  const [homeCarouselChan, setHomeCarouselChan] = useState([]);
  
  const [homeCarousel, setHomeCarousel] = useState(0)

  const homeCarouselPrev = () => {
    if(homeCarousel == 0){
      console.log()
    }else{
      setHomeCarousel(homeCarousel + 360)  
    }
  }
  const homeCarouselNext = () => {
      setHomeCarousel(homeCarousel - 360)
  }
  const homeCarouselRecPrev = () => {
    if(homeCarouselRec == 0){
      console.log()
    }else{
      setHomeCarouselRec(homeCarouselRec + 400)  
    }
  }
  const homeCarouselRecNext = () => {
      setHomeCarouselRec(homeCarouselRec - 400)
  }
  const homeCarouselChanPrev = () => {
    if(homeCarouselChan == 0){
      console.log()
    }else{
      setHomeCarouselChan(homeCarouselChan + 360)  
    }
  }
  const homeCarouselChanNext = () => {
      setHomeCarouselChan(homeCarouselChan - 360)
  }

  // useEffect(() => {
  //   const getVideo = async () => {
  //     const url = 'https://youtube138.p.rapidapi.com/home/?hl=en&gl=US';
  //     const options = {
  //       method: 'GET',
  //       headers: {
  //         'X-RapidAPI-Key': 'ce741966f8msh1aaff1b43c04263p149173jsna7aaba40bcff',
  //         'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  //       }
  //     };
      
  //     try {
  //       const response = await fetch(url, options);
  //       const result = await response.json();
  //       setVideo(result);
  //       console.log(result);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   getVideo()
  // }, [])
  // useEffect(() => {
  //   const getVideo = async () => {
  //     const url = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UCJ5v_MCY6GNUBTO8-D3XoAg&hl=en&gl=US';
  //     const options = {
  //       method: 'GET',
  //       headers: {
  //         'X-RapidAPI-Key': '68c1274539msh590b47591a2fe0ep1fdb6cjsn882e41e6b0fa',
  //         'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  //       }
  //     };
      
  //     try {
  //       const response = await fetch(url, options);
  //       const result = await response.json();
  //       setVideoRec(result);

  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   getVideo()
  // }, [])
  // useEffect(() => {
  //   const getVideo = async () => {
  //     const url = 'https://youtube138.p.rapidapi.com/playlist/videos/?id=PLcirGkCPmbmFeQ1sm4wFciF03D_EroIfr&hl=en&gl=US';
  //     const options = {
  //       method: 'GET',
  //       headers: {
  //         'X-RapidAPI-Key': '68c1274539msh590b47591a2fe0ep1fdb6cjsn882e41e6b0fa',
  //         'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  //       }
  //     };
      
  //     try {
  //       const response = await fetch(url, options);
  //       const result = await response.json();
  //       setVideoChan(result);
  //       console.log(result);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   getVideo()
  // }, [])

  return (
    <div className='d-flex flex-column w-100 gap-2 home'>
      <div className="homeResHide d-flex" style={{width: "85%"}}>
        <div className="w-100 d-flex gap-2 align-items-center">
          <img style={{width: '50px'}} src={Sub1} alt="Error" />
          <Link to={'/channel'} className='videoChannel'>
            <h2>Doller Blair</h2>
          </Link>
        </div>
        <div className='d-flex gap-2 px-5'>
          <button onClick={homeCarouselPrev} className="carouselBtn"><i className='bi bi-chevron-left'></i></button>
          <button onClick={homeCarouselNext} className="carouselBtn"><i className='bi bi-chevron-right'></i></button>
        </div>
      </div>
      <div>
      <ul style={{'--homeCarousel' : `${homeCarousel + 'px'}`}} className='homeResHide VideoList1 VideoList'>
          {video?.contents?.map((item) => {
            return<>
            <li>
               <Link to={"/video"} style={{textDecoration: 'none'}} onClick={() => handleLayout(false)}>
              <div className='HomeVideo'>
                <img className="VideoImg" src={item?.video?.thumbnails[0]?.url} alt="Error" />
                <h6 className='px-2 py-1'>{item?.video?.title.slice(0, 40)}</h6>
                <div className="d-flex align-items-center justify-content-between text-secondary px-2">
                <div className='d-flex gap-4 justify-content-between'>
                  <p><i className='bi bi-eye'> </i>{(item?.video?.stats?.views) ? (item?.video?.stats?.views) : "0"}</p>
                  <p>{item?.video?.publishedTimeText}</p>
                  </div>
                  <p>Doller Blair</p>
                </div>
              </div>
            </Link>
            </li>
            </>
})}    
        </ul>
      </div>
      <div className="w-100 homeRecPage">
        <div className='d-flex justify-content-between py-3 homeResHide ' style={{width: "85%"}}>
          <div>
           <h3>Recommended</h3>  
          </div>
          <div className='d-flex gap-2 px-5'>
          <button onClick={homeCarouselRecPrev} className="carouselBtn"><i className='bi bi-chevron-left'></i></button>
          <button onClick={homeCarouselRecNext} className="carouselBtn"><i className='bi bi-chevron-right'></i></button>
        </div>
        </div>
        <div style={{'--homeCarouselRec' : `${homeCarouselRec + 'px'}`}} className='d-flex w-100 gap-2 VideoListRec VideoList'>
            {/* {videoRec?.contents?.map((item) => {
            return<>
            <div>
               <Link to={"/video"} style={{textDecoration: 'none', color: 'black'}} onClick={() => handleLayout(false)}>
              <div className='HomeRecVideo'>
                <img className="VideoImg" src={item?.video?.thumbnails[0]?.url} alt="Error" />
                <h6 className='px-2 py-1'>{item?.video?.title.slice(0, 35)}</h6>
                <div className="d-flex align-items-center justify-content-between text-secondary px-2">
                <div className='d-flex gap-4 justify-content-between'>
                  <p><i className='bi bi-eye'> </i>{(item?.video?.stats?.views) ? (item?.video?.stats?.views) : "0"}</p>
                  <p>{item?.video?.publishedTimeText}</p>
                  </div>
                </div>
              </div>
            </Link>
            </div>
            </>
})} */}
        <div className='ResVid'>
               <Link to={"/video"} style={{textDecoration: 'none', color: 'black'}} onClick={() => handleLayout(false)}>
              <div className='HomeRecVideo'>
                <img className="VideoImg" src={Sub1} alt="Error" />
                <h6 className='px-2 py-1'>Lorem, ipsum dolor.lorem loremlorem</h6>
                <div className="d-flex align-items-center justify-content-between text-secondary px-2">
                <div className='d-flex gap-4 justify-content-between homeVidBottom'>
                  <p><i className='bi bi-eye'> </i>99889230k marta</p>
                  <p>3 monthly ago</p>
                  </div>
                </div>
              </div>
            </Link>
            </div>     
        <div className="ResVid">
               <Link to={"/video"} style={{textDecoration: 'none', color: 'black'}}>
              <div className='HomeRecVideo'>
                <img className="VideoImg" src={Sub1} alt="Error" />
                <h6 className='px-2 py-1'>Lorem, ipsum dolor.lorem loremlorem</h6>
                <div className="d-flex align-items-center justify-content-between text-secondary px-2">
                <div className='d-flex gap-4 justify-content-between'>
                  <p><i className='bi bi-eye'> </i>99889230k marta</p>
                  <p>3 monthly ago</p>
                  </div>
                </div>
              </div>
            </Link>
            </div>
        <div className="ResVid">
               <Link to={"/video"} style={{textDecoration: 'none', color: 'black'}}>
              <div className='HomeRecVideo'>
                <img className="VideoImg" src={Sub1} alt="Error" />
                <h6 className='px-2 py-1'>Lorem, ipsum dolor.lorem loremlorem</h6>
                <div className="d-flex align-items-center justify-content-between text-secondary px-2">
                <div className='d-flex gap-4 justify-content-between'>
                  <p><i className='bi bi-eye'> </i>99889230k marta</p>
                  <p>3 monthly ago</p>
                  </div>
                </div>
              </div>
            </Link>
            </div>
            </div>
      </div>
      <div className="w-100 d-flex justify-content-between  pt-5 homeResHide ">
        <div className="d-flex gap-2 align-items-center">
          <img style={{width: '50px', height: '50px', borderRadius: "50%"}} src='https://cdn.pixabay.com/photo/2016/10/27/22/52/apples-1776744_640.jpg' alt="Error" />
          <Link to={'/channel'} className='videoChannel'>
            <h2>Food & Drink</h2>
          </Link>
          <div style={{height: '30px'}} className="p-1">
            <p className='text-secondary'>Recommended channel for you</p>
          </div>
        </div>
        <div className='d-flex gap-2 w-50 py-2 align-items-center justify-content-center'>
          <button className="btn btn-danger subsBtn">Subscribe 2.3m</button>
          <button onClick={homeCarouselChanPrev} className="carouselBtn"><i className='bi bi-chevron-left'></i></button>
          <button onClick={homeCarouselChanNext} className="carouselBtn"><i className='bi bi-chevron-right'></i></button>
        </div>
      </div>
      <div className='d-flex w-100 gap-4 homeResHide VideoListChan VideoList' style={{'--homeCarouselChan' : `${homeCarouselChan + 'px'}`}}>
      {videoChan?.contents?.map((item) => {
            return<>
            <div>
               <Link to={"/video"} style={{textDecoration: 'none'}} onClick={() => handleLayout(false)}>
              <div className='HomeVideo'>
                <img className="VideoImg" src={item?.video?.thumbnails[0]?.url} alt="Error" />
                <h6 className='px-2 py-1'>{item?.video?.title.slice(0, 40)}</h6>
                <div className="d-flex align-items-center justify-content-between text-secondary px-2">
                <div className='d-flex gap-4 justify-content-between'>
                  <p><i className='bi bi-eye'> </i>{(item?.video?.stats?.views) ? (item?.video?.stats?.views) : "0"}</p>
                  </div>
                  <p>Food & Drink</p>
                </div>
              </div>
            </Link>
            </div>
            </>
})}
      </div>
      <div className='resLayout'>
          <Link to={"/"} className="resLink">
            <i className='bi bi-house'></i>
          </Link>
          <Link to={"/video"} className="resLink">
            <i className='bi bi-fire'></i>
          </Link>
          <Link to={"/"} className="resLink">
            <i className='bi bi-folder2-open'></i>
          </Link>
          <Link to={"/"} className="resLink">
            <i className='bi bi-person'></i>
          </Link>
      </div>
    </div>
  )
}

export default Home
