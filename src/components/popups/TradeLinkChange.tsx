import React, {FormEvent, useContext, useEffect, useState} from 'react'
import {PopupCross} from "../../hooks/popup/components/PopupCross";
import axios from "axios";
import {getApiLink} from "../../functions/getApiLink";
import {PopupsContext} from "../../context/popupsContext";
import {useDispatch} from "react-redux";
import {setPopup} from "../../redux/toolkitSlice";

interface ITradeLinkChangeProps {

}

export const TradeLinkChange: React.FC<ITradeLinkChangeProps> = () => {

    const [tradeLink, setTradeLink] = useState('')
    const setIsOpen: any = useContext(PopupsContext)
    const dispatch = useDispatch()
    const [isError, setIsError] = useState(false)

    const handleChangeTradeLink = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsError(false)

        axios.post(getApiLink('api/user/change_trade_link/'), {"trade_link": tradeLink}).then(({data}) => {

            if(data.status) {
                setIsOpen(false)

                setTimeout(() => {
                    dispatch(setPopup(''))
                }, 300)
            } else {
                setIsError(true)
            }
        }).catch(er => {
            console.log(er)
        })
    }

    return (
        <>
            <h2>Трейд-ссылка</h2>
            <p>Введите вашу трейд-ссылку Steam, с ней можно пополнять баланс скинами</p>
            <PopupCross/>
            <form onSubmit={e => handleChangeTradeLink(e)}>
                <input className={"trade-link__input"} style={{border: isError ? "1px solid red" : ""}} type="text" required onChange={e => setTradeLink(e.target.value)} value={tradeLink}/>
                <div className="trade-link__buttons">
                    <button>Сохранить</button>
                    <a target="_blank"
                       href="https://steamcommunity.com/id/me/tradeoffers/privacy#trade_offer_access_url">Где ее
                        взять?</a>
                </div>
            </form>
        </>
    )
}
