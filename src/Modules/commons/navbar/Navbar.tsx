import { Link } from "react-router-dom";
import style from './navbar.module.scss';

import facebookIcon from '../../../assets/icons/facebook-icon.svg'
import instagramIcon from '../../../assets/icons/instagram-icon.svg'
import { useState } from "react";

const Navbar = () => {
    const [showResponsiveMenu, setShowResponsiveMenu] = useState(false)

    const toggleMenu = () => {
        console.log("clieckd")
        setShowResponsiveMenu(!showResponsiveMenu)
    }

    return (
        <nav className={style.navbar}>
            <div className={style.navbar__container}>
                <Link to="/" className={style.logo}>
                    <img src="https://www.incaexpert.com/images2/logo.svg" alt="logo Inca Expert Travel" />
                </Link>

                <div className={style.right__content}>
                    <Link to="/" className={style.item}>Packages</Link>
                    <Link to="/" className={style.item}>+1 817 210 6443</Link>
                    <Link className={style.button__planning__trip} to="/">Start Planning My Trip</Link>
                    <div className={style.menu__btn} onClick={toggleMenu}>
                        <span>Menu</span>
                        <div className={style.menu__bars}>
                            <span className={style.bar}></span>
                            <span className={style.bar}></span>
                            <span className={style.bar}></span>
                        </div>
                    </div>
                </div>

                <div className={`${style.responsive__menu} ${showResponsiveMenu ? `${style.show}` : ''}`}>
                    <div className={style.close__btn} onClick={toggleMenu}>✖</div>
                    <Link to="/" className={style.item}>Our story</Link>
                    <Link to="/" className={style.item}>Specialists</Link>
                    <Link to="/" className={style.item}>Why us</Link>
                    <Link to="/" className={style.item}>Our story</Link>
                    <Link to="/" className={style.item}>Our staff</Link>
                    <Link to="/" className={style.item}>+1 817 210 6443</Link>
                    <Link className={style.button__planning__trip} to="/">Start Planning My Trip</Link>
                    <div className={style.networking}>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" className={style.icon}>
                            <img src={facebookIcon} alt="" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className={style.icon}>
                            <img src={instagramIcon} alt="" />
                        </a>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar
