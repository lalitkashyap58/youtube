import React from 'react'

const VideoCard = ({info}) => {

    if(!info)
    return;
    const {snippet, statistics}=info;
    const {channelTitle ,thumbnails, title}=snippet;
   
  return (
    <div className='p-2 m-2 w-72 '>
      
       <img className='rounded-lg border-image fill-slate-600 bg-gradient-to-tr from-stone-500' src={thumbnails.high.url} alt='thumbnail'/>
      <div>
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li className='font-sans'>{channelTitle}</li>
        <li className='font-sans'>{statistics.viewCount} views</li>
       </ul>
      </div>
      



 

        {/* div
               div
                  video 
                  title
                div
                div
                   commentCount
                   favouriteCount
                   likeCount
                   viewCount
                div
            div         */}
    </div>



    
  )
}

export default VideoCard 


