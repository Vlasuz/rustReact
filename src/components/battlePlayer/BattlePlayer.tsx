import React, {useEffect, useState} from 'react'
import {LoadingStyled} from "../loading/loading.styled";
import userIcon from "../../assets/images/user2.png";
import {IUser} from "../../model";
import axios from "axios";
import {getApiLink} from "../../functions/getApiLink";
import {useParams} from "react-router";
import {getBearer} from "../../functions/getBearer";
import getCookies from "../../functions/getCookie";

interface IBattlePlayerProps {
    color: string
    position: number
    direction: string
    player: any
}

export const BattlePlayer: React.FC<IBattlePlayerProps> = ({color, position, player, direction}) => {

    const isHaveUser = player && Object.keys(player).length

    const {battleId}: any = useParams()

    const handleJoin = () => {
        getBearer({type: "post"})
        axios.post(getApiLink(`api/battle/join/?game_id=${battleId}&position=${position}`)).then(({data}) => {
            console.log(data)
            connectToSocket(battleId)
        }).catch(er => console.log(getApiLink(`api/battle/join/?game_id=${battleId}&position=${position}`), er))
    }

    const connectToSocket = (gameId: string) => {
        const ws = new WebSocket(getApiLink(`ws/api/battle/game/${gameId}/`, true))

        ws.onopen = () => {
            getCookies("access_token_rust") && ws.send(`{"type":"auth", "token":"${getCookies("access_token_rust")}"}`)
            console.log('open')
        }
        ws.onmessage = (e: any) => {
            const data = JSON.parse(JSON.parse(e.data))

            console.log('MAIN MESS',data)
        }
        ws.onclose = (e: any) => console.log('close', e)
        ws.onerror = (e: any) => console.log('error', e)
    }

    return (
        <div onClick={handleJoin} className={`person person_${color} person_${direction} ${!isHaveUser && "person_loading"}`}>
            <div className="user__photo">
                {
                    isHaveUser ? <img src={player.user.avatar} alt="user"/>
                        :
                        <LoadingStyled className="load">
                            <div className="line"/>
                            <div className="line"/>
                            <div className="line"/>
                        </LoadingStyled>
                }
                <svg className={"botIcon"} width="21" height="22" viewBox="0 0 21 22" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M17.8711 4.47217H11.6211V1.34717C11.6211 1.13997 11.5388 0.941254 11.3923 0.794741C11.2458 0.648228 11.047 0.565918 10.8398 0.565918C10.6326 0.565918 10.4339 0.648228 10.2874 0.794741C10.1409 0.941254 10.0586 1.13997 10.0586 1.34717V4.47217H3.80859C2.98058 4.47474 2.18722 4.80481 1.60173 5.3903C1.01624 5.9758 0.686169 6.76916 0.683594 7.59717V18.5347C0.686169 19.3627 1.01624 20.156 1.60173 20.7415C2.18722 21.327 2.98058 21.6571 3.80859 21.6597H17.8711C18.6991 21.6571 19.4925 21.327 20.078 20.7415C20.6635 20.156 20.9935 19.3627 20.9961 18.5347V7.59717C20.9935 6.76916 20.6635 5.9758 20.078 5.3903C19.4925 4.80481 18.6991 4.47474 17.8711 4.47217ZM5.37109 10.3315C5.37109 10.0998 5.43982 9.8732 5.56859 9.68048C5.69736 9.48777 5.88038 9.33757 6.09451 9.24887C6.30864 9.16018 6.54427 9.13697 6.77159 9.18219C6.99891 9.2274 7.20772 9.33901 7.37161 9.5029C7.5355 9.66679 7.64711 9.8756 7.69233 10.1029C7.73754 10.3302 7.71434 10.5659 7.62564 10.78C7.53694 10.9941 7.38674 11.1772 7.19403 11.3059C7.00131 11.4347 6.77474 11.5034 6.54297 11.5034C6.23217 11.5034 5.9341 11.38 5.71433 11.1602C5.49456 10.9404 5.37109 10.6423 5.37109 10.3315ZM8.10547 17.7534H7.32422C6.90982 17.7534 6.51239 17.5888 6.21936 17.2958C5.92634 17.0027 5.76172 16.6053 5.76172 16.1909C5.76172 15.7765 5.92634 15.3791 6.21936 15.0861C6.51239 14.793 6.90982 14.6284 7.32422 14.6284H8.10547V17.7534ZM12.0117 17.7534H9.66797V14.6284H12.0117V17.7534ZM14.3555 17.7534H13.5742V14.6284H14.3555C14.7699 14.6284 15.1673 14.793 15.4603 15.0861C15.7533 15.3791 15.918 15.7765 15.918 16.1909C15.918 16.6053 15.7533 17.0027 15.4603 17.2958C15.1673 17.5888 14.7699 17.7534 14.3555 17.7534ZM15.1367 11.5034C14.9049 11.5034 14.6784 11.4347 14.4857 11.3059C14.2929 11.1772 14.1427 10.9941 14.054 10.78C13.9654 10.5659 13.9421 10.3302 13.9874 10.1029C14.0326 9.8756 14.1442 9.66679 14.3081 9.5029C14.472 9.33901 14.6808 9.2274 14.9081 9.18219C15.1354 9.13697 15.371 9.16018 15.5852 9.24887C15.7993 9.33757 15.9823 9.48777 16.1111 9.68048C16.2399 9.8732 16.3086 10.0998 16.3086 10.3315C16.3086 10.6423 16.1851 10.9404 15.9654 11.1602C15.7456 11.38 15.4475 11.5034 15.1367 11.5034Z"
                        fill="#3863A7"/>
                </svg>
            </div>
            <span className={"textToCall"}>call a bot</span>
            <span>
                {isHaveUser ? player.user.name : "..."}
            </span>
        </div>
    )
}
