import React, { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { EMAIL_REGEX, USER_REGEX, PWD_REGEX } from '../REGEX/REGEX';
import { ButtonLargeBlue } from '../../Buttons'
import { FaCheck, FaInfoCircle, FaTimes, FaUserCheck, FaUserTimes,  } from "react-icons/fa";
import { MdMarkEmailRead, MdMarkEmailUnread,  } from "react-icons/md";
import { TbLockCheck, TbLockX } from "react-icons/tb";
import { clearMessage } from '../../../Slices/auth/message';
import { register } from '../../../Slices/auth/auth';

import { EmailSvgSvg, EyeSlashSvg, EyeSolidSvg, PasswordSvg, UserSvg } from '../../../static/icons'
import AuthInput from '../../AuthInput';
import AuthIcon from '../AuthIcon/AuthIcon';

import './signUp.css';

const SignUp = ({setAction }) => {
    const emailRef = useRef();
    const userRef = useRef();
    const errRef = useRef();

    const [visible, setVisible] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(false);

    const Icon = visible  ? <EyeSolidSvg/> : <EyeSlashSvg/> 
    const IconConfirm = confirmPassword  ? <EyeSolidSvg/> : <EyeSlashSvg/> 

    const handleClickShowPassword = () => {
        setVisible(!visible);
    };
    const handleClickShowPasswordConfirm = () => {
        setConfirmPassword(!confirmPassword);
    };

    const InputType = visible ? 'text' : 'password' ;
    const InputTypeConfirm = confirmPassword ? 'text' : 'password' ;

    const [searchParams, setSearchParams ] = useSearchParams();

    const params = Object.fromEntries([...searchParams])

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

    // const [authValidation, setAuthValidation] = useState("");

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const {message} = useSelector((state) => state.message);

    const dispatch = useDispatch();

    useEffect(() => {
        if(params.account === 'register'){
            setSuccess(true);
        }else {
            setSuccess(false);
        }
    }, [params])

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch])
    
    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email))
    }, [email])

    useEffect(() => {
        setValidName(USER_REGEX.test(user))
    }, [user])

    useEffect(() => {
        setValidPassword(PWD_REGEX.test(password))
        setValidMathPwd(password === mathPwd && PWD_REGEX.test(mathPwd))
    }, [password, mathPwd])

    useEffect(() => {
        setErrMsg('');
    }, [email,user, password, mathPwd]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = EMAIL_REGEX.test(email);
        const v2 = USER_REGEX.test(user);
        const v3 = PWD_REGEX.test(password);
        if (!v1 || !v2 || !v3){
            setErrMsg('Invalid Enter')
            return
        }

        // console.log(user, email, password)
        // setSuccess(true);

        dispatch(register({user, email, password}))
            .unwrap()
            
            setEmail("")
            setUser("")
            setPassword("")
            setMathPwd("")


        // ---------------------------------------------
        // try {
        //     setAuthValidation("")
        //     const response = await fetch('https://amazon-digital-prod.azurewebsites.net/api/user/registerUser', {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify({email: email, userName: user, password: password})
        //     })
        //     const data = await response.json()
        //     console.log(data)
    
        //     navigate('/authorization')
    
        //     setEmail("")
        //     setUser("")
        //     setPassword("")
        //     setMathPwd("")
        //     }
        //     catch (error) {
        //     console.log(error)
        //     setAuthValidation("something went wrong,please try later")
        //     setEmail("")
        //     setUser("")
        //     setPassword("")
        //     setMathPwd("")
        // }
        //-----------------------------------

    }

    useEffect(()=> {
        if(message){
        setErrMsg(message);
        }
    },[message])


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
            <p ref={errRef} className={`text-normal ${errMsg && "errmsg"}${success && 'succmsg'}${(!errMsg && !success)? "offscreen" : ''}`} aria-live="assertive">{errMsg && errMsg}{success && 'Successfully Registered'}</p>
                <form onSubmit={handleSubmit}> 
                    <div className="form-group">
                        <label htmlFor="email" className='label-name'>Email</label>
                        <div className="input-container">
                            <div className="icon-container left">
                                <EmailSvgSvg className={validEmail  || email  ? 'hide' : '' }/>
                                <MdMarkEmailUnread   className={validEmail || !email ? 'hide' : 'invalid'}/>
                                <MdMarkEmailRead className={validEmail ?  'valid' : 'hide'}/>
                            </div>
                            <AuthInput type={'email'} id={'email'} placeholder={'enter you email address'}
                                ref={emailRef} autoComplete={'off'}
                                onChange={(e) => setEmail(e.target.value)} 
                                ariaInvalid={validEmail ? "false" : "true"}
                                ariaDescribedby={'uidnote'}
                                onFocus={() => setFocusEmail(true)}
                                onBlur={() => setFocusEmail(false)} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="user" className='label-name'>
                            User
                        </label>
                        <div className="input-container">
                            <div className="icon-container left">
                                <UserSvg className={validName  || user  ?'hide' : '' }/>
                                <FaUserTimes className={validName || !user ? 'hide' : 'invalid'}/>
                                <FaUserCheck className={validName ?  'valid' : 'hide'}/>
                            </div>
                            <AuthInput type={'text'} id={'user'} 
                                ref={userRef} autoComplete={'off'} placeholder={'Enter your User name'}
                                onChange={(e) => setUser(e.target.value)} required
                                ariaInvalid={validName ? "false" : "true"}
                                ariaDescribedby={'uidnote'}
                                onFocus={() => setFocusUser(true)}
                                onBlur={() => setFocusUser(false)}/>
                        </div>
                        <p id="uidnote" className={focusUser && user && !validName ? "instruction" : 'offscreen'}>
                            <FaInfoCircle /> 
                            4 to 24 characters. <br />
                            Must begin with a letter. <br />
                            Letters, numbers, underscores, hyphens allowed
                        </p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className='label-name'>Password:</label>
                        <div className="input-container">
                            <div className="icon-container left">
                                <PasswordSvg className={validPassword  || password  ?'hide' : '' }/>
                                <TbLockX className={validPassword || !password ? 'hide' : 'invalid'}/>
                                <TbLockCheck className={validPassword ?  'valid' : 'hide'}/>
                            </div>
                            <AuthInput type={InputType} id={'password'} placeholder={'enter you password'}
                                    onChange={(e) => setPassword(e.target.value)} 
                                    ariaInvalid={validPassword ? "false" : "true"}
                                    ariaDescribedby={'pwdnote'}
                                    onFocus={() => setFocusPassword(true)}
                                    onBlur={() => setFocusPassword(false)}/>
                            {/* <div className="auth-icon_container right" onClick={handleClickShowPassword}>
                                {Icon}
                            </div> */}
                            <AuthIcon className={"auth-icon_container right"} onClick={handleClickShowPassword} Icon={Icon}/>
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
                            <AuthInput type={InputTypeConfirm} placeholder={'confirmation your Password'}
                                onChange={(e) => setMathPwd(e.target.value)} 
                                ariaInvalid={validMathPwd ? "false" : "true"}
                                ariaDescribedby={'confirnote'} 
                                onFocus={() => setFocusMathPwd(true)}
                                onBlur={() => setFocusMathPwd(false)}/>
                                <AuthIcon className={"auth-icon_container right"} onClick={handleClickShowPasswordConfirm} Icon={IconConfirm}/>
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