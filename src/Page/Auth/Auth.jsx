import React, { useState } from 'react'
import imgAuth from '../../Assets/images/auth/Saly-10.png'
import SignIn from '../../Components/auth/sign-in'
import SignUp from '../../Components/auth/sign-up'
import './auth.css'

const Auth = () => {

    const [action, setAction] = useState(false)

    return (
        <main className='auth-main'>
            <div className='auth-left side'> 
            {!action ? <SignIn setAction={setAction} /> : <SignUp  setAction={setAction}/>}
                
                
            </div>
            <div className="auth-right side">
                <div className="auth-image">
                    <img src={imgAuth} alt="" />
                </div>
                <div className="auth-name">
                    <span className='sign-name'>Sign in to name</span>
                    <span className='sign-p'>Lorem Ipsum is simply </span>
                </div>
            </div>
        </main>
    )
}

export default Auth