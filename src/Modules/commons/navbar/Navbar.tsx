import { Link } from "react-router-dom";
import style from './navbar.module.scss';
const Navbar = () => {
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
                    <div className={style.menu__btn}>
                        <span>Menu</span>
                        <div className={style.menu__bars}>
                            <span className={style.bar}></span>
                            <span className={style.bar}></span>
                            <span className={style.bar}></span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
