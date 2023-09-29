import React, { useEffect, useRef, useState } from 'react'
import { EmailSvgSvg, PasswordSvg, UserSvg } from '../../../static/icons'
import { ButtonLargeBlue } from '../../Buttons'
import { FaCheck, FaInfoCircle, FaTimes, FaUserCheck, FaUserTimes,  } from "react-icons/fa";
import { MdMarkEmailRead, MdMarkEmailUnread,  } from "react-icons/md";
import { TbLockCheck, TbLockX } from "react-icons/tb";
import './signUp.css';
import axios from 'axios';

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{6,24}$/;


const SignUp = ({setAction, InputType, Icon, handleClickShowPassword}) => {
    const emailRef = useRef();
    const userRef = useRef();
    const errRef = useRef();


    const [email, setEmail] =  useState("");
    const [validEmail, setValidEmail] = useState(false);
    const [FocusEmail, setFocusEmail] = useState(false);

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [focusUser, setFocusUser] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [focusPassword, setFocusPassword] = useState(false);

    const [mathPwd, setMathPwd] = useState('');
    const [validMathPwd, setValidMathPwd] = useState(false);
    const [focusMathPwd, setFocusMathPwd] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    
    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email))
    }, [email])

    useEffect(() => {
        setValidName(USER_REGEX.test(user))
    }, [user])


    useEffect(() => {
        setValidPassword(PWD_REGEX.test(password))
        setValidMathPwd(password === mathPwd)
    }, [password, mathPwd])


    useEffect(() => {
        setErrMsg('');
    }, [user, password, mathPwd]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enables with js hack
        const v1 = EMAIL_REGEX.test(email);
        const v2 = USER_REGEX.test(user);
        const v3 = PWD_REGEX.test(password);
        if (!v1 || !v2 || !v3){
            setErrMsg('Invalid Enter')
            return
        }
        // console.log(user, email, password)
        // setSuccess(true);

        try {
            const response = await axios.post('https://digitalamazonproject.azurewebsites.net/api/user/registerUser',
                {email: email, userName: user, password: password},
                {
                    headers:{'content-type': 'application/json' },
                    
                }
            );
            console.log(response.data)
            console.log(response.accessToken)
            console.log(JSON.stringify(response))
            setSuccess(true);
        }catch (err) {
            if (!err?.responser) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('userName Taken');
            }else {
                setErrMsg('Registration failed');
            }
            errRef.current.focus();
        }
    }


    return (
        <>
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        <a href="/authorization" >sign in</a>
                    </p>
                </section>
            ): (
                <div className="user-container">
            <h1 className='sign-name'>Sign up</h1>
            <p className='sign-p'> If you don’t have an account register <br/> You can  <span className='auth-click' onClick={() => { setAction(false)}}> Login here !</span></p>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live='assertive'>{errMsg}</p>
                <form onSubmit={handleSubmit}> 
                    <div className="form-group">
                        
                        <label htmlFor="email" className='label-name'>Email
                            {/* <FaCheck className={validEmail ? 'valid' : 'hide'}/>
                            <FaTimes className={validEmail || !email ? 'hide' : 'invalid'}/> */}
                        </label>
                        <div className="input-container">
                            <div className="icon-container left">
                                {/* <EmailSvgSvg /> */}
                                <EmailSvgSvg className={validEmail  || email  ?'hide' : '' }/>
                                <MdMarkEmailUnread   className={validEmail || !email ? 'hide' : 'invalid'}/>
                                <MdMarkEmailRead className={validEmail ?  'valid' : 'hide'}/>
                            </div>
                            <input type='email' id='email' placeholder='enter you email address'
                                ref={emailRef} autoComplete='off'
                                onChange={(e) => setEmail(e.target.value)} required
                                aria-invalid={validEmail ? "false" : "true"}
                                aria-describedby='uidnote'
                                onFocus={() => setFocusEmail(true)}
                                onBlur={() => setFocusEmail(false)}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="user" className='label-name'>
                            User
                            {/* <FaCheck className={validName ? 'valid' : 'hide'}/>
                            <FaTimes className={validName || !user ? 'hide' : 'invalid'}/> */}
                        </label>
                        <div className="input-container">
                            <div className="icon-container left">
                                <UserSvg className={validName  || user  ?'hide' : '' }/>
                                <FaUserTimes className={validName || !user ? 'hide' : 'invalid'}/>
                                <FaUserCheck className={validName ?  'valid' : 'hide'}/>
                            </div>
                            <input type='text' id='user' 
                                ref={userRef} autoComplete='off' placeholder='Enter your User name'
                                onChange={(e) => setUser(e.target.value)} required
                                aria-invalid={validName ? "false" : "true"}
                                aria-describedby='uidnote'
                                onFocus={() => setFocusUser(true)}
                                onBlur={() => setFocusUser(false)}
                            />
                        </div>
                        <p id="uidnote" className={focusUser && user && !validName ? "instruction" : 'offscreen'}>
                            <FaInfoCircle /> 
                            4 to 24 characters. <br />
                            Must begin with a letter. <br />
                            Letters, numbers, underscores, hyphens allowed
                        </p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className='label-name'>Password:
                            {/* <FaCheck className={validPassword ? 'valid' : 'hide'}/>
                            <FaTimes className={validPassword || !password ? 'hide' : 'invalid'}/> */}
                        </label>
                        <div className="input-container">
                            <div className="icon-container left">
                                {/* <PasswordSvg /> */}
                                <PasswordSvg className={validPassword  || password  ?'hide' : '' }/>
                                <TbLockX className={validPassword || !password ? 'hide' : 'invalid'}/>
                                <TbLockCheck className={validPassword ?  'valid' : 'hide'}/>
                            </div>
                            <input type={InputType} id='password' placeholder='enter you password'
                                    onChange={(e) => setPassword(e.target.value)} 
                                    required
                                    aria-invalid={validPassword ? "false" : "true"}
                                    aria-describedby='pwdnote'
                                    onFocus={() => setFocusPassword(true)}
                                    onBlur={() => setFocusPassword(false)}
                            />
                            <div className="auth-icon_container right" onClick={handleClickShowPassword}>
                                {Icon}
                            </div>
                        </div>
                        <p id='pwdnote' className={focusPassword && !validPassword ? 'instruction' : "offscreen"}>
                            <FaInfoCircle />
                            6 to 24 characters 
                            !@$#%
                        </p>

                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className='label-name'>Password
                            <FaCheck className={validMathPwd && mathPwd ? 'valid' : 'hide'}/>
                            <FaTimes className={validMathPwd || !mathPwd ? 'hide' : 'invalid'}/>
                        </label>
                        <div className="input-container">
                            <div className="icon-container left">
                                {/* <PasswordSvg /> */}
                                <PasswordSvg className={validMathPwd  || mathPwd  ?'hide' : '' }/>
                                <TbLockX className={validMathPwd || !mathPwd ? 'hide' : 'invalid'}/>
                                <TbLockCheck className={validMathPwd ?  'valid' : 'hide'}/>
                            </div>
                            {/* <input type={InputType} placeholder='confirmation your Password' onChange={(e) => setConfirmationPassword(e.target.value)}/> */}
                            <input type={InputType} placeholder='confirmation your Password' 
                                onChange={(e) => setMathPwd(e.target.value)} 
                                required
                                aria-invalid={validMathPwd ? "false" : "true"}
                                aria-describedby='confirnote'  
                                onFocus={() => setFocusMathPwd(true)}
                                onBlur={() => setFocusMathPwd(false)} />
                            <div className="auth-icon_container right" onClick={handleClickShowPassword} >
                                {Icon} 
                            </div>
                        </div>
                        <p id='confirnote' className={focusMathPwd && !validMathPwd ? 'instruction' : "offscreen"}>
                            <FaInfoCircle />
                            must match the first password input field.
                        </p>
                    </div>
                    <div className="auth-button-container">
                        <ButtonLargeBlue type="submit" text={'Register'} disabled={!validEmail || !validName || !validPassword || !validMathPwd ? true :false}/>
                    </div>
                </form>
        </div>
            )}
        </>
        
    )
}

export default SignUp