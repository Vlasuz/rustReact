import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import { setPopup } from '../../redux/toolkitSlice';
import {PopupCross} from "../../hooks/popup/components/PopupCross";
import {IUser} from "../../model";
import lock from './../../assets/images/lock.svg'

interface ITradeLinkProps {

}

export const TradeLink: React.FC<ITradeLinkProps> = () => {

    const dispatch = useDispatch()
    const userInfo: IUser = useSelector((state: any) => state.toolkit.user)

    return (
        <>
            <h2>Трейд-ссылка</h2>
            <p>Введите вашу трейд-ссылку Steam, с ней можно пополнять баланс скинами</p>
            <PopupCross/>
            <div className="input">
                <input className="trade-link__input" type="text" readOnly value={userInfo.trade_link}/>
                <img src={lock} alt="Ico"/>
            </div>
            <div className="trade-link__buttons">
                <button onClick={_ => dispatch(setPopup('popup-trade popup-trade-link'))} className="grey">Изменить</button>
                <a target="_blank" href="https://steamcommunity.com/id/me/tradeoffers/privacy#trade_offer_access_url">Где ее взять?</a>
            </div>
        </>
    )
}
