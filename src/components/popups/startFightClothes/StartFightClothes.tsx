import React, {useContext, useEffect, useState} from 'react'
import {PopupCross} from "../../../hooks/popup/components/PopupCross";
import coins from "../../../assets/images/header__coins.svg";
import {IFightItem, IProduct, IUser} from "../../../model";
import {useDispatch, useSelector} from "react-redux";
import {UserInventory} from "../components/userInventory";
import {ZoneOfProducts} from "../components/zoneOfProducts";
import {useNavigate} from "react-router";
import {PopupsContext} from "../../../context/popupsContext";
import {closePopup} from "../../../functions/closePopup";
import {setPopup, setPopupZoneItems} from "../../../redux/toolkitSlice";
import axios from "axios";
import {getApiLink} from "../../../functions/getApiLink";
import {prettyCoinValues} from "../../../functions/prettyCoinValues";
import {getBearer} from "../../../functions/getBearer";

interface IStartFightClothesProps {

}

export const StartFightClothes: React.FC<IStartFightClothesProps> = () => {

    const popupZoneItems = useSelector((state: any) => state.toolkit.popupZoneItems);
    const fightItemData: IFightItem = useSelector((state: any) => state.toolkit.fightItemData)
    const [countOfBet, setCountOfBet] = useState(0)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const setIsOpen: any = useContext(PopupsContext)

    useEffect(() => {
        setCountOfBet(0)
        popupZoneItems.map((item: IProduct) => setCountOfBet(prev => prev + item.price.value))
    }, [popupZoneItems])

    const handleStartGame = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        getBearer({type: "post"})
        axios.post(getApiLink("api/fight/room/join?game_id="+fightItemData.id), {
            // coins: fightItemData.first_player.coins,
            items: popupZoneItems.map((item: IProduct) => item.id)
        }).then(({data}) => {
            if(data?.status === false) return;

            setIsOpen(false)
            setTimeout(() => {
                dispatch(setPopup(''))
            }, 300)
            navigate('/fight/'+fightItemData.id)

        }).catch(er => console.log(er))

    }

    return (
        <>
            <div className="popup__content_lft">
                <h2>Присоединиться к игре</h2>
                <PopupCross/>
                <form onSubmit={e => handleStartGame(e)} className={"popup__content-item popup__content-item-clothes popup__content-item_active"}>
                    <ZoneOfProducts/>
                    <div className="inputs__item inputs__item-have inputs__item_skins">
                        <div className="inputs">
                            <div className="inputs__item inputs__item-sum">
                                <p>Сумма ставки:</p>
                                <div className="input">
                                    <img src={coins} alt="Ico"/>
                                    <input type="text" value={prettyCoinValues(countOfBet)} disabled placeholder="0"/>
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
                                        <span>
                                            {fightItemData.first_player.coins}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" disabled={!(countOfBet >= fightItemData.first_player.coins)}>Создать игру</button>
                </form>
            </div>
            <div className="popup__content_rht" style={{display: "block"}}>
                <UserInventory/>
            </div>
        </>
)
}
