import React, {useEffect, useState} from 'react'
import userPhoto from "../../../assets/images/user.jpeg";
import clothesIcon from "../../../assets/images/clothes.svg";
import weaponIcon from "../../../assets/images/weapon.png";
import coins from "../../../assets/images/header__coins.svg";

interface IFightSingleTopProps {

}

export const FightSingleTop:React.FC<IFightSingleTopProps> = () => {



    return (
        <div className="section-fight__top">
            {/*section-fight__user_hidden*/}
            <div className="section-fight__user">
                <div className="user__photo">
                    <img src={userPhoto} alt="User"/>
                </div>
                <div className="user__name">Семён</div>
            </div>
            <div className="section-fight__resources">
                <div className="resources__clothes">
                    <button className="clothes__head">
                        <img src={clothesIcon} alt="Ico"/>
                    </button>
                    <div className="clothes__body">
                        <ul>
                            <li>
                                <div className="clothes__cool clothes__cool_green">

                                </div>
                                <img src={weaponIcon} alt="Photo"/>
                            </li>
                            <li>
                                <div className="clothes__cool clothes__cool_green">

                                </div>
                                <img src={weaponIcon} alt="Photo"/>
                            </li>
                            <li>
                                <div className="clothes__cool clothes__cool_green">

                                </div>
                                <img src={weaponIcon} alt="Photo"/>
                            </li>
                            <li>
                                <div className="clothes__cool clothes__cool_green">

                                </div>
                                <img src={weaponIcon} alt="Photo"/>
                            </li>
                            <li>
                                <div className="clothes__cool clothes__cool_green">

                                </div>
                                <img src={weaponIcon} alt="Photo"/>
                            </li>
                            <li>
                                <div className="clothes__cool clothes__cool_green">

                                </div>
                                <img src={weaponIcon} alt="Photo"/>
                            </li>
                            <li className="count">
                                <span>+3</span>
                            </li>
                        </ul>
                    </div>
                </div>
                {/*resources__coins_none*/}
                <div className="resources__coins">
                    <img src={coins} alt="Ico"/>
                    <span>100</span>
                </div>
            </div>
        </div>
    )
}
