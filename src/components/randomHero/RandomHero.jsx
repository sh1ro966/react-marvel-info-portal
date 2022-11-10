import {useState, useEffect} from 'react';

import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './randomHero.sass';

const RandomHero = () => {
    
    const [hero, setHero] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const marvelService = new MarvelService(); 

    useEffect(() => {
        updateHero();
    }, []);

    const onHeroLoaded = (hero) => {
        setHero(hero)
        setLoading(false);
    }

    const updateHero = () => {
            const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
            updateHeroLoading();
            marvelService
            .getHero(id)
            .then(onHeroLoaded)
            .catch(onError);
    }

    const updateHeroLoading = () => {
        setError(false);
        setLoading(true);
    }

    const onError = () => {
        setLoading(false);
        setError(true);
    }

    const errorMsg = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const displayedContent = !(loading || error) ? <RandomHeroBlock hero={hero} /> : null;

        let heroClass = "random__item"
        if (!loading && !error) {
            heroClass += ' random__hero'
        }
        else {
            heroClass += ' random__spinner'
        }
        return (
            <div className="random">
                <div className={heroClass}>
                {errorMsg}
                {spinner}
                {displayedContent}
                    </div>
                <div className="random__try random__item">
                    <div className="random__try_info">
                        <h3 className="random__try_info_first">Random hero for today!<br></br>
                        Do you want to know him better?</h3>
                        <h3 className="random__try_info_second">Or choose another one</h3>
                        <button className="button button__main" onClick={updateHero}>TRY IT</button>
                    </div>
                </div>
            </div>
        )
}

const RandomHeroBlock = ({hero}) => {
    const {name, descriptionRandom, thumbnail, homepage, wiki} = hero;
    
    return (
        <>
        <div className="random__hero_block">
                    <img src={thumbnail} alt="Random Hero" />
                    </div>
                    <div className="random__hero_info">
                        <p className="random__hero_name">{name}</p>
                        <p className="random__hero_descr">{descriptionRandom}</p>
                         <div className="random__hero_buttons">
                            <button className="button button__main"><a href={homepage}>HOMEPAGE</a></button>
                            <button className="button button__secondary"><a href={wiki}>WIKI</a></button>
                    </div>
             </div>
        </>
    )
}

export default RandomHero;