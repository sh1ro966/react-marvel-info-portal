import { useState } from 'react';

import './findHero.sass';

const FindHero = (props) =>  {

    const [term, setTerm] = useState('');
    
    const onSearch = (e) => {
        const term = e.target.value;
        setTerm(term);
        props.onSearch(term);
    }

        return (
            <div className="find">
                <input onChange={onSearch} value={term} type="text" className="find__input" placeholder='Search hero' />
            </div>
        )
}

export default FindHero;