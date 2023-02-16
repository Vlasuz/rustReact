import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import PopupCloseBackground from "./PopupCloseBackground";
import PopupCloseCross from "./PopupCloseCross";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {fightRoomChange} from "../../Redux/Reducers/reducerFightsRooms";
import {setSocket} from "../../Redux/Reducers/reducerFightsSocketCreate";
import {setDuel, setResponse} from "../../Redux/Reducers/reducerFightsResponse";
import {logDOM} from "@testing-library/react";
import {setSkin} from "../../Redux/Reducers/reducerFightsSkin";

const PopupEntryCoins = ({ data }) => {

    const userData = useSelector(state => state.reducerUserData.data)
    const balance = useSelector(state => state.reducerUserBalance.balance)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const settings = useSelector(state => state.reducerSettings.settings);

    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    const handleStart = (e) => {
        e.preventDefault()

        axios.defaults.headers.post['Authorization'] = `Bearer ${getCookie('access_token')}`;
        axios.post(`https://rust.onefut.net/api/fight/room/join?game_id=${data.id}`, {
            "coins": data.fight_players[0].coins
        }).then(res => {
            const sk = new WebSocket('wss://rust.onefut.net/ws/api/fight/game/' + data.id + "/")
            sk.onopen = function () {
                sk.send(`{"type":"auth", "token":"${getCookie('access_token')}"}`)
                dispatch(setSocket(sk))
            }
            sk.onmessage = e => {
                let message = JSON.parse(JSON.parse(e.data))
                dispatch(setResponse(message))

                switch(message.type){
                    case 'player_join_event':
                        let skin = message.data[1].skin !== null ? message.data[1].skin?.gallery : settings.default_fight_skin?.gallery
                        dispatch(setSkin('me', skin))
                        break;
                }
            }

            navigate("/fight/"+res.data.id)
        })
    }

    return (
        <div className={"popup popup-entry-coins popup-entry-coins-"+data.id}>
            <PopupCloseBackground />
            <div className="popup__content">
                <h2>Комната</h2>
                <p className="subtitle">Тип ставки: <span>Валютой</span>
                </p>
                <PopupCloseCross />
                <div className="popup-entry-coins__info">
                    <p>Ставка в этой комнате</p>
                    <div className="info__coins">
                        <img src="../images/header__coins.svg" alt="Ico"/>
                        <span>
                            {
                                data.fight_players[0].coins
                            }
                        </span>
                    </div>
                </div>

                {
                    (!!Object.keys(userData).length && userData.id !== data.fight_players[0].user.id) && <>
                        {
                            data.fight_players[0].coins <= balance ?
                                <form onSubmit={handleStart}>
                                    <button>
                                        Внести ставку
                                    </button>
                                </form> :

                                <button>Недостаточно средств</button>
                        }
                    </>
                }


            </div>
        </div>
    );
};

export default PopupEntryCoins;