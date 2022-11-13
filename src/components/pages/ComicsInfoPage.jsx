import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import AppBanner from '../appBanner/AppBanner';
import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

import './comicsInfoPage.sass';

const ComicsInfoPage = () => {
    const {getComics, loading, error, clearError} = useMarvelService();
    const {comicsId} = useParams();
    const [comics, setComics] = useState(null);

    useEffect(() => {
        updateComics();
    }, [comicsId])

    const updateComics = () => {
        clearError();
        getComics(comicsId)
        .then(onComicsLoaded)
    }

    const onComicsLoaded = (comics) => {
        setComics(comics);
        
    } 

    const errorMsg = error ? <div className="comicsInfo__error"><ErrorMessage /></div> : null;
    const spinner = loading ? <div className="comicsInfo__spinner"><Spinner /></div> : null;
    const displayedContent =  !(loading || error || !comics) ? <RenderComics comics={comics} /> : null;

    
    return (
        <>
        <AppBanner />
        {spinner}
        {errorMsg}
        <div className="comicsInfo">
            {displayedContent}
        </div>
        </>
    )
}

const RenderComics = ({comics}) => {
    const {title, thumbnail, description, pageNumber, language, price} = comics;

    return (
        <>
        <div className="comicsInfo__img">
            <img src={thumbnail} alt={title} />
        </div>
        <div className="comicsInfo__info">
            <div className="comicsInfo__info_header">
                <div className="comicsInfo__info_name">{title}</div>
                <div className="comicsInfo__info_back"><Link className="comicsInfo__info_backText" to="/comics">Back to all</Link></div>
            </div>
                    <div className="comicsInfo__info_descr">{description}</div>
                        <div className="comicsInfo__info_pages">{pageNumber}</div>
                    <div className="comicsInfo__info_lang">{language}</div>
                <div className="comicsInfo__info_price">{price} $</div>
        </div>
        </>
    )
}

export default ComicsInfoPage;