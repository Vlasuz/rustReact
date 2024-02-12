import axios from "axios";
import getCookies from "../functions/getCookie";
import { getApiLink } from "../functions/getApiLink";
import { setMutedUsers, setUser } from "../redux/toolkitSlice";
import { getUserGames } from "./getUserGames";
import {getBearer} from "../functions/getBearer";
import {RefreshToken} from "./refreshToken";

interface IGetUserProps {
    dispatch?: any
}

export const getUser = ({ dispatch }: IGetUserProps) => {

    if(!getCookies('access_token_rust')) return;

    getBearer({type: 'get'})
    axios.get(getApiLink('api/user/me/')).then(({ data }) => {

        dispatch(setUser(data))
        dispatch(setMutedUsers(data.muted_users))

    }).catch(error => {
        error.response.status === 401 && RefreshToken({dispatch, getUser})
    })
    
};