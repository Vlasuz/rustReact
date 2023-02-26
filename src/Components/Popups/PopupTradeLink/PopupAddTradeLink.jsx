import React, {useEffect, useState} from 'react';
import PopupCloseBackground from "../PopupCloseBackground";
import PopupCloseCross from "../PopupCloseCross";
import axios from "axios";
import OpenPopup from "../../../Hooks/OpenPopup";
import {useDispatch, useSelector} from "react-redux";
import {addTradeLink, reducerUserData} from "../../../Redux/Reducers/reducerUserData";
import {setNotice} from "../../../Redux/Reducers/reducerNotice";
import {Trans, useTranslation} from "react-i18next";
import GlobalLink from "../../../Hooks/GlobalLink";
import Translate from "../../../Hooks/Translate";
import {getCookie} from "../../../Hooks/GetCookies";

const PopupAddTradeLink = (props) => {

    const [tradeLink, setTradeLink] = useState('')
    const [isError, setIsError] = useState(false)
    const dispatch = useDispatch()
    const session = useSelector(state => state.reducerSession.session)

    const handleSubmit = function (e) {
        e.preventDefault()
        setIsError(false)

        if(tradeLink.includes('https://steamcommunity.com/tradeoffer')){
            axios.defaults.headers.post['Authorization'] = `Bearer ${getCookie('access_token')}`;
            axios.post("https://"+GlobalLink()+`/api/user/change_trade_link/?trade_link=${tradeLink}`).then(res => {
                dispatch(addTradeLink(res.data))
                OpenPopup('popup-trade-link-success')
            })
        } else {
            setIsError(true)
            dispatch(setNotice("not_good_trade_link"))
        }
    }

    return (
        <div className="popup popup-trade-link">
            <PopupCloseBackground />
            <div className="popup__content">
                <h2>
                    <Translate>trade_link</Translate>
                </h2>
                <p>
                    <Translate>write_your_trade_link</Translate>
                </p>
                <PopupCloseCross />
                <form onSubmit={handleSubmit}>
                    <input
                        className={"trade-link__input" + (isError ? " trade-link__input_error" : "")}
                        type="text"
                        required
                        value={tradeLink}
                        onChange={e => setTradeLink(e.target.value)}
                    />
                    <div className="trade-link__buttons">
                        <button>
                            <Translate>save</Translate>
                        </button>
                        <a target={"_blank"} href={session.profile + "tradeoffers/privacy"}>
                            <Translate>where_trade_link_get</Translate>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PopupAddTradeLink;