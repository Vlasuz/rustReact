import axios from "axios";
import {getApiLink} from "../functions/getApiLink";

export const getTableCrates = async ({setGame, setLoad}: any) => {
    await axios.get(getApiLink(`api/user/games/crate/`)).then(({data}) => {
        setGame(data)
        setLoad(true)
    })
}