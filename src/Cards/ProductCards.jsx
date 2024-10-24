import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { axiosInstance } from '../../Config/axiosInstance';

const ProductCards = ({ products }) => {
const[getbyid,setGetById]=useState([]);



const fetchProduct = async (id) => {
  try {
    const response = await axiosInstance.get(`/product/getid/${id}`);
    console.log("hyyyyy===>",response);
    setGetById(response?.data || []);
    
  } catch (error) {
    console.error('Error fetching products details:', error);
  }
};

useEffect(() => {
  fetchProduct();
 
}, [products._id]);


  return (
    <div className="flex flex-wrap justify-center gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform hover:-translate-y-2 transition duration-300 w-96 m-4"
        >
          <figure className="relative">
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white px-2 py-1 text-sm">
              {product.brand}
            </div>
          </figure>
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              {product.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {product.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="badge badge-secondary">Brand: {product.brand}</span>
              <span className="badge badge-secondary">Category: {product.category}</span>
              <span className="badge badge-secondary">Color: {product.color}</span>
              </div>
            <div className="flex items-center justify-between mt-2">
         
            
              <span className="text-xl font-bold text-green-600">₹{product.price}</span>
              <div className="flex gap-3">
              <Link to={`/LoginPage`}> <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-400">
                  Add To Cart
                </button>
                </Link>
                <Link to={`/productsDetails/${product._id}`}> <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400">
                  Product Details
                </button></Link> 
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
