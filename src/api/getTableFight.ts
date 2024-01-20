import axios from "axios";
import {getApiLink} from "../functions/getApiLink";

export const getTableFight = async ({setGame, setLoad}: any) => {
    await axios.get(getApiLink(`api/user/games/fight/`)).then(({data}) => {
        setGame(data)
        setLoad(true)
    })
}