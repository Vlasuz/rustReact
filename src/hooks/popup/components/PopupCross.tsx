import React, {useContext, useEffect} from 'react'
import {PopupsContext} from "../../../context/popupsContext";
import {useDispatch} from "react-redux";
import {setPopup, setPopupZoneItems} from "../../../redux/toolkitSlice";
import cross from './../../../assets/images/cross.svg'
import {closePopup} from "../../../functions/closePopup";

interface IPopupCrossProps {

}

export const PopupCross:React.FC<IPopupCrossProps> = () => {

    const setIsOpen: any = useContext(PopupsContext)
    const dispatch = useDispatch()

    return (
        <div onClick={_ => closePopup({setIsOpen, dispatch})} className="popup__cross popup__close">
            <img src={cross} alt="Close" />
        </div>
    )
}
