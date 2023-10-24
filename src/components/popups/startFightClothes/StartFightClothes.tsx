import React, {useEffect, useState} from 'react'
import {PopupCross} from "../../../hooks/popup/components/PopupCross";
import coins from "../../../assets/images/header__coins.svg";
import {IProduct, IUser} from "../../../model";
import {useSelector} from "react-redux";
import {UserInventory} from "../components/userInventory";
import {ZoneOfProducts} from "../components/zoneOfProducts";

interface IStartFightClothesProps {

}

export const StartFightClothes: React.FC<IStartFightClothesProps> = () => {

    const popupZoneItems = useSelector((state: any) => state.toolkit.popupZoneItems);
    const [countOfBet, setCountOfBet] = useState(0)

    useEffect(() => {
        setCountOfBet(0)
        popupZoneItems.map((item: IProduct) => setCountOfBet(prev => prev + item.price.value))
    }, [popupZoneItems])

    return (
        <>
            <div className="popup__content_lft">
                <h2>Присоединиться к игре</h2>
                <PopupCross/>
                <form className={"popup__content-item popup__content-item-clothes popup__content-item_active"}>
                    <ZoneOfProducts/>
                    <div className="inputs__item inputs__item-have inputs__item_skins">
                        <div className="inputs">
                            <div className="inputs__item inputs__item-sum">
                                <p>Сумма ставки:</p>
                                <div className="input">
                                    <img src={coins} alt="Ico"/>
                                    <input type="text" value={countOfBet} disabled placeholder="0"/>
                                </div>
                            </div>
                            <div className="inputs__item inputs__item-opp">
                                <p>Оппонент:</p>
                                <div className="input">
                                    <div className="input__photo">
                                        <img
                                            src="https://avatars.steamstatic.com/948d34cb1286bd62da390298a2271100be59b758_full.jpg"
                                            alt="User"/>
                                    </div>
                                    <div className="input__coins">
                                        <img src={coins} alt="Ico"/>
                                        <span>24</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" disabled>Создать игру</button>
                </form>
            </div>
            <div className="popup__content_rht" style={{display: "block"}}>
                <UserInventory/>
            </div>
        </>
)
}
