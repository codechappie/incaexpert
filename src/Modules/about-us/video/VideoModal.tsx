import style from './video__modal.module.scss'
import machuPicchuImage from '../../../assets/images/machupicchu.png'
import playImage from '../../../assets/icons/play.png'
import { useEffect, useState } from 'react'
const VideoModal = () => {
    const [showVideo, setShowVideo] = useState(false)

    useEffect(() => {
        const body = document.getElementsByTagName("html");

        if (showVideo) {
            body[0].style.overflow = "hidden"
        } else {
            body[0].style.overflow = "auto"
        }
    }, [showVideo])

    return (
        <>
            <div className={`${style.modal} ${showVideo ? style.showed : ''}`}>
                <div className={style.overlay} onClick={() => setShowVideo(!showVideo)}></div>
                <div className={style.close} onClick={() => setShowVideo(!showVideo)}>✖</div>
                <video className={style.video} controls={false} autoPlay={true} muted={true} loop={true}>
                    <source src="https://www.incaexpert.com/media/top-video.mp4" type="video/mp4" />
                </video>
            </div>
            <div className={style.video__modal}>
                <img className={style.image} src={machuPicchuImage} alt="Machu Picchu" />
                <div className={style.play} onClick={() => setShowVideo(!showVideo)}>
                    <img src={playImage} alt="play" />
                </div>
            </div>
        </>
    )
}

export default VideoModal
