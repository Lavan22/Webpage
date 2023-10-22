import React from 'react'
import './Loginsignup.css'
import sideimage from '../Assets/login1.png'
import { Link } from 'react-router-dom';
export const Loginsignup = () => {
  return (
     <div className="page">
        <div className="responsive-image">
        <img src={sideimage} alt="banner" width="800" height="739"></img>
        </div>
        <div className="login-container2">
            <div className="text1">Food</div>
            <div className="text2">delivery</div>
            <div className="login">Login</div>
            <div className="content">Sign in with your data that you entered during  registration</div>
                <div className="input-container">
                    <label>Email</label>
                   <input type="email" placeholder="name@example.com" />
                </div>
                <div className="input-container">
                    <label>Password</label>
                    <input type="password" placeholder="min. 8 characters"/>

                 </div>
            <div className="checkbox">
             <input type="checkbox"  value="checked" className="box"></input>
             <label className="box1">Keep me logged in</label>
            </div>
            <Link to="/Personaldetails" className="no-underline">
            <div className="button-login">
            <button type="button">Login</button>
            </div>
            </Link>
            <div className="forgetpassword">
                <Link to="/forgetpassword" className='no-underline' >forgetpassword</Link>
            </div>
            <div className="signup">
                <label>Don't have an account ?<a href="#" className="no-underline">Signup</a></label>
            </div>
        </div>
        </div>
  );
}

export default Loginsignup;