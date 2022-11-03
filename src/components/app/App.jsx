import { Component } from "react";

import AppHeader from "../appHeader/AppHeader";
import RandomHero from "../randomHero/RandomHero";
import HeroList from "../heroList/HeroList";
import HeroInfo from "../heroInfo/HeroInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";


class App extends Component {

    state = {
        selectedHero: null,
        scrollPosition: 0
    }

    componentDidMount() {
        window.addEventListener('scroll', this.changeScroll);
    }

    changeScroll = () => {
        this.setState(() => ({
            scrollPosition: window.scrollY
        }))
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.changeScroll)
    }
    
    onHeroSelected = (id) => {
        this.setState({
            selectedHero: id
        })
    }  

    render() {
        let pageUpClass = "pageup"
        if (this.state.scrollPosition > 1267) {
            pageUpClass += ' pageUpBlock'
        }
        return (
            <>
                <div id="up">
                    <AppHeader />
                </div>
                <main className="app_container">
                    <ErrorBoundary>
                        <RandomHero />
                    </ErrorBoundary>
                    <div>
                        <ErrorBoundary>
                            <HeroList onHeroSelected={this.onHeroSelected} />
                        </ErrorBoundary>
                            <ErrorBoundary>
                                <HeroInfo heroId={this.state.selectedHero} />
                            </ErrorBoundary>
                    </div>
                </main>
                <a href="#up" className={pageUpClass}>
                    <img src="https://icons.veryicon.com/png/o/miscellaneous/xlys/page-up-7.png" alt="page-up" />
                 <div className="pageup__text">GO UP</div>
            </a>
            </>
        )
    }
}

export default App;
