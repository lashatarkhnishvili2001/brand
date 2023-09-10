import React from 'react'
import { Heading, Subheading1 } from '../Headings'
import { ButtonNormalWhite } from '../Buttons'
import './BannerBlue.css'

const BannerBlue = () => {
    return (
        <div className='bannerBlue'>
            <div className="bannerColumn">
                <Heading text={'Super discount on more than 100 USD'} />
                <Subheading1 text={'Have you ever finally just write dummy info'} />
            </div>
                <ButtonNormalWhite text={'Shop now'} />
        </div>
    )
}

export default BannerBlue