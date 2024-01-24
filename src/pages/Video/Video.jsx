import React from 'react'
import Header from '../../components/Header'
import './Video.css'

const Video = () => {
  return (
    <>
        <Header />
    <div className="Video">
        <div className="vidMain">
            <div className="vid">
                <video className='rounded-3 border w-100' src="https://cdn.pixabay.com/vimeo/892475199/192357.mp4?width=1280&hash=37c805870147bfba79a651f1220a5737edb7ee08" controls></video>
                <h2>Title</h2>
                <div className='d-flex align-items-center justify-content-between'>
                    <p className='text-secondary'>View</p>
                    <div className='d-flex gap-1'>
                        <button className='btn vidBtn'><i className='bi bi-hand-thumbs-up'></i> 0</button>
                        <button className='btn vidBtn'><i className='bi bi-hand-thumbs-down'></i> 0</button>
                        <button className="btn vidBtn"><i className='bi bi-reply'> Share</i></button>
                        <button className="btn"><i className='bi bi-three-dots'></i></button>
                    </div>
                </div>
            </div>
        </div>
            <div className="vidChannel">
                <h2>Food & Drink</h2>
                <p className='text-secondary'>Published on 14 Jun 2019</p>
            </div>
        <div className="vidNext">

        </div>
    </div>
    </>
  )
}

export default Video