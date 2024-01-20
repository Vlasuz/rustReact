import React, {useContext, useEffect, useState} from 'react'
import coins from "./../../assets/images/header__coins.svg"
import cross from "./../../assets/images/cross.svg"
import {PopupCross} from "../../hooks/popup/components/PopupCross";
import {useDispatch, useSelector} from "react-redux";
import {IFightItem, IProduct, IUser} from "../../model";
import {UserInventory} from "./components/userInventory";
import {ZoneOfProducts} from "./components/zoneOfProducts";
import axios from "axios";
import {getApiLink} from "../../functions/getApiLink";
import {useNavigate} from "react-router";
import {setFightItemData, setPopup, setPopupZoneItems, setUserBalance} from "../../redux/toolkitSlice";
import {PopupsContext} from "../../context/popupsContext";
import {prettyCoinValues} from "../../functions/prettyCoinValues";

interface ICreateNewFightProps {

}

export const CreateNewFight: React.FC<ICreateNewFightProps> = () => {

    const userInfo: IUser = useSelector((state: any) => state.toolkit.user)
    const popupZoneItems = useSelector((state: any) => state.toolkit.popupZoneItems);

    const [typeOfCreate, setTypeOfCreate] = useState('coins')
    const [coinsValue, setCoinsValue] = useState(0)
    // const [coinValueVisual, setCoinValueVisual] = useState("")
    const [countOfBet, setCountOfBet] = useState(0)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const setIsOpen: any = useContext(PopupsContext)

    const isFightOnSkins = typeOfCreate === "skins"

    const handleSwitch = (e: React.MouseEvent<HTMLAnchorElement>, type: string) => {
        e.preventDefault()
        setTypeOfCreate(type)
    }


    const handleCreateFight = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()



        axios.post(getApiLink("api/fight/room/create"), {
            "coins": coinsValue,
            "items": popupZoneItems.map((item: IProduct) => item.id)
        }).then(({data}) => {
            dispatch(setFightItemData(data))

            setIsOpen(false)
            setTimeout(() => {
                dispatch(setPopup(''))
            }, 300)

            dispatch(setUserBalance({
                sum: true,
                money: -data.first_player.coins
            }))

            navigate("/fight/"+data.id)
        }).catch(er => console.log(er))
    }

    useEffect(() => {
        setCountOfBet(0)
        popupZoneItems.map((item: IProduct) => setCountOfBet(prev => prev + item.price.value))
    }, [popupZoneItems])

    const changeCoinsValue = (e: any) => {
        setCoinsValue(e.target.value.replace(/\D/g,'').substr(0,13))
    }

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
                    <form onSubmit={e => handleCreateFight(e)}>
                        <div className="inputs">
                            <div className="inputs__item inputs__item-sum">
                                <p>Сумма ставки:</p>
                                <div className="input">
                                    <img src={coins} alt="Ico"/>
                                    <input onChange={e => changeCoinsValue(e)} type="text"
                                           placeholder="0" value={coinsValue === 0 ? "" : prettyCoinValues(+coinsValue)}/>
                                    {/*<span>*/}
                                    {/*    {prettyCoinValues(+coinsValue)}*/}
                                    {/*</span>*/}
                                </div>
                            </div>
                            <div className="inputs__item inputs__item-have">
                                <p>На балансе:</p>
                                <div className="input">
                                    <img src={coins} alt="Ico"/>
                                    <span>
                                        {prettyCoinValues(userInfo.balance)}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <button type="submit" disabled={userInfo?.balance ? (coinsValue <= 0 || !(userInfo?.balance >= coinsValue)) : true}>
                            Создать игру
                        </button>
                    </form>
                </div>
                <form onSubmit={e => handleCreateFight(e)} className={"popup__content-item popup__content-item-clothes" + (isFightOnSkins ? " popup__content-item_active" : "")}>
                    <ZoneOfProducts />
                    <div className="inputs__item inputs__item-have inputs__item_skins">
                        <p>Итоговая сумма ставки:</p>
                        <div className="input">
                            <img src={coins} alt="Ico"/>
                            <span>
                                {prettyCoinValues(countOfBet)}
                            </span>
                        </div>
                    </div>
                    <button type="submit" disabled={!popupZoneItems.length}>Создать игру</button>
                </form>
            </div>
            <div className="popup__content_rht" style={{display: isFightOnSkins ? "block" : "none"}}>
                <UserInventory/>
            </div>
        </>
    )
}
