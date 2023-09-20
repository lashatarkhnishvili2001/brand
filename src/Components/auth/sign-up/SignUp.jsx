import React from 'react'
import { EmailSvgSvg, PasswordSvg, UserSvg } from '../../../static/icons'
import { ButtonLargeBlue } from '../../Buttons'
import './signUp.css';

const SignUp = ({setAction, InputType, Icon, handleClickShowPassword}) => {
    return (
        <div className="user-container">
            <h1 className='sign-name'>Sign up</h1>
            <p className='sign-p'> If you don’t have an account register <br/> You can  <span className='auth-click' onClick={() => { setAction(false)}}> Login here !</span></p>
                <form> 
                    <div className="form-group">
                        
                        <label htmlFor="email" className='label-name'>Email</label>
                        <div className="input-container">
                            <div className="icon-container left">
                                <EmailSvgSvg />
                            </div>
                            <input type='email' placeholder='enter you email address'/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="user" className='label-name'>User</label>
                        <div className="input-container">
                            <div className="icon-container left">
                                <UserSvg />
                            </div>
                            <input type='user' placeholder='Enter your User name'/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className='label-name'>Password</label>
                        <div className="input-container">
                            <div className="icon-container left">
                                <PasswordSvg />
                            </div>
                            <input type={InputType} placeholder='enter you password'/>
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
                            <input type={InputType} placeholder='Confrim your Password'/>
                            <div className="auth-icon_container right" onClick={handleClickShowPassword} >
                                {Icon} 
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