import './comicsInfo.sass';
import AppBanner from '../appBanner/AppBanner';
import comicsImg from '../../img/portrait_uncanny.jpg';
const ComicsInfo = () => {
    return (
        <>
        <AppBanner />
        <div className="comicsInfo">
            <div className="comicsInfo__img">
                <img src={comicsImg} alt="comics" />
            </div>
            <div className="comicsInfo__info">
                <div className="comicsInfo__info_header">
                    <div className="comicsInfo__info_name">Strange</div>
                    <div className="comicsInfo__info_back"><a href="www">Back to all</a></div>
                </div>
                        <div className="comicsInfo__info_descr">Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?</div>
                            <div className="comicsInfo__info_pages">114 pages</div>
                        <div className="comicsInfo__info_lang">Language: en-us</div>
                    <div className="comicsInfo__info_price">9.99$</div>
            </div>
        </div>
        </>
    )
}

export default ComicsInfo;