import React, {useEffect, useState} from 'react';
import PopupCloseBackground from "../PopupCloseBackground";
import PopupCloseCross from "../PopupCloseCross";
import axios from "axios";
import OpenPopup from "../../../Hooks/OpenPopup";
import {useDispatch, useSelector} from "react-redux";
import {addTradeLink, reducerUserData} from "../../../Redux/Reducers/reducerUserData";

const PopupAddTradeLink = (props) => {

    const [tradeLink, setTradeLink] = useState('')
    const [isError, setIsError] = useState(false)
    const userData = useSelector(state => state.reducerUserData.data)
    const dispatch = useDispatch()

    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    const handleSubmit = function (e) {
        e.preventDefault()
        setIsError(false)

        // https://steamcommunity.com/tradeoffer/new/?partner=255591957&token=4cfAnyi-
        if(tradeLink.includes('https://steamcommunity.com/tradeoffer')){
            axios.defaults.headers.post['Authorization'] = `Bearer ${getCookie('access_token')}`;
            axios.post(`https://rust.onefut.net/api/user/change_trade_link/?trade_link=${tradeLink}`).then(res => {
                dispatch(addTradeLink(res.data))
                OpenPopup('popup-trade-link-success')
            })
        } else {
            setIsError(true)
        }
    }

    return (
        <div className="popup popup-trade-link">
            <PopupCloseBackground />
            <div className="popup__content">
                <h2>Трейд-ссылка 1</h2>
                <p>Введите вашу трейд-ссылку Steam,
                    <br/>с ней можно пополнять баланс скинами</p>
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
                            Сохранить
                        </button>
                        <a target={"_blank"} href="https://steamcommunity.com/groups/dota2lounge/discussions/0/558746995155711933">Где ее взять?</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PopupAddTradeLink;