
import avatarUSer from '../../../Assets/images/AvatarUser.png';
import { Subheading } from '../../Headings';
import { BusinessSvg, FavoriteSSvg, HeadsetMicSvg, HomeSvg, InventorySSvg, LanguageSvg, ListSvg } from '../../../static/icons';
import './sidebar.css';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'antd';
import { logout } from '../../../Slices/auth/auth';

const Sidebar = ({show, setShow}) => {
    // const [userAvatar, setUserAvatar] = useState(false)
    const sideNavRef = useRef();

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {isLoggedIn} = useSelector((state) => state.auth)

    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = useCallback(() => {
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            dispatch(logout());
            navigate('/')
            setConfirmLoading(false);
            }, 1000);
    }, [dispatch, navigate]);

    const handleCancel = () => {
        setOpen(false);
    };



    useEffect(() => {
        let sidebarHandler = (e) => {
            if(!sideNavRef.current.contains(e.target)){
                setShow(false)
            }
        };
        document.addEventListener('mousedown', sidebarHandler)
        return() => {
            document.removeEventListener('mousedown', sidebarHandler)
        }
    });

    return (
        <div className={`aide-sidebar ${show? 'show' : 'hide'}`}>
            <aside ref={sideNavRef}>
            <div className="sidebar-container">
                <div className="sidebar-user">
                    <div className="sidebar-user-img">
                        <img src={avatarUSer} alt="" />
                    </div>
                    {isLoggedIn? (<>
                        <div className="sidebar-user-link">
                            <Subheading text={'Log Out'} onClick={() => showModal()}/>
                        </div>
                        <Modal
                        title="You must be authorized"
                        open={open}
                        onOk={handleOk}
                        confirmLoading={confirmLoading}
                        onCancel={handleCancel}
                        okText='Log Out'
                        > </Modal>
                        </>
                    ): (
                    <Link to="/authorization">
                        <div className="sidebar-user-link">
                            <Subheading text={'Sign in | Register'}/>
                        </div>
                    </Link>
                    )}
                    {/* // <Link to="/authorization">
                    //     <div className="sidebar-user-link">
                    //         <Subheading text={'Sign in | Register'}/>
                    //     </div>
                    // </Link> */}
                </div>
                <div className="sidebar-main">
                    <Link to="/" >
                    <div className='sidebar-item'>
                        <HomeSvg/>
                        <Subheading text={'Home'} />
                    </div>
                    </Link>
                    <Link to="/products" >
                    <div className='sidebar-item'>
                        <ListSvg/>
                        <Subheading text={'Categories'} />
                    </div>
                    </Link>
                    <div className='sidebar-item'>
                        <FavoriteSSvg/>
                        <Subheading text={'Favorites'} />
                    </div>
                    <div className='sidebar-item'>
                        <InventorySSvg/>
                        <Subheading text={'My orders'} />
                    </div>
                    <div className='sidebar-line'></div>
                    <div className='sidebar-item'>
                        <LanguageSvg/>
                        <Subheading text={'English | USD'} />
                    </div>
                    <div className='sidebar-item'>
                        <HeadsetMicSvg/>
                        <Subheading text={'Contact us'} />
                    </div>
                    <div className='sidebar-item'>
                        <BusinessSvg/>
                        <Subheading text={'About'} />
                    </div>
                    <div className='sidebar-line'></div>
                </div>
                <div className="sidebar-info">
                    <div className="sidebar-item-info">
                        <Subheading text={'User agreement'} />
                    </div>
                    <div className="sidebar-item-info">
                        <Subheading text={'Partnership'} />
                    </div>
                    <div className="sidebar-item-info">
                        <Subheading text={'Privacy policy'} />
                    </div>
                </div>
            </div>
            </aside>
        </div>
    )
}

export default Sidebar