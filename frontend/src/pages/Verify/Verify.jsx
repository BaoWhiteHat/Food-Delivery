import React, { useContext, useEffect } from 'react';
import './Verify.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const Verify = () => {
  const [searchParams] = useSearchParams();
  const success = searchParams.get('success');
  const orderId = searchParams.get('orderId');
  const { url } = useContext(StoreContext);
  const navigate = useNavigate();

  const verifyPayment = async () => {
    try {
      // Uncomment and adjust the URL if needed
      // const response = await axios.post(url + "/api/order/verify", { success, orderId });

      if (success === 'true') {
        navigate('/myorders');
      } else {
        navigate('/');
      }
    } catch (error) {
      console.log(error);
      navigate('/');
    }
  };

  useEffect(() => {
    verifyPayment();
  }, [success, orderId]); // Include dependencies to run effect when params change

  return (
    <div className='verify'>
      <div className='spinner'></div>
    </div>
  );
};

export default Verify;
