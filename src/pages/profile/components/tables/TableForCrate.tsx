import React, {useEffect} from 'react'
import {IUser, IUserGames, IUserHistoryFight} from "../../../../model";
import victory from "../../../../assets/images/victory.svg";
import fail from "../../../../assets/images/fail.svg";
import no_photo from "../../../../assets/images/non-photo.png";
import {NavLink} from "react-router-dom";
import coin from "../../../../assets/images/header__coins.svg";
import { getApiLink } from '../../../../functions/getApiLink';

interface ITableForCrateProps {
    tableValue: string,
    tableData: IUserGames,
    gameData: IUserHistoryFight[]
    user: IUser
}

export const TableForCrate: React.FC<ITableForCrateProps> = ({ tableValue, tableData, gameData, user }) => {

    return (
        <div className={"tabs__item tabs__item-fight" + (tableValue.toLowerCase().includes(tableData?.slug?.toLowerCase()) ? " tabs__item_active" : "")}>
            <div className="table">
                <div className="thead">
                    <div className="tr">
                        <div className="td">Крейт</div>
                        <div className="td">Предмет</div>
                        <div className="td">Стоимость</div>
                    </div>
                </div>
                <div className="tbody">

                    {
                        gameData?.map((item: any) => {
                            // const time = item?.created_at?.slice(item?.created_at?.indexOf(' '));
                            // const date = item?.created_at?.slice(0, item?.created_at?.indexOf(' '));
                            // const isWinnerIcon = item?.winner?.user && item?.winner.user?.id === user?.id ? victory : fail
                            // const isWinnerText = item?.winner?.user && item?.winner.user?.id === user?.id ? 'Winner' : 'Looser'
                            // const bank = item?.first_player?.coins + item.second_player?.coins
                            // const opponentAvatar = item?.first_player?.user?.id !== user?.id ? item?.first_player?.user?.avatar : item.second_player.user?.avatar ?? no_photo
                            // const opponentProfile =`/user/${item?.first_player?.user?.id !== user?.id ? item?.first_player?.user?.id : item.second_player.user?.id}` ?? '/user-undefined/'

                            const crate = item?.crate
                            const crateItem = item?.item?.item?.image
                            const amount = item?.amount

                            console.log(item)

                            return (
                                <div key={item.id} className="tr">
                                    <div className="td">
                                        <ul className="list-players">
                                            <li>
                                                <img src={getApiLink(crate.icon)} alt=""/>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="td">
                                        <ul className="list-players">
                                            <li>
                                                <img src={crateItem} alt=""/>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="td">
                                        <div className="td__coins">
                                            <img src={coin} alt="Ico" />
                                            <span>
                                                {amount}
                                            </span>
                                        </div>
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
