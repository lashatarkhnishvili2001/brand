import React from 'react'
import { Heading2, Heading4, Subheading } from '../../Headings'
import './inquiry.css';
import { ButtonNormalBlue } from '../../Buttons';
const Inquiry = () => {
    return (
        <section className='section-inquiry'>
            <div className="Inquiry-title box-two">
                <Heading2 text={"An easy way to send requests to all suppliers"} />
                <Subheading text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.'} />
            </div>
            <div className="Inquiry-box box-two">
                <Heading4 text={'Send quote to suppliers'} />
                <form>      
                    <input name="name" type="text" class="input-first" placeholder="What item you need?" />   
                    <textarea name="text" class="input" placeholder="Type more details"></textarea>
                    <div className="two-input">
                        <input name="name" type="text" class="input-one" placeholder="Quantity" />   
                        <input name="name" type="text" class="input-two" placeholder="Pcs" />   
                    </div>
                    <div className="button">

                    <ButtonNormalBlue text={'Send inquiry'} />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Inquiry