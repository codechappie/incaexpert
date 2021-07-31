import style from './unique.module.scss'
import setImage from '../../../assets/images/set.png'
import setImage2 from '../../../assets/images/set-mobile.png'
import specialist1Image from '../../../assets/images/specialist1.png'
import specialist2Image from '../../../assets/images/specialist2.png'
import specialist3Image from '../../../assets/images/specialist3.png'
import specialist4Image from '../../../assets/images/specialist4.png'

const Unique = () => {
    return (
        <div className={style.unique}>
            <div className={style.unique__container}>
                <h2>What make us unique?</h2>
                <div className={style.image__container}>
                    <img className={style.desktop} src={setImage} alt="" />
                    <img className={style.mobile} src={setImage2} alt="" />

                    <div className={`${style.box__one} ${style.box}`}>
                        <h4>You</h4>
                        <p>
                            No two trips to Peru are identical,
                            and we like it that way. We customize
                            your itinerary so that your trip can
                            be as unique as you are. Whether you’re
                            traveling solo, with a partner, family
                            or friends, every decision about your
                            trip with Inca Expert is made with
                            intention.
                        </p>
                    </div>

                    <div className={`${style.box__two} ${style.box}`}>
                        <h4>Us</h4>
                        <p>
                            No two Travel Experts are
                            identical, and we like it
                            that way, too. At Inca
                            Expert individuality coexists with personal destination experience giving
                            you an insiders perspective and expert advice.
                        </p>
                    </div>

                    <div className={`${style.box__three} ${style.box}`} id="specialists">
                        <h4>Our Specialists</h4>
                        <p>
                            How do you become an expert? You learn from other experts! We’ve
                            partnered with specialists to further extend the breadth of our
                            knowledge so that we can always point you in the right direction.
                        </p>
                        <p>
                            Be an Inca Expert too by learning from our Specialists in our Passport to Peru Free Lecture series.
                        </p>
                    </div>
                </div>
            </div>

            <div className={style.specialists}>
                <div className={style.specialists__container}>
                    <div className={style.specialist}>
                        <div className={style.image}>
                            <img src={specialist1Image} alt="" />
                        </div>
                        <div className={style.information}>
                            <h5 className={style.name}>
                                KIM MACQUARRIE
                            </h5>
                            <h6 className={style.detail}>
                                Four-time Emmy-winning
                                filmmaker
                            </h6>
                            <p>
                                Anthropologist, and conservationist, Kim MacQuarrie is
                                our Chief Peru Expert. As an
                                author of best-sellers such
                                as The Last Days of the Incas
                                and Life and Death in the
                                Andes, he’s one of our
                                go-to’s when we have questions about Peru’s past.
                            </p>
                        </div>
                    </div>

                    <div className={style.specialist}>
                        <div className={style.image}>
                            <img src={specialist2Image} alt="" />
                        </div>
                        <div className={style.information}>
                            <h5 className={style.name}>
                                JAVIER PUENTE
                            </h5>
                            <h6 className={style.detail}>
                                Professor of Latin American
                                and Latino/a Studies at
                                Smith College in Massachusetts
                            </h6>
                            <p>
                                Dr. Javier Puente contributes
                                his endless knowledge of
                                Peru’s past and present. As a
                                Peruvian scholar, his personal knowledge and research
                                inspires Inca Expert to promote responsible travel,
                                ensuring Peru remains as
                                beautiful as it is now. Javier's expertise is featured on
                                CNN as an Inca Expert Specialist.
                            </p>
                        </div>
                    </div>

                    <div className={style.specialist}>
                        <div className={style.image}>
                            <img src={specialist3Image} alt="" />
                        </div>
                        <div className={style.information}>
                            <h5 className={style.name}>
                                ALONSO CUETO
                            </h5>
                            <h6 className={style.detail}>
                                Ph.D. in Philosophy, University of Texas. Award-winning
                                author
                            </h6>
                            <p>
                                Widely translated author and
                                recipient of Guggenheim
                                Foundation grant, Alonso
                                connects us to the soul of
                                Peru through his various
                                works touching upon the
                                most realist elements of
                                contemporary Peruvian society. He has a Ph.D. from the
                                University of Texas at Austin
                                and is a professor of literature at the Catholic University of Peru.
                            </p>
                        </div>
                    </div>

                    <div className={style.specialist}>
                        <div className={style.image}>
                            <img src={specialist4Image} alt="" />
                        </div>
                        <div className={style.information}>
                            <h5 className={style.name}>
                                GONZALO SALINAS
                            </h5>
                            <h6 className={style.detail}>
                                Doctorate in Economics
                                from Oxford University, UK
                            </h6>
                            <p>
                                Author of several works for
                                the World Bank and the IMF,
                                Gonzalo keeps us grounded
                                in Peru’s everyday reality.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <div className={style.note}>
                <div className={style.note__container}>
                    <div className={style.lateral__bar}>
                    </div>
                    <blockquote>
                        <p>
                            “I could clearly see the vacuum in the industry. Not a lot, if any,
                            local agencies were reliable and could deliver services at a standard
                            those visiting from North America and Europe would expect.”
                        </p>
                        <footer>Bernard Schleien, Founder</footer>
                    </blockquote>
                </div>
            </div>
        </div>
    )
}

export default Unique
