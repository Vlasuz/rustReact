import {setCrateRarities, setCrates, setShopList, setSiteSettings, setUserInventory } from "../redux/toolkitSlice"
import axios from "axios"
import { getApiLink } from "../functions/getApiLink"
import { IProduct } from "../model"

interface IGetCrateRarityProps {
    dispatch: any
}

export const getCrateRarity = ({dispatch}: IGetCrateRarityProps) => {

    axios(getApiLink('api/crate/rarities/')).then(({ data }) => {
        dispatch(setCrateRarities(data))
    }).catch(er => console.log("api/crate/crates/", er))

}
