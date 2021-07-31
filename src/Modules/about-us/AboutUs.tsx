import style from './about.module.scss'
import Experience from './experience/Experience'
import Form from './form/Form'
import Hero from './hero/Hero'
import OurStory from './our-story/OurStory'
import Team from './team/Team'
import Unique from './unique/Unique'
import VideoModal from './video/VideoModal'
import WeAre from './we-are/WeAre'

const AboutUs = () => {
    return (
        <div className={style.about__us__page}>
            <Hero />
            <WeAre />
            <VideoModal />
            <OurStory />
            <Unique />
            <Experience />
            <Team />
            <Form />
        </div>
    )
}

export default AboutUs
