import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth.js';
import {logout} from '../../store/authSlice';

function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout()
        .then(() => {
            dispatch(logout());
        }).catch((error) => {
            console.log(error);
        })
    }
    return (
        <button 
        onClick={logoutHandler}
        className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
        >Logout
        </button>
    )
}

export default LogoutBtn
