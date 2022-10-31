import AppHeader from "../appHeader/AppHeader";
import RandomHero from "../randomHero/RandomHero";
import HeroList from "../heroList/HeroList";
import HeroInfo from "../heroInfo/HeroInfo";
// import AppBanner from "../appBanner/AppBanner";
// import ComicsList from "../comicsList/ComicsList";
// import ComicsInfo from "../comicsInfo/ComicsInfo";
// import Skeleton from "../skeleton/Skeleton";

const App = () => {
    return (
        <>
            <div>
                <AppHeader />
            </div>
            <main className="app_container">
                <RandomHero />
                <div>
                    <HeroList />
                    <HeroInfo />
                    {/* <HeroInfo /> */}
                </div>
            </main>
        </>
    )
}

export default App;
