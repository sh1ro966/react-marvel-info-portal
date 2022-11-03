import React, { Component } from 'react';

import MarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import FindHero from '../findHero/FindHero';

import './heroList.sass';

class HeroList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heroList: [],
            searchHeroList: [],
            loading: true,
            loadingRequest: false,
            error: false,
            offset: 1,
            term: ''
        }
    }
    
    marvelService = new MarvelService(); 

    componentDidMount() {
        this.onRequest();
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (this.state.offset !== prevState.offset) {
            this.onRequest(this.state.offset);
        }
        if (this.state.term !== prevState.term) {
            this.onSearchHero(this.state.term);
        } 
    }

    onRequest = (offset) => {
        this.onHeroListLoading();
        this.marvelService.getAllHeroes(offset)
        .then(this.onAllHeroesLoaded)
        .catch(this.onError);
    }
    
    onHeroListLoading = () => {
        this.setState({
            loadingRequest: true
        })
    }

    onRequestNewOffset = () => { 
        this.setState(() => ({
            offset: this.state.offset + 9
        })) 
    }

    onAllHeroesLoaded = (newHeroList) => {
        this.setState(({heroList}) => ({
            heroList: [...heroList, ...newHeroList],
            loading: false,
            loadingRequest: false
        }))
    } 

    onSearchHeroes = (searchHeroList) => {
        this.setState(() => ({
            searchHeroList: searchHeroList,
            loading: false
        }))
    }

    onSearchHeroLoading = () => {
        this.setState(() => ({
            loading: true
        }))
    }

    onSearchHero = (term) => {
        if (term) {
        this.onSearchHeroLoading();
        this.marvelService.getFindHero(term)
        .then(this.onSearchHeroes)
        .catch(this.onError);
        }
        else {
            this.setState(() => ({
                searchHeroList: []
            }))
        }
        
    }

    onSearch = (term) => {
        this.setState(() => ({
            term: term
        }))
      }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
        console.log(err);
    }

    itemRef = [];

    setRef = (ref) => {
        this.itemRef.push(ref);
    }

    focusOnItem = (id) => {
        this.itemRef.forEach(item => item.classList.remove('hero__item_active'));
        this.itemRef[id].classList.add('hero__item_active');
        this.itemRef[id].focus();
    }
 
    HeroBlock(arr) {
            const itemsSearch = arr.map((item, i) => {
                return (
                    <li
                    tabIndex={0}
                    ref={this.setRef}
                    className="hero__item"
                    key={item.id}
                    onClick={() => {
                        this.props.onHeroSelected(item.id);
                        this.focusOnItem(i);
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

    render() {
        
        const {heroList, searchHeroList, loading, error, term} = this.state;
            const errorMsg = error ? <div className="hero__other"><ErrorMessage /></div> : null;
            const spinner = loading ? <div className="hero__other"><Spinner /></div> : null;
            const displayedContent = () => {
               if (term.length === 0) {
                return this.HeroBlock(heroList);
                }
                 else {
                    if (term.length > 1 && searchHeroList.length === 0) {
                        return <h2 style={{position: 'absolute', top: 450, left: 500}}>There is no such hero as - <span style={{color: '#9F0013'}}>'{term.slice(0, 20)}'</span></h2>
                    }
                    else if (!loading && !error) {
                        return this.HeroBlock(searchHeroList);
                    }
                    
                 }
            }
            const longBtn = <button className="button button__long" disabled={this.state.loadingRequest} onClick={this.onRequestNewOffset}>LOAD MORE</button>;
        return(  
            <>
            <FindHero onSearch={this.onSearch} />
            <div className="hero">
                    {errorMsg}
                    {spinner}
                    {displayedContent()} 
                <div className="hero__button">
                       {(!loading && !term) ? longBtn : null}
                </div>
            </div>
            </>
        )
    }     
}

export default HeroList;