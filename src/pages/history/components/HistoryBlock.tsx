import React, { useEffect } from 'react'
import arrSend from './../../../assets/images/arr-send.svg'
import arrGet from './../../../assets/images/arr-get.svg'
import skin from './../../../assets/images/skin.png'
import cross from './../../../assets/images/cross.svg'
import check from './../../../assets/images/green-check.svg'
import error from './../../../assets/images/status-error.svg'
import progress from './../../../assets/images/status-progress.svg'
import coin from './../../../assets/images/header__coins.svg'
import axios from 'axios'
import { getApiLink } from '../../../functions/getApiLink'
import getCookies from '../../../functions/getCookie'
import { useDispatch, useSelector } from 'react-redux'
import { setUserHistory } from '../../../redux/toolkitSlice'
import { IUserHistoryBalance } from '../../../model'
import {prettyCoinValues} from "../../../functions/prettyCoinValues";

interface IHistoryBlockProps {
    historyFilter: any
}

export const HistoryBlock: React.FC<IHistoryBlockProps> = ({ historyFilter }) => {

    const userHistory = useSelector((state: any) => state.toolkit.userHistory)

    const historyStatus = (status: string) => {
        if (status === 'success') {
            return {
                status: "Отправлен",
                icon: check,
                class: "item__status_good"
            }
        } else if (status === 'error') {
            return {
                status: "Ошибка",
                icon: error,
                class: "item__status_grey"
            }
        }
    }

    useEffect(() => {
        console.log(historyFilter)
    }, [historyFilter])

    const history = userHistory
        .filter((item: IUserHistoryBalance) => historyFilter.type === '' ? item : item.type === historyFilter.type)
        .filter((item: IUserHistoryBalance) => historyFilter.filterBy === '' ? item : historyFilter.filterBy === item.pay_type)

    const sort = (hs: any) => {
        if (historyFilter.sortBy === 'price') {

            return hs.sort((a: IUserHistoryBalance, b: IUserHistoryBalance) => b.value - a.value)
            
        } else if (historyFilter.sortBy === 'date') {

            return hs.sort((a: IUserHistoryBalance, b: IUserHistoryBalance) =>
                Date.parse(b.created_at.slice(0, b.created_at.indexOf(" ")).split("-").reverse().join("-") + "T" + b.created_at.slice(b.created_at.indexOf(" ")).replace(" ", '')) -
                Date.parse(a.created_at.slice(0, a.created_at.indexOf(" ")).split("-").reverse().join("-") + "T" + a.created_at.slice(a.created_at.indexOf(" ")).replace(" ", ''))
            )

        } else {

            return hs.sort((a: IUserHistoryBalance, b: IUserHistoryBalance) =>
                Date.parse(b.created_at.slice(0, b.created_at.indexOf(" ")).split("-").reverse().join("-") + "T" + b.created_at.slice(b.created_at.indexOf(" ")).replace(" ", '')) -
                Date.parse(a.created_at.slice(0, a.created_at.indexOf(" ")).split("-").reverse().join("-") + "T" + a.created_at.slice(a.created_at.indexOf(" ")).replace(" ", ''))
            )

        }
    }

    return (
        <div className="section-history__block">

            {
                sort(history).map((historyItem: IUserHistoryBalance) =>
                    <div key={historyItem.id} className="section-history__item">
                        <div className="item__type item__type_send">
                            <img src={historyItem.type === 'withdraw' ? arrSend : arrGet} alt="Send" />
                        </div>
                        <div className="item__date">
                            {historyItem.created_at.slice(historyItem.created_at.indexOf(' '))}
                            <span>{historyItem.created_at.slice(0, historyItem.created_at.indexOf(' ')).replaceAll("-", '.')}</span>
                        </div>
                        <div className="item__list">
                            {historyItem.items.length ?
                                <ul>
                                    {
                                        historyItem.items.map(item =>
                                            <li key={item.id}>
                                                <div className="clothes__cool" style={{ background: item.rarity.color }} />
                                                <img src={item.image} alt="Skin" />
                                                <div className="li__name">
                                                    <p>
                                                        {item.title}
                                                    </p>
                                                    <b>
                                                        ${item.price.steam_price}
                                                    </b>
                                                </div>
                                            </li>
                                        )
                                    }
                                </ul>
                                :
                                <p className="pin">
                                    <span>
                                        $ {historyItem.price ? historyItem.price.toFixed(2) : prettyCoinValues(historyItem.value)}
                                    </span>
                                </p>}
                        </div>
                        <div className="item__price">
                            <img src={coin} alt="Coins" />
                            <span>
                                {prettyCoinValues(historyItem.value)}
                            </span>
                        </div>
                        <div className={"item__status " + (historyStatus(historyItem.status)?.class)}>
                            <span>
                                {historyStatus(historyItem.status)?.status}
                            </span>
                            <img src={historyStatus(historyItem.status)?.icon} alt="Ico" />
                        </div>
                    </div>
                )
            }

        </div>
    )
}
