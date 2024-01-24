import React, { useState } from 'react'
import "./Home.css"
import axios from 'axios';
import Sub1 from '.././img/img-1.svg'


const Home = () => {
  const [videos, setVideos] = useState([])

  const getData = async() => {
    const options = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/channel/channels/',
    params: {
      id: 'UCJ5v_MCY6GNUBTO8-D3XoAg',
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': 'ea9cd672c7msh50b1b464212bb0fp17e8c0jsn3f946617cc63',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };
  getData();
  
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
  }


  return (
    <div className='w-100 p-4 d-flex flex-column gap-3'>
      <div className="w-100 d-flex justify-content-between">
        <div className="w-100 d-flex gap-2 align-items-center">
          <img style={{width: '50px'}} src={Sub1} alt="Error" />
          <h3>Dollie Blair</h3>
        </div>
        <div className='d-flex gap-2 px-5'>
          <button className="carouselBtn"><i className='bi bi-chevron-left'></i></button>
          <button className="carouselBtn"><i className='bi bi-chevron-right'></i></button>
        </div>
      </div>
      <div>
        <ul className='w-100 d-flex gap-4'>
          <button className='HomeVideo'>
            <img className="VideoImg" src="https://cdn.pixabay.com/photo/2023/03/15/16/17/feather-7854908_1280.jpg" alt="Error" />
            <h6>Title</h6>
            <div className="d-flex align-items-center justify-content-between text-secondary" style={{marginTop: '-5px'}}>
            <div className='d-flex gap-4 justify-content-between'>
              <p>Views</p>
              <p>creaeted</p>
              </div>
              <p>Kanal</p>
            </div>
          </button>
          <button className='HomeVideo'>
            <img className="VideoImg" src="https://cdn.pixabay.com/photo/2023/03/15/16/17/feather-7854908_1280.jpg" alt="Error" />
            <h6>Title</h6>
            <div className="d-flex align-items-center justify-content-between text-secondary" style={{marginTop: '-5px'}}>
            <div className='d-flex gap-4 justify-content-between'>
              <p>Views</p>
              <p>creaeted</p>
              </div>
              <p>Kanal</p>
            </div>
          </button>
          <button className='HomeVideo'>
            <img className="VideoImg" src="https://cdn.pixabay.com/photo/2023/03/15/16/17/feather-7854908_1280.jpg" alt="Error" />
            <h6>Title</h6>
            <div className="d-flex align-items-center justify-content-between text-secondary" style={{marginTop: '-5px'}}>
            <div className='d-flex gap-4 justify-content-between'>
              <p>Views</p>
              <p>creaeted</p>
              </div>
              <p>Kanal</p>
            </div>
          </button>
        </ul>
      </div>
      <div className="py-3">
        <div className='w-100 d-flex justify-content-between py-2'>
          <div>
           <h3>Recommended</h3>  
          </div>
          <div className='d-flex gap-2 px-5'>
          <button className="carouselBtn"><i className='bi bi-chevron-left'></i></button>
          <button className="carouselBtn"><i className='bi bi-chevron-right'></i></button>
        </div>
        </div>
        <div className='d-flex w-100 gap-4'>
        <button className='HomeVideo RecVid'>
            <img className="VideoImg RecVidImg" src="https://cdn.pixabay.com/photo/2023/03/15/16/17/feather-7854908_1280.jpg" alt="Error" />
            <h6>Title</h6>
            <div className="d-flex align-items-center justify-content-between text-secondary" style={{marginTop: '-5px'}}>
              <div className='d-flex w-25 justify-content-between'>
                <p>Views</p>
                <p>creaeted</p>
              </div>
              <p>Kanal</p>
            </div>
          </button>
        <button className='HomeVideo RecVid'>
            <img className="VideoImg RecVidImg" src="https://cdn.pixabay.com/photo/2023/03/15/16/17/feather-7854908_1280.jpg" alt="Error" />
            <h6>Title</h6>
            <div className="d-flex align-items-center justify-content-between text-secondary" style={{marginTop: '-5px'}}>
              <div className='d-flex w-25 justify-content-between'>
                <p>Views</p>
                <p>creaeted</p>
              </div>
              <p>Kanal</p>
            </div>
          </button>
        </div>
        <div>

        </div>
      </div>
      <div className="w-100 d-flex justify-content-between  pt-5">
        <div className="w-100 d-flex gap-2 align-items-center">
          <img style={{width: '50px'}} src={Sub1} alt="Error" />
          <h3>Food & Drink</h3>
          <div style={{height: '30px'}} className="p-1">
            <p className='text-secondary'>Recommended channel for you</p>
          </div>
        </div>
        <div className='d-flex gap-2 w-50 py-2 align-items-center justify-content-center'>
          <button className="btn btn-danger">Subscribe 2.3m</button>
          <button className="carouselBtn"><i className='bi bi-chevron-left'></i></button>
          <button className="carouselBtn"><i className='bi bi-chevron-right'></i></button>
        </div>
      </div>
      <div className='d-flex w-100 gap-4'>
      <button className='HomeVideo'>
            <img className="VideoImg" src="https://cdn.pixabay.com/photo/2023/03/15/16/17/feather-7854908_1280.jpg" alt="Error" />
            <h6>Title</h6>
            <div className="d-flex align-items-center justify-content-between text-secondary" style={{marginTop: '-5px'}}>
            <div className='d-flex gap-4 justify-content-between'>
              <p>Views</p>
              <p>creaeted</p>
              </div>
              <p>Kanal</p>
            </div>
          </button>
      <button className='HomeVideo'>
            <img className="VideoImg" src="https://cdn.pixabay.com/photo/2023/03/15/16/17/feather-7854908_1280.jpg" alt="Error" />
            <h6>Title</h6>
            <div className="d-flex align-items-center justify-content-between text-secondary" style={{marginTop: '-5px'}}>
            <div className='d-flex gap-4 justify-content-between'>
              <p>Views</p>
              <p>creaeted</p>
              </div>
              <p>Kanal</p>
            </div>
          </button>
      <button className='HomeVideo'>
            <img className="VideoImg" src="https://cdn.pixabay.com/photo/2023/03/15/16/17/feather-7854908_1280.jpg" alt="Error" />
            <h6>Title</h6>
            <div className="d-flex align-items-center justify-content-between text-secondary" style={{marginTop: '-5px'}}>
            <div className='d-flex gap-4 justify-content-between'>
              <p>Views</p>
              <p>creaeted</p>
              </div>
              <p>Kanal</p>
            </div>
          </button>
      </div>
    </div>
  )
}

export default Home