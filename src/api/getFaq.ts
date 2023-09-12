import { setFaqList } from "../redux/toolkitSlice"
import axios from "axios"
import { getApiLink } from "../functions/getApiLink"

interface IGetFaqProps {
    dispatch: any
}

export const getFaq = ({dispatch}: IGetFaqProps) => {
    
    axios.get(getApiLink('api/base/faq/')).then(({data}) => {
        dispatch(setFaqList(data))
    })

}