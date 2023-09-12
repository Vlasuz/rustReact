import axios from "axios";
import getCookies from "./getCookie";
import { getApiLink } from "./getApiLink";
import { setUser } from "../redux/toolkitSlice";
import { getUserGames } from "./getUserGames";

interface IGetUserProps {
    dispatch?: any
}

export const getUser = ({ dispatch }: IGetUserProps) => {
    const access_token = getCookies('access_token');
    let user = {};

    if (!access_token) return;

    axios.defaults.headers.post['Authorization'] = `Bearer ${access_token}`;
    axios.post(getApiLink('api/auth/session/')).then(({ data }) => {


        dispatch(setUser(data))

    }).catch(error => {
        console.log('Error with get user: ', error)
    })
    
};