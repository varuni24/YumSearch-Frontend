import React from 'react'
import LoginSignUp from './LoginSignUp'
import '../css/Header.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
    return (
        <div className="header">
            <div className="header-title" onClick={()=>navigate('/')}> YumSearch </div>
            <div className="login-signup-buttons">
                <LoginSignUp />
            </div>
        </div>
    )
}

export default Header