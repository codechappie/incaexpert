import style from './team.module.scss'
// import setImage from '../../../assets/images/set.png'
// import userTeamImage from '../../../assets/images/user-team.png'
// import specialist2Image from '../../../assets/images/specialist2.png'
// import specialist3Image from '../../../assets/images/specialist3.png'
// import specialist4Image from '../../../assets/images/specialist4.png'

import { data } from './team-data';
import { Link } from 'react-router-dom'

const Team = () => {
    // console.log(data)
    return (
        <div className={style.team} id="staff">
            <div className={style.team__container}>
                <h2>Meet our team</h2>
                <span className={style.separator}></span>
                <p>
                    Among us, you will find a variety of experiences, interests, backgrounds, and footprints
                    that have traversed Latin America and the world. <span className={style.strong}>We share a passion for travel and we
                        have the experience and expertise required to deliver the trip of a lifetime.</span>
                </p>


                <div className={style.people}>
                    <div className={style.people__container}>
                        {
                            data.map((person) => (
                                <div className={style.person} key={person.id}>
                                    <div className={style.image}>
                                        <img src={person.profileImage} alt="" />
                                    </div>
                                    <div className={style.information}>
                                        <h3 className={style.name}>
                                            {person.fullname}
                                        </h3>
                                        <h6 className={style.detail}>
                                            {person.occupation}
                                        </h6>
                                        <Link to="">
                                            Learn more about  {person.fullname.split(" ")[0]}
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
