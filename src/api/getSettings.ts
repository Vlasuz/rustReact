import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setSiteSettings, setUserInventory } from "../redux/toolkitSlice"
import axios from "axios"
import { getApiLink } from "../functions/getApiLink"

interface IGetSettingsProps {
    dispatch: any
}

export const getSettings = ({dispatch}: IGetSettingsProps) => {
    
    axios.get(getApiLink('api/base/settings/')).then(({data}) => {
        console.log("api/base/settings", data)
        dispatch(setSiteSettings(data));
    })

}