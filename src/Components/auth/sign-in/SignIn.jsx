import React, { useEffect, useRef, useState } from 'react'
import { AppleSvg, EmailSvgSvg, FacebookSvg, GoogleSvg, PasswordSvg } from '../../../static/icons'
import './signIn.css'
import { ButtonLargeBlue } from '../../Buttons'
import { EMAIL_REGEX, PWD_REGEX } from '../REGEX/REGEX'
import { MdMarkEmailRead, MdMarkEmailUnread } from 'react-icons/md'
import { TbLockCheck, TbLockX } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'

const SignIn = ({setAction, InputType, Icon, handleClickShowPassword }) => {
    
    const emailRef = useRef();
    const errRef = useRef();

    const navigate = useNavigate()
    
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    
    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);
    
    const [authValidation, setAuthValidation] = useState("")

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email))
    }, [email])
    
    useEffect(() => {
        setValidPassword(PWD_REGEX.test(password))
    }, [password])


    // useEffect(() => {
    //     emailRef.current.focus();
    // }, [])


    // useEffect(() => {
    //     setErrMsg('');
    // }, [email, password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            setAuthValidation("")
            const response = await fetch('https://amazon-digital-prod.azurewebsites.net/api/User/LogIn', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            const data = await response.json()

            localStorage.setItem("userToken", JSON.stringify(data.jwt))
            
            navigate('/')

            setPassword("")
            setEmail('')
            console.log(data)
            console.log("sussesful")
        }
        catch (error) {
        console.log(error)
        setAuthValidation("something went wrong,please try later")
        setPassword("")
        setEmail('')
        }



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
                                    {/* <EmailSvgSvg /> */}
                                    <EmailSvgSvg className={validEmail  || email  ?'hide' : '' }/>
                                    <MdMarkEmailUnread   className={validEmail || !email ? 'hide' : 'invalid'}/>
                                    <MdMarkEmailRead className={validEmail ?  'valid' : 'hide'}/>
                                </div>
                                <input type='email'  placeholder='enter you email address'
                                    id='email'
                                    ref={emailRef}
                                    autoComplete='off'
                                    // arial-onInvalid={validEmail ? 'false' : 'true'}
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
                                    {/* <PasswordSvg /> */}
                                    <PasswordSvg className={validPassword  || password  ?'hide' : '' }/>
                                    <TbLockX className={validPassword || !password ? 'hide' : 'invalid'}/>
                                    <TbLockCheck className={validPassword ?  'valid' : 'hide'}/>
                                </div>
                                <input id='password' type={InputType}  placeholder='enter you password'
                                    onChange={(e) => setPassword(e.target.value)}
                                    // value={password}
                                    // arial-onInvalid={validPassword ? 'false' : 'true'}
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