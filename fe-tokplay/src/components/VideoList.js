import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function VideoList() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get('/videos')
      .then(response => setVideos(response.data))
      .catch(error => console.error('Error fetching videos:', error));
  }, []);

  return (
    <div className='bg-white'>
      <div className='max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
        <h2 className='text-2xl font-bold tracking-tight text-gray-900'>
          Video List
        </h2>

        <div className='grid grid-cols-1 mt-6 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {videos.map((video) => (
            <div key={video._id} className='relative group'>
              <div className='w-full overflow-hidden bg-gray-200 rounded-md aspect-h-1 aspect-w-1 lg:aspect-none group-hover:opacity-75 lg:h-80'>
                <img
                  src={video.thumbnailUrl}
                  alt={video.videoTitle}
                  className='object-cover object-center w-full h-full lg:h-full lg:w-full'
                />
              </div>
              <div className='flex justify-between mt-4'>
                <div>
                  <h3 className='text-sm text-gray-700'>
                    <Link to={`/videos/${video._id}`}>
                      <span aria-hidden='true' className='absolute inset-0' />
                      {video.videoTitle}
                    </Link>
                  </h3>
                  <p className='mt-1 text-sm text-gray-500'>
                    {video.shop_name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoList;
