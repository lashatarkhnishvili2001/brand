import React, { useEffect, useRef, useState } from 'react'
import { AppleSvg, EmailSvgSvg, FacebookSvg, GoogleSvg, PasswordSvg } from '../../../static/icons'
import './signIn.css'
import { ButtonLargeBlue } from '../../Buttons'

const SignIn = ({setAction, InputType, Icon, handleClickShowPassword }) => {
    
    const emailRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);
    
    useEffect(() => {
        emailRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, password);
        setEmail('');
        setPassword('');
        setSuccess(true);
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>you ara logen in!</h1>
                    <br/>
                    <p>
                        <a href='/'>go to home</a>
                    </p>
                </section>
            ): (
                <div className="user-container">
                <h1 className='sign-name'>Sign in</h1>
                <p className='sign-p'> If you don’t have an account register <br/> You can  <span className='auth-click' onClick={() => { setAction(true)}}> Register here !</span></p>
                <p ref={errRef} className={errRef ? "errMsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <form onSubmit={handleSubmit}> 
                        <div className="form-group">
                            <label  htmlFor="email" className='label-name'>Email</label>
                            <div className="input-container">
                                <div className="icon-container left">
                                    <EmailSvgSvg />
                                </div>
                                <input type='email'  placeholder='enter you email address'
                                    id='email'
                                    ref={emailRef}
                                    autoComplete='off'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label  htmlFor="password" className='label-name'>Password</label>
                            <div className="input-container">
                                <div className="icon-container left">
                                    <PasswordSvg />
                                </div>
                                <input id='password' type={InputType}  placeholder='enter you password'
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    required
                                />
                                <div className="auth-icon_container right" onClick={handleClickShowPassword} >
                                    {Icon}
                                </div>
                            </div>
                        </div>
                        <div className="additional">
                            <div className="remember-me">
                                <input type='checkbox' name='remember-me' /> 
                                <label htmlFor="remember-mr"> remember me</label>
                            </div>
                            <div className="forgot-password">
                                <span>forgot password?</span>
                            </div>
                        </div>
                        <div className="auth-button-container">
                            <ButtonLargeBlue type="submit" text={'Login'}/>
                        </div>
                    </form>
                <div className="login-name">or continue with</div>
                <div className="social">
                    <FacebookSvg/>
                    <AppleSvg/>
                    <GoogleSvg/>
                </div>
            </div>
            )}
        
        </>
    )
}

export default SignIn