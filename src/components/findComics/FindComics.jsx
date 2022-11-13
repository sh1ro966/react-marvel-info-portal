import { useState } from 'react';

import './findComics.sass';

const FindComics = (props) => {

    const [term, setTerm] = useState('');
    
    const onSearch = (e) => {
        const term = e.target.value;
        setTerm(term);
        props.onSearch(term);
    }

        return (
            <div className="find">
                <div className="find__text">Looking for something?</div>
                <input onChange={onSearch} value={term} type="text" className="find__input" placeholder='Search comics' />
        </div>
        )

}

export default FindComics;