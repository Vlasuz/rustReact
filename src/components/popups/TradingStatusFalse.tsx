import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { Translate } from '../translate/Translate'
import {PopupCross} from "../../hooks/popup/components/PopupCross";
import {IUser} from "../../model";
import {setPopup} from "../../redux/toolkitSlice";
import redError from "./../../assets/images/error-red.svg"
import icon from "./../../assets/images/arr-td.svg"
import steam from "../../assets/images/steam.svg";

interface ITradingStatusFalseProps {

}

export const TradingStatusFalse: React.FC<ITradingStatusFalseProps> = () => {

    const withdrawInfo = useSelector((state: any) => state.toolkit.withdrawInfo)
    const userData: IUser = useSelector((state: any) => state.toolkit.user)

    console.log(userData)

    console.log(withdrawInfo)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const errors: any = {
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
        "you_have_active_trades": "У вас уже есть активный трейд",
        "item_has_trade_ban": "У предмета trade-ban",
    }

    return (
        <>
            <h2>
                <span>
                    <Translate>error</Translate>
                </span>
                <div className="img">
                    <img src={redError} alt="Error"/>
                </div>
            </h2>
            <p>
                {
                    withdrawInfo?.data?.message ? errors[withdrawInfo?.data?.message] : errors[withdrawInfo?.data?.bot?.message]
                }
            </p>
            <PopupCross/>

            {
                withdrawInfo?.data?.message === 'you_have_active_trades' ? <div className="popup-pull__buttons" style={{marginTop: "30px"}}>
                    <a target={"_blank"} href={`${userData?.profile}/tradeoffers/`} className="grey">
                        <span><Translate>by_browser</Translate></span>
                    </a>
                    <a href={`steam://openurl/${userData?.profile}/tradeoffers/`} className="steam">
                        <span><Translate>by_steam_app</Translate></span>
                        <img src={steam} alt="Steam"/>
                    </a>
                </div> : ""
            }

            {
                withdrawInfo?.message === 'hidden_inventory' ? <div className="trade__buttons">
                    <a target={"_blank"} href={`https://steamcommunity.com/profiles/${userData.steam_id}/edit/settings`} className="grey">
                        <span><Translate>by_browser</Translate></span>
                    </a>
                    <a href={`steam://openurl/https://steamcommunity.com/profiles/${userData.steam_id}/edit/settings`} className="steam">
                        <span><Translate>by_steam_app</Translate></span>
                        <img src="../images/steam.svg" alt="Steam"/>
                    </a>
                </div> : ""
            }

            {
                withdrawInfo?.message === 'Trade-link is empty' ? <div className="trade__buttons">
                    <button onClick={_ => {navigate('/profile'); dispatch(setPopup(''))} } className="grey mini">
                        <span><Translate>to_profile</Translate></span>
                        <img src={icon} alt="Arr"/>
                    </button>
                </div> : ''
            }

        </>
    );
}
