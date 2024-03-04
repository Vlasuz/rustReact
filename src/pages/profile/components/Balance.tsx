import React from 'react'
import coin from './../../../assets/images/header__coins.svg'
import add from './../../../assets/images/balance-add.svg'
import clock from './../../../assets/images/clock.svg'
import { useUserData } from '../../../hooks/userData'
import { NavLink } from 'react-router-dom'
import {useDispatch} from "react-redux";
import { setPopup } from '../../../redux/toolkitSlice'
import {prettyCoinValues} from "../../../functions/prettyCoinValues";
import {Translate} from "../../../components/translate/Translate";

interface IBalanceProps {

}

export const Balance: React.FC<IBalanceProps> = () => {

    const {userData} = useUserData()
    const dispatch = useDispatch()

    return (
        <div className="balance">
            <div className="balance__top">
                <div className="balance__block">
                    <h3>
                        <Translate>text_balance</Translate>
                    </h3>
                    <div className="balance__coins">
                        <img src={coin} alt="Ico" />
                        <span>
                            {
                                prettyCoinValues(userData.balance)
                            }
                        </span>
                    </div>
                </div>
                <button onClick={_ => dispatch(setPopup('popup-add-coins'))} className="balance__add">
                    <span>
                        <Translate>text_add_cash</Translate>
                    </span>
                    <img src={add} alt="Ico" />
                </button>
            </div>
            <NavLink to={"/history"} className="balance__history">
                <img src={clock} alt="Ico" />
                <span>
                    <Translate>text_history_balance</Translate>
                </span>
            </NavLink>
        </div>
    )
}
