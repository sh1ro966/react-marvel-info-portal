import {useState, useEffect} from 'react';

import './pageUp.sass';

const PageUp = () => {

    const [scrollPosition, setScrollPosition] = useState(0);

function setScroll() {
    setScrollPosition(window.pageYOffset);
}

useEffect(() => {
    window.addEventListener('scroll', () => setScrollPosition(window.pageYOffset));

    return () => {
        window.removeEventListener('scroll', () => setScrollPosition(window.pageYOffset))
    }
}, []);

let pageUpClass = "pageup"
if (scrollPosition > 1267) {
    pageUpClass += ' pageUpBlock'
}

    return (
        <a href="#up" className={pageUpClass}>
            <img src="https://icons.veryicon.com/png/o/miscellaneous/xlys/page-up-7.png" alt="page-up" />
            <div className="pageup__text">GO UP</div>
    </a>
    )
}

export default PageUp;