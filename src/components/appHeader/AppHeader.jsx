import './appHeader.sass';

const AppHeader = () => {
    return (
        <div className="header">
            <div className="header__name header__item">
                <a href="www">
                    <h1><span>MARVEL</span> INFORMATION PORTAL</h1>
                </a>
            </div>
            
            <nav className="header__nav header__item">
                <ul>
                    <li><a className="header__nav_char" href="www">Characters</a></li>
                    <li>&#8203; / &#8203;</li>
                    <li> <a className="header__nav_comics" href="www"> Comics</a></li>
                </ul>
            </nav> 
        </div>
    )
}

export default AppHeader;