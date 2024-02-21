import { useEffect, useRef } from "react";
import { addChatItem, removeChatItem, setOpenWsChat, setUserOnline } from "../redux/toolkitSlice";
import { useDispatch, useSelector } from "react-redux";
import getCookies from "../functions/getCookie";
import { getWsLink } from "../functions/getWsLink";

export const useWsChat = () => {

    const dispatch = useDispatch()
    const ws: any = useRef(null)
    const isSocketOpen = useSelector((state: any) => state.toolkit.isOpenWsChat)

    useEffect(() => {
        console.log(isSocketOpen)
        if(isSocketOpen) return;

        ws.current = new WebSocket(getWsLink('ws/api/chat/'))
        ws.current.onopen = () => {
            console.log(ws)
            ws.current.send(JSON.stringify({
                "type": "auth",
                "token": getCookies('access_token_rust')
            }))

            console.log('123')

            dispatch(setOpenWsChat())
        }
        ws.current.onmessage = (e: any) => {
            const response = JSON.parse(JSON.parse(e?.data))
            
            if(response.type === "change_online") {
                Object.keys(response?.data).length && dispatch(setUserOnline(JSON.parse(response?.data)?.online))
            } else if (response.type === "send_message") {
                dispatch(addChatItem(response.data))
            } else if (response.type === "delete_message") {
                dispatch(removeChatItem(response.data))
            }

        }
    }, [ws])


    console.log(ws)
    return { ws }

}