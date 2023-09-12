import React, { ReactNode } from 'react'
import { IUser, IUserGames, IUserHistoryAirdrop, IUserHistoryFight } from '../../../../model'
import fail from './../../../../assets/images/fail.svg'
import victory from './../../../../assets/images/victory.svg'
import coin from './../../../../assets/images/header__coins.svg'
import no_photo from './../../../../assets/images/non-photo.png'
import { NavLink } from 'react-router-dom'

interface ITableForFightProps {
    tableValue: string,
    tableData: IUserGames,
    gameData: IUserHistoryFight[]
    user: IUser
}

export const TableForFight: React.FC<ITableForFightProps> = ({ tableValue, tableData, gameData, user }) => {

    return (
        <div className={"tabs__item tabs__item-fight" + (tableValue.toLowerCase().includes(tableData.slug.toLowerCase()) ? " tabs__item_active" : "")}>
            <div className="table">
                <div className="thead">
                    <div className="tr">
                        <div className="td">Дата</div>
                        <div className="td">Соперник</div>
                        <div className="td">Ставка</div>
                        <div className="td">Банк</div>
                        <div className="td">Исход</div>
                    </div>
                </div>
                <div className="tbody">

                    {
                        gameData?.map((item: IUserHistoryFight) => {
                            const time = item.created_at.slice(item.created_at.indexOf(' '));
                            const date = item.created_at.slice(0, item.created_at.indexOf(' '));
                            const isWinnerIcon = item.winner?.user && item.winner.user?.id === user?.id ? victory : fail
                            const isWinnerText = item.winner?.user && item.winner.user?.id === user?.id ? 'Winner' : 'Looser'
                            const bank = item.first_player.coins + item.second_player.coins
                            const opponentAvatar = item.first_player.user?.id !== user?.id ? item.first_player.user?.avatar : item.second_player.user?.avatar ?? no_photo
                            const opponentProfile =`/user/${item.first_player.user?.id !== user?.id ? item.first_player.user?.id : item.second_player.user?.id}` ?? '/user-undefined/'

                            return (
                                <div key={item.id} className="tr">
                                    <div className="td">
                                        {time}
                                        <span>{date}</span>
                                    </div>
                                    <div className="td">
                                        <div className="list-players">
                                            <ul>
                                                <li>
                                                    <NavLink to={opponentProfile} >
                                                        <img src={opponentAvatar} alt="User" />
                                                    </NavLink>
                                                </li>
                                            </ul>
                                            <div className="num" />
                                        </div>
                                    </div>
                                    <div className="td">
                                        <div className="td__coins">
                                            <img src={coin} alt="Ico" />
                                            <span>
                                                {item.first_player.coins}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="td">
                                        <div className="td__coins">
                                            <img src={coin} alt="Ico" />
                                            <span>
                                                {bank}
                                            </span>
                                        </div>
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
