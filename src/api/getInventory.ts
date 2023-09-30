import axios from "axios"
import { getApiLink } from "../functions/getApiLink"
import { getBearer } from "../functions/getBearer"
import { setUserInventory } from "../redux/toolkitSlice"
import getCookies from "../functions/getCookie";

interface IGetInventoryProps {
    dispatch: any
}

export const getInventory = ({dispatch}: IGetInventoryProps) => {

    if(!getCookies('access_token')) return;

    getBearer({type: 'get'})
    axios.get(getApiLink('api/items/inventory/')).then(({data}) => {
        dispatch(setUserInventory(data))
    }).catch(er => {
        console.log('inventory', er)
    })
}