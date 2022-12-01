import React, {useEffect, useState} from 'react';
import Timer from "../Components/Timer";
import {Link, Navigate} from "react-router-dom";
import FightItemOpponentDisabled from "../Components/ComponentsFightPage/FightItem/FightItemOpponentDisabled";
import FightPageOpponentSelect from "../Components/ComponentsFightPage/FightPageOpponentSelect";
import FightTimer from "../Components/ComponentsFightPage/FightTimer";
import FightAreaLeft from "../Components/ComponentsFightPage/FightArea/FightAreaLeft";
import SelectFightOnBody from "../Hooks/SelectFightOnBody";

const FightPageRunning = (props) => {

    let [hit, setHit] = useState(false);

    setTimeout(function () {
        setHit(true)
    }, 11000)


    useEffect(() => {
        SelectFightOnBody()
    })


    return (
        <section className="section-fight">
            <FightAreaLeft />

            <FightTimer />

            {hit ? <FightPageOpponentSelect states={props.states}/> : <FightItemOpponentDisabled/>}

        </section>
    );
};

export default FightPageRunning;