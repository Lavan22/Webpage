import React from 'react'
import account from '../Assets/accoutdetails.png';
import './Personaldetails.css';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Link } from 'react-router-dom';
const steps = [
  'Account type',
  'Personal details',
  'Additional info',
  'Confirmation'
];
export const Personaldetails = () => {

  return (
    <div className='Personaldetails'>
      <div className="responsive-image1">
        <img src={account} alt="banner" height="739"></img>
        </div>
        <Box className='Box' sx={{width:'100%'}}>
        <Stepper className='Stepper' activeStep={1} alternativeLabel sx={{paddingTop:'50px'}}>
        {steps.map((label) => (
          <Step key={label} className='Step'
          sx={{
            '& .MuiStepLabel-root .Mui-completed': {
              color: 'green', // circle color (COMPLETED)
            },
            '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
              {
                color: 'black', // Just text label (COMPLETED)
              },
            '& .MuiStepLabel-root .Mui-active': {
              color: 'blue', // circle color (ACTIVE)
            },
            '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
              {
                color: 'black', // Just text label (ACTIVE)
              },
            '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
              fill: 'blue', // circle's number (ACTIVE)
            },
          }}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    
    <div className="login-container1">
    <div className="title1">Personal details</div>
            <div className="content">Enter your data that you will use for entering.</div>
            <div className="input-container">
                    <label>Email</label>
                   <input type="email" placeholder="name@example.com" />
                   </div>
                   <div className="input-container">
                    <label>Password</label>
                    <input type="password" placeholder="min. 8 characters"/>
                 </div>
                 <div className="input-container">
                    <label>Confirm Password</label>
                    <input type="password" placeholder="min. 8 characters"/>
                 </div>
            <Link to="/Additionalinfo" className='continue'>
            <div className="button-login">
            <button type="button">Continue</button>
            </div>
            </Link>
            <div className="back">
            <a href="#" className="no-underline1">Back</a>
            </div>
            <div className="signup">
                <label>Already have an account ?<Link to="/"  className="no-underline">Signup</Link></label>
            </div>
     </div>
     </Box>
 </div>
  )
}

