import './heroInfo.sass';
import lokiImg from '../../img/loki.png';

const HeroInfo = () => {
    return (
        <div className="info">
            <div className="info__info">
                <img src={lokiImg} alt="hero" />
                <div className="info__info_block">
                <div className="info__info_name">loki</div>
                        <button className="button button__main">HOMEPAGE</button>
                        <button className="button button__secondary">WIKI</button>
                </div>
            </div>
            <div className="info__text">
            In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.
            </div>
            <h3 className="info__subheader">Comics:</h3>
                <div className="info__comics_list">
                    <ul>
                        <li className="info__comics_list_item">All-Winners Squad: Band of Heroes (2011) #3</li>
                        <li className="info__comics_list_item">Alpha Flight (1983) #50</li>
                        <li className="info__comics_list_item">Amazing Spider-Man (1999) #503</li>
                        <li className="info__comics_list_item">Amazing Spider-Man (1999) #504</li>
                        <li className="info__comics_list_item">AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)</li>
                        <li className="info__comics_list_item">Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)</li>
                        <li className="info__comics_list_item">Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)</li>
                        <li className="info__comics_list_item">Vengeance (2011) #4</li>
                        <li className="info__comics_list_item">Avengers (1963) #1</li>
                        <li className="info__comics_list_item">Avengers (1996) #1</li>
                    </ul>
                </div>
        </div>
    )
}

export default HeroInfo;