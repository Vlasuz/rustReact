import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setSiteSettings, setUserInventory } from "../redux/toolkitSlice"
import { products } from "../data/poducts"
import axios from "axios"
import { getApiLink } from "../functions/getApiLink"

interface IGetSettingsProps {
    dispatch: any
}

export const getSettings = ({dispatch}: IGetSettingsProps) => {
    
    axios.get(getApiLink('api/base/settings/')).then(({data}) => {
        console.log(data)
        dispatch(setSiteSettings(data));
    })

}