import './comicsList.sass';
import AppBanner from '../appBanner/AppBanner';
import comicsImg from '../../img/portrait_uncanny.jpg';

const ComicsList = () => {
    return(
        <>
        <AppBanner />
        <div className="comics">
            <div className="comics__item">
                <div className="comics__item__img">
                    <img src={comicsImg} alt="comics" />
                    </div>
                <div className="comics__item_name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                <div className="comics__item_price">9.99$</div>
            </div>
            <div className="comics__item">
                <div className="comics__item__img">
                    <img src={comicsImg} alt="comics" />
                    </div>
                <div className="comics__item_name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                <div className="comics__item_price">9.99$</div>
            </div>
            <div className="comics__item">
                <div className="comics__item__img">
                    <img src={comicsImg} alt="comics" />
                    </div>
                <div className="comics__item_name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                <div className="comics__item_price">9.99$</div>
            </div>
            <div className="comics__item">
                <div className="comics__item__img">
                    <img src={comicsImg} alt="comics" />
                    </div>
                <div className="comics__item_name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                <div className="comics__item_price">9.99$</div>
            </div>
            <div className="comics__item">
                <div className="comics__item__img">
                    <img src={comicsImg} alt="comics" />
                    </div>
                <div className="comics__item_name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                <div className="comics__item_price">9.99$</div>
            </div>
            <div className="comics__item">
                <div className="comics__item__img">
                    <img src={comicsImg} alt="comics" />
                    </div>
                <div className="comics__item_name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                <div className="comics__item_price">9.99$</div>
            </div>
            <div className="comics__item">
                <div className="comics__item__img">
                    <img src={comicsImg} alt="comics" />
                    </div>
                <div className="comics__item_name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                <div className="comics__item_price">9.99$</div>
            </div>
            <div className="comics__item">
                <div className="comics__item__img">
                    <img src={comicsImg} alt="comics" />
                    </div>
                <div className="comics__item_name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                <div className="comics__item_price">9.99$</div>
            </div>
        </div>
        </>
    )
}

export default ComicsList;