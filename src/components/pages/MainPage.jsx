import {useState} from "react";

import RandomHero from "../randomHero/RandomHero";
import HeroList from "../heroList/HeroList";
import HeroInfo from "../heroInfo/HeroInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

const MainPage = () => {

    const [selectedHero, setSelectedHero] = useState(null);

const onHeroSelected = (id) => {
    setSelectedHero(id);
}   

    return (
        <>
        <ErrorBoundary>
            <RandomHero />
        </ErrorBoundary>
        <div>
            <ErrorBoundary>
                <HeroList onHeroSelected={onHeroSelected} />
            </ErrorBoundary>
            <ErrorBoundary>
                <HeroInfo heroId={selectedHero} />
            </ErrorBoundary>
            </div>
        </>
    )
}

export default MainPage;