import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import FightAreaTop from "./FightAreaTop";
import axios from "axios";
import {reducerFightsRoom} from "../../../Redux/Reducers/reducerFightRoom";
import {fightRoomChange, fightRoomRemove, fightRoomSet} from "../../../Redux/Reducers/reducerFightsRooms";
import GlobalLink from "../../../Hooks/GlobalLink";
import Translate from "../../../Hooks/Translate";
import {getCookie} from "../../../Hooks/GetCookies";
import {userInventoryAdd} from "../../../Redux/actions";
import FightAreaBottom from "./FightAreaBottom";
import {userBalanceAddCoins, userBalanceRemoveCoins} from "../../../Redux/Reducers/reducerUserBalance";

const FightPageWaiting = ({ roomData }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const response = useSelector(state => state.reducerFightsResponse.response)
    const [isActivePage, setIsActivePage] = useState('')

    const [isClick, setIsClick] = useState(false)

    const handleCancel = () => {
        setIsClick(true)
        axios.defaults.headers.delete['Authorization'] = `Bearer ${getCookie('access_token')}`;
        axios.delete("https://"+GlobalLink()+`/api/fight/room/cancel?game_id=${roomData.id}`).then(res => {
            dispatch(userInventoryAdd(roomData?.first_player?.items))
            dispatch(userBalanceAddCoins(roomData.first_player.coins))
            navigate('/')
        }).catch(er => {
            navigate('/')
        })
    }

    useEffect(() => {
        setTimeout(() => {
            setIsActivePage(((response?.type === "player_join_event") || response?.type === "waiting" ? " section-fight_active" : ""))
        }, 500)
    }, [])

    if(response?.data?.length === 2){
        setTimeout(() => {
            setIsActivePage(" section-fight_hide")
        }, 500)
    }

    return (
        <section className={"section-fight" + isActivePage}>
            <div className="section-fight__lft">
                {(roomData && roomData.first_player) && <FightAreaTop userInfo={roomData.first_player} />}
                <div className="section-fight__persone">
                    <div className="persone__start">
                        <img src="../images/persone-nnn.png" alt="Persone"/>
                    </div>
                </div>
                <div className="section-fight__bottom">
                    <button className="section-fight__cancel" disabled={isClick} onClick={handleCancel}>
                        <Translate>cancel_fight</Translate>
                    </button>
                </div>
                {/*<FightAreaBottom />*/}
            </div>
            <div className="section-fight__center">
                <div className="center__loading">
                    <div className="load">
                        <div className="load__line">

                        </div>
                        <div className="load__line">

                        </div>
                        <div className="load__line">

                        </div>
                    </div>
                    <span>
                        <Translate>waiting</Translate>
                    </span>
                </div>
            </div>
            <div className="section-fight__rht">
                <div className="section-fight__persone">
                    <div className="persone__start">
                        <img src="../images/persone-siluete.png" alt="Persone"/>
                    </div>
                </div>
                <div className="section-fight__bottom section-fight__bottom_active">
                    <div className="section-fight__opponent-info">
                        <Translate>not_found_player</Translate>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FightPageWaiting;