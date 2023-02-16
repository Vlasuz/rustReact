import React, {useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import FightAreaTop from "./FightAreaTop";
import axios from "axios";
import {reducerFightsRoom} from "../../../Redux/Reducers/reducerFightRoom";
import {fightRoomChange, fightRoomRemove, fightRoomSet} from "../../../Redux/Reducers/reducerFightsRooms";

const FightPageWaiting = ({ roomData }) => {

    const userData = useSelector(state => state.reducerUserData.data)
    const navigate = useNavigate()

    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    useEffect(() => {
        // console.log(roomData)
    }, [])
    const handleCancel = () => {
        axios.defaults.headers.delete['Authorization'] = `Bearer ${getCookie('access_token')}`;
        axios.delete(`https://rust.onefut.net/api/fight/room/cancel?game_id=${roomData.id}`).then(res => {
            navigate('/')
        })
    }

    return (
        <section className="section-fight">
            <div className="section-fight__lft">
                {(roomData && roomData.fight_players[0]) && <FightAreaTop userInfo={roomData.fight_players[0]} />}
                <div className="section-fight__persone">
                    <div className="persone__start">
                        <img src="../images/persone-nnn.png" alt="Persone"/>
                    </div>
                </div>
                <div className="section-fight__bottom">
                    <button className="section-fight__cancel" onClick={handleCancel}>
                        Отменить игру
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
                    <span>Ожидание</span>
                </div>
            </div>
            <div className="section-fight__rht">
                {/*{roomData.fight_players[1] && <FightAreaTop userInfo={roomData.fight_players[1]} />}*/}
                <div className="section-fight__persone">
                    <div className="persone__start">
                        <img src="../images/persone-siluete.png" alt="Persone"/>
                    </div>
                </div>
                <div className="section-fight__bottom">
                    <div className="section-fight__opponent-info">Нет игрока</div>
                </div>
            </div>
        </section>
    );
};

export default FightPageWaiting;