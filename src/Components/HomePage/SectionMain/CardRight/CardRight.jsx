import React, { useState } from 'react'
import './cardRight.css'
import userImg from '../../../../Assets/images/Avatar.png'
import { ButtonSmallBlue, ButtonSmallWhite } from '../../../Buttons'
import { Heading6 } from '../../../Headings'
import { Link, useNavigate } from 'react-router-dom'
import { Modal } from 'antd'
import { useSelector } from 'react-redux'

const CardRight = ({userToken, logOut}) => {
  const {isLoggedIn} = useSelector((state) => state.auth)

  const [isModalOpen, setIsModalOpen] = useState(false);


  const navigate = useNavigate()

  const showModal = () => {
    setIsModalOpen(true);
  };

  
  const handleOk = () => {
    logOut()
    setIsModalOpen(false);
    navigate('/')
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  return (
    <div className="cardRight">
        <div className="user-container">
          {userToken ? (
          <>
          <div className="user">
            <img src={userImg} alt="" />
            <span>Hi, {isLoggedIn? "admin" : 'user'}</span>
            {/* <span>Hi, user</span> */}
          </div>
              <ButtonSmallWhite text={'Log out'} onClick={showModal}/>
              <Modal 
                title="Are you sure you want to log out"
                open={isModalOpen}
                onOk={handleOk} 
                onCancel={handleCancel}>
                
              </Modal>
          </>) : (
          <>
          <div className="user">
            <img src={userImg} alt="" />
            <span>Hi, user <br/> let's get stated</span>
          </div>
            <Link to={'/authorization'} >
              <ButtonSmallBlue text={'Join now'}/>
            </Link>
            <Link to={'/authorization'}>
              <ButtonSmallWhite text={'Log in'}/>
            </Link>
          </>)}
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