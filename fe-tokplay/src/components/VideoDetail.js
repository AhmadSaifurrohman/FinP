import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CommentForm from './CommentForm.js';

function VideoDetail() {
  const { id } = useParams();
  const [video, setVideo] = useState({});
  const [products, setProducts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Mengambil detail video
    axios.get(`/videos/${id}`)
      .then(response => setVideo(response.data))
      .catch(error => console.error('Error fetching video:', error));

    // Mengambil daftar produk yang sesuai dengan videoId
    axios.get(`/products?videoId=${video._id}`)
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));


    // Mengambil daftar komentar
    axios.get(`/comments/${id}`)
      .then(response => setComments(response.data))
      .catch(error => console.error('Error fetching comments:', error));
  });

  return (
    <div className='flex flex-col w-full h-full px-5 mx-auto space-x-2 sm:px-10 xl:px-20 xl:flex-row'>
      {/* Bagian daftar produk */}
      <div className='flex flex-col py-6 mt-5 border border-gray-200 rounded-lg'>
        <h2 className='text-lg font-semibold mb-3'>List Produk</h2>
        <ul className='space-y-3'>
          {products.map(product => (
            <li key={product._id}>
              <a href={product.productUrl} target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline'>
                {product.nameProduct}
              </a>
              <p className='text-gray-600'>Harga: Rp. {product.price}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className='h-full px-2 py-6 mt-5 border border-gray-200 grow rounded-xl sm:px-6 lg:pl-8 xl:pl-6'>
        <div className='flex items-center justify-between pr-3 mb-5'>
          <h1 className='text-xl font-bold'>{video.videoTitle}</h1>
          <p className='font-normal text-md'>{video.shop_name}</p>
        </div>
        <div className='relative w-full overflow-hidden pt-[56.25%]'>
          {/* Menyematkan Video YouTube */}
          {video.videoUrl && (
            <iframe
              className='absolute top-0 bottom-0 left-0 right-0 w-full h-full border-none rounded-lg aspect-video'
              title='Video YouTube'
              src={`https://www.youtube.com/embed/${new URL(video.videoUrl).searchParams.get('v')}`}
              frameBorder='0'
              allowFullScreen
            />
          )}
        </div>
      </div>

      <div className='flex flex-col w-full mt-5 border border-gray-200 rounded-lg xl:w-80'>
        <div className='w-full p-4 border-b border-gray-200 sm:px-6'>
          <h3 className='font-semibold'>Comments</h3>
        </div>
        <div className='flex-grow h-[300px] overflow-y-auto'>
          <ul className='space-y-2'>
            {comments.map(comment => (
              <li key={comment._id} className='bg-gray-100 p-2 rounded'>
                <p className='text-gray-600'>{comment.username}</p>
                <p>{comment.comment}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className='px-4 py-4 border-t border-gray-200 sm:px-6'>
          <CommentForm videoId={id} />
        </div>
      </div>
    </div>
  );
}

export default VideoDetail;
