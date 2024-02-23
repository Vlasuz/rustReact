import React, {useEffect} from 'react'
import {IUser, IUserGames, IUserHistoryFight} from "../../../../model";
import victory from "../../../../assets/images/victory.svg";
import fail from "../../../../assets/images/fail.svg";
import no_photo from "../../../../assets/images/non-photo.png";
import {NavLink} from "react-router-dom";
import coin from "../../../../assets/images/header__coins.svg";
import bot from "../../../../assets/images/bot.svg";
import {getApiLink} from '../../../../functions/getApiLink';
import swordsIcon from "../../../../assets/images/battleIconFight.svg";
import peopleBlue from "../../../../assets/images/peopleBlue.svg";
import boxGreen from "../../../../assets/images/boxGreen.svg";

interface ITableForBattleProps {
    tableValue: string,
    tableData: IUserGames,
    gameData: IUserHistoryFight[]
    user: IUser
}

export const TableForBattle: React.FC<ITableForBattleProps> = ({tableValue, tableData, gameData, user}) => {

    return (
        <div
            className={"tabs__item tabs__item-fight" + (tableValue.toLowerCase().includes(tableData?.slug?.toLowerCase()) ? " tabs__item_active" : "")}>
            <div className="table">
                <div className="thead">
                    <div className="tr">
                        <div className="td">Игроки</div>
                        <div className="td">Крейты</div>
                        <div className="td">Тип игры</div>
                        <div className="td">Статус</div>
                        <div className="td">Исход</div>
                    </div>
                </div>
                <div className="tbody">

                    {
                        gameData?.map((item: any) => {

                            const players = item?.players
                            const crates = item?.crates
                            const typeOfGame = item?.mode
                            const gameStatus = item?.status
                            const isWinnerIcon = item?.winners.some((win: any) => win.user.id === user.id) ? victory : fail
                            const isWinnerText = item?.winners.some((win: any) => win.user.id === user.id) ? 'Winner' : 'Looser'

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

                            return (
                                <div key={item.id} className="tr">
                                    <div className="td">
                                        <ul className="list-players">

                                            {
                                                players?.map((player: any) =>
                                                    <li key={player.user.id}>
                                                        <NavLink to={`/user/${player.user.id}`}>
                                                            <img src={player.is_bot ? bot : player.user.avatar} alt=""/>
                                                        </NavLink>
                                                    </li>
                                                )
                                            }
                                        </ul>
                                    </div>
                                    <div className="td">
                                        <ul className="list-players">

                                            {
                                                crates?.map((crate: any) =>
                                                    <li key={crate.crate.id}>
                                                        <img src={getApiLink(crate.crate.icon)} alt=""/>
                                                    </li>
                                                )
                                            }
                                        </ul>
                                    </div>
                                    <div className="td">
                                        <span>
                                                {gameTypesReverse[typeOfGame].title}
                                            </span>
                                    </div>
                                    <div className="td">
                                        {gameStatus}
                                    </div>
                                    <div className="td">
                                        <img src={isWinnerIcon} alt={isWinnerText} />
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}
