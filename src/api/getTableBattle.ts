import axios from "axios";
import {getApiLink} from "../functions/getApiLink";

export const getTableBattle = async ({setGame, setLoad}: any) => {
    await axios.get(getApiLink(`api/user/games/battle/`)).then(({data}) => {
        setGame(data)
        setLoad(true)
    })
}