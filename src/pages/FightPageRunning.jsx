import React, {useState} from 'react';
import Timer from "../Components/Timer";
import {Link, Navigate} from "react-router-dom";
import FightItemOpponentDisabled from "../Components/ComponentsFightPage/FightItem/FightItemOpponentDisabled";
import FightPageOpponentSelect from "../Components/ComponentsFightPage/FightPageOpponentSelect";
import FightTimer from "../Components/ComponentsFightPage/FightTimer";
import FightAreaLeft from "../Components/ComponentsFightPage/FightArea/FightAreaLeft";

const FightPageRunning = ({arrayForHit, setArrayForHit}) => {

    let [hit, setHit] = useState(false);

    setTimeout(function () {
        setHit(true)
    }, 5000)



    return (
        <section className="section-fight">
            <FightAreaLeft />

            <FightTimer />

            {hit ? <FightPageOpponentSelect setArrayForHit={setArrayForHit} arrayForHit={arrayForHit}/> : <FightItemOpponentDisabled/>}

        </section>
    );
};

export default FightPageRunning;