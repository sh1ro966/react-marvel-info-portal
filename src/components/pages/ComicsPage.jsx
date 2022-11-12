import {useState} from 'react';

import ComicsList from "../comicsList/ComicsList";

const ComicsPage = () => {

    const [selectedComics, setSelectedComics] = useState(null);

    const onComicsSelected = (id) => {
        setSelectedComics(id);
    } 

    return (
        <>
            <ComicsList onComicsSelected={onComicsSelected}/>
        </>
    )
}

export default ComicsPage;