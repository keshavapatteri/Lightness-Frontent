import React, { useState } from 'react';

const ProductDetailsCards = ({ products }) => {
  if (!products || Object.keys(products).length === 0) {
    return <div>No product details available.</div>;
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % products.images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex - 1 + products.images.length) % products.images.length
    );
  };

  return (
    <div className="flex flex-col items-center">
      <div key={products._id} className="border p-4 rounded-lg shadow-lg w-80 mb-4">
        <div className="relative">
          <img
            src={products.images[currentImageIndex]}
            alt={products.name}
            className="w-full h-auto rounded-lg"
          />
          <button 
            onClick={prevImage} 
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition duration-200"
          >
            ◀
          </button>
          <button 
            onClick={nextImage} 
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition duration-200"
          >
            ▶
          </button>
        </div>
        <h1 className="text-xl font-bold mb-2">{products.name}</h1>
        <p className="text-gray-700 mb-2">{products._id}</p>
        <p className="text-gray-700 mb-2">{products.description}</p>
        <p className="text-gray-900 font-semibold">Price: ₹{products.price}</p>
      </div>
    </div>
  );
}

export default ProductDetailsCards;
