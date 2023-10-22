import React from 'react'
import account from '../Assets/accoutdetails.png';
import './Additionalinfo.css';
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
export const Additionalinfo = () => {

  return (
    <div className='Personaldetails'>
      <div className="responsive-image1">
        <img src={account} alt="banner" height="739"></img>
        </div>
        <Box className='Box' sx={{width:'100%'}}>
        <Stepper className='Stepper' activeStep={2} alternativeLabel sx={{paddingTop:'50px'}}>
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
              maxHeight:'10px',
              maxWidth:'10px',
              fill: 'blue', // circle's number (ACTIVE)
            },
          }}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    
    <div className="login-container">
    <div className="title1">Additonal info</div>
            <div className="content">Enter your additional information.</div>
            <div className="input-container">
                    <label>Phone number</label>
                   <input type="number" placeholder="(217)555-0113" />
                   </div>
            <div className="checkbox">
             <input type="checkbox"  value="checked" className="box"></input>
             <label className="box1">Turn on 2 factor authentication</label>
            </div>
            <Link to="/Confirmation" className='continue'>
            <div className="button-login">
            <button type="button">Continue</button>
            </div>
            </Link>

            <div className="back">
            <Link to="/Personaldetails" className="no-underline1">Back</Link>
            </div>
            <div className="signup1">
                <label>Already have an account ?<Link to="/"  className="no-underline">Signup</Link></label>
            </div>
     </div>
    </Box>
 </div>
  )
}