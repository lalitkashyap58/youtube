import React from 'react';

const VideoCard = ({ info }) => {
  if (!info) return null;

  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;

  return (
    <div className='p-2 m-2 w-72 h-[90%] shadow-lg rounded-lg overflow-hidden bg-white transition-transform transform hover:scale-105 cursor-pointer'>
      <img
        className='rounded-t-lg object-cover w-full h-40'
        src={thumbnails.high.url}
        alt='thumbnail'
      />
      <div className='p-4'>
        <ul>
          <li className='font-bold py-2'>{title}</li>
          <li className='font-sans'>{channelTitle}</li>
          <li className='font-sans'>{statistics.viewCount} views</li>
        </ul>
      </div>
    </div>
  );
};

export default VideoCard;
