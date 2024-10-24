
// export default CustmerProductCards;
import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../Config/axiosInstance';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { toast } from 'react-toastify';

const CustmerProductCards = ({ products }) => {
  const [getbyid, setGetById] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [profile, setProfile] = useState([]);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  const fetchProduct = async (id) => {
    try {
      const response = await axiosInstance.get(`/product/getid/${id}`, {
        withCredentials: true,
      });
      console.log('Product details fetched: ', response);
      setGetById(response?.data || []);
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };

  useEffect(() => {
    if (products.length > 0) {
      fetchProduct(products[0]._id);
    }
  }, [products]);

  const handleQuantityChange = (productId, amount) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max(1, (prevQuantities[productId] || 1) + amount),
    }));
  };

  const fetchProfile = async () => {
    try {
      const response = await axiosInstance.get(`/user/profile`, {
        withCredentials: true,
      });
      console.log('Profile fetched: ', response.data.data[0]);
      setProfile(response?.data?.data[0] || []);
    } catch (error) {
      console.error('Error fetching profile details:', error);
    }
  };

  const fetchCart = async (productId) => {
    const userId = profile._id; // Get userId from profile
    try {
      const response = await axiosInstance.post(
        `/cart/add`,
        {
          userId: userId,
          productId: productId,
          quantity: quantities[productId] || 1,
        },
        {
          withCredentials: true,
        }
      );
      console.log('Cart updated: ', response);
      setCart(response?.data || []);
      toast.success('Item added to cart successfully!');
    } catch (error) {
      console.error('Error updating cart:', error);
      toast.error('Failed to add item to cart.'); // Show error notification
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  // Function to navigate to product details page with product ID
  const handleProductDetails = (productId) => {
    navigate(`/custmer/CustmerProductPage/${productId}`); // Pass product ID in the URL
  };

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {products.map((product) => (
        <div
          key={product._id}
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
            <div className="flex items-center justify-between mt-4">
              <span className="text-xl font-bold text-green-600">
                ₹{product.price}
              </span>
              <div className="flex gap-3 items-center">
                <button
                  onClick={() => handleQuantityChange(product._id, -1)}
                  className="bg-gray-300 text-gray-700 font-bold py-1 px-3 rounded-lg shadow-md transition duration-300 focus:outline-none"
                >
                  -
                </button>
                <span>{quantities[product._id] || 1}</span>
                <button
                  onClick={() => handleQuantityChange(product._id, 1)}
                  className="bg-gray-300 text-gray-700 font-bold py-1 px-3 rounded-lg shadow-md transition duration-300 focus:outline-none"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between mt-2">
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                onClick={() => fetchCart(product._id)}
              >
                Add To Cart
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onClick={() => handleProductDetails(product._id)} // Navigate to product details on click
              >
                Product Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustmerProductCards;
