import React from 'react'
import './cardRight.css'
import userImg from '../../../../Assets/images/Avatar.png'
import { ButtonSmallBlue, ButtonSmallWhite } from '../../../Buttons'
import { Heading6 } from '../../../Headings'

const CardRight = () => {
  return (
    <div className="cardRight">
        <div className="user-container">
          <div className="user">
            <img src={userImg} alt="" />
            <span>Hi, user <br/> let's get stated</span>
          </div>
          <ButtonSmallBlue text={'Join now'}/>
          <ButtonSmallWhite text={'Log in'}/>
        </div>
        <div className="block-row">
          <div className="block-container one">
            <Heading6 text={"Get US $10 off with a new supplier"} />
          </div>
          <div className="block-container two">
            <Heading6 text={'Send quotes with supplier preferences'} />
          </div>
        </div>
    </div>
  )
}

export default CardRight