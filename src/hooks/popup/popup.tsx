import {ReactElement, useEffect, useState} from "react";
import {PopupStyled} from "./popup.styled";
import {ChangeUserSlogan} from "../../components/popups/ChangeUserSlogan";
import {useDispatch, useSelector} from "react-redux";
import {setPopup} from "../../redux/toolkitSlice";
import {PopupsContext} from "../../context/popupsContext";

export const usePopups = () => {

    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()

    const popup: string = useSelector((state: any) => state.toolkit.popup)

    const popupsInner: any = {
        "popup-change-status": <ChangeUserSlogan/>
    }

    useEffect(() => {
        popup && setIsOpen(true)
    }, [popup])

    const handleClosePopup = () => {
        setIsOpen(false)

        setTimeout(() => {
            dispatch(setPopup(''))
        }, 300)
    }

    return {
        'popup':
            <PopupsContext.Provider value={setIsOpen}>
                <PopupStyled className={"popup " + popup + (isOpen ? " popup_active" : "")}>
                    <div className="popup__bgd" onClick={handleClosePopup}/>
                    <div className="popup__content">
                        {
                            popup && popupsInner[popup]
                        }
                    </div>
                </PopupStyled>
            </PopupsContext.Provider>
    }
}