import axios from "axios";
import {getApiLink} from "../functions/getApiLink";
import { setPages } from "../redux/toolkitSlice";

export const getPages = ({dispatch}: any) => {
    axios.get(getApiLink("api/base/pages/")).then(({data}) => {
        console.log(data)
        dispatch(setPages(data))
    }).catch(er => {console.log('Error pages', er)})
}