import { Component } from 'react';

import MarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

import './heroList.sass';

class HeroList extends Component {

    state = {
        heroList: [],
        loading: true,
        loadingRequest: false,
        error: false,
        offset: 118
    }
    
    marvelService = new MarvelService(); 

    componentDidMount() {
        this.onRequest();
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (this.state.offset !== prevState.offset) {
            this.onRequest(this.state.offset);
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

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    render() {
        const {heroList, loading, error} = this.state
            const errorMsg = error ? <div className="hero__other"><ErrorMessage /></div> : null;
            const spinner = loading ? <div className="hero__other"><Spinner /></div> : null;
            const displayedContent = !(loading || error) ? this.HeroBlock(heroList) : null;
            const longBtn = <button className="button button__long" disabled={this.state.loadingRequest} onClick={this.onRequestNewOffset}>LOAD MORE</button>;
        return(
            <div className="hero">
                    {errorMsg}
                    {spinner}
                    {displayedContent} 
                <div className="hero__button">
                       {!loading ? longBtn : null}
                </div>
            </div>
        )
    }     
    
    HeroBlock(arr) {
        const items = arr.map((item) => {
            return (
                <li
                className="hero__item"
                key={item.id}
                onClick={() => this.props.onHeroSelected(item.id)}>
                    <img src={item.thumbnail} alt={item.name} />
                    <p>{item.name.length > 24 ? `${item.name.slice(0, 22)}...` : item.name}</p>
                </li>
            )
        })
        return (
            <ul className="hero__container">
                {items}
            </ul>
        )
    }
}

export default HeroList;