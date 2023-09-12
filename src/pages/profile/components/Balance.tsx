import React from 'react'
import coin from './../../../assets/images/header__coins.svg'
import add from './../../../assets/images/balance-add.svg'
import clock from './../../../assets/images/clock.svg'
import { useUserData } from '../../../hooks/userData'
import { NavLink } from 'react-router-dom'

interface IBalanceProps {

}

export const Balance: React.FC<IBalanceProps> = () => {

    const {userData} = useUserData()

    return (
        <div className="balance">
            <div className="balance__top">
                <div className="balance__block">
                    <h3>Баланс</h3>
                    <div className="balance__coins">
                        <img src={coin} alt="Ico" />
                        <span>
                            {userData.balance}
                        </span>
                    </div>
                </div>
                <button className="balance__add">
                    <span>Пополнить</span>
                    <img src={add} alt="Ico" />
                </button>
            </div>
            <NavLink to={"/history"} className="balance__history">
                <img src={clock} alt="Ico" />
                <span>Итория баланса</span>
            </NavLink>
        </div>
    )
}
