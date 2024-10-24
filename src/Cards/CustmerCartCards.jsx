import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../Config/axiosInstance';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const CustmerCartCards = React.memo(() => {
  const [cart, setCart] = useState([]);
  const [cartId,setCartId] = useState();
  const [profile, setProfile] = useState(null);

  const [loading, setLoading] = useState(true); 
  const [remove, setRemove] = useState({});
  
  const navigate = useNavigate();

  const fetchProfile = async () => {
    try {
      const response = await axiosInstance.get(`/user/profile`, { withCredentials: true });
      setProfile(response?.data?.data[0] || null);
    } catch (error) {
      console.error('Error fetching profile details:', error);
    }
  };

  const fetchCart = async (userId) => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(`/cart/get/${userId}`, { withCredentials: true });
      console.log("response",response);
      setCartId (response?.data?.cart?._id)
      const cartData = response?.data?.cart?.items || [];
      setCart(Array.isArray(cartData) && cartData.length > 0 ? cartData : []); 
    } catch (error) {
      console.error('Error fetching cart details:', error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  useEffect(() => {
    if (profile && profile._id) {
      fetchCart(profile._id);
    }
  }, [profile]);

  const totalCartPrice = cart.reduce((total, item) => total + item.price, 0);

  const fetchRemove = async (id) => {
    try {
      const response = await axiosInstance.delete(`/cart/remove/${id}`, { withCredentials: true });
      setRemove(response?.data?.data[0] || null);
      window.location.reload();
      toast.success("Item removed successfully!");
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };
  
  const handleCheckout = () => {
    navigate('/custmer/custmershipping', { state: { cartId,totalCartPrice } });
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-8">
      {/* Left Column - Cart Details */}
      <div className="w-full lg:w-2/3 border p-4">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <h1 className='text-center mb-4'>Shopping Cart</h1>
            <ul>
              {cart.map(item => (
                <li key={item._id} className="flex items-center justify-between p-2 border-b">
                  <div className="flex items-center">
                    {item.product.images && <img src={item.product.images[0]} alt="Product" className="w-16 h-16 mr-2" />}
                    <div className="ml-4">
                      <p>Product Name: {item.product?.name || "Unknown Product"}</p>
                      <p>Category: {item.product.category}</p>
                      <p className="hidden lg:block">Description: {item.product.description}</p>
                    </div>
                  </div>
                  <span>Quantity: {item.quantity}</span>
                  <span> Price: ₹{item.price}</span>
                  <button 
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4"
                    onClick={() => fetchRemove(item.product._id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      {/* Right Column - Cart Summary */}
      <div className="w-full lg:w-1/3 border p-4">
        <h2 className="text-center mb-4">Cart Totals</h2>
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>₹{totalCartPrice}</span>
        </div>
    
        <div className="flex justify-between mb-2">
          <span>Total</span>
          <span>₹{totalCartPrice}</span>
        </div>
        <button 
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleCheckout}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
});

export default CustmerCartCards;
