import {ReactElement, useEffect, useState} from "react";
import {PopupStyled} from "./popup.styled";
import {ChangeUserSlogan} from "../../components/popups/ChangeUserSlogan";
import {useDispatch, useSelector} from "react-redux";
import {setPopup} from "../../redux/toolkitSlice";
import {PopupsContext} from "../../context/popupsContext";
import {AddCash} from "../../components/popups/AddCash";
import {closePopup} from "../../functions/closePopup";

export const usePopups = () => {

    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()

    const popup: string = useSelector((state: any) => state.toolkit.popup)

    const popupsInner: any = {
        "popup-change-status": <ChangeUserSlogan/>,
        "popup-add-coins": <AddCash/>,
    }

    useEffect(() => {
        popup && setIsOpen(true)
    }, [popup])

    const handleClosePopup = () => {
        closePopup({setIsOpen, dispatch})
    }

    return {
        'popup':
            <PopupsContext.Provider value={setIsOpen}>
                <PopupStyled>
                    <div className={"popup " + popup + (isOpen ? " popup_active" : "")}>
                        <div className="popup__bgd" onClick={handleClosePopup}/>
                        <div className="popup__content">
                            {
                                popup && popupsInner[popup]
                            }
                        </div>
                    </div>
                </PopupStyled>
            </PopupsContext.Provider>
    }
}