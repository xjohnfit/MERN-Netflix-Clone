import './navbar.scss';
import { useContext, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../authContext/AuthContext';
import { logout } from '../../authContext/AuthActions';

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);
    const { dispatch } = useContext(AuthContext);

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
                    <SearchIcon className="icon" />
                    <span>KIDS</span>
                    <NotificationsIcon className="icon" />
                    <img
                        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                    />
                    <div className="profile">
                        <ArrowDownwardIcon className="icon" />
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
