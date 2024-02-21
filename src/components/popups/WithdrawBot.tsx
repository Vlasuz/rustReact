import React, {useEffect} from 'react'
import {Translate} from "../translate/Translate";
import bot from "../../assets/images/robot.png";
import steam from "../../assets/images/steam.svg";
import {PopupCross} from "../../hooks/popup/components/PopupCross";
import {useSelector} from "react-redux";
import {IUser} from "../../model";

interface ITradingBotProps {

}

export const WithdrawBot: React.FC<ITradingBotProps> = () => {

    const withdrawInfo = useSelector((state: any) => state.toolkit.withdrawInfo)
    const userData: IUser = useSelector((state: any) => state.toolkit.user)

    console.log(withdrawInfo)

    const tradingBot = withdrawInfo?.data?.bot ?? withdrawInfo?.data?.bot?.bot

    console.log(tradingBot)

    return (
        <>
            <h2><Translate>trade_word</Translate></h2>
            <p><Translate>waiting_trading_from_bot</Translate>:</p>
            <PopupCross/>
            <div className="popup-trade__bot">
                <div className="bot__photo">
                    <img src={bot} alt="Photo"/>
                </div>
                <div className="bot__info">
                    <p>
                        {
                            tradingBot?.bot?.username ?? tradingBot?.username
                        }
                    </p>
                    {tradingBot?.id && <div className="code">
                        {
                            tradingBot?.id?.slice(0, 5)
                        }
                        ...
                        {
                            tradingBot?.id?.substr(tradingBot?.id?.length - 5, tradingBot?.id?.length)
                        }
                    </div>}
                </div>
            </div>
            <div className="popup-pull__buttons">
                <a target={"_blank"} href={`${userData.profile}tradeoffers/`} className="grey">
                    <span><Translate>by_browser</Translate></span>
                </a>
                <a href={`steam://openurl/${userData.profile}tradeoffers/`} className="steam">
                    <span><Translate>by_steam_app</Translate></span>
                    <img src={steam} alt="Steam"/>
                </a>
            </div>
        </>
    );
}
