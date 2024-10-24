// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { ShoppingCart, ShoppingBag, Contact } from 'lucide-react';
// import { axiosInstance } from '../../../Config/axiosInstance';

// const CustmerHeader = () => {
//   const [logout,setLogout] = useState({});
 
//   const fetchProduct = async (id) => {

//       try {
//         const response = await axiosInstance.get(`/user/logout`, {
//           withCredentials: true, // Include credentials in the request
//         });
//         console.log("Fetched Product Details:", response);
//         setProductDetails(response?.data || {});
//     } catch (error) {
//       console.error('Error fetching product details:', error);
//     }
//   };

//   useEffect(() => {
//     if (id) {
//       fetchProduct(id); // Pass the ID to fetchProduct
//     }
//   }, [id]);
//   return (
//     <header className="bg-blue-600 text-white shadow-lg">
//       <div className="container mx-auto flex justify-between items-center p-4">
//         <h1 className="text-2xl font-bold">Lightness Industries</h1>
//         <nav className="flex items-center space-x-6">
//           {/* Home Link */}
//           <Link
//             to="/custmer/custmer"
//             className="hover:text-blue-300 transition duration-200"
//           >
//             Home
//           </Link>
          
//           {/* About Link */}
//           <Link
//             to="/custmer/CustmerAbout"
//             className="hover:text-blue-300 transition duration-200"
//           >
//             About
//           </Link>
          
//           {/* Cart Page Link with ShoppingCart Icon */}
//           <Link
//             to="/custmer/custmercartpage"
//             className="flex items-center hover:text-blue-300 transition duration-200"
//           >
//             <ShoppingCart className="mr-1" />
//             Cart
//           </Link>
          
//           {/* Orders Page Link with ShoppingBag Icon */}
//           <Link
//             to="/custmer/CustmerOrdersPage"
//             className="flex items-center hover:text-blue-300 transition duration-200"
//           >
//             <ShoppingBag className="mr-1" />
//             Orders
//           </Link>
          
//           {/* Contact Page Link with Contact Icon */}
//           <Link
//             to="/custmer/CustmerContact"
//             className="flex items-center hover:text-blue-300 transition duration-200"
//           >
//             <Contact className="mr-1" />
//             Contact
//           </Link>
          
//           {/* Logout Link */}
//           <a href="#" className="hover:text-blue-300 transition duration-200">
//             Logout
//           </a>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default CustmerHeader;
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, ShoppingBag,Contact,User,House,LogOut, Headset, BookOpen} from 'lucide-react';
import { axiosInstance } from '../../../Config/axiosInstance';
import { toast } from 'react-toastify';

const CustmerHeader = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axiosInstance.post('/user/logout', {}, {
        withCredentials: true, // Include credentials in the request
      });
      console.log('Logout successful:', response);
      toast.success(`logout successfully !!!!`)
      navigate('/'); // Redirect to login after successful logout
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };
  

  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Lightness Industries</h1>
        <nav className="flex items-center space-x-6">
          {/* Home Link */}
          <Link
            to="/custmer/custmer"
            className="hover:text-blue-300 transition duration-200"
          >
            <House />
           
          </Link>

          {/* About Link */}
          <Link
            to="/custmer/CustmerAbout"
            className="hover:text-blue-300 transition duration-200"
          >
          <BookOpen />
          </Link>

          {/* Cart Page Link with ShoppingCart Icon */}
          <Link
            to="/custmer/custmercartpage"
            className="flex items-center hover:text-blue-300 transition duration-200"
          ><h3>Cart</h3>
            {/* <ShoppingCart className="mr-1" />
          */}
          </Link>

          {/* Orders Page Link with ShoppingBag Icon */}
          <Link
            to="/custmer/CustmerOrdersPage"
            className="flex items-center hover:text-blue-300 transition duration-200"
          ><h3>Order</h3>
            {/* <ShoppingBag className="mr-1" /> */}
            
          </Link>

          {/* Contact Page Link with Contact Icon */}
          <Link
            to="/custmer/CustmerContact"
            className="flex items-center hover:text-blue-300 transition duration-200"
          >
            <Headset />
           
           
          </Link>
          <Link
            to="/custmer/CustmerProfile"
            className="flex items-center hover:text-blue-300 transition duration-200"
          >
           <User />
           
          </Link>
        
          {/* Logout Link */}
          <button
  onClick={handleLogout}
  className="hover:text-blue-300 transition duration-200"
>
<LogOut />
 
</button>

        </nav>
      </div>
    </header>
  );
};

export default CustmerHeader;
