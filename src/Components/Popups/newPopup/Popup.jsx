import React, {useEffect, useState} from 'react';
import PopupCloseBackground from "../PopupCloseBackground";
import Translate from "../../../Hooks/Translate";
import PopupCloseCross from "../PopupCloseCross";
import {useDispatch, useSelector} from "react-redux";
import {setOpenPopup} from "../../../Redux/Reducers/reducerOpenPopup";
import TradeLinkChange from "./TradeLinkChange";
import TradeLinkAdd from "./TradeLinkAdd";
import TradeLinkSuccess from "./TradeLinkSuccess";
import AddCoinsMenu from "./addCoinsMenu";
import AddCoinsBySkin from "./addCoinsBySkin";
import FairGame from "./FairGame";
import TradingSearch from "./TradingSearch";
import TradingBots from "./TradingBots";
import TradingWaiting from "./TradingWaiting";
import TradingSuccess from "./TradingSuccess";
import TradingError from "./TradingError";

const Popup = () => {

    const isPopup = useSelector(state => state.reducerOpenPopup)
    const [classOfPopup, setClassOfPopup] = useState("")
    const dispatch = useDispatch()

    const contents = {
        "popup-trade-link-change": <TradeLinkChange/>,
        "popup-trade-link": <TradeLinkAdd/>,
        "popup-trade-link-success": <TradeLinkSuccess/>,

        "popup-add-coins": <AddCoinsMenu/>,
        "popup-add-coins-skins": <AddCoinsBySkin/>,

        "popup-fair-game": <FairGame data={isPopup?.props?.data} hash={isPopup?.props?.hash} jackpot={isPopup?.props?.jackpot}/>,

        "popup-pull-search": <TradingSearch/>,
        "popup-pull": <TradingBots data={isPopup?.props?.data} />,
        "popup-trade-waiting": <TradingWaiting data={isPopup?.props} />,
        "popup-trade-good": <TradingSuccess />,
        "popup-trade-error-cancel": <TradingError message={isPopup?.props?.response?.message} />,
    }

    const handleClose = () => {
        document.querySelector('.popup1').classList.remove('popup_active')
        dispatch(setOpenPopup(""))
        setTimeout(() => {
            setClassOfPopup("")
        }, 300)
    }

    useEffect(() => {

        if (!!classOfPopup.length) {

            document.querySelector('.popup1').classList.remove('popup_active')
            setTimeout(() => {
                if(!!isPopup.popup.length){
                    setClassOfPopup(isPopup.popup)
                    document.querySelector('.popup1').classList.add('popup_active')
                }
            }, 300)

        } else {
            setClassOfPopup(isPopup.popup)
        }

    }, [isPopup])


    return (
        <div className={"popup popup1 " + (classOfPopup.includes("trade") ? " popup-trade " : "") + (!!classOfPopup.length ? classOfPopup + " popup_active" : "")}>
            <div className="popup__bgd" onClick={handleClose}/>

            {
                classOfPopup && contents[classOfPopup]
            }

        </div>
    );
};

export default Popup;