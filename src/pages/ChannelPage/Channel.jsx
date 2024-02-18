import React from 'react'
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
          <Link to={'/'} className="channelLink">Channels</Link>
        </li>
        <li className='channelItem'>
          <Link to={'/'} className="channelLink1">Discussion</Link>
        </li>
        <li className='channelItem'>
          <Link to={'/'} className="channelLink">About</Link>
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
      <div className='d-flex gap-3 px-2 mt-4'>
          <button className="carouselBtn"><i className='bi bi-chevron-left'></i></button>
          <button className="carouselBtn"><i className='bi bi-chevron-right'></i></button>
        </div>

</div>
     <div className="Margaret-Phelps-videos">
      <Link to={'/video'} className="div-box1">
        <img className='img' src="https://cdn.pixabay.com/photo/2016/11/21/14/47/kitten-1845789_640.jpg" alt="foto" />
        <h6 className='margaret-h6'>Astronomy Or Astrology</h6>
        <p className='margarit-p' >240k views  ·  4 months ago Food & Drink</p>
      </Link>
      <Link to={'/video'} className="div-box1">
        <img className='img' src="https://cdn.pixabay.com/photo/2023/04/09/17/23/flower-7911919_640.jpg"  alt="foto" />
        <h6 className='margaret-h6'>Advertising Outdoors</h6>
        <p className='margarit-p' >13k views  ·  15 days ago Food & Drink</p>
      </Link>
      <Link to={'/video'} className="div-box1">
        <img className='img' src="https://cdn.pixabay.com/photo/2017/03/27/16/50/beach-2179624_640.jpg"  alt="foto" />
        <h6 className='margaret-h6'>Radio Astronomy</h6>
        <p className='margarit-p' >1k views  ·  11 months ago Food & Drink</p>
      </Link>
      <Link to={'/video'} className="div-box1">
        <img className='img' src="https://cdn.pixabay.com/photo/2017/12/29/00/16/child-3046494_640.jpg"  alt="foto" />
        <h6 className='margaret-h6'>A Good Autoresponder</h6>
        <p className='margarit-p' >45k views  ·  2 months ago Food & Drink</p>
      </Link>
      <Link to={'/video'} className="div-box1">
        <img className='img' src="https://cdn.pixabay.com/photo/2019/03/18/04/53/bird-4062359_1280.jpg"  alt="foto" />
        <h6 className='margaret-h6'>Baby Monitor Technology</h6>
        <p className='margarit-p' >86k views  ·  7 days ago Food & Drink</p>
      </Link>
      <Link to={'/video'} className="div-box1">
        <img className='img' src="https://cdn.pixabay.com/photo/2015/04/14/15/47/coffee-722270_640.jpg"  alt="foto" />
        <h6 className='margaret-h6'>A Good Autoresponder</h6>
        <p className='margarit-p' >45k views  ·  2 months ago Food & Drink</p>
      </Link>
      <Link to={'/video'} className="div-box1">
        <img className='img' src="https://media.istockphoto.com/id/1061166684/photo/environment-earth-day-in-the-hands-of-trees-growing-seedlings-bokeh-green-background-female.jpg?s=612x612&w=0&k=20&c=MSEmq6cgasUu3XlpdjCmQgp05WecZF8xCzwS32SOe-A="  alt="foto" />
        <h6 className='margaret-h6'>Baby Monitor Technology</h6>
        <p className='margarit-p' >86k views  ·  7 days ago Food & Drink</p>
      </Link>
      <Link to={'/video'} className="div-box1">
        <img className='img' src="https://cdn.pixabay.com/photo/2014/12/08/17/52/horse-561221_640.jpg"  alt="foto" />
        <h6 className='margaret-h6'>Baby Monitor Technology</h6>
        <p className='margarit-p' >86k views  ·  7 days ago Food & Drink</p>
      </Link>
      <Link to={'/video'} className="div-box1">
        <img className='img' src="https://cdn.pixabay.com/photo/2010/12/13/10/07/woman-2315_640.jpg"  alt="foto" />
        <h6 className='margaret-h6'>Baby Monitor Technology</h6>
        <p className='margarit-p' >86k views  ·  7 days ago Food & Drink</p>
      </Link>
      <Link to={'/video'} className="div-box1">
        <img className='img' src="https://cdn.pixabay.com/photo/2022/01/29/11/58/dog-6977210_640.jpg"  alt="foto" />
        <h6 className='margaret-h6'>Baby Monitor Technology</h6>
        <p className='margarit-p' >86k views  ·  7 days ago Food & Drink</p>
      </Link>
      <Link to={'/video'} className="div-box1">
        <img className='img' src="https://cdn.pixabay.com/photo/2016/06/18/22/36/cherries-1465801_640.jpg"  alt="foto" />
        <h6 className='margaret-h6'>Baby Monitor Technology</h6>
        <p className='margarit-p' >86k views  ·  7 days ago Food & Drink</p>
      </Link>
     
     </div>
     <div className='resLayout'>
          <Link to={"/"} className="resLink">
            <i className='bi bi-house'></i>
            <p>Home</p>
          </Link>
          <Link to={"/"} className="resLink">
            <i className='bi bi-fire'></i>
            <p>Shorts</p>
          </Link>
          <Link to={"/"} className="resLink">
            <i className='bi bi-folder2-open'></i>
            <p>Subscription</p>
          </Link>
          <Link to={"/"} className="resLink">
            <i className='bi bi-person'></i>
            <p>Profile</p>
          </Link>
      </div>
    </div>
    
  )
}

export default Channel