import React, {useEffect, useState} from 'react'
import {PopupCross} from "../../hooks/popup/components/PopupCross";

import search from "./../../assets/images/search.svg"
import filter from "./../../assets/images/filter.svg"
import csgo from "./../../assets/images/csgo.png"
import rust from "./../../assets/images/rust.png"
import changeArr from "./../../assets/images/change-arr.svg"
import header__coins from "./../../assets/images/header__coins.svg"
import reload from "./../../assets/images/reload.svg"
import axios from "axios";
import {getApiLink} from "../../functions/getApiLink";
import {getBearer} from "../../functions/getBearer";

interface IInventoryProps {

}

export const Inventory: React.FC<IInventoryProps> = () => {

    const [searchValue, setSearchValue] = useState('')
    const [filterByPrice, setFilterByPrice] = useState(true)
    const [filterByGame, setFilterByGame] = useState('CSGO')

    const [countOfGame, setCountOfGame] = useState(0)

    const handleSetGame = () => {
        const gameType: any = {
            0: "ALL",
            1: "CSGO",
            2: "RUST"
        }

        setCountOfGame(prev => prev < 2 ? prev + 1 : 0)
        setFilterByGame(gameType[countOfGame])
    }

    useEffect(() => {
        getBearer({type: "get"})
        axios.get(getApiLink("api/trade/inventory/")).then(({data}) => {
            console.log(data)
        }).catch(er => {console.log(er)})
    }, [])

    return (
        <>
            <h2>Инвентарь Steam</h2>
            <p>Выберите скины для пополнения</p>
            <PopupCross/>
            <div className="postamat__search">
                <input value={searchValue} onChange={e => setSearchValue(e.target.value)} type="text"
                       placeholder={"Поиск"}/>
                <button className={"search-button"}>
                    <img src={search} alt="Search"/>
                </button>
            </div>
            <div>
                <div className="postamat__filter">
                    <div className="label-changed">
                        <label className="filter__item filter__price">
                            <span>По цене</span>
                            <input checked={filterByPrice} onChange={e => setFilterByPrice(e.target.checked)}
                                   type="checkbox"/>
                            <img src={filter} alt="filter"/>
                        </label>
                    </div>
                    <div className="label-changed">
                        <div onClick={handleSetGame} className="filter__item filter__item_active filter__cool">
                            <span>По игре</span>
                            {filterByGame === "CSGO" && <img src={csgo} alt="Game" width="20px"/>}
                            {filterByGame === "RUST" && <img src={rust} alt="Game" width="20px"/>}
                            {filterByGame === "ALL" && <><img src={csgo} alt="Game" width="20px"/><img src={rust} alt="Game" width="20px"/></>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="skins__inner">
                <div className="skins__block">
                    <div className="loading">
                        <div className="load">
                            <div className="load__line"/>
                            <div className="load__line"/>
                            <div className="load__line"/>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="skins__price">
                <p>Зачисление на баланс:</p>
                <div className="price__block">
                    <span>$0.00</span>
                    <div className="ico">
                        <img src={changeArr} alt="Ico"/>
                    </div>
                    <div className="coins">
                        <img src={header__coins} alt="Ico"/>
                        <span>0</span>
                    </div>
                </div>
            </div>
            <div className="skins__button">
                <button className="grey">
                    <img src={reload} alt="ico"/>
                    <span>Обновить</span>
                </button>
                <button className="grey">
                    <span>Пополнить скинами</span>
                </button>
            </div>
        </>
    )
}
