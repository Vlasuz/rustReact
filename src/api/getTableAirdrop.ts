import axios from "axios";
import {getApiLink} from "../functions/getApiLink";

export const getTableAirdrop = async ({setGame, setLoad}: any) => {

    await axios.get(getApiLink(`api/user/games/airdrop/`)).then(({data}) => {

        setGame(data)
        setLoad(true)
    })
}