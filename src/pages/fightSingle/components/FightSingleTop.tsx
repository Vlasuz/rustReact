import React, {useEffect, useState} from 'react'
import userPhoto from "../../../assets/images/user.jpeg";
import clothesIcon from "../../../assets/images/clothes.svg";
import weaponIcon from "../../../assets/images/weapon.png";
import coins from "../../../assets/images/header__coins.svg";
import {useToggleModal} from "../../../hooks/toggleModal";
import {FightSingleItems} from "./FightSingleItems";
import {prettyCoinValues} from "../../../functions/prettyCoinValues";

interface IFightSingleTopProps {
    player: any
}

export const FightSingleTop:React.FC<IFightSingleTopProps> = ({player}) => {

    return (
        <div className="section-fight__top">
            <div className={"section-fight__user" + (player && Object.keys(player).length ? "" : " section-fight__user_hidden")}>
                <div className="user__photo">
                    <img src={player?.user?.avatar} alt="User"/>
                </div>
                <div className="user__name">
                    {player?.user?.name}
                </div>
            </div>
            <div className="section-fight__resources">

                {!!player?.items?.length && <FightSingleItems items={player?.items}/>}

                <div className={"resources__coins" + (player?.coins > 0 ? "" : " resources__coins_none")}>
                    <img src={coins} alt="Ico"/>
                    <span>
                        {prettyCoinValues(player?.coins) ?? 0}
                    </span>
                </div>
            </div>
        </div>
    )
}
