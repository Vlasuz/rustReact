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
import GlobalLink from "../../Hooks/GlobalLink";
import Translate from "../../Hooks/Translate";
import {getCookie} from "../../Hooks/GetCookies";
import {setNotice} from "../../Redux/Reducers/reducerNotice";

const PopupEntryCoins = ({ data }) => {

    const userData = useSelector(state => state.reducerUserData.data)
    const balance = useSelector(state => state.reducerUserBalance.balance)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const settings = useSelector(state => state.reducerSettings.settings);
    const rooms = useSelector(state => state.reducerFightsRooms.rooms)

    const handleStart = (e) => {
        e.preventDefault()


        if(rooms.some(item => item?.first_player?.user?.id === userData?.id || item?.second_player?.user?.id === userData?.id)){
            dispatch(setNotice("already_have_a_game"))
            return
        }
        console.log('data', "https://"+GlobalLink()+`/api/fight/room/join?game_id=${data.id}`)

        axios.defaults.headers.post['Authorization'] = `Bearer ${getCookie('access_token')}`;
        axios.post("https://"+GlobalLink()+`/api/fight/room/join?game_id=${data.id}`, {
            "coins": data.first_player?.coins
        }).then(res => {
            const sk = new WebSocket("wss://"+GlobalLink()+'/ws/api/fight/game/' + data.id + "/")
            sk.onopen = function () {
                sk.send(`{"type":"auth", "token":"${getCookie('access_token')}"}`)
                dispatch(setSocket(sk))
                navigate("/fight/"+data.id)
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
            sk.onclose = () => {
                console.log('FIGHT close')
            }
            sk.onerror = () => {
                console.log('FIGHT error')
            }
        })
    }

    return (
        <div className={"popup popup-entry-coins popup-entry-coins-"+data.id}>
            <PopupCloseBackground />
            <div className="popup__content">
                <h2>
                    <Translate>room</Translate>
                </h2>
                <p className="subtitle"><Translate>type_fight</Translate> <span><Translate>type_fight_coins</Translate></span>
                </p>
                <PopupCloseCross />
                <div className="popup-entry-coins__info">
                    <p>
                        <Translate>bet_in_this_room</Translate>
                    </p>
                    <div className="info__coins">
                        <img src="../images/header__coins.svg" alt="Ico"/>
                        <span>
                            {
                                data.first_player?.coins
                            }
                        </span>
                    </div>
                </div>

                {
                    (!!Object.keys(userData).length && userData.id !== data.first_player?.user.id) && <>
                        {
                            data.first_player?.coins <= balance ?
                                <form onSubmit={handleStart}>
                                    <button>
                                        <Translate>place_a_bet</Translate>
                                    </button>
                                </form> :
                                <button className={'grey'}>
                                    <Translate>you_dont_have_enough_money_short</Translate>
                                </button>
                        }
                    </>
                }


            </div>
        </div>
    );
};

export default PopupEntryCoins;