import React from 'react'
import sideimage from '../Assets/login1.png'
import './Forgetpassword.css';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faLessThan } from '@fortawesome/free-solid-svg-icons'
export const Forgetpassword = () => {
  return (
    <div className="page2">
       <div className="responsive-image">
        <img src={sideimage} alt="banner" width="800" height="739"></img>
        </div>
        <div className="login-container2">
            <div className="text1">Food</div>
            <div className="text2">delivery</div>
            <Link to="/" className='no-underline'>
            <div className="icon1">
            <FontAwesomeIcon className="arrow"icon={faLessThan} />
             Back to Login
            </div>
            </Link>
            <div className="title1">Forget Password</div>
            <div className="content">Enter the email associated with your account and we'll send an email with instructions to reset your password.</div>
            <div className="input-container">
                    <label>Email</label>
                   <input type="email" placeholder="name@example.com" />
            </div>
            <div className="button-login">
            <button type="button">Send instructions</button>
            </div>
            <div className="faq">
                <label>Do you have any questions?<a href="#" className="no-underline">FAQ</a></label>
            </div>
        </div>
    </div>
  )
}
export default Forgetpassword; 