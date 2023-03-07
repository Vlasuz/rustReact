import React from 'react';
import PopupCloseCross from "../PopupCloseCross";
import Translate from "../../../Hooks/Translate";
import {useSelector} from "react-redux";

const TradingWaiting = ({ data }) => {

    const session = useSelector(state => state.reducerSession.session)

    return (
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
                            data?.type === 'withdraw' ?
                                data?.response?.bot?.bot?.username :
                                data?.response?.bot?.username
                        }
                    </p>
                    <div className="code">
                        {
                            data?.type === 'withdraw' ?
                                data?.response?.bot?.id?.slice(0, 5) :
                                data?.response?.id?.slice(0, 5)
                        }
                        ...
                        {
                            data?.type === 'withdraw' ?
                                data?.response?.bot?.id?.substr(data?.response?.bot?.id?.length - 5, data?.response?.bot?.id?.length) :
                                data?.response?.id?.substr(data?.response?.id?.length - 5, data?.response?.id?.length)
                        }
                    </div>
                </div>
            </div>
            <div className="popup-pull__buttons">
                <a target={"_blank"} href={`${session.profile}tradeoffers/`} className="grey">
                    <span><Translate>by_browser</Translate></span>
                </a>
                <a href={`steam://openurl/${session.profile}tradeoffers/`} className="steam">
                    <span><Translate>by_steam_app</Translate></span>
                    <img src="../images/steam.svg" alt="Steam"/>
                </a>
            </div>
        </div>
    );
};

export default TradingWaiting;