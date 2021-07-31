import style from './hero.module.scss'
import heroImage from '../../../assets/images/hero-image.png'
import starIcon from '../../../assets/icons/star.png'

const Hero = () => {
    return (
        <div className={style.hero}>
            <div className={style.hero__container}>
                <div className={style.text__detail}>
                    <h1>Get to know us</h1>
                    <div className={style.separator}></div>
                    <p>Wherever your adventure takes you, our goal is to make your journey just as inspiring and enriching as your. As <span className={style.strong}>Peru’s leading boutique agency,</span> this means providing personalized itineraries, comfortable transportation, handpicked hotels, and private tours from start to finish. </p>
                </div>
                <div className={style.image__container}>
                    <img src={heroImage} alt="culturas" />
                </div>
            </div>
            <div className={style.hero__footer}>
                <div className={style.hero__footer__container}>
                    <div className={style.sub__menu}>
                        <a href="#story" className={`${style.item} ${style.selected}`}>
                            Our story
                        </a>
                        <a href="#specialists" className={style.item}>
                            Specialists
                        </a>
                        <a href="#why-us" className={style.item}>
                            Why us
                        </a>
                        <a href="#staff" className={style.item}>
                            Our staff
                        </a>
                    </div>

                    <div className={style.qualification}>
                        <span>EXCELLENT | 4.9 </span>
                        <div className="stars">
                            <img src={starIcon} alt="star" />
                            <img src={starIcon} alt="star" />
                            <img src={starIcon} alt="star" />
                            <img src={starIcon} alt="star" />
                            <img src={starIcon} alt="star" />
                        </div>
                        <span className={style.trustpilot}>Trustpilot</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
