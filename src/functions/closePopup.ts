import {setPopup} from "../redux/toolkitSlice";
import {useDispatch} from "react-redux";

interface IClosePopupProps {
    setIsOpen: any
    dispatch: any
}

export const closePopup = ({setIsOpen, dispatch}: IClosePopupProps) => {
    setIsOpen(false)

    setTimeout(() => {
        dispatch(setPopup(''))
    }, 300)
}