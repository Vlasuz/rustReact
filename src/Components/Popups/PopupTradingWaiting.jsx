import React from 'react';
import PopupCloseBackground from "./PopupCloseBackground";
import PopupCloseCross from "./PopupCloseCross";
import {useDispatch, useSelector} from "react-redux";
import Translate from "../../Hooks/Translate";
import {logger} from "../../middleware/logger";

const PopupTradingWaiting = () => {

    const isPopup = useSelector(state => state.reducerOpenPopup)
    const props = isPopup.props
    const dispatch = useDispatch()
    const isOpen = isPopup.popup === "popup-trade-waiting";
    const session = useSelector(state => state.reducerSession.session)


    return (
        <div className={"popup popup-trade popup-trade-waiting popup_active"}>
            <PopupCloseBackground/>
            <div className="popup__content">
                <h2>Трейд</h2>
                <p>Ожидайте предложения от нашего бота:</p>
                <PopupCloseCross/>
                <div className="popup-trade__bot">
                    <div className="bot__photo">
                        <img src="../../images/robot.png" alt="Photo"/>
                    </div>
                    <div className="bot__info">
                        <p>
                            {
                                props?.type === 'withdraw' ?
                                    props?.response?.bot.bot.username :
                                    props?.response?.bot.username
                            }
                        </p>
                        <div className="code">
                            {
                                props?.type === 'withdraw' ?
                                    props?.response?.bot.id.slice(0, 5) :
                                    props?.response?.id.slice(0, 5)
                            }
                            ...
                            {
                                props?.type === 'withdraw' ?
                                    props?.response?.bot.id.substr(props?.response?.bot.id.length - 5, props?.response?.bot.id.length) :
                                    props?.response?.id.substr(props?.response?.id.length - 5, props?.response?.id.length)
                            }
                        </div>
                    </div>
                </div>
                <div className="trade__buttons">
                    <a target={"_blank"} href={`${session.profile}tradeoffers/`} className="grey">
                        <span><Translate>by_browser</Translate></span>
                    </a>
                    <a href={`steam://openurl/${session.profile}tradeoffers/`} className="steam">
                        <span><Translate>by_steam_app</Translate></span>
                        <img src="../images/steam.svg" alt="Steam"/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PopupTradingWaiting;