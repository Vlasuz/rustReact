import React, {useContext, useEffect, useState} from 'react'
import {LoadingStyled} from "../loading/loading.styled";
import userIcon from "../../assets/images/user2.png";
import {IUser} from "../../model";
import axios from "axios";
import {getApiLink} from "../../functions/getApiLink";
import {useParams} from "react-router";
import {getBearer} from "../../functions/getBearer";
import getCookies from "../../functions/getCookie";
import {GameSocket, GameWS} from "../../pages/battleSingle/BattleSingle";
import {useSelector} from 'react-redux';

interface IBattlePlayerProps {
    color: string
    position: number
    direction: string
    player: any
}

export const BattlePlayer: React.FC<IBattlePlayerProps> = ({color, position, player, direction}) => {

    const webSocket: any = useContext(GameSocket)
    const ws: any = useContext(GameWS)

    const user: IUser = useSelector((state: any) => state.toolkit.user)

    const isHaveUser = player && Object.keys(player).length
    const isYourGame = webSocket?.battle?.players.filter((item: any) => item.position === 1)[0]?.user?.id === user?.id

    const {battleId}: any = useParams()

    const handleJoin = () => {
        getBearer({type: "post"})
        axios.post(getApiLink(`api/battle/join/?game_id=${battleId}&position=${position}`)).then(({data}) => {
            ws.send(`{"type":"auth", "token":"${getCookies("access_token_rust")}"}`)
        }).catch(er => console.log(getApiLink(`api/battle/join/?game_id=${battleId}&position=${position}`), er))
    }

    return (
        <div onClick={handleJoin}
             className={`person person_${color} person_${direction} ${!isHaveUser && "person_loading"}`}>
            <div className="user__photo">
                {
                    isHaveUser ? <img src={player.user.avatar} alt="user"/>
                        :
                        <div className="non-player-loading">
                            {!isYourGame && <>
                                <img src={user?.avatar} alt=""/>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                     fill="none">
                                    <path
                                        d="M12.9004 10.8566L8.79883 14.9581C8.64886 15.1015 8.44964 15.1819 8.24219 15.1827C8.14159 15.183 8.04197 15.1631 7.94922 15.1241C7.8052 15.0659 7.68183 14.966 7.59485 14.8373C7.50788 14.7086 7.46125 14.5568 7.46094 14.4015V11.0812H1.40625C1.19905 11.0812 1.00034 10.9989 0.853823 10.8524C0.70731 10.7058 0.625 10.5071 0.625 10.2999C0.625 10.0927 0.70731 9.89401 0.853823 9.7475C1.00034 9.60099 1.19905 9.51868 1.40625 9.51868H7.46094V6.19836C7.46125 6.04301 7.50788 5.89128 7.59485 5.76256C7.68183 5.63383 7.8052 5.53396 7.94922 5.47571C8.09185 5.41905 8.24776 5.40458 8.39839 5.43402C8.54902 5.46345 8.68801 5.53555 8.79883 5.64172L12.9004 9.74329C13.0471 9.89141 13.1294 10.0915 13.1294 10.2999C13.1294 10.5084 13.0471 10.7084 12.9004 10.8566ZM17.8125 0.924927H12.3438C12.1365 0.924927 11.9378 1.00724 11.7913 1.15375C11.6448 1.30026 11.5625 1.49898 11.5625 1.70618C11.5625 1.91338 11.6448 2.11209 11.7913 2.2586C11.9378 2.40512 12.1365 2.48743 12.3438 2.48743H17.8125V18.1124H12.3438C12.1365 18.1124 11.9378 18.1947 11.7913 18.3412C11.6448 18.4878 11.5625 18.6865 11.5625 18.8937C11.5625 19.1009 11.6448 19.2996 11.7913 19.4461C11.9378 19.5926 12.1365 19.6749 12.3438 19.6749H17.8125C18.2269 19.6749 18.6243 19.5103 18.9174 19.2173C19.2104 18.9243 19.375 18.5268 19.375 18.1124V2.48743C19.375 2.07303 19.2104 1.6756 18.9174 1.38257C18.6243 1.08955 18.2269 0.924927 17.8125 0.924927Z"
                                        fill="#92C145"></path>
                                </svg>
                            </>}
                            <LoadingStyled className="load">
                                <div className="line"/>
                                <div className="line"/>
                                <div className="line"/>
                            </LoadingStyled>
                        </div>
                }
                {isYourGame && <svg className={"botIcon"} width="21" height="22" viewBox="0 0 21 22" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M17.8711 4.47217H11.6211V1.34717C11.6211 1.13997 11.5388 0.941254 11.3923 0.794741C11.2458 0.648228 11.047 0.565918 10.8398 0.565918C10.6326 0.565918 10.4339 0.648228 10.2874 0.794741C10.1409 0.941254 10.0586 1.13997 10.0586 1.34717V4.47217H3.80859C2.98058 4.47474 2.18722 4.80481 1.60173 5.3903C1.01624 5.9758 0.686169 6.76916 0.683594 7.59717V18.5347C0.686169 19.3627 1.01624 20.156 1.60173 20.7415C2.18722 21.327 2.98058 21.6571 3.80859 21.6597H17.8711C18.6991 21.6571 19.4925 21.327 20.078 20.7415C20.6635 20.156 20.9935 19.3627 20.9961 18.5347V7.59717C20.9935 6.76916 20.6635 5.9758 20.078 5.3903C19.4925 4.80481 18.6991 4.47474 17.8711 4.47217ZM5.37109 10.3315C5.37109 10.0998 5.43982 9.8732 5.56859 9.68048C5.69736 9.48777 5.88038 9.33757 6.09451 9.24887C6.30864 9.16018 6.54427 9.13697 6.77159 9.18219C6.99891 9.2274 7.20772 9.33901 7.37161 9.5029C7.5355 9.66679 7.64711 9.8756 7.69233 10.1029C7.73754 10.3302 7.71434 10.5659 7.62564 10.78C7.53694 10.9941 7.38674 11.1772 7.19403 11.3059C7.00131 11.4347 6.77474 11.5034 6.54297 11.5034C6.23217 11.5034 5.9341 11.38 5.71433 11.1602C5.49456 10.9404 5.37109 10.6423 5.37109 10.3315ZM8.10547 17.7534H7.32422C6.90982 17.7534 6.51239 17.5888 6.21936 17.2958C5.92634 17.0027 5.76172 16.6053 5.76172 16.1909C5.76172 15.7765 5.92634 15.3791 6.21936 15.0861C6.51239 14.793 6.90982 14.6284 7.32422 14.6284H8.10547V17.7534ZM12.0117 17.7534H9.66797V14.6284H12.0117V17.7534ZM14.3555 17.7534H13.5742V14.6284H14.3555C14.7699 14.6284 15.1673 14.793 15.4603 15.0861C15.7533 15.3791 15.918 15.7765 15.918 16.1909C15.918 16.6053 15.7533 17.0027 15.4603 17.2958C15.1673 17.5888 14.7699 17.7534 14.3555 17.7534ZM15.1367 11.5034C14.9049 11.5034 14.6784 11.4347 14.4857 11.3059C14.2929 11.1772 14.1427 10.9941 14.054 10.78C13.9654 10.5659 13.9421 10.3302 13.9874 10.1029C14.0326 9.8756 14.1442 9.66679 14.3081 9.5029C14.472 9.33901 14.6808 9.2274 14.9081 9.18219C15.1354 9.13697 15.371 9.16018 15.5852 9.24887C15.7993 9.33757 15.9823 9.48777 16.1111 9.68048C16.2399 9.8732 16.3086 10.0998 16.3086 10.3315C16.3086 10.6423 16.1851 10.9404 15.9654 11.1602C15.7456 11.38 15.4475 11.5034 15.1367 11.5034Z"
                        fill="#3863A7"/>
                </svg>}
            </div>
            {isYourGame && <span className={"textToCall"}>call a bot</span>}
            <span>
                {isHaveUser ? player?.user?.name : "..."}
            </span>
        </div>
    )
}
