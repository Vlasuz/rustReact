import { setShopList, setSiteSettings, setUserInventory } from "../redux/toolkitSlice"
import axios from "axios"
import { getApiLink } from "../functions/getApiLink"
import { IProduct } from "../model"

interface IGetShopProps {
    dispatch: any
}

export const getShop = ({dispatch}: IGetShopProps) => {
    
    axios(getApiLink('api/items/shop/')).then(({ data }) => {
        dispatch(setShopList(data))
    })

}
