import React, {useEffect} from 'react'
import {Translate} from '../../components/translate/Translate'
import {FightSingleTop} from "./components/FightSingleTop";
import {FightSingleStyled} from "./FightSingle.styled";

import userPhoto from './../../assets/images/user.jpeg'
import clothesIcon from './../../assets/images/clothes.svg'
import coins from './../../assets/images/header__coins.svg'
import weaponIcon from './../../assets/images/weapon.png'
import personSilhouette from './../../assets/images/persone-siluete.png'
import personNNN from './../../assets/images/persone-nnn.png'
import {Loading} from "../../components/loading/Loading";
import {LoadingStyled} from "../../components/loading/loading.styled";

interface IFightSingleProps {

}

export const FightSingle: React.FC<IFightSingleProps> = () => {



    return (
        <FightSingleStyled className="section-fight">
            <div className="section-fight__lft">
                <FightSingleTop/>
                <div className="section-fight__persone">
                    <div className="persone__start">
                        <img src={personNNN} alt="Persone"/>
                    </div>
                </div>
                <div className="section-fight__bottom">
                    <button className="section-fight__cancel">Отменить игру</button>
                </div>
            </div>
            <div className="section-fight__center">
                <div className="center__loading">
                    <LoadingStyled className="load">
                        <div className="line" />
                        <div className="line" />
                        <div className="line" />
                    </LoadingStyled>
                    <span>Ожидание</span>
                </div>
            </div>
            <div className="section-fight__rht">
                <div className="section-fight__top">
                    <div className="section-fight__user section-fight__user_hidden">
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
                        <div className="resources__coins resources__coins_none">
                            <img src={coins} alt="Ico"/>
                            <span>0</span>
                        </div>
                    </div>
                </div>
                <div className="section-fight__persone">
                    <div className="persone__start">
                        <img src={personSilhouette} alt="Persone"/>
                    </div>
                </div>
                <div className="section-fight__bottom">
                    <div className="section-fight__opponent-info">Нет игрока</div>
                </div>
            </div>
        </FightSingleStyled>
    )
}
