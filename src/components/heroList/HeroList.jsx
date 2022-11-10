import {useState, useEffect, useRef} from 'react';

import MarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import FindHero from '../findHero/FindHero';

import './heroList.sass';

const HeroList = (props) => {

    const [heroList, setHeroList] = useState([]);
    const [searchHeroList, setSearchHeroList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingRequest, setLoadingRequest] = useState(false);
    const [error, setError] = useState(false);
    const [offset, setOffset] = useState(1);
    const [term, setTerm] = useState('');

    const marvelService = new MarvelService(); 

    useEffect(() => {
        onRequest(offset);
    }, [offset]);
    
    useEffect(() => {
        onSearchHero(term)
    }, [term]);

    const onRequest = (offset) => {
        onHeroListLoading();
        marvelService.getAllHeroes(offset)
        .then(onAllHeroesLoaded)
        .catch(onError);
    }
    
    const onHeroListLoading = () => {
        setLoadingRequest(true);
    }

    const onRequestNewOffset = () => { 
        setOffset(offset => offset + 9);
    }

    const onAllHeroesLoaded = (newHeroList) => {
        setHeroList([...heroList, ...newHeroList]);
        setLoading(false);
        setLoadingRequest(false);
    } 


    const onSearchHeroes = (searchHeroList) => {
        setSearchHeroList(searchHeroList);
        setLoading(false);
    }

    const onSearchHeroLoading = () => {
        setLoading(true);
    }

    const onSearchHero = (term) => {
        if (term) {
        onSearchHeroLoading();
        marvelService.getFindHero(term)
        .then(onSearchHeroes)
        .catch(onError);
        }
        else {
            setSearchHeroList([]);
        }
    }

    const onSearch = (term) => {
        setTerm(term);
      }

    const onError = () => {
        setError(true);
        setLoading(false);
    }

    const itemRef = useRef([]);

    const focusOnItem = (id) => {
        itemRef.current.forEach(item => item.classList.remove('hero__item_active'));
        itemRef.current[id].classList.add('hero__item_active');
        itemRef.current[id].focus();
    }
 
    function HeroBlock(arr) {
            const itemsSearch = arr.map((item, i) => {
                return (
                    <li
                    tabIndex={0}
                    ref={el => itemRef.current[i] = el}
                    className="hero__item"
                    key={item.id}
                    onClick={() => {
                        props.onHeroSelected(item.id);
                        focusOnItem(i);
                    }}>
                        <img src={item.thumbnail} alt={item.name} />
                        <p>{item.name.length > 24 ? `${item.name.slice(0, 22)}...` : item.name}</p>
                    </li>
                )
            })
            return (
                <ul className="hero__container">
                    {itemsSearch}
                </ul>
            )
    }
            const errorMsg = error ? <div className="hero__other"><ErrorMessage /></div> : null;
            const spinner = loading ? <div className="hero__other"><Spinner /></div> : null;
            const longBtn = <button className="button button__long" disabled={loadingRequest} onClick={onRequestNewOffset}>LOAD MORE</button>;
            const displayedContent = () => {
               if (term.length === 0) {
                return HeroBlock(heroList);
                }
                 else {
                    if (term.length > 1 && searchHeroList.length === 0) {
                        return <h2 style={{position: 'absolute', top: 450, left: 320}}>There is no such hero as - <span style={{color: '#9F0013'}}>'{term.slice(0, 15)}'</span></h2>
                    }
                    else if (!loading && !error) {
                        return HeroBlock(searchHeroList);
                    }
                    
                 }
            }
        return(  
            <>
            <FindHero onSearch={onSearch} />
            <div className="hero">
                    {errorMsg}
                    {spinner}
                    {displayedContent()} 
                <div className="hero__button">
                       {!loading && !term ? longBtn : null}
                </div>
            </div>
            </>
        )
}

export default HeroList;