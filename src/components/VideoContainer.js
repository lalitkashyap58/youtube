import React, { useEffect, useState } from 'react';
import { YOUTUBE_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
 
    setVideos(json.items);
  };

  return (
    <div className='flex flex-wrap relative top-[1%] justify-evenly z-0 '>
      {videos &&
        videos.map((video, index) => video.id && <Link to={"/watch?v="+video.id} key={video.id}><VideoCard  info={video} /></Link>)}
    </div>
  );
};

export default VideoContainer;
