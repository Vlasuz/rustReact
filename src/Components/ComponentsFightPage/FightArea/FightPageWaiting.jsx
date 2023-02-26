import React, {useEffect} from 'react';
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

const FightPageWaiting = ({ roomData }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleCancel = () => {
        axios.defaults.headers.delete['Authorization'] = `Bearer ${getCookie('access_token')}`;
        axios.delete("https://"+GlobalLink()+`/api/fight/room/cancel?game_id=${roomData.id}`).then(res => {
            dispatch(userInventoryAdd(roomData?.first_player?.items))
            navigate('/')
        })
    }

    return (
        <section className="section-fight">
            <div className="section-fight__lft">
                {(roomData && roomData.first_player) && <FightAreaTop userInfo={roomData.first_player} />}
                <div className="section-fight__persone">
                    <div className="persone__start">
                        <img src="../images/persone-nnn.png" alt="Persone"/>
                    </div>
                </div>
                <div className="section-fight__bottom">
                    <button className="section-fight__cancel" onClick={handleCancel}>
                        <Translate>cancel_fight</Translate>
                    </button>
                </div>
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
                <div className="section-fight__bottom">
                    <div className="section-fight__opponent-info">
                        <Translate>not_found_player</Translate>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FightPageWaiting;