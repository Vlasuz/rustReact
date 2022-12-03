import React, {useEffect, useState} from 'react';
import FightItemOpponentDisabled from "../Components/ComponentsFightPage/FightItem/FightItemOpponentDisabled";
import FightPageOpponentSelect from "../Components/ComponentsFightPage/FightPageOpponentSelect";
import FightTimer from "../Components/ComponentsFightPage/FightTimer";
import FightAreaLeft from "../Components/ComponentsFightPage/FightArea/FightAreaLeft";
import SelectFightOnBody from "../Hooks/SelectFightOnBody";

const FightPageRunning = (props) => {

    let [hit, setHit] = useState(false);

    setTimeout(function () {
        setHit(true)
        document.querySelector('.section-fight__lft').classList.add('section-fight__lft_disabled')
    }, (props.states.timeSecondForFights + 1) + "000")


    useEffect(() => {
        SelectFightOnBody()
    })


    return (
        <section className="section-fight">
            <FightAreaLeft states={props.states} />

            <FightTimer states={props.states} />

            {hit ? <FightPageOpponentSelect states={props.states}/> : <FightItemOpponentDisabled/>}

        </section>
    );
};

export default FightPageRunning;