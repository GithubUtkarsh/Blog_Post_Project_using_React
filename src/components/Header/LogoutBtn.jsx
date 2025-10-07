import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth.js';
import {logout} from '../../store/authSlice';
import{useNavigate} from 'react-router-dom'

function LogoutBtn() {
    const navigate=useNavigate();
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout()
        .then(() => {
            dispatch(logout());
            navigate('/');
        }).catch((error) => {
            console.log(error);
        })
    }
    return (
        <button 
        onClick={logoutHandler}
        className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-700 hover:cursor-pointer hover:text-gray-300"
        >Logout
        </button>
    )
}

export default LogoutBtn
