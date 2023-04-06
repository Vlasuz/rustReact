import React from 'react';
import PopupCrossClose from "./PopupCrossClose";
import Translate from "../../../Hooks/Translate";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {setOpenPopup} from "../../../Redux/Reducers/reducerOpenPopup";

const TradingError = ({ props }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userData = useSelector(state => state.reducerUserData.data)
    const errors = {
        "trade_error_1": <Translate>trade_error_1</Translate>,
        "trade_error_4": <Translate>trade_error_4</Translate>,
        "trade_error_5": <Translate>trade_error_5</Translate>,
        "trade_error_6": <Translate>trade_error_6</Translate>,
        "trade_error_7": <Translate>trade_error_7</Translate>,
        "trade_error_8": <Translate>trade_error_8</Translate>,
        "trade_error_9": <Translate>trade_error_9</Translate>,
        "trade_error_10": <Translate>trade_error_10</Translate>,
        "trade_error_11": <Translate>trade_error_11</Translate>,
        "Trade-link is empty": <Translate>Trade-link is empty</Translate>,
        "else-error": <Translate>else-error</Translate>,
        "hidden_inventory": <Translate>hidden_inventory</Translate>,
    }

    return (
        <div className="popup__content">
            <h2>
                <span>
                    <Translate>error</Translate>
                </span>
                <div className="img">
                    <img src="../images/error-red.svg" alt="Error"/>
                </div>
            </h2>
            <p>
                {
                    !props?.data?.message ? errors[props?.response?.message] : errors[props?.data?.message]
                }
            </p>
            <PopupCrossClose/>

            {
                props?.data?.message === 'hidden_inventory' ? <div className="trade__buttons">
                    <a target={"_blank"} href={`${userData.profile}edit/settings/`} className="grey">
                        <span><Translate>by_browser</Translate></span>
                    </a>
                    <a href={`steam://openurl/${userData.profile}edit/settings/`} className="steam">
                        <span><Translate>by_steam_app</Translate></span>
                        <img src="../images/steam.svg" alt="Steam"/>
                    </a>
                </div> : ""
            }

            {
                props?.data?.message === 'Trade-link is empty' ? <div className="trade__buttons">
                    <button onClick={_ => {navigate('/profile'); dispatch(setOpenPopup(''))} } className="grey mini">
                        <span><Translate>to_profile</Translate></span>
                        <img src="../images/arr-td.svg" alt="Arr"/>
                    </button>
                </div> : ''
            }

        </div>
    );
};

export default TradingError;