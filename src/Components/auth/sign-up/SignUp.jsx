import React, { useState } from 'react'
import { EmailSvgSvg, PasswordSvg, UserSvg } from '../../../static/icons'
import { ButtonLargeBlue } from '../../Buttons'
import './signUp.css';
// import { redirect } from 'react-router-dom';

const SignUp = ({setAction, InputType, Icon, handleClickShowPassword}) => {


    const [email, setEmail] = useState('')
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    // const [confirmationPassword, setConfirmationPassword] = useState('')
    // const [getRedirect, setGetRedirect] = useState(false)

    function registerUser(e) {
        e.preventDefault()
        const createUser = {
            userName: user,
            password: password,
            email: email
        }
        fetch('https://digitalamazonproject.azurewebsites.net/api/user/registerUser', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "accept": "*/*"
            },
            body:JSON.stringify(createUser)
        })
        .then(response => response.json())
        .then(data => {
            if(data) {
                alert('User created successfully')
                // return <Navigate to='/profile' />
                // localStorage.setItem('user', JSON.stringify(createUser))
                // if(localStorage.hasOwnProperty('user')) {
                //     const user = JSON.parse(localStorage.getItem('user'))
                // }
                // setGetRedirect(true)
                // console.log(data)
            }
        })
    }

    // if(getRedirect) {
    //     return redirect('/profile')
    // }

    return (
        <div className="user-container">
            <h1 className='sign-name'>Sign up</h1>
            <p className='sign-p'> If you don’t have an account register <br/> You can  <span className='auth-click' onClick={() => { setAction(false)}}> Login here !</span></p>
                <form onSubmit={registerUser}> 
                    <div className="form-group">
                        
                        <label htmlFor="email" className='label-name'>Email</label>
                        <div className="input-container">
                            <div className="icon-container left">
                                <EmailSvgSvg />
                            </div>
                            <input type='email' placeholder='enter you email address' onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="user" className='label-name'>User</label>
                        <div className="input-container">
                            <div className="icon-container left">
                                <UserSvg />
                            </div>
                            <input type='user' placeholder='Enter your User name' onChange={(e) => setUser(e.target.value)}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className='label-name'>Password</label>
                        <div className="input-container">
                            <div className="icon-container left">
                                <PasswordSvg />
                            </div>
                            <input type={InputType} placeholder='enter you password' onChange={(e) => setPassword(e.target.value)}/>
                            <div className="auth-icon_container right" onClick={handleClickShowPassword}>
                                {Icon}
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className='label-name'>Password</label>
                        <div className="input-container">
                            <div className="icon-container left">
                                <PasswordSvg />
                            </div>
                            {/* <input type={InputType} placeholder='confirmation your Password' onChange={(e) => setConfirmationPassword(e.target.value)}/> */}
                            <input type={InputType} placeholder='confirmation your Password' />
                            <div className="auth-icon_container right" onClick={handleClickShowPassword} >
                                {Icon} 
                            </div>
                        </div>
                    </div>
                    <div className="auth-button-container">
                        <ButtonLargeBlue type="submit" text={'Register'}/>
                    </div>
                </form>
        </div>
    )
}

export default SignUp