import React, { useEffect, useState } from 'react';
import CustmerShippingCards from '../../Cards/CustmerShippingCards';
import { axiosInstance } from '../../../Config/axiosInstance';
import { toast, ToastContainer } from 'react-toastify';

const CustmerShippingAddressPage = () => {

  return (
    <div>
      <CustmerShippingCards  />
      <ToastContainer /> 
    </div>
  );
};

export default CustmerShippingAddressPage;
