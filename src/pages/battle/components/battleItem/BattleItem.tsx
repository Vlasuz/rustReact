import React, {useEffect} from 'react'
import {BattleItemStyled} from "./BattleItem.styled";
import userPhoto from './../../../../assets/images/user2.png'
import coins from './../../../../assets/images/header__coins.svg'
import caseIcon from './../../../../assets/images/case-magma.png'
import battleIconFight from './../../../../assets/images/battleIconFight.svg'
import {Loading} from "../../../../components/loading/Loading";
import {LoadingStyled} from "../../../../components/loading/loading.styled";
import {useSelector} from "react-redux";
import {IBattleGame, IUser} from "../../../../model";
import {NavLink} from "react-router-dom";
import {getApiLink} from '../../../../functions/getApiLink';
import {BattleMode1V1} from "../battleTypes/BattleMode1v1";
import { BattleMode2V2 } from '../battleTypes/BattleMode2v2';
import {BattleMode1V1V1} from "../battleTypes/BattleMode1v1v1";
import {getBearer} from "../../../../functions/getBearer";
import axios from "axios";
import getCookies from "../../../../functions/getCookie";

interface IBattleItemProps {
    itemData: IBattleGame
}

export const BattleItem: React.FC<IBattleItemProps> = ({itemData}) => {

    const gameBank = itemData?.crates?.reduce((accumulator: number, currentValue: any) => {
        const prSum = +accumulator + (+currentValue?.count * +currentValue?.crate?.price);
        return prSum;
    }, 0);

    const gameTypesReverse: any = {
        "two_way": "1v1",
        "three_way": "1v1v1",
        "four_way": "4way",
        "two_v_two": "2v2",
        "two_p": "2p",
        "three_p": "3p",
        "four_p": "4p",
    }

    const gameMode: any = {
        "two_way": <BattleMode1V1 itemData={itemData}/>,
        "two_v_two": <BattleMode2V2 itemData={itemData}/>,
        "three_way": <BattleMode1V1V1 itemData={itemData}/>
    }

    return (
        <BattleItemStyled className={`game_${itemData.status}`}>
            <NavLink to={`/battle/${itemData.id}`} className="type">
                <img src={battleIconFight} alt="Icon"/>
                <span>
                    {gameTypesReverse[itemData.mode]} Battle
                </span>
            </NavLink>

            {
                gameMode[itemData.mode]
            }

            <NavLink to={`/battle/${itemData.id}`} className="button">
                <div className="button__cost">
                    <img src={coins} alt=""/>
                    <span>
                        {+gameBank ?? 0}
                    </span>
                </div>
                <div className="button__status">
                    14 Rounds
                </div>
            </NavLink>

            <ul className="cases">

                {
                    itemData?.crates?.map(item =>
                        <li key={item.crate.id}>
                            <div className="case__top">
                                <div className="case__rarity"/>
                                <div className="case__count">{item.count}x</div>
                            </div>
                            <div className="case__image">
                                <img src={getApiLink(`/${item.crate.icon}`)} alt="case"/>
                            </div>
                        </li>
                    )
                }

            </ul>
        </BattleItemStyled>
    )
}
