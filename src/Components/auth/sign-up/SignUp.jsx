import React from 'react'
import { EmailSvgSvg, InvisibleSvg, PasswordSvg, UserSvg } from '../../../static/icons'
import { ButtonLargeBlue } from '../../Buttons'
import './signUp.css';

const SignUp = ({setAction}) => {
    return (
        <div className="user-container">
            <h1 className='sign-name'>sign up</h1>
            <p className='sign-p'> If you don’t have an account register <br/> You can  <span className='auth-click' onClick={() => { setAction(false)}}> Login here !</span></p>
                <form> 
                    <div className="form-group">
                        <label className='label-name'>Email</label>
                        <div className="input-container">
                            <div className="icon-container left">
                                <EmailSvgSvg />
                            </div>
                            <input type='email' placeholder='enter you email address'/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className='label-name'>User</label>
                        <div className="input-container">
                            <div className="icon-container left">
                                <UserSvg />
                            </div>
                            <input type='user' placeholder='Enter your User name'/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className='label-name'>Password</label>
                        <div className="input-container">
                            <div className="icon-container left">
                                <PasswordSvg />
                            </div>
                            <input type='password' placeholder='enter you password'/>
                            <div className="icon_container right">
                                <InvisibleSvg/>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className='label-name'>Password</label>
                        <div className="input-container">
                            <div className="icon-container left">
                                <PasswordSvg />
                            </div>
                            <input type='password' placeholder='Confrim your Password'/>
                            <div className="icon_container right">
                                <InvisibleSvg/>
                            </div>
                        </div>
                    </div>
                    <div className="auth-button-container">
                        <ButtonLargeBlue text={'Register'}/>
                    </div>
                </form>
        </div>
    )
}

export default SignUp