import {ReactElement, useEffect, useState} from "react";
import {PopupStyled} from "./popup.styled";
import {ChangeUserSlogan} from "../../components/popups/ChangeUserSlogan";
import {useDispatch, useSelector} from "react-redux";
import {setPopup} from "../../redux/toolkitSlice";
import {PopupsContext} from "../../context/popupsContext";
import {AddCash} from "../../components/popups/AddCash";
import {closePopup} from "../../functions/closePopup";
import {TradeLink} from "../../components/popups/TradeLink";
import {TradeLinkChange} from "../../components/popups/TradeLinkChange";
import {CreateNewFight} from "../../components/popups/CreateNewFight";
import {AddCashAmount} from "../../components/popups/AddCashAmount";
import {Inventory} from "../../components/popups/Inventory";
import {StartFightCash} from "../../components/popups/StartFightCash";
import {StartFightClothes} from "../../components/popups/StartFightClothes";

export const usePopups = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [localPopup, setLocalPopup] = useState('')
    const dispatch = useDispatch()

    const popup: string = useSelector((state: any) => state.toolkit.popup)

    const popupsInner: any = {
        "popup-change-status": <ChangeUserSlogan/>,
        "popup-trade popup-trade-link-change": <TradeLink/>,
        "popup-trade popup-trade-link": <TradeLinkChange/>,
        "popup-new-room": <CreateNewFight/>,
        "popup-add-coins": <AddCash/>,
        "popup-add-coins-balance popup-add-coins-balance-uah": <AddCashAmount currency={"uah"} />,
        "popup-add-coins-balance popup-add-coins-balance-kzt": <AddCashAmount currency={"kzt"}/>,
        "popup-add-coins-balance popup-add-coins-balance-rub": <AddCashAmount currency={"rub"}/>,
        "popup-add-coins-skins": <Inventory/>,
        "popup-entry-coins": <StartFightCash/>,
        "popup-entry-clothes": <StartFightClothes/>,
    }

    useEffect(() => {

        if (popup && localPopup) {
            setIsOpen(false)
            setTimeout(() => {
                setLocalPopup(popup)
                setIsOpen(true)
            }, 300)
        } else if(popup) {
            setLocalPopup(popup)
            setIsOpen(true)
        } else if (!popup) {
            setLocalPopup('')
        }
    }, [popup])

    const handleClosePopup = () => {
        closePopup({setIsOpen, dispatch})
    }

    return {
        'popup':
            <PopupsContext.Provider value={setIsOpen}>
                <PopupStyled>
                    <div className={"popup " + localPopup + (isOpen ? " popup_active" : "")}>
                        <div className="popup__bgd" onClick={handleClosePopup}/>
                        <div className="popup__content">
                            {
                                localPopup && popupsInner[localPopup]
                            }
                        </div>
                    </div>
                </PopupStyled>
            </PopupsContext.Provider>
    }
}