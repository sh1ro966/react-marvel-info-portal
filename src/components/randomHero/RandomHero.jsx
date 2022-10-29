import './randomHero.sass';
import thorImg from '../../img/thor.jpeg'
import mjolnirImg from '../../img/mjolnir.png'

const RandomHero = () => {
    return (
        <div className="random">
            <div className="random__hero random__item">
                <div className="random__hero_block">
                    <img src={thorImg} alt="hero" />
                </div>
                <div className="random__hero_info">
                    <p className="random__hero_name">Thor</p>
                    <p className="random__hero_descr">As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate...</p>
                      <div className="random__hero_buttons">
                      <button className="button button__main">HOMEPAGE</button>
                        <button className="button button__secondary">WIKI</button>
                      </div>
                </div>
            </div>
            <div className="random__try random__item">
                <div className="random__try_info">
                    <p className="random__try_info_first">Random character for today!<br></br>
                    Do you want to get to know him better?</p>
                    <p className="random__try_info_second">Or choose another one</p>
                    <button className="button button__main">TRY IT</button>
                </div>
                <img src={mjolnirImg} alt="mjolnir" />
            </div>
        </div>
    )
}

export default RandomHero;