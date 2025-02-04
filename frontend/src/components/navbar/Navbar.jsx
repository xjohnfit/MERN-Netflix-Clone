import './navbar.scss';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { Person, ArrowDownward, Notifications, Search } from '@mui/icons-material';

import { AuthContext } from '../../authContext/AuthContext';
import { logout } from '../../authContext/AuthActions';

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);
    const { dispatch, user } = useContext(AuthContext);

    window.onscroll = () => {
        setScrolled(window.scrollY === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    return (
        <div className={scrolled ? "navbar scrolled" : "navbar"}>
            <div className="nav_container">
                <div className="left">
                    <Link to="/"><img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt=""
                    /></Link>
                    <Link to="/"><span className='hidden xl:block lg:block md:hidden sm:hidden'>Homepage</span></Link>
                    <Link to="/shows"><span className='hidden sm:block md:block'>TV Shows</span></Link>
                    <Link to="/movies"><span className='hidden xl:block lg:block md:block sm:block'>Movies</span></Link>
                    <span className='hidden lg:block xl:block'>New and Popular</span>
                    <span className='hidden lg:block xl:block'>My List</span>
                </div>
                <div className="right">
                    <Search className="icon" />
                    <span>KIDS</span>
                    <Notifications className="icon" />
                    {
                        user.user.profilePic !== "" ? (
                            <img
                        src={user.user.profilePic}
                        alt="User Avatar"
                    />
                        ) : (
                            <Person className="icon" />
                        )
                    }
                    
                    <div className="profile">
                        <ArrowDownward className="icon" />
                        <div className="options">
                            <span>Settings</span>
                            <span onClick={() => dispatch(logout())}>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Navbar;
