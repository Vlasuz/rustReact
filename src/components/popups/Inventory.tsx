import React, {useEffect, useState} from 'react'
import {PopupCross} from "../../hooks/popup/components/PopupCross";

import coin from './../../assets/images/header__coins.svg'
import check from './../../assets/images/green-check-sq.svg'
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
import {LoadingStyled} from "../loading/loading.styled";
import {prettyCoinValues} from "../../functions/prettyCoinValues";
import getCookie from "../../functions/getCookie";
import { useDispatch } from 'react-redux';
import {setPopup} from "../../redux/toolkitSlice";

interface IInventoryProps {

}

interface IInventoryItem {
    game: string
    id: string
    image: string
    price: {
        steam_price: number
        value: number
    }
    rarity: {
        title: string
        color: string
    }
    steam_id: string
    title: string
    trade_ban: null | string
}

interface IFinalPrice {
    value: number
    steam_price: number
}

export const Inventory: React.FC<IInventoryProps> = () => {

    const [searchValue, setSearchValue] = useState('')
    const [filterByPrice, setFilterByPrice] = useState(true)
    const [filterByGame, setFilterByGame] = useState('ALL')
    const [isLoad, setIsLoad] = useState(false)
    const [countOfGame, setCountOfGame] = useState(0)
    const [inventory, setInventory] = useState<IInventoryItem[]>([])
    const [selectedItems, setSelectedItems] = useState<IInventoryItem[]>([])
    const [finalPrice, setFinalPrice] = useState<IFinalPrice>()

    const dispatch = useDispatch()

    const handleSetGame = () => {
        const gameType: {[key: number]: string} = {
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
            setInventory(data)
            setIsLoad(true)
        }).catch(er => {console.log(er)})
    }, [])

    const handleUpdate = () => {
        setIsLoad(false)
        getBearer({type: "get"})
        axios.get(getApiLink('api/trade/inventory/refresh/')).then(({data}) => {
            setInventory(data)
            setIsLoad(true)
        })
    }

    const gameTypeCode: {[key: string]: string} = {
        "CSGO": "730",
        "RUST": "252490",
        "ALL": ""
    }

    const handleSelectItem = (inventoryItem: IInventoryItem) => {
        if(selectedItems.some(item => item.id === inventoryItem.id)) {
            setSelectedItems(selectedItems.filter(item => item.id !== inventoryItem.id))
        } else {
            setSelectedItems(prev => [...prev, inventoryItem])
        }
    }

    useEffect(() => {
        const steam_price = selectedItems.reduce((sum: any, item) => {
            sum += item.price.steam_price
            return sum;
        }, 0)
        const value = selectedItems.reduce((sum: any, item) => {
            sum += item.price.value
            return sum;
        }, 0)
        setFinalPrice({
            steam_price,
            value
        })
    }, [selectedItems])

    const handlePayBySkins = () => {
        getBearer({type: "post"})
        axios.post(getApiLink('api/trade/create/pay/'), selectedItems.map(item => item.id)).then(({data}) => {
            console.log(data)


            const socket = new WebSocket(getApiLink(`ws/api/trade/pay/${data.id}/`, true))

            socket.onopen = () => {
                socket.send(`{"type":"auth", "token":"${getCookie('access_token_rust')}"}`)
            }
            socket.onmessage = (e) => {
                const data = JSON.parse(JSON.parse(e.data))

                dispatch(setPopup('popup-pull'))

                console.log(data)
            }
            socket.onclose = () => {

            }


        })
    }

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
                            {filterByGame === "ALL" && <><img src={csgo} alt="Game" width="20px"/><img src={rust}
                                                                                                       alt="Game"
                                                                                                       width="20px"/></>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="skins__inner">
                {!isLoad ? <LoadingStyled className="load">
                        <div className="line"/>
                        <div className="line"/>
                        <div className="line"/>
                    </LoadingStyled> :
                    <div className="skins__block">

                        {
                            inventory
                                .filter(item => gameTypeCode[filterByGame] ? item.game === gameTypeCode[filterByGame] : item)
                                .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                                .map(item =>
                                <div key={item.id} onClick={_ => handleSelectItem(item)} className={`skins__item ${selectedItems.some(sItem => sItem.id === item.id) && "skins__item_active"}`}>
                                    <div className="clothes__cool" style={{background: item.rarity.color}} />
                                    <div className="item__check">
                                        <img src={check} alt="Photo"/>
                                    </div>
                                    <div className="item__photo">
                                        <img src={item?.image} alt="Photo"/>
                                    </div>
                                    <div className="item__price">
                                        <img src={coin} alt="Photo" />
                                        <span>
                                            {item.price.value}
                                        </span>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                }
            </div>
            <hr/>
            <div className="skins__price">
                <p>Зачисление на баланс:</p>
                <div className="price__block">
                    <span>${finalPrice?.steam_price.toFixed(2)}</span>
                    <div className="ico">
                        <img src={changeArr} alt="Ico"/>
                    </div>
                    <div className="coins">
                        <img src={header__coins} alt="Ico"/>
                        <span>
                            {
                                prettyCoinValues(finalPrice?.value)
                            }
                        </span>
                    </div>
                </div>
            </div>
            <div className="skins__button">
                <button onClick={handleUpdate} className="grey">
                    <img src={reload} alt="ico"/>
                    <span>Обновить</span>
                </button>
                <button onClick={handlePayBySkins} disabled={!selectedItems.length} className={`${selectedItems.length ? "blue" : "grey"}`}>
                    <span>Пополнить скинами</span>
                </button>
            </div>
        </>
    )
}
