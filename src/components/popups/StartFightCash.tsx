import React, {useEffect} from 'react'
import coins from './../../assets/images/header__coins.svg'
import {PopupCross} from "../../hooks/popup/components/PopupCross";

interface IStartFightCashProps {

}

export const StartFightCash: React.FC<IStartFightCashProps> = () => {

    return (
        <>
            <h2>Комната</h2>
            <p className="subtitle">Тип ставки: <span>Валютой</span>
            </p>
            <PopupCross/>
            <div className="popup-entry-coins__info">
                <p>Ставка в этой комнате</p>
                <div className="info__coins">
                    <img src={coins} alt="Ico"/>
                    <span>2</span>
                </div>
            </div>
            <form>
                <button>Внести ставку</button>
            </form>
        </>
    )
}
