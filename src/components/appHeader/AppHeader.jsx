import {Link, NavLink} from 'react-router-dom';

import './appHeader.sass';

const AppHeader = () => {
    return (
        <div className="header">
            <div className="header__name header__item">
                <Link to="/">
                    <h1><span>MARVEL</span> INFORMATION PORTAL</h1>
                </Link>
            </div>
            
            <nav className="header__nav header__item">
                <ul>
                    <li><NavLink end style={({isActive}) => ({color: isActive ? '#9F0013' : 'inherit' })} to="/" className="header__nav_char" href="www">Characters</NavLink></li>
                    <li>&#8203; / &#8203;</li>
                    <li><NavLink style={({isActive}) => ({color: isActive ? '#9F0013' : 'inherit' })} to="/comics" className="header__nav_comics" href="www"> Comics</NavLink></li>
                </ul>
            </nav> 
        </div>
    )
}

export default AppHeader;