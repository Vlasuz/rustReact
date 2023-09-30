import axios from "axios";
import getCookies from "../functions/getCookie";
import { getApiLink } from "../functions/getApiLink";
import { setMutedUsers, setUser } from "../redux/toolkitSlice";
import { getUserGames } from "./getUserGames";
import {getBearer} from "../functions/getBearer";

interface IGetUserProps {
    dispatch?: any
}

export const getUser = ({ dispatch }: IGetUserProps) => {

    if(!getCookies('access_token')) return;

    getBearer({type: 'post'})
    axios.post(getApiLink('api/auth/session/')).then(({ data }) => {

        dispatch(setUser(data))
        dispatch(setMutedUsers(data.muted_users))

    }).catch(error => {
        console.log('Error with get user: ', error)
    })
    
};