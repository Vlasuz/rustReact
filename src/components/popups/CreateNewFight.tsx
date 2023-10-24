import React, {useEffect, useState} from 'react'
import coins from "./../../assets/images/header__coins.svg"
import cross from "./../../assets/images/cross.svg"
import {PopupCross} from "../../hooks/popup/components/PopupCross";
import {useSelector} from "react-redux";
import {IProduct, IUser} from "../../model";
import {UserInventory} from "./components/userInventory";
import {ZoneOfProducts} from "./components/zoneOfProducts";

interface ICreateNewFightProps {

}

export const CreateNewFight: React.FC<ICreateNewFightProps> = () => {

    const userInfo: IUser = useSelector((state: any) => state.toolkit.user)
    const [typeOfCreate, setTypeOfCreate] = useState('coins')
    const [coinsValue, setCoinsValue] = useState(0)

    const handleSwitch = (e: React.MouseEvent<HTMLAnchorElement>, type: string) => {
        e.preventDefault()
        setTypeOfCreate(type)
    }

    const popupZoneItems = useSelector((state: any) => state.toolkit.popupZoneItems);
    const [countOfBet, setCountOfBet] = useState(0)

    useEffect(() => {
        setCountOfBet(0)
        popupZoneItems.map((item: IProduct) => setCountOfBet(prev => prev + item.price.value))
    }, [popupZoneItems])

    const isFightOnSkins = typeOfCreate === "skins"

    return (
        <>
            <div className="popup__content_lft">
                <h2>Новая комната</h2>
                <PopupCross/>
                <div className="popup-new-room__switcher">
                    <ul>
                        <li className={typeOfCreate === "coins" ? "li_active" : ""}>
                            <a onClick={e => handleSwitch(e, "coins")}>На валюту</a>
                        </li>
                        <li className={typeOfCreate === "skins" ? "li_active" : ""}>
                            <a onClick={e => handleSwitch(e, "skins")}>На скины</a>
                        </li>
                    </ul>
                </div>
                <div className={"popup__content-item" + (!isFightOnSkins ? " popup__content-item_active" : "")}>
                    <form action="#">
                        <div className="inputs">
                            <div className="inputs__item inputs__item-sum">
                                <p>Сумма ставки:</p>
                                <div className="input">
                                    <img src={coins} alt="Ico"/>
                                    <input onChange={(e: any) => setCoinsValue(e.target.value)} type="text"
                                           placeholder="0" value={coinsValue === 0 ? "" : coinsValue}/>
                                </div>
                            </div>
                            <div className="inputs__item inputs__item-have">
                                <p>На балансе:</p>
                                <div className="input">
                                    <img src={coins} alt="Ico"/>
                                    <span>
                                        {userInfo.balance}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <button type="submit"
                                disabled={userInfo?.balance ? (coinsValue <= 0 || !(userInfo?.balance >= coinsValue)) : true}>Создать
                            игру
                        </button>
                    </form>
                </div>
                <form className={"popup__content-item popup__content-item-clothes" + (isFightOnSkins ? " popup__content-item_active" : "")}>
                    <ZoneOfProducts/>
                    <div className="inputs__item inputs__item-have inputs__item_skins">
                        <p>Итоговая сумма ставки:</p>
                        <div className="input">
                            <img src={coins} alt="Ico"/>
                            <span>
                                {countOfBet}
                            </span>
                        </div>
                    </div>
                    <button type="submit" disabled>Создать игру</button>
                </form>
            </div>
            <div className="popup__content_rht" style={{display: isFightOnSkins ? "block" : "none"}}>
                <UserInventory/>
            </div>
        </>
    )
}
