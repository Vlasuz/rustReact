import React, {useEffect} from 'react'
import coins from './../../assets/images/header__coins.svg'
import {PopupCross} from "../../hooks/popup/components/PopupCross";
import {IFightItem} from "../../model";
import {useSelector} from "react-redux";

interface IStartFightCashProps {

}

export const StartFightCash: React.FC<IStartFightCashProps> = () => {

    const fightItemData: IFightItem = useSelector((state: any) => state.toolkit.fightItemData)

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
                    <span>
                        {fightItemData.first_player.coins}
                    </span>
                </div>
            </div>
            <form>
                <button>Внести ставку</button>
            </form>
        </>
    )
}
