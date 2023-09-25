
import avatarUSer from '../../../Assets/images/AvatarUser.png';
import { Subheading } from '../../Headings';
import { BusinessSvg, FavoriteSSvg, HeadsetMicSvg, HomeSvg, InventorySSvg, LanguageSvg, ListSvg } from '../../../static/icons';
import './sidebar.css';
import { useEffect, useRef } from 'react';

const Sidebar = ({show, setShow}) => {
    // const [userAvatar, setUserAvatar] = useState(false)
    const sideNavRef = useRef();

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
                    <div className="sidebar-user-link">
                        <Subheading text={'Sign in | Register'}/>
                    </div>
                </div>
                <div className="sidebar-main">
                    <div className='sidebar-item'>
                        <HomeSvg/>
                        <Subheading text={'Home'} />
                    </div>
                    <div className='sidebar-item'>
                        <ListSvg/>
                        <Subheading text={'Categories'} />
                    </div>
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