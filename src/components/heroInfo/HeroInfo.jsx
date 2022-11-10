import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import MarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import Skeleton from '../skeleton/Skeleton';

import './heroInfo.sass';

const HeroInfo = (props) => {
    const [hero, setHero] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const marvelService = new MarvelService(); 

    useEffect(() => {
        updateHero();
    }, [props.heroId])

    const updateHero = () => {
        const {heroId} = props;
        if (!heroId) {
            return;
        }
        updateHeroLoading();
        marvelService.getHero(heroId)
        .then(onHeroLoaded)
        .catch(onError);
    }

    const updateHeroLoading = () => {
        setError(false);
        setLoading(true);
    }

    const onHeroLoaded = (hero) => {
        setHero(hero);
        setLoading(false);
    }

    const onError = () => {
        setLoading(false);
        setError(true);
    }

        let infoClass = '';
        if (!hero && !loading && !error) {
            infoClass += '';
        }
        else {
            infoClass += 'info';
        }
        const skeleton = !hero && !loading && !error ? <Skeleton /> : null;
        const errorMsg = error ? <div className="info__error"><ErrorMessage /></div> : null;
        const spinner = loading ? <div className="info__spinner"><Spinner /></div> : null;
        const displayedContent =  !(loading || error || !hero) ? <RenderHero hero={hero} /> : null;
    return (
        <div className={infoClass}>
            {skeleton}  
            {errorMsg}
            {spinner}
            {displayedContent}
        </div>
    )
}

const RenderHero = ({hero}) => {
    const {name, thumbnail, descriptionInfo, homepage, wiki, comics} = hero;
    return (
        <>
        <div className="info__info">
            <img src={thumbnail} alt={name} />
                <div className="info__info_block">
                    <div className="info__info_name">{name}</div>
                        <button className="button button__main"><a href={homepage}>HOMEPAGE</a></button>
                        <button className="button button__secondary"><a href={wiki}>WIKI</a></button>
                </div>
            </div>
            <div className="info__text">{descriptionInfo}</div>
            <h3 className="info__subheader">Comics:</h3>
                <div className="info__comics_list">
                    <ul>
                    { comics.length > 0 ? comics.map((item, i) => <li key={i} className="info__comics_list_item">{item.name}</li>).slice(0,9) : <p>There is no comicses about this hero</p> }
                    </ul>
            </div>
        </>
    )
}

HeroInfo.propTypes = {
    heroId: PropTypes.number
}

export default HeroInfo;