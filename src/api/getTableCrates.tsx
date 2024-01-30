import axios from "axios";
import {getApiLink} from "../functions/getApiLink";

export const getTableCrates = async ({setGame, setLoad, userId}: any) => {
    await axios.get(getApiLink(`api/user/games/crate/${userId?.length ? `?id=${userId}` : ""}`)).then(({data}) => {
        setGame(data)
        setLoad(true)
    })
}