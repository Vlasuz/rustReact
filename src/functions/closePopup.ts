import {setPopup, setPopupZoneItems} from "../redux/toolkitSlice";
import {useDispatch} from "react-redux";

interface IClosePopupProps {
    setIsOpen: any
    dispatch: any
}

export const closePopup = ({setIsOpen, dispatch}: IClosePopupProps) => {
    setIsOpen(false)
    dispatch(setPopupZoneItems({status: 'delete', item: "all"})) // Удаление элемента из зоны

    setTimeout(() => {
        dispatch(setPopup(''))
    }, 300)
}