import setCookie from "./setCookie"
import {clearUserInventory, setUser} from "../redux/toolkitSlice"

interface IHandleExit {
    event: React.MouseEvent<HTMLAnchorElement>
    dispatch: any
    navigate: any
}

export function handleExit({event, dispatch, navigate}: IHandleExit) {
    event.preventDefault()

    setCookie('access_token', "")
    setCookie('access_token_rust', "")
    setCookie('refresh_token_rust', "")

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