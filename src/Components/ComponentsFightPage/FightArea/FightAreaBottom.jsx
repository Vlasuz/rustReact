import React, {useEffect, useState} from 'react';
import SelectFightOnButtonMousemove from "../../../Hooks/SelectFightOnButtonMousemove";
import SelectFightOnButtonMouseout from "../../../Hooks/SelectFightOnButtonMouseout";
import SelectFightOnButtonClick from "../../../Hooks/SelectFightOnButtonClick";
import {useDispatch, useSelector} from "react-redux";
import {setDefense} from "../../../Redux/Reducers/reducerFightsDefense";
import {logDOM} from "@testing-library/react";
import Translate from "../../../Hooks/Translate";

const FightAreaBottom = (props) => {

    const [defHead, setDefHead] = useState(false)
    const [defBody, setDefBody] = useState(false)
    const [defLegs, setDefLegs] = useState(false)
    const dispatch = useDispatch()
    const socket = useSelector(state => state.reducerFightsSocketCreate.socket)
    const response = useSelector(state => state.reducerFightsResponse.response)

    const skin = useSelector(state => state.reducerFightsSkin.my_skin)

    useEffect(() => {
        dispatch(setDefense([defHead, defBody, defLegs]))
        socket.send(`{"type":"defense", "head": ${defHead}, "body": ${defBody}, "legs": ${defLegs}}`)
    }, [defHead, defBody, defLegs])

    return (
        <div className="section-fight__bottom">
            <div className="bottom__info">
                <p>
                    <Translate>choose_two_defense</Translate>
                </p>
            </div>
            <ul className="section-fight__select">
                <li>
                    <button
                        data-persone="head"
                        onMouseMove={e => SelectFightOnButtonMousemove(e)}
                        onMouseOut={e => SelectFightOnButtonMouseout(e)}
                        onClick={e => SelectFightOnButtonClick(e, skin, setDefHead)}
                    >
                        <span>
                            <Translate>fight_head</Translate>
                        </span>
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
                        <span>
                            <Translate>fight_body</Translate>
                        </span>
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
                        <span>
                            <Translate>fight_legs</Translate>
                        </span>
                        <img src="../images/green-check.svg" alt="Ico"/>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default FightAreaBottom;