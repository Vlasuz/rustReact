import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setUserInventory } from "../redux/toolkitSlice"

interface IGetProductsProps {
    dispatch: any
}

export const getProducts = ({dispatch}: IGetProductsProps) => {
    
    // dispatch(setUserInventory(products));

}