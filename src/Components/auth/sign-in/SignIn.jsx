import React from 'react'
import { AppleSvg, EmailSvgSvg, FacebookSvg, GoogleSvg, InvisibleSvg, PasswordSvg } from '../../../static/icons'
import './signIn.css'
import { ButtonLargeBlue } from '../../Buttons'
const SignIn = ({setAction}) => {
    return (
        <div className="user-container">
            <h1 className='sign-name'>sign in</h1>
            <p className='sign-p'> If you don’t have an account register <br/> You can  <span className='auth-click' onClick={() => { setAction(true)}}> Register here !</span></p>
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
                    <div className="additional">
                        <div className="remember-me">
                            <input type='checkbox' name='remember-me' /> 
                            <label for="remember-mr"> remember me</label>
                        </div>
                        <div className="forgot-password">
                            <span>forgot password?</span>
                        </div>
                    </div>
                    <div className="auth-button-container">
                        <ButtonLargeBlue text={'Login'}/>
                    </div>
                </form>
            <div className="login-name">or continue with</div>
            <div className="social">
                <FacebookSvg/>
                <AppleSvg/>
                <GoogleSvg/>
            </div>
        </div>
    )
}

export default SignIn