import React from "react";
import {setOpenPopup} from "../../../Redux/Reducers/reducerOpenPopup";
import {useDispatch} from "react-redux";

const PopupCrossClose = () => {

    const dispatch = useDispatch()

    const handleClose = () => {
        document.querySelector('.popup1').classList.remove('popup_active')
        setTimeout(() => {
            dispatch(setOpenPopup(""))
        }, 300)
    }

    return (
        <div className="popup__cross popup__close" onClick={handleClose}>
            <img src="../images/cross.svg" alt="Close"/>
        </div>
    );
};

export default PopupCrossClose;