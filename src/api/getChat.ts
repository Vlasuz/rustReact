import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setChatItems, setUserInventory } from "../redux/toolkitSlice"
import { products } from "../data/poducts"
import { chatData } from "../data/chat"

interface IGetChatProps {
    dispatch: any
}

export const getChat = ({dispatch}: IGetChatProps) => {
    
    dispatch(setChatItems(chatData));

}