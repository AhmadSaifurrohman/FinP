import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductList({ videoId }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`/products?videoId=${videoId}`) // Adjust the API endpoint based on your backend setup
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, [videoId]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Daftar Produk</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.map(product => (
          <div key={product._id} className="relative flex-none max-w-[150px] mr-5 min-w-24 xl:mx-0 xl:mb-5 group rounded-lg p-3">
            <div className="overflow-hidden bg-gray-100 rounded-md aspect-h-2 aspect-w-2">
              <img
                src={product.thumbnailUrl}
                alt={product.nameProduct}
                className="object-cover object-center"
              />
              <div className="flex items-end p-4 opacity-0 group-hover:opacity-100" aria-hidden="true">
                <div className="w-full px-4 py-2 text-sm font-medium text-center text-white bg-[#03AC0E] bg-opacity-100 rounded-md backdrop-blur backdrop-filter">
                  View Product
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end justify-center mt-4 text-[12px] font-medium text-gray-900">
              <p>
                <a href={product.productUrl} className="font-bold">
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.nameProduct}
                </a>
              </p>
              <p className="font-normal">Rp. {product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;