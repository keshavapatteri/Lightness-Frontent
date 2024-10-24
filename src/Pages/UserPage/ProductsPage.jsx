import React, { useEffect, useState } from 'react'
import ProductCards from '../../Cards/ProductCards'
import { axiosInstance } from '../../../Config/axiosInstance';

const ProductsPage = () => {
    const [productDetails, setProductDetails] = useState([]);
   
    const fetchProductDetails = async () => {
      try {
        const response = await axiosInstance.get(`/product/getallproduct`);
        console.log(response);
        setProductDetails(response?.data || []);
        
      } catch (error) {
        console.error('Error fetching car details:', error);
      }
    };
  
    useEffect(() => {
        fetchProductDetails();
     
    }, []);



  return (
    <div>

     <ProductCards  products={productDetails} />
    
    </div>
  )
}

export default ProductsPage
