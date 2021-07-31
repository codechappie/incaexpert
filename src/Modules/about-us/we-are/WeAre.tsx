import style from './we-are.module.scss'
// import heroImage from '../../../assets/images/hero-image.png'
// import starIcon from '../../../assets/icons/star.png'

const WeAre = () => {
    return (
        <div className={style.we__are}>
            <div className={style.we__are__container}>
                <div className={style.text__detail}>
                    <h2>Who are we? A lot like you</h2>
                    <div className={style.separator}></div>
                    <p>
                        <span className={style.strong}>We are an international team of passionate wanderlusters dedicated
                            to making every aspect of your trip flawless.</span> As travelers ourselves, we
                        understand the thrill and complexity of planning the trip of a lifetime.
                        And we also understand that without proper due diligence, a vacation
                        can quickly go awry. That’s why we’re here.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WeAre
