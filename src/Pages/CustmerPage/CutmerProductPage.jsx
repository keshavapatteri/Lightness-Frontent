import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../../Config/axiosInstance';
import CustmerProductCards from '../../Cards/CustmerProductCards';

const CutmerProductPage = () => {
    const [productDetails, setProductDetails] = useState([]);
    
   
    const fetchProductDetails = async () => {
      try {
        const response = await axiosInstance.get(`/product/getallproduct`);
        // console.log(response);
        setProductDetails(response?.data || []);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    useEffect(() => {
      fetchProductDetails();
  }, []);


    return (
      <div>
        <CustmerProductCards products={productDetails} />
      </div>
    );
}

export default CutmerProductPage;
