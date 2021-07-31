import style from './form.module.scss'
import startIcon from '../../../assets/icons/form-start.svg'
import { useState } from 'react';
const Form = () => {

    const [travelersNumber, setTravelersNumber] = useState(0);

    const handleChange = (e: any) => {
        const value = e.target.value.replace(/\D/g, "");
        setTravelersNumber(value);
    };

    return (
        <div className={style.form}>
            <div className={style.form__container}>
                <h3>BOOK WITH CONFIDENCE!</h3>
                <p><span className={style.underlined}>Postpone your tour with zero cost</span> up to 10 days prior to departure</p>

                <form className={style.form}>
                    <h6 className={style.subtitle}>ACCOMMODATION (OPTIONAL)</h6>
                    <div className={style.row}>
                        <div className={style.box}>
                            <span>LUXURY</span>
                            <div className={style.stars}>
                                <img src={startIcon} alt="" />
                                <img src={startIcon} alt="" />
                                <img src={startIcon} alt="" />
                                <img src={startIcon} alt="" />
                                <img src={startIcon} alt="" />
                            </div>
                        </div>

                        <div className={style.box}>
                            <span>SUPERIOR</span>
                            <div className={style.stars}>
                                <img src={startIcon} alt="" />
                                <img src={startIcon} alt="" />
                                <img src={startIcon} alt="" />
                                <img src={startIcon} alt="" />
                            </div>
                        </div>

                        <div className={style.box}>
                            <span>COMFORT</span>
                            <div className={style.stars}>
                                <img src={startIcon} alt="" />
                                <img src={startIcon} alt="" />
                                <img src={startIcon} alt="" />
                            </div>
                        </div>
                    </div>

                    <h6 className={style.subtitle}>NUMBER OF TRAVELERS</h6>
                    <div className={style.row}>
                        <div className={style.box}>
                            1
                        </div>
                        <div className={style.box}>
                            2
                        </div>
                        <div className={style.box}>
                            3
                        </div>
                        <div className={style.box}>
                            4
                        </div>
                        <div className={style.box}>
                            5
                        </div>
                        <div className={style.box}>
                            <span>Specify</span>
                            <input type="number" value={travelersNumber} onChange={handleChange} />
                        </div>
                        <div className={style.box} style={{ paddingLeft: "40px", paddingRight: "40px" }}>
                            undecided
                        </div>
                    </div>


                    <h6 className={style.subtitle}>TRIP LENGTH</h6>
                    <div className={style.row}>
                        <div className={style.box}>
                            3-5
                            <span>DAYS</span>
                        </div>
                        <div className={style.box}>
                            6-8
                            <span>DAYS</span>
                        </div>
                        <div className={style.box}>
                            9-11
                            <span>DAYS</span>
                        </div>
                        <div className={style.box}>
                            12-51
                            <span>DAYS</span>
                        </div>
                        <div className={style.box}>
                            16+
                            <span>DAYS</span>
                        </div>
                        <div className={style.box} style={{ paddingTop: "40px", paddingBottom: "40px" }} >
                            undecided
                        </div>
                    </div>

                    <h6 className={style.subtitle}>DEPARTURE</h6>
                    <div className={style.row}>
                        <textarea placeholder="tentative or set travel dates"></textarea>
                    </div>

                    <button className={style.form__btn}>NEXT 1/2</button>
                </form>

                <h5 className={style.final__text}>We sell virtually all services available in Peru and Galapagos</h5>
            </div>
        </div>
    )
}

export default Form
