import React, {useEffect, useState} from 'react'
import {PopupCross} from "../../hooks/popup/components/PopupCross";
import coins from "../../assets/images/header__coins.svg";
import {IProduct, IUser} from "../../model";
import cross from "../../assets/images/cross.svg";
import {useSelector} from "react-redux";

interface IStartFightClothesProps {

}

export const StartFightClothes: React.FC<IStartFightClothesProps> = () => {

    const userInfo: IUser = useSelector((state: any) => state.toolkit.user)
    const [typeOfCreate, setTypeOfCreate] = useState('coins')
    const [coinsValue, setCoinsValue] = useState(0)
    const [isSelectOpen, setIsSelectOpen] = useState(false)
    const inventory = useSelector((state: any) => state.toolkit.userInventory)

    const handleSwitch = (e: React.MouseEvent<HTMLAnchorElement>, type: string) => {
        e.preventDefault()
        setTypeOfCreate(type)
    }

    const isFightOnSkins = typeOfCreate === "skins"

    return (
        <>
            <div className="popup__content_lft">
                <h2>Присоединиться к игре</h2>
                <PopupCross/>
                <form
                    className={"popup__content-item popup__content-item-clothes" + (isFightOnSkins ? " popup__content-item_active" : "")}>
                    <a className="link-to-page" href="/fight-waiting"/>
                    <div className="popup-new-room__zone">
                        <p>Перетащите сюда скины для ставки</p>
                        <ul>

                        </ul>
                    </div>
                    <div className="inputs__item inputs__item-have inputs__item_skins">
                        <div className="inputs">
                            <div className="inputs__item inputs__item-sum">
                                <p>Сумма ставки:</p>
                                <div className="input">
                                    <img src={coins} alt="Ico"/>
                                    <input onChange={(e: any) => setCoinsValue(e.target.value)} type="text"
                                           placeholder="0" value={coinsValue === 0 ? "" : coinsValue}/>
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
                <h2>Инвентарь сайта</h2>
                <PopupCross/>
                <div className="popup-new-room__sort">
                    <span>Сортировка</span>
                    <div className={"select" + (isSelectOpen ? " select_open" : "")}>
                        <div className="select__head" onClick={_ => setIsSelectOpen(prev => !prev)}>
                            <span>Все игры</span>
                        </div>
                        <div className="select__body">
                            <div className="select__item">Все игры</div>
                            <div className="select__item">CSGO</div>
                            <div className="select__item">RUST</div>
                        </div>
                    </div>
                </div>
                <ul className="popup-new-room__list">

                    {
                        inventory?.map((item: IProduct) =>
                            <li key={item.id} className="popup-new-room__item">
                                <div className="item__is-lock"/>
                                <div className="li__delete">
                                    <img src={cross} alt="Close"/>
                                </div>
                                <div className="item__check">
                                    <img src="../images/green-check-sq.svg" alt="Check"/>
                                </div>
                                <div className="item__photo">
                                    <img src={item?.image} alt="Photo"/>
                                </div>
                                <div className="item__price">
                                    <img src={coins} alt="Coin"/>
                                    <span>
                                        {item?.price.value}
                                    </span>
                                </div>
                            </li>
                        )
                    }

                </ul>
            </div>
        </>
    )
}
