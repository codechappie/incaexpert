import { Link } from 'react-router-dom'
import style from './footer.module.scss'

import facebookIcon from '../../../assets/icons/facebook-icon.svg'
import instagramIcon from '../../../assets/icons/instagram-icon.svg'
import starIcon from '../../../assets/icons/footer-star.svg'
import featuredIcon from '../../../assets/icons/featured.svg'
import logo from '../../../assets/icons/logo-footer.svg'

import cnnIcon from '../../../assets/images/cnn.svg'
import bbcIcon from '../../../assets/images/bbc.svg'
import bbbIcon from '../../../assets/images/bbb.svg'
import astaIcon from '../../../assets/images/asta.svg'
import nationalIcon from '../../../assets/images/nationalg.svg'

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footer__container}>
                <div className={style.featured__in}>
                    <img style={{ maxHeight: "22px" }} className={style.featured} src={featuredIcon} alt="" />
                    <div className={style.company}>
                        <img src={cnnIcon} alt="" />
                    </div>
                    <div className={style.company}>
                        <img src={bbcIcon} alt="" />
                    </div>
                    <div className={style.company}>
                        <img src={nationalIcon} alt="" />
                    </div>
                    <div className={style.company}>
                        <img style={{ maxHeight: "40px" }} src={astaIcon} alt="" />
                    </div>
                    <div className={style.company}>
                        <img style={{ maxHeight: "35px" }} src={bbbIcon} alt="" />
                    </div>
                </div>

                <div className={style.footer__detail}>
                    <div className={style.column}>
                        <div className={style.email}>
                            <h3>CONTACT</h3>
                            <span><a href="mailto:travel@incaexpert.com">travel@incaexpert.com</a></span>
                        </div>
                        <div className={style.email}>
                            <h3>PRESS INQUIRIES</h3>
                            <span><a href="mailto:press@incaexpert.com">press@incaexpert.com</a></span>
                        </div>
                    </div>

                    <div className={style.column}>
                        <Link to="/" className={style.item}>
                            DESTINATIONS
                        </Link>
                        <Link to="/" className={style.item}>
                            PACKAGES
                        </Link>
                        <Link to="/" className={style.item}>
                            REVIEWS
                        </Link>
                        <Link to="/" className={style.item}>
                            HOTELS
                        </Link>
                    </div>

                    <div className={style.column}>
                        <Link to="/" className={style.item}>
                            FAQS
                        </Link>
                        <Link to="/" className={style.item}>
                            VISITOR PRIVACY
                        </Link>
                        <Link to="/" className={style.item}>
                            TERMS
                        </Link>
                        <Link to="/" className={style.item}>
                            SITE MAP
                        </Link>
                    </div>

                    <div className={`${style.column} ${style.trustpilot}`} >
                        <h4>TRUSTPILOT</h4>
                        <div className={style.stars}>
                            <img src={starIcon} alt="" />
                            <img src={starIcon} alt="" />
                            <img src={starIcon} alt="" />
                            <img src={starIcon} alt="" />
                            <img src={starIcon} alt="" />
                        </div>
                        <span>
                            Excellent <div className={style.line}>|</div> 4.9 stars
                        </span>

                        <div className={style.networking}>
                            <a href="https://facebook.com" target="_blank" rel="noreferrer" className={style.item}>
                                <img src={facebookIcon} alt="" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className={style.item}>
                                <img src={instagramIcon} alt="" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className={style.copyright}>
                    <img src={logo} alt="" />
                    <span>2020 Copyright Inca Expert</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
