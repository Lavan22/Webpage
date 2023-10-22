import React, { useState, useEffect } from 'react';
import './Confirmation.css';
import background from '../Assets/regbackground2.png'; // Import your background image
import shiprocket from '../Assets/shiprocket.svg'; // Import your overlay image
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faLessThan } from '@fortawesome/free-solid-svg-icons'

export const Confirmation = () => {
  const [otp, setOtp] = useState('');
  /*const [timer, setTimer] = useState(60); // Set your desired countdown time in seconds

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);

      return () => {
        clearInterval(countdown);
      };
    }
  }, [timer]);
  */

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  return (
    <div className="background">
      <img src={shiprocket} alt="Overlay" className="overlay-image" />
      <div className="otp-box">
      <Link to="/Additionalinfo" className='no-underline'>
            <div className="icon2">
            <FontAwesomeIcon className="arrow"icon={faLessThan} />
             Back
            </div>
            </Link>
        <h2>OTP Verification</h2>
        <h3>Enter OTP send to +919514312002</h3>
        <div className="otp-input-container">
          <input className="boxes"
            type="text"
            maxLength={6}
            placeholder="0"
            value={otp}
            onChange={handleOtpChange}
          />
          <input className="boxes"
            type="text"
            maxLength={6}
            placeholder="0"
            value={otp}
            onChange={handleOtpChange}
          />
          <input className="boxes"
            type="text"
            maxLength={6}
            placeholder="0"
            value={otp}
            onChange={handleOtpChange}
          />
          <input className="boxes"
            type="text"
            maxLength={6}
            placeholder="0"
            value={otp}
            onChange={handleOtpChange}
          />
          <input className="boxes"
            type="text"
            maxLength={6}
            placeholder="0"
            value={otp}
            onChange={handleOtpChange}
          />
          <input className="boxes"
            type="text"
            maxLength={6}
            placeholder="0"
            value={otp}
            onChange={handleOtpChange}
          />
        </div>
        <div className='button-login3'>
        <button>Verify My Phone</button>
        </div>
      </div>
    </div>
  );
};
