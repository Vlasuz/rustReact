import {setChosenCrates, setCrates, setShopList, setSiteSettings, setUserInventory} from "../redux/toolkitSlice"
import axios from "axios"
import { getApiLink } from "../functions/getApiLink"
import { IProduct } from "../model"

interface IGetCasesProps {
    dispatch: any
}

export const getCases = ({dispatch}: IGetCasesProps) => {

    axios(getApiLink('api/crate/crates/')).then(({ data }) => {
        dispatch(setCrates(data))
    }).catch(er => console.log("api/crate/crates/", er))

}
