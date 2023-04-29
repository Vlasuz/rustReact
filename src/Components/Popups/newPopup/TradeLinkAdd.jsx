import React, {useState} from 'react';
import Translate from "../../../Hooks/Translate";
import PopupCloseCross from "../PopupCloseCross";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {getCookie} from "../../../Hooks/GetCookies";
import GlobalLink from "../../../Hooks/GlobalLink";
import {addTradeLink} from "../../../Redux/Reducers/reducerUserData";
import OpenPopup from "../../../Hooks/OpenPopup";
import {setNotice} from "../../../Redux/Reducers/reducerNotice";
import PopupCrossClose from "./PopupCrossClose";
import {setOpenPopup} from "../../../Redux/Reducers/reducerOpenPopup";

const TradeLinkAdd = () => {

    const [tradeLink, setTradeLink] = useState('')
    const [isError, setIsError] = useState(false)
    const dispatch = useDispatch()
    const session = useSelector(state => state.reducerSession.session)

    const handleSubmit = function (e) {
        e.preventDefault()
        setIsError(false)

        if(tradeLink.includes('https://steamcommunity.com/tradeoffer')){
            axios.defaults.headers.post['Authorization'] = `Bearer ${getCookie('access_token')}`;
            axios.post("https://"+GlobalLink()+`/api/user/change_trade_link/`, {
                "trade_link": tradeLink
            }).then(res => {
                if(res.data.message === 'Trade-link is not valid') {
                    setIsError(true)
                    dispatch(setNotice("not_good_trade_link"))
                } else {
                    dispatch(addTradeLink(res.data))
                    dispatch(setOpenPopup('popup-trade-link-success'))
                }
            })
        } else {
            setIsError(true)
            dispatch(setNotice("not_good_trade_link"))
        }
    }

    return (
        <div className="popup__content">
            <h2>
                <Translate>trade_link</Translate>
            </h2>
            <p>
                <Translate>write_your_trade_link</Translate>
            </p>
            <PopupCrossClose />
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
                    <a target={"_blank"} href={'https://steamcommunity.com/id/me/tradeoffers/privacy#trade_offer_access_url'}>
                        <Translate>where_trade_link_get</Translate>
                    </a>
                </div>
            </form>
        </div>
    );
};

export default TradeLinkAdd;