import style from './experience.module.scss'
import experienceImage from '../../../assets/images/experience.png'
import experience2Image from '../../../assets/images/experience-2.png'

const Experience = () => {
    return (
        <div className={style.experience}  id="why-us">
            <div className={style.experience__container}>
                <h2>About Your Experience</h2>

                <div className={style.table}>
                    <div className={style.activators}>
                        <div className={`${style.item__button} ${style.activated}`}>
                            <div className={style.border__left}></div>
                            Thoughtful Selections
                        </div>
                        <div className={style.item__button}>
                            <div className={style.border__left}></div>
                            Responsible Travel
                        </div>
                        <div className={style.item__button}>
                            <div className={style.border__left}></div>
                            Traveler to Traveler
                        </div>
                        <div className={style.item__button}>
                            <div className={style.border__left}></div>
                            Behind the scenes
                        </div>
                        <div className={style.item__button}>
                            <div className={style.border__left}></div>
                            Perfectionism
                        </div>
                        <div className={style.item__button}>
                            <div className={style.border__left}></div>
                            Clarity
                        </div>
                        <div className={style.item__button}>
                            <div className={style.border__left}></div>
                            Stellar Reviews
                        </div>
                    </div>

                    <div className={style.content}>
                        <div className={style.text}>
                            <h3>Thoughtful Selections</h3>
                            <span className={style.separator}></span>
                            <p>
                                We partner with local businesses vetted
                                by our Provider Management Team so
                                that you can feel confident when we
                                make recommendations.
                            </p>
                        </div>
                        <div className={style.image}>
                            <img src={experienceImage} alt="" />
                        </div>
                    </div>
                </div>


                <div className={style.other__experiences}>
                    <div className={style.image}>
                        <img src={experience2Image} alt="" />
                    </div>

                    <div className={style.text}>
                        <p>
                            From first landing to final take off, you’ll be met by smiling
                            faces from our staff, chauffeured by experienced drivers
                            and brought to hotels bursting with character. Private tours
                            mean you can pick your guide’s brain and really experience
                            a personal connection with those you meet along the way
                            to Machu Picchu.
                        </p>
                        <p>
                            Inca Expert’s dream to show people the beauty and magic
                            of Peru while making visitors feel welcome and safe comes
                            alive each and every day. <span className={style.strong}>Two decades of hard-work, customer obsession and unwavering passion have truly made
                                us the Experts in the South American travel industry.</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
