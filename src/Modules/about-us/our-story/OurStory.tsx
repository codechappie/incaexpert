import style from './our-story.module.scss'
import photosImage from '../../../assets/images/photos.png'
import item1Image from '../../../assets/images/item-1.png'
import item2Image from '../../../assets/images/item-2.png'
import item3Image from '../../../assets/images/item-3.png'
import item4Image from '../../../assets/images/item-4.png'
import item5Image from '../../../assets/images/item-5.png'

const OurStory = () => {
    return (
        <div className={style.our__story} id="story">
            <div className={style.our__story__container}>
                <div className={style.text__detail}>
                    <h3>Our story</h3>
                    <p>
                        <span className={style.strong}> Over 20 years ago in Lima, Peru, our founder
                            Bernard Schleien was inspired to design a travel
                            company that could make any type of traveler
                            feel confident stepping off the beaten path.</span> He
                        envisioned guides who were highly trained and
                        well spoken, drivers who were prompt and
                        friendly, and Travel Advisors who had expert
                        local knowledge who could be your friend and
                        liaison from the planning stages all the way to
                        your take-off and return. And that’s exactly what
                        Inca Expert is today.
                    </p>
                </div>
                <div className={style.image__our__story}>
                    <img src={photosImage} alt="" />
                </div>
            </div>

            <div className={style.note}>
                <div className={style.note__container}>
                    <div className={style.lateral__bar}>
                    </div>
                    <blockquote>
                        <p>
                        Your time is valuable. Even though it might be your first time
                        visiting South America, you’ll feel like a seasoned traveler with
                        the advice and support of Inca Expert.
                        </p>
                    </blockquote>
                </div>
            </div>

            <div className={style.storyline}>
                <div className={style.storyline__container}>
                    <div className={style.summary}>
                        <p>
                            <span className={style.strong}>Since our early days as a small start up in 1998, </span>
                            Bernard has built Inca Expert on a foundation of
                            hard-work, expertise, professionalism, and a
                            contagious passion for travel.
                        </p>

                        <p>
                            Throughout the years In our 22 years of expertise
                            <span className={style.strong}> some proud milestones for us have been:</span>
                        </p>
                    </div>

                    <div className={style.detailed}>
                        <div className={style.item}>
                            <div className={style.image}>
                                <img src={item1Image} alt="" />
                            </div>
                            <p>
                                Moving from our start-up location to collaborative
                                office spaces in <span className={style.strong}>Lima and Cusco, Peru, as well and
                                    Texas, United States.</span>
                            </p>
                        </div>

                        <div className={style.item}>
                            <div className={style.image}>
                                <img src={item2Image} alt="" />
                            </div>
                            <p>
                                In 2006, we hired our in-house Operations Team.
                                Bringing you <span className={style.strong}>top-notch workmanship and more
                                    in-depth staff training.</span>
                            </p>
                        </div>

                        <div className={style.item}>
                            <div className={style.image}>
                                <img src={item3Image} alt="" />
                            </div>
                            <p>
                                By 2017, our company was enabling <span className={style.strong}>more than
                                    4,000 travelers each year</span> to experience Peru in the
                                positive way Inca’s always set.
                            </p>
                        </div>

                        <div className={style.item}>
                            <div className={style.image}>
                                <img src={item4Image} alt="" />
                            </div>
                            <p>
                                In 2019, we were delighted to be selected by Trustpilot as the <span className={style.strong}>#1 Travel Agency in the world.</span>
                            </p>
                        </div>

                        <div className={style.item}>
                            <div className={style.image}>
                                <img src={item5Image} alt="" />
                            </div>
                            <p>
                                In 2019 and 2020, we were <span className={style.strong}>approached by the BBC
                                    and CNN</span> to be referenced as Peru experts.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurStory
