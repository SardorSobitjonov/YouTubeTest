import React, { useEffect, useState } from 'react'
import './Video.css'
import { Switch } from 'antd';
import { Link } from 'react-router-dom'

const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};
const Video = () => {
  const [vid, setVid] = useState([])
  const [vidNext, setVidNext] = useState([])

  useEffect(()=> {
    const getNext = async() => {
      const url = 'https://youtube138.p.rapidapi.com/video/related-contents/?id=kJQP7kiw5Fk&hl=en&gl=US';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '68c1274539msh590b47591a2fe0ep1fdb6cjsn882e41e6b0fa',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
  setVidNext(result)
	console.log(result);
} catch (error) {
	console.error(error);
}
    }
    getNext()
  }, [])
  useEffect(()=> {
    const getVid = async() => {
      const url = 'https://youtube138.p.rapidapi.com/video/details/?id=kJQP7kiw5Fk&hl=en&gl=US';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '68c1274539msh590b47591a2fe0ep1fdb6cjsn882e41e6b0fa',
          'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setVid(result)
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
    getVid()
  }, [])
  return (
    <>
    <div className="Video">
            <div className="vidMain">
                <div className="vid">
                <iframe width="900" height="450" className="ifroem-video" src="https://www.youtube.com/embed/kJQP7kiw5Fk?si=W25emVWijSj9a6qy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <h4 className='titl-h2'>{vid?.title}</h4>
                    <p>{vid?.description}</p>
                    <div className='d-flex align-items-center justify-content-between text-View'>
                        <p className='text-secondary'>{vid?.stats?.views}k views</p>
                        <div className='d-flex gap-1'>
                            <button className='btn vidBtn'><i className='bi bi-hand-thumbs-up'></i> {vid?.stats?.likes}</button>
                            <button className='btn vidBtn'><i className='bi bi-hand-thumbs-down'></i> 0</button>
                            <button className="btn vidBtn"><i className='bi bi-reply'> Share</i></button>
                            <button className="btn"><i className='bi bi-three-dots'></i></button>
                        </div>
                    </div>
                </div>
                <div className="vidChannel">
                    <img className='vidChannelImg' src={vid?.author?.avatar[0]?.url} alt="Error" />
                    <div className='bgg'>
                        <Link to={'/channel'} className='videoChannel'>
                            <h2 className='textH2'>{vid?.author?.title}</h2>
                        </Link>
                            <p className='text-secondary textP'>{vid?.author?.stats?.subscribersText}</p>
                            <p className='video-p'>{vid?.endScreen?.items[0]?.channel?.description}</p>
                            <button className="btn btn-showMore">Show more</button>
                    </div>
                </div>
            </div>
            <div className="vidNext">
                <div className="d-flex justify-content-between align-items-center px-3">
                    <h3>Next</h3>
                    <div className="d-flex align-items-center gap-2">
                        <h4>Autoplay</h4>
                        <Switch defaultChecked onChange={onChange} />
                    </div>
                </div>
                <div className='div122'>
                    <ul className="w-100 h-100 d-flex flex-column gap-3">
                      {
                        vidNext?.contents?.map((item) => {
                          console.log(vidNext?.contents);
                          return<>
                            <div>
                            <Link to={"/video"} style={{textDecoration: 'none'}}>
                              <div className='HomeVideo'>
                                <img className="VideoImg" src={item?.video?.thumbnails[0].url} alt="Error" />
                                <h6 className='px-2 h6'>{item?.video?.title}</h6>
                                <div className="d-flex align-items-center justify-content-between text-secondary px-2">
                                <div className='d-flex gap-4 justify-content-between'>
                                  <p><i className='bi bi-eye'></i>{item?.video?.stats?.views}</p>
                                  <p>{item?.video?.author?.publishedTimeText}</p>
                                  </div>
                                  <p>{item?.video?.author?.title}</p>
                                </div>
                              </div>
                            </Link>
                            </div>
                          </>
                        })
                      }
                    </ul>
                </div>
            </div>
            <div className='resLayout'>
          <Link to={"/"} className="resLink">
            <i className='bi bi-house'></i>
            <p>Home</p>
          </Link>
          <Link to={"/video"} className="resLink">
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
    </>
  )
}

export default Video