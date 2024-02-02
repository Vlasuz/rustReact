import axios from "axios";
import {getApiLink} from "../functions/getApiLink";
import {setUserGames} from "../redux/toolkitSlice";

export const getTableAirdrop = async ({dispatch, setGame, setLoad, userId}: any) => {

    await axios.get(getApiLink(`api/user/games/airdrop/${userId?.length ? `?id=${userId}` : ""}`)).then(({data}) => {
        setGame(data)
        setLoad(true)
        dispatch(setUserGames({
            type: "airdrop",
            data
        }))
    })
}