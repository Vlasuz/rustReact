import React, {useEffect, useState} from 'react';
import SelectFightOnButtonMousemove from "../../../Hooks/SelectFightOnButtonMousemove";
import SelectFightOnButtonMouseout from "../../../Hooks/SelectFightOnButtonMouseout";
import SelectFightOnButtonClick from "../../../Hooks/SelectFightOnButtonClick";
import {useDispatch, useSelector} from "react-redux";
import {setDefense} from "../../../Redux/Reducers/reducerFightsDefense";
import {logDOM} from "@testing-library/react";

const FightAreaBottom = (props) => {

    const [defHead, setDefHead] = useState(false)
    const [defBody, setDefBody] = useState(false)
    const [defLegs, setDefLegs] = useState(false)
    const dispatch = useDispatch()
    const userData = useSelector(state => state.reducerUserData.data)
    const socket = useSelector(state => state.reducerFightsSocketCreate.socket)
    const response = useSelector(state => state.reducerFightsResponse.response)
    const settings = useSelector(state => state.reducerSettings.settings);

    const skin = useSelector(state => state.reducerFightsSkin.my_skin)

    // const opponent = response.data.players[0].user.id === userData.id ? response?.data?.players[1] : response.data.players[0]
    // console.log(response, userData.id)
    // const myperson = response.data.players[0].user.id === userData.id ? response.data.players[0] : response?.data?.players[1]

    useEffect(() => {

        if(response.type === 'game_defense') {
            setTimeout(() => {
                if(!defHead) setDefHead(true)
                if(!defLegs) setDefLegs(true)
            }, 8500)
        }

    }, [response])

    useEffect(() => {
        socket.send(`{"type":"defense", "head": ${defHead}, "body": ${defBody}, "legs": ${defLegs}}`)
        dispatch(setDefense([defHead, defBody, defLegs]))
    }, [defHead, defBody, defLegs])

    return (
        <div className="section-fight__bottom">
            <div className="bottom__info">
                <p>Выберите 2 области защиты</p>
            </div>
            <ul className="section-fight__select">
                <li>
                    <button
                        data-persone="head"
                        onMouseMove={e => SelectFightOnButtonMousemove(e)}
                        onMouseOut={e => SelectFightOnButtonMouseout(e)}
                        onClick={e => SelectFightOnButtonClick(e, skin, setDefHead)}
                    >
                        <span>Голова</span>
                        <img src="../images/green-check.svg" alt="Ico"/>
                    </button>
                </li>
                <li>
                    <button
                        data-persone="body"
                        onMouseMove={e => SelectFightOnButtonMousemove(e)}
                        onMouseOut={e => SelectFightOnButtonMouseout(e)}
                        onClick={e => SelectFightOnButtonClick(e, skin, setDefBody)}
                    >
                        <span>Торс</span>
                        <img src="../images/green-check.svg" alt="Ico"/>
                    </button>
                </li>
                <li>
                    <button
                        data-persone="legs"
                        onMouseMove={e => SelectFightOnButtonMousemove(e)}
                        onMouseOut={e => SelectFightOnButtonMouseout(e)}
                        onClick={e => SelectFightOnButtonClick(e, skin, setDefLegs)}
                    >
                        <span>Ноги</span>
                        <img src="../images/green-check.svg" alt="Ico"/>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default FightAreaBottom;