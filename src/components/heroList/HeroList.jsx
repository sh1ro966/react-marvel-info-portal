import { Component } from 'react';

import MarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

import './heroList.sass';

class HeroList extends Component {

    state = {
        heroList: [],
        loading: true,
        error: false
    }
    
    marvelService = new MarvelService(); 

    componentDidMount() {
        this.marvelService.getAllHeroes()
        .then(this.onAllHeroesLoaded)
        .catch(this.onError);
    }

    onAllHeroesLoaded = (heroList) => {
        this.setState({
            heroList,
            loading: false
        })
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
            const longBtn = <button className="button button__long">LOAD MORE</button>;
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
                    <p>{item.name}</p>
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