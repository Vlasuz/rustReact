import SelectFightOnButtonClick from "../../Hooks/SelectFightOnButtonClick";
import SelectFightOnButtonMousemove from "../../Hooks/SelectFightOnButtonMousemove";
import SelectFightOnButtonMouseout from "../../Hooks/SelectFightOnButtonMouseout";
import FightAreaTop from "./FightArea/FightAreaTop";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setDefense} from "../../Redux/Reducers/reducerFightsDefense";
import {setAttack} from "../../Redux/Reducers/reducerFightsAttack";
import SelectFightOnBody from "../../Hooks/SelectFightOnBody";
import Translate from "../../Hooks/Translate";
import {setSound} from "../../Redux/Reducers/reducerSound";

const FightPageOpponentSelect = (props) => {

    const [hitHead, setHitHead] = useState(false)
    const [hitBody, setHitBody] = useState(false)
    const [hitLegs, setHitLegs] = useState(false)
    const dispatch = useDispatch()
    const socket = useSelector(state => state.reducerFightsSocketCreate.socket)
    const response = useSelector(state => state.reducerFightsResponse.response)
    const skin = useSelector(state => state.reducerShopSkins.skins).chosen;
    const defaultSkin = useSelector(state => state.reducerSettings.settings).default_fight_skin;

    useEffect(() => {

        if (response.type === 'game_attack') {
            setTimeout(() => {
                if (!hitHead) setHitHead(true)
                if (!hitLegs) setHitLegs(true)
            }, 9500)
        }

    }, [response])

    useEffect(() => {
        socket.send(`{"type":"attack", "head": ${hitHead}, "body": ${hitBody}, "legs": ${hitLegs}}`)
        dispatch(setAttack([hitHead, hitBody, hitLegs]))

        dispatch(setSound(''))
        setTimeout(() => {
            if (hitHead) dispatch(setSound('sound8'))
        }, 10)
    }, [hitHead])

    useEffect(() => {
        socket.send(`{"type":"attack", "head": ${hitHead}, "body": ${hitBody}, "legs": ${hitLegs}}`)
        dispatch(setAttack([hitHead, hitBody, hitLegs]))

        dispatch(setSound(''))
        setTimeout(() => {
            if (hitBody) dispatch(setSound('sound7'))
        }, 10)
    }, [hitBody])

    useEffect(() => {
        socket.send(`{"type":"attack", "head": ${hitHead}, "body": ${hitBody}, "legs": ${hitLegs}}`)
        dispatch(setAttack([hitHead, hitBody, hitLegs]))

        dispatch(setSound(''))
        setTimeout(() => {
            if (hitLegs) dispatch(setSound('sound7'))
        }, 10)
    }, [hitLegs])



    useEffect(() => {
        SelectFightOnBody()
    }, [])

    return (
        <div className="section-fight__rht">
            <FightAreaTop userInfo={props.userInfo}/>
            <div className="section-fight__persone section-fight__persone-hit">
                <div className="persone__red">
                    <img className="head-hit" src="../images/head-hit.png" alt="Photo" width="72"/>
                    <img className="body-hit" src="../images/body-hit.png" alt="Photo" width="300"/>
                    <img className="legs-hit" src="../images/legs-hit.png" alt="Photo" width="300"/>
                </div>
                <div className="persone__start">
                    <img src="../images/persone-siluete.png" alt="Persone"/>
                </div>
            </div>
            <div className="section-fight__bottom">
                <div className="bottom__info">
                    <p>
                        <Translate>choose_two_attack</Translate>
                    </p>
                </div>
                <ul className="section-fight__select-hit">
                    <li>
                        <button
                            data-persone="head-hit"
                            onMouseMove={e => SelectFightOnButtonMousemove(e)}
                            onMouseOut={e => SelectFightOnButtonMouseout(e)}
                            onClick={e => SelectFightOnButtonClick(e, skin, setHitHead, defaultSkin)}
                        >
                            <span>
                                <Translate>fight_head</Translate>
                            </span>
                            <img src="../images/red-check.svg" alt="Ico"/>
                        </button>
                    </li>
                    <li>
                        <button
                            data-persone="body-hit"
                            onMouseMove={e => SelectFightOnButtonMousemove(e)}
                            onMouseOut={e => SelectFightOnButtonMouseout(e)}
                            onClick={e => SelectFightOnButtonClick(e, skin, setHitBody, defaultSkin)}
                        >
                            <span>
                                <Translate>fight_body</Translate>
                            </span>
                            <img src="../images/red-check.svg" alt="Ico"/>
                        </button>
                    </li>
                    <li>
                        <button
                            data-persone="legs-hit"
                            onMouseMove={e => SelectFightOnButtonMousemove(e)}
                            onMouseOut={e => SelectFightOnButtonMouseout(e)}
                            onClick={e => SelectFightOnButtonClick(e, skin, setHitLegs, defaultSkin)}
                        >
                            <span>
                                <Translate>fight_legs</Translate>
                            </span>
                            <img src="../images/red-check.svg" alt="Ico"/>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default FightPageOpponentSelect;