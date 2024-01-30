import axios from "axios";
import { useDispatch } from "react-redux";
import {getApiLink} from "../functions/getApiLink";
import {getBearer} from "../functions/getBearer";
import getCookies from "../functions/getCookie";
import {setUser} from "../redux/toolkitSlice";
import setCookie from "../functions/setCookie";

export const RefreshToken = ({dispatch}: any) => {

    getBearer({type: "post"})
    axios.post(getApiLink(`api/auth/refresh/`), {
        "refresh_token": getCookies("refresh_token_rust")
    }).then(({data}) => {

        console.log(data)
        dispatch(setUser(data.user))
        setCookie("access_token_rust", data.access_token)

    }).catch(error => {
        console.log('api/auth/refresh ', error)
    })
}