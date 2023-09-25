import React, { useState } from 'react'
import imgAuth from '../../Assets/images/auth/Saly-10.png'
import SignIn from '../../Components/auth/sign-in'
import SignUp from '../../Components/auth/sign-up'
import './auth.css'
import Logo from '../../Components/Logo'
import { EyeSlashSvg, EyeSolidSvg } from '../../static/icons'

const Auth = () => {

    

    const [action, setAction] = useState(false)

    const [visible, setVisible] = useState(false);
    const Icon = visible ? <EyeSolidSvg/> : <EyeSlashSvg/> 
    const handleClickShowPassword = () => {
        setVisible(!visible);
    };

    const InputType = visible ? 'text' : 'password'

    return (
        <main className='auth-main'>
            <div className="auth-Logo">
                <Logo/>
            </div>
            <div className='auth-left side'> 
                <div className="mobile-img">
                    <img src={imgAuth} alt="" />
                </div>
                {!action ? <SignIn setAction={setAction} InputType={InputType} Icon={Icon} handleClickShowPassword={handleClickShowPassword}/> 
                : <SignUp setAction={setAction} InputType={InputType} Icon={Icon} handleClickShowPassword={handleClickShowPassword} /> }
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