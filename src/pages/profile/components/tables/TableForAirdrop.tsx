import React from 'react'
import { IUser, IUserGames, IUserHistoryAirdrop, IUserHistoryFight } from '../../../../model'
import { useUserData } from '../../../../hooks/userData'
import coin from './../../../../assets/images/header__coins.svg'
import shield from './../../../../assets/images/shield.svg'
import fail from './../../../../assets/images/fail.svg'
import victory from './../../../../assets/images/victory.svg'
import no_photo from './../../../../assets/images/non-photo.png'
import { NavLink } from 'react-router-dom'

interface ITableForAirdropProps {
    tableValue: string
    tableData: IUserGames
    gameData: IUserHistoryAirdrop[]
    user: IUser
}

export const TableForAirdrop: React.FC<ITableForAirdropProps> = ({ tableValue, tableData, gameData, user }) => {

    return (
        <div className={"tabs__item tabs__item-airdrop" + (tableValue.toLowerCase().includes(tableData.slug?.toLowerCase()) ? " tabs__item_active" : "")}>
            <div className="table">
                <div className="thead">
                    <div className="tr">
                        <div className="td">Дата</div>
                        <div className="td">Номер игры</div>
                        <div className="td">Победитель</div>
                        <div className="td">Ставка</div>
                        <div className="td">Банк</div>
                        <div className="td">PF</div>
                        <div className="td">Исход</div>
                    </div>
                </div>
                <div className="tbody">

                    {
                        gameData?.map((item: IUserHistoryAirdrop) => {
                            const time = item.created_at.slice(item.created_at.indexOf(' '));
                            const date = item.created_at.slice(0, item.created_at.indexOf(' '));
                            const avatar = item.winner.user?.avatar ?? no_photo
                            const bet = item.players.filter(item => item.user?.id === user?.id)[0]?.bags?.length * 50
                            const isWinnerIcon = item.winner.user?.id === user?.id ? victory : fail
                            const isWinnerText = item.winner.user?.id === user?.id ? 'Winner' : 'Looser'
                            const winnerProfile = item.winner.user ? `/user/${item.winner.user.id}` : '/user-undefined/'
                            const smallHash = item.random_hash.slice(0, 5) + '...' + item.random_hash.slice(item.random_hash.length - 6)

                            return (
                                <div key={item.id} className="tr">
                                    <div className="td">
                                        {time}
                                        <span>{date}</span>
                                    </div>
                                    <div className="td">
                                        {item.game_id}
                                    </div>
                                    <div className="td">
                                        <div className="list-players">
                                            <ul>
                                                <li>
                                                    <NavLink to={winnerProfile}>
                                                        <img src={avatar} alt="User" />
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
                                                {bet}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="td">
                                        <div className="td__coins">
                                            <img src={coin} alt="Ico" />
                                            <span>
                                                {item.bank}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="td">
                                        <div className="shield">
                                            <img src={shield} alt="Shield" />
                                            <a href="#">
                                                {smallHash}
                                            </a>
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
