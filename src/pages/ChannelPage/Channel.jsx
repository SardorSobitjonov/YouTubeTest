import React, { useEffect, useState } from 'react'
import"./channel.css"
import channelImg from '../ChannelPage/img/channel1.png'
import ovalImg from "../ChannelPage/img/Oval12.png"
import zvanokImg from "../ChannelPage/img/zvanokImg.png"
import serarch14 from "../ChannelPage/img/search14.png"
import coverImg from "../ChannelPage/img/Coverimg.png"
import img1 from "../ChannelPage/img/1.png"
import img2 from "../ChannelPage/img/2.png"
import img3 from "../ChannelPage/img/3.png"
import videosImg from "../ChannelPage/img/videosimg.png"
import videosImg2 from "../ChannelPage/img/videosimg2.png"
import videosImg3 from "../ChannelPage/img/videosimg3.png"
import videosImg4 from "../ChannelPage/img/videosimg4.png"
import videosImg5 from "../ChannelPage/img/videosimg5.png"
import { Link } from 'react-router-dom'

const Channel = () => {

  const [chanCarousel, setChanCarousel] = useState(0)

  const chanCarouselPrev = () => {
    if(chanCarousel == 0){
      console.log();
    }else{
      setChanCarousel(chanCarousel + 360)
    }
  }
  const chanCarouselNext = () => {
      setChanCarousel(chanCarousel - 360)
  }

  const [channelVid, setChannelVid] = useState([])

  useEffect(() => {
    const getChanVid = async() => {
      const url = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UCJ5v_MCY6GNUBTO8-D3XoAg&hl=en&gl=US';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '14990bc8b4msh14f16578ca943cbp1b6010jsn132677e67dfa',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
  setChannelVid(result)
	console.log(result);
} catch (error) {
	console.error(error);
}
    }
    getChanVid()
  }, [])

  return (
    <div className='channel-box'>
     <img src={channelImg} alt="channel" className='channelImg' />

     <div className="box">
      <div className="box1">

      <img src={ovalImg} alt="oval"  className='ovalImg'/>

      </div>
      <div>
    <h4 className='box-h2'>Margaret Phelps</h4>
    <p className="box-p">245K subscribed</p>
      </div>

      <div className="box2">
       <img src={zvanokImg} alt="foto" className='zvanokImg' />
       <button className='subscribe-btn'>Subscribe 2.3m</button>
      </div>

     </div>
     <ul className="channelUl">

     <li className='channelItem'>
          <Link to={'/'} className="channelLink">Home</Link>
        </li>
        <li className='channelItem'>
          <Link to={'/video'} className="channelLink">Videos</Link>
        </li>
        <li className='channelItem'>
          <Link to={'/'} className="channelLink">Playlists</Link>
        </li>
        <li className='channelItem'>
          <Link to={'/'} className="channelLink1">Channels</Link>
        </li>
        <li className='channelItem'>
          <Link to={'/'} className="channelLink1">Discussion</Link>
        </li>
        <li className='channelItem'>
          <Link to={'/'} className="channelLink1">About</Link>
        </li>

        <img src={serarch14} alt="serarch" className='serarch14' />
        <p className='p'>Recommended channel</p>
     </ul>

     <div className="cover-box">
      <div className="cover-box-a">
      <Link to={'/video'} className="box-cover">
        <img src={coverImg} alt="foto" />
      </Link>
      <div className="cover-box2">
        <h3 className='cover-box-h3'>Choosing The Best Audio Player Software For Your Computer</h3>
        <p className='cover-box-p'>Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising. </p>
        <p className="cover-box-p2">11k views  ·  6 months ago</p>
      </div>
      </div>

      <div className="cover-box-b">
        <div className="div1">
          <img src={img1} alt="foto"/>
          <h5 className='cover-h6'>Flora Benson</h5>
        </div>
        <div className="div1">
          <img src={img2} alt="foto"/>
          <h5 className='cover-h6'>Violet Cobb</h5>
        </div>
        <div className="div1">
          <img src={img3} alt="foto"/>
          <h5 className='cover-h6'>Phillip Mullins</h5>
        </div>
      </div>
     </div>
<div className=' d-flex align-items-center justify-content-between'>
      <h2 className='margarit'>Margaret Phelps videos</h2>
      <div className='d-flex gap-2 px-5'>
          <button onClick={chanCarouselPrev} className="carouselBtn"><i className='bi bi-chevron-left'></i></button>
          <button onClick={chanCarouselNext} className="carouselBtn"><i className='bi bi-chevron-right'></i></button>
        </div>

</div>
     <div style={{'--chanCarousel' : `${chanCarousel + 'px'}`}} className="Margaret-Phelps-videos">
     {
      channelVid?.contents?.map((video) => {
        return<>
          <div>
          <Link to={"/video"} className="div-box1">
            <img className='img' src={video?.video?.thumbnails[0]?.url}  alt="foto" />
            <h6 className='margaret-h6'>{video?.video?.title.slice(0, 40)}</h6>
            <p className='margarit-p' >{video?.video?.stats?.views}k views  ·  {video?.video?.publishedTimeText} Food & Drink</p>
          </Link>
          </div>
        </>
      })
     }
     
     </div>
     <div className='resLayout'>
          <Link to={"/"} className="resLink">
            <i className='bi bi-house'></i>
            <h6>Home</h6>
          </Link>
          <Link to={"/video"} className="resLink">
            <i className='bi bi-fire'></i>
            <h6>Tranding</h6>
          </Link>
          <Link to={"/"} className="resLink">
            <i className='bi bi-folder2-open'></i>
            <h6>Subscription</h6>
          </Link>
          <Link to={"/"} className="resLink">
            <i className='bi bi-person'></i>
            <h6>Profile</h6>
          </Link>
      </div>
    </div>
    
  )
}

export default Channel