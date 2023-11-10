import { useDispatch } from "react-redux"
import setCookie from "./setCookie"
import { useNavigate } from "react-router"
import {clearUserInventory, setUser} from "../redux/toolkitSlice"

interface IHandleExit {
    event: React.MouseEvent<HTMLAnchorElement>
    dispatch: any
    navigate: any
}

export function handleExit({event, dispatch, navigate}: IHandleExit) {
    event.preventDefault()

    setCookie('access_token', '')

    if(window.location.href.includes('profile')) {
        navigate('/')

        dispatch(clearUserInventory())
        
        setTimeout(() => {
            dispatch(setUser({}))
        }, 300)
    } else {
        dispatch(setUser({}))
    }

}