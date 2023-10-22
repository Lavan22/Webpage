import React, { useEffect, useState } from 'react'

/* Redux Setup*/
import { Link, useNavigate, Route, Routes, BrowserRouter, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import store from './redux/store'

import './assets/css/index.css'

import ReverseProxy from './config/reverseProxy'

import Preloader from './components/Preloader'
import OnBoarding from './Pages/OnBoarding/OnBoarding'

import Signup from './Pages/login/signup'
import Login from './Pages/login/login'
import Forgetpassword from './Pages/login/forgetpassword'
import ResetPassword from './Pages/login/resetpassword'
import VerifyResetPassword from './Pages/login/verifyresetpassword'

import AuthTokenValidation from './Handlers/Authendication/AuthTokenValidation'

const App = () => {

  const store = useSelector((store) => store)
  const navigate = useNavigate();

  const authToken = localStorage.getItem('authToken')
  const isOnBoardingCompleted = JSON.parse(localStorage.getItem("onboarding_completed"))
  const [preloaderStatus, setPreloaderStatus] = useState(true)
  const [onBoardingStatus, setOnBoardingStatus] = useState(isOnBoardingCompleted != undefined ? !isOnBoardingCompleted : true)

  useEffect(() => {

    if (onBoardingStatus) navigate(`/resturant/onboarding`)

  }, [])

  const HandleOnBoardComplete = (value) => {
    setOnBoardingStatus(value)
    navigate(`/resturant/signup`)
  }

  return (

    <div className='project-container-main'>

      {preloaderStatus ? <Preloader props={{ delay: 1000, setPreloaderStatus }} /> : null}

      <Routes >

        <Route exact path='/signin' element={<Login />}></Route>
        <Route exact path='/signup' element={<Signup />}></Route>
        <Route exact path='/forget-password' element={<Forgetpassword />}></Route>
        <Route exact path='/verify-reset-password' element={<VerifyResetPassword />}></Route>
        <Route exact path='/reset-password' element={<ResetPassword />}></Route>

        <Route exact path='/onboarding/*' element={<OnBoarding props={{ completeCallback: HandleOnBoardComplete }} />}></Route>
      </Routes>

      {authToken ?
        <div className='project-main-container'>
          <AuthTokenValidation />
          <div className='project-section-container'>
            <div className='project-content-main'>
            </div>
          </div>
        </div>
        : <AuthTokenValidation />}

    </div>
  )
}

export default App;
