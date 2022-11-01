import { Component } from 'react';

import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './randomHero.sass';

class RandomHero extends Component{
    
    state = {
        hero: {},
        loading: true,
        error: false
    }

    marvelService = new MarvelService(); 

    componentDidMount() {
        this.updateHero();
    }

    onHeroLoaded = (hero) => {
        this.setState(() => ({
            hero,
            loading: false
        }))
    }

    updateHero = () => {
            const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
            this.updateHeroLoading();
            this.marvelService
            .getHero(id)
            .then(this.onHeroLoaded)
            .catch(this.onError);
    }

    updateHeroLoading = () => {
        this.setState({
            error: false,
            loading: true
        })
    }

    updateHeroBtn = () => {
        this.componentDidMount();
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
            })
    }

    render() {
        const {hero, loading, error} = this.state;
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
                        <button className="button button__main" onClick={this.updateHeroBtn}>TRY IT</button>
                    </div>
                </div>
            </div>
        )
    }
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