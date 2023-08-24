import React from 'react'
import { Heading4, Subheading } from '../Headings';
import './Email.css'
import { ButtonNormalBlue } from '../Buttons';
import { EmailSvg } from '../../static';
const Email = () => {
    return (
        <div className='email-container'>
            <Heading4 text={'Subscribe on our newsletter'}/>
            <Subheading text={'Get daily news on upcoming offers from many suppliers all over the world'} />
            <form >
                {/* <div className="input-container">
                    <label for="email" ></label>
                    <div className="emailSvg">
                        <EmailSvg />
                    </div>
                    <input type="text" id="email" name="email" placeholder='Email'/>
                    <ButtonNormalBlue type='submit' text={'Subscribe'}/>
                </div> */}
                
                <label for="email" ></label>
                <div className="emailSvg">
                    <EmailSvg />
                </div>
                <input type="text" id="email" name="email" placeholder='Email'/>
                <ButtonNormalBlue type='submit' text={'Subscribe'}/>
            </form>
        </div>
    )
}

export default Email;