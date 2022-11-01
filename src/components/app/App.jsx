import { Component } from "react";

import AppHeader from "../appHeader/AppHeader";
import RandomHero from "../randomHero/RandomHero";
import HeroList from "../heroList/HeroList";
import HeroInfo from "../heroInfo/HeroInfo";


class App extends Component {

    state = {
        selectedHero: null
    }
    
    onHeroSelected = (id) => {
        this.setState({
            selectedHero: id
        })
    }
    render() {
        return (
            <>
                <div>
                    <AppHeader />
                </div>
                <main className="app_container">
                    <RandomHero />
                    <div>
                        <HeroList onHeroSelected={this.onHeroSelected} />
                        <HeroInfo heroId={this.state.selectedHero} />
                    </div>
                </main>
            </>
        )
    }
}

export default App;
