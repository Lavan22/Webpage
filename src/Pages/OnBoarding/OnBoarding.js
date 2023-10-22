import React, { useEffect, useState, useRef } from 'react'
import { Route, Routes, BrowserRouter, Link, useNavigate, useParams } from 'react-router-dom';

import Icons from '../../assets/Icons'
import Images from '../../assets/Images'

const Preloader = ({ props }) => {

    const { completeCallback } = props

    const [onBoarding_items, setOnBoarding_items] = useState([
        {
            id: 'panel1',
            alignment: 'left',
            banner: Images.login_banner,
            title: "All your favorite's",
            description: `
                Get all your loved foods in one once place, 
                you just place the order we do the restGet 
                all your loved foods in one once place, you 
                just place the order we do the rest
            `
        },
        {
            id: 'panel2',
            alignment: 'right',
            banner: Images.login_banner,
            title: "All your favorite's",
            description: `
                Get all your loved foods in one once place, 
                you just place the order we do the restGet 
                all your loved foods in one once place, you 
                just place the order we do the rest
            `
        },
        {
            id: 'panel2',
            alignment: 'left',
            banner: Images.login_banner,
            title: "All your favorite's",
            description: `
                Get all your loved foods in one once place, 
                you just place the order we do the restGet 
                all your loved foods in one once place, you 
                just place the order we do the rest
            `
        },

    ])

    const [current_Screen, setCurrent_Screen] = useState(0)

    const HandleFooterBtn = (e, index) => {
        if (onBoarding_items.length - 1 == index) {
            completeCallback(false)
            localStorage.setItem('onboarding_completed', 'true')
        }
        else if (onBoarding_items.length - 1 >= index + 1) setCurrent_Screen(index + 1)

    }
    return (
        <div className="project-onboarding-main">
            <div className="onboarding-content-main">
                <div className="onboarding-header">
                    <div className="logo">
                        <img src={Images.logo} alt="" />
                    </div>
                </div>
                <div className="onboarding-detials-main">
                    {onBoarding_items.map((item, index) => (
                        <div key={item.id} id={item.id} className={`onboarding-detials ${index == current_Screen ? 'onboarding-detials-active' : ''}`}>
                            <div className="onboarding-detials-panels">
                                {item.alignment == 'left' ?
                                    <div className="panel-image">
                                        <img src={item.banner} alt="" />
                                    </div>
                                    : ''}
                                <div className="panel-detials">
                                    <div className="title">{item.title}</div>
                                    <div className="description">{item.description}</div>
                                </div>
                                {item.alignment == 'right' ?
                                    <div className="panel-image">
                                        <img src={item.banner} alt="" />
                                    </div>
                                    : ''}
                            </div>

                            <div className="onboarding-status-dots">
                                {onBoarding_items.map((itm, i) => (
                                    <span className={`dot ${i == current_Screen ? 'active' : ''}`}></span>
                                ))}

                            </div>

                            <div className="onboarding-detials-footer">
                                <div
                                    className="footer-button"
                                    onClick={(e) => HandleFooterBtn(e, index)}
                                >
                                    {onBoarding_items.length - 1 == index ? 'GET STARTED' : 'NEXT'}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Preloader;