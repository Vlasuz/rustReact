import axios from "axios";
import { getApiLink } from "./getApiLink";
import getCookies from "./getCookie";
import { setUserGames } from "../redux/toolkitSlice";

interface IGetUserProps {
    dispatch: any
    id: string | any
}

export const getUserGames = ({dispatch, id}: IGetUserProps) => {

    axios.get(getApiLink(`api/user/games/?id=${id}`)).then(({data}) => {

        console.log('asd')
        dispatch(setUserGames(data))
        console.log(data)

    }).catch(error => {
        console.log('Error with get user games: ', error)
    })
    
};