import {useState, useEffect} from "react";

import AppHeader from "../appHeader/AppHeader";
import RandomHero from "../randomHero/RandomHero";
import HeroList from "../heroList/HeroList";
import HeroInfo from "../heroInfo/HeroInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";


const App = () => {

    const [selectedHero, setSelectedHero] = useState(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    function setScroll() {
        setScrollPosition(window.pageYOffset);
      }

    useEffect(() => {
        window.addEventListener('scroll', setScroll);

        return () => {
            window.removeEventListener('scroll', setScroll)
        }
    }, []);

    const onHeroSelected = (id) => {
        setSelectedHero(id);
    }  


let pageUpClass = "pageup"
if (scrollPosition > 1267) {
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
                            <HeroList onHeroSelected={onHeroSelected} />
                        </ErrorBoundary>
                            <ErrorBoundary>
                                <HeroInfo heroId={selectedHero} />
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


export default App;
