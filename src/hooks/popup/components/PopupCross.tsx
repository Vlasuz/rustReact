import React, {useContext, useEffect} from 'react'
import {PopupsContext} from "../../../context/popupsContext";
import {useDispatch} from "react-redux";
import {setPopup} from "../../../redux/toolkitSlice";
import cross from './../../../assets/images/cross.svg'

interface IPopupCrossProps {

}

export const PopupCross:React.FC<IPopupCrossProps> = () => {

    const setIsOpen: any = useContext(PopupsContext)
    const dispatch = useDispatch()

    const handleClosePopup = () => {
        setIsOpen(false)

        setTimeout(() => {
            dispatch(setPopup(''))
        }, 300)
    }

    return (
        <div onClick={handleClosePopup} className="popup__cross popup__close">
            <img src={cross} alt="Close" />
        </div>
    )
}
