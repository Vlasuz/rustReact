import React, {useEffect, useRef} from 'react'
import {BattleItemStyled} from "./BattleItem.styled";
import coins from './../../../../assets/images/header__coins.svg'
import swordsIcon from './../../../../assets/images/battleIconFight.svg'
import peopleBlue from "../../../../assets/images/peopleBlue.svg";
import boxGreen from "../../../../assets/images/boxGreen.svg";
import {IBattleGame, IUser} from "../../../../model";
import {NavLink} from "react-router-dom";
import {getApiLink} from '../../../../functions/getApiLink';
import {BattleMode1V1} from "../battleTypes/BattleMode1v1";
import {BattleMode2V2} from '../battleTypes/BattleMode2v2';
import {BattleMode1V1V1} from "../battleTypes/BattleMode1v1v1";
import {BattleMode4Way} from "../battleTypes/BattleMode4way";
import {BattleMode2P} from "../battleTypes/BattleMode2p";
import {BattleMode3P} from "../battleTypes/BattleMode3p";
import {BattleMode4P} from "../battleTypes/BattleMode4p";
import {prettyCoinValues} from "../../../../functions/prettyCoinValues";
import AOS from "aos";


interface IBattleItemProps {
    itemData: IBattleGame
    index: number
}

export const BattleItem: React.FC<IBattleItemProps> = ({itemData, index}) => {

    const liRef: any = useRef(null)

    useEffect(() => {
        setTimeout(() => {
            AOS.refreshHard();
            liRef.current?.classList?.add('aos-animate')
        }, 50 * 10);
    }, [])


    const gameBank = itemData?.crates?.reduce((accumulator: number, currentValue: any) => {
        const prSum = +accumulator + (+currentValue?.count * +currentValue?.crate?.price);
        return prSum;
    }, 0);

    const gameTypesReverse: any = {
        "two_way": {
            title: "1v1",
            icon: swordsIcon,
        },
        "three_way": {
            title: "1v1v1",
            icon: swordsIcon,
        },
        "four_way": {
            title: "4way",
            icon: swordsIcon,
        },
        "two_v_two": {
            title: "2v2",
            icon: peopleBlue,
        },
        "two_p": {
            title: "2p",
            icon: boxGreen,
        },
        "three_p": {
            title: "3p",
            icon: boxGreen,
        },
        "four_p": {
            title: "4p",
            icon: boxGreen,
        },
    }

    const gameMode: any = {
        "two_way": <BattleMode1V1 itemData={itemData}/>,
        "three_way": <BattleMode1V1V1 itemData={itemData}/>,
        "four_way": <BattleMode4Way itemData={itemData}/>,
        "two_v_two": <BattleMode2V2 itemData={itemData}/>,
        "two_p": <BattleMode2P itemData={itemData}/>,
        "three_p": <BattleMode3P itemData={itemData}/>,
        "four_p": <BattleMode4P itemData={itemData}/>,
    }

    const gameRounds = itemData?.crates?.reduce((accumulator: number, currentValue: any) => {
        const prSum = +accumulator + +currentValue?.count;
        return prSum;
    }, 0);
    const gameRoundsOpened = itemData?.crates?.reduce((accumulator: number, currentValue: any) => {
        const prSum = +accumulator + +currentValue?.opened;
        return prSum;
    }, 0);

    return (
        <BattleItemStyled data-aos={"fade-up"} data-aos-delay={index * 50} ref={liRef} className={`game_${itemData.status}`}>
            <NavLink to={`/battle/${itemData.id}`} className={`type ${itemData.mode}`}>
                <img src={gameTypesReverse[itemData.mode].icon} alt="Icon"/>
                <span>
                    {gameTypesReverse[itemData.mode].title} Battle
                </span>
            </NavLink>

            {
                gameMode[itemData.mode]
            }

            <NavLink to={`/battle/${itemData.id}`} className="button">
                <div className="button__cost">
                    <img src={coins} alt=""/>
                    <span>
                        {prettyCoinValues(gameBank) ?? 0}
                    </span>
                </div>
                <div className="button__status">
                    {gameRoundsOpened ? `${gameRoundsOpened}/${gameRounds}` : `${gameRounds} Rounds`}
                </div>
            </NavLink>

            <ul className="cases">

                {
                    itemData?.crates?.map((item, index) =>
                        <li className={itemData.status === "process" ? (itemData?.crates[index - 1] ? (itemData?.crates[index - 1].opened === itemData?.crates[index - 1].count ? "current" : "not-opened") : item.count === item.opened ? "opened" : "current") : ""}
                            key={item.crate.id}>
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
