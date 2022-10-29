import './appBanner.sass';
import avengers from '../../img/Avengers.png'
import avengersLogo from '../../img/Avengers-logo.png'

const AppBanner = () => {
    return (
        <div className="banner">
            <div className="banner__main">
                <img className="banner__main_avengers"src={avengers} alt="avengers team" />
                    <h2>
                        New comics every week!<br></br>
                        Stay tuned!
                    </h2>
                <img className="banner__main_avengersLogo" src={avengersLogo} alt="avengers logo" />
            </div>
        </div>
    )
}

export default AppBanner;