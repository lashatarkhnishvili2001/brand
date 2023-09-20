import React, { useState } from 'react'
import { AppleSvg, EmailSvgSvg, FacebookSvg, GoogleSvg, PasswordSvg } from '../../../static/icons'
import './signIn.css'
import { ButtonLargeBlue } from '../../Buttons'
const SignIn = ({setAction, InputType, Icon, handleClickShowPassword }) => {
    
    const [password, setPassword] = useState("");

    return (
        <div className="user-container">
            <h1 className='sign-name'>Sign in</h1>
            <p className='sign-p'> If you don’t have an account register <br/> You can  <span className='auth-click' onClick={() => { setAction(true)}}> Register here !</span></p>
                <form> 
                    <div className="form-group">
                        <label  for="email" className='label-name'>Email</label>
                        <div className="input-container">
                            <div className="icon-container left">
                                <EmailSvgSvg />
                            </div>
                            <input type='email' placeholder='enter you email address'/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label  for="password" className='label-name'>Password</label>
                        <div className="input-container">
                            <div className="icon-container left">
                                <PasswordSvg />
                            </div>
                            <input id='password' value={password} type={InputType}  onChange={(e) => setPassword(e.target.value)} placeholder='enter you password'/>
                            <div className="auth-icon_container right" onClick={handleClickShowPassword} >
                                {Icon}
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