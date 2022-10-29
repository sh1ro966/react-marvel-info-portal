import './heroList.sass';
import heroImg from '../../img/abyss.jpg'

const HeroList = () => {
    return(
        <div className="hero">
            <ul className="hero__container">
                <li className="hero__item">
                    <img src={heroImg} alt="hero" />
                    <p>Abyss</p>
                </li>
                <li className="hero__item">
                    <img src={heroImg} alt="hero" />
                    <p>Abyss</p>
                </li>
                <li className="hero__item">
                    <img src={heroImg} alt="hero" />
                    <p>Abyss</p>
                </li>
                <li className="hero__item">
                    <img src={heroImg} alt="hero" />
                    <p>Abyss</p>
                </li>
                <li className="hero__item">
                    <img src={heroImg} alt="hero" />
                    <p>Abyss</p>
                </li>
                <li className="hero__item">
                    <img src={heroImg} alt="hero" />
                    <p>Abyss</p>
                </li>
                <li className="hero__item">
                    <img src={heroImg} alt="hero" />
                    <p>Abyss</p>
                </li>
                <li className="hero__item">
                    <img src={heroImg} alt="hero" />
                    <p>Abyss</p>
                </li>
                <li className="hero__item">
                    <img src={heroImg} alt="hero" />
                    <p>Abyss</p>
                </li>
            </ul>
            <button className="button button__long">LOAD MORE</button>
        </div>
    )
}

export default HeroList;