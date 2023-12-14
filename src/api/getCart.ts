import axios from "axios"
import { addItemToCart } from "../redux/toolkitSlice"
import { getApiLink } from "../functions/getApiLink"
import { getBearer } from "../functions/getBearer"
import getCookies from "../functions/getCookie";

interface IGetCartProps {
    dispatch: any
}

export const getCart = ({dispatch}: IGetCartProps) => {

    if(!getCookies('access_token_rust')) return;

    getBearer({type: 'get'})
    axios.get(getApiLink('api/basket/')).then(({data}) => {
        dispatch(addItemToCart(data.items));
    }).catch(er => {
        console.log('basket', er)
    })

}