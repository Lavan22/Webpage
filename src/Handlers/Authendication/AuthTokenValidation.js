import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

/*Redux*/
import { useSelector, useDispatch } from 'react-redux'
import UserAction from '../../redux/action/userAction'

import ResturantHandler from '../Resturant/Resturant'

import jwt_decode from 'jwt-decode';

import AlertPopup from '../../components/AlertPopup'
import Icons from '../../assets/Icons'

const AuthTokenValidation = () => {

    const [warningAlert, setWarningAlert] = useState(false)
    const [apiFailedMessage, setApiFailedMessage] = useState('Invalid Inputs, Please try again with vaild Inputs!')


    const resturantHandler = new ResturantHandler()

    const navigate = useNavigate();

    const store = useSelector((store) => store)
    const dispatch = useDispatch()

    const { updateState } = new UserAction

    const setUserDetials = async () => {

        let response = await resturantHandler.getProfileHandler()

        if (response && response.success) {

            dispatch(updateState({
                type: "SET_USER",
                payload: { resturant: response.data }
            }))

        } else {
            setWarningAlert(true)
            setApiFailedMessage(`${response.message}, Please try again!`)
        }

    }


    useEffect(() => {

        const authToken = localStorage.getItem('authToken');

        const url = window.location.pathname
        const Auth_Paths = ['/signin', '/signup', '/forget-password', '/verify-reset-password', '/reset-password']


        const checkURLValid = (url) => {
            for (const itm of Auth_Paths) if (url.includes(itm)) return true
            return false
        }

        if (authToken && checkURLValid(url)) {
            navigate('/resturant/projects');
            return
        }

        if (!authToken && checkURLValid(url)) {
            return
        }

        if (!authToken) {

            dispatch(updateState({
                type: "SET_USER",
                payload: { user: {} }
            }))

            navigate('/resturant/signin');
            return;
        }

        setUserDetials()

        try {
            const decoded = jwt_decode(authToken);
            const currentTimestamp = Math.floor(Date.now() / 1000);

            if (decoded.exp < currentTimestamp) {

                localStorage.removeItem('authToken');

                navigate('/resturant/signin');
            }
        } catch (error) {
            console.error('Error decoding authToken:', error);
        }
    }, []);


    const HandleWarningConfirm = (confirmation) => {

        setWarningAlert(false)
    }


    return (
        <>
            {warningAlert ?

                <AlertPopup
                    props={{
                        type: "delete",
                        actionBtnOption: { icon: Icons.general.warning, label: "Yea, Ok" },
                        heading: "Something went Wrong!",
                        message: apiFailedMessage || "Invalid Inputs, Please try again with vaild Inputs!",
                        callback: (confirmation) => HandleWarningConfirm(confirmation)
                    }} />

                : null}
        </>
    );
};

export default AuthTokenValidation;