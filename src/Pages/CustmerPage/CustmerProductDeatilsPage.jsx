import React, { useEffect, useState } from 'react'
import CustmerProductDeatilsCards from '../../Cards/CustmerProductDeatilsCards'
import { axiosInstance } from '../../../Config/axiosInstance';
import { useParams } from 'react-router-dom';

const CustmerProductDeatilsPage = () => {
  const [productDetails, setProductDetails] = useState({});
  const { id } = useParams(); // Get the product ID from the URL
console.log(id)
  const fetchProduct = async (id) => {

      try {
        const response = await axiosInstance.get(`/product/getid/${id}`, {
          withCredentials: true, // Include credentials in the request
        });
        console.log("Fetched Product Details:", response);
        setProductDetails(response?.data || {});
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchProduct(id); // Pass the ID to fetchProduct
    }
  }, [id]); // Dependency array with id

  return (
    <div>
     <CustmerProductDeatilsCards  products={productDetails}/>
    </div>
  )
}

export default CustmerProductDeatilsPage
