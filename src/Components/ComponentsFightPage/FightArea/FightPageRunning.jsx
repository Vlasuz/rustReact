import React, {useEffect, useState} from 'react';
import SelectFightOnBody from "../../../Hooks/SelectFightOnBody";
import FightTimer from "../FightTimer";
import FightPageOpponentSelect from "../FightPageOpponentSelect";
import FightItemOpponentDisabled from "../FightItem/FightItemOpponentDisabled";
import FightAreaTop from "./FightAreaTop";
import FightAreaBottom from "./FightAreaBottom";
import {useSelector} from "react-redux";

const FightPageRunning = (props) => {

    const [loading, setLoading] = useState(true)
    const userData = useSelector(state => state.reducerUserData.data)
    const response = useSelector(state => state.reducerFightsResponse.response)
    const [timeAttack, setTimeAttack] = useState(false)

    useEffect(() => {

        document.querySelector('.section-fight__lft')?.classList.remove('section-fight__lft_disabled')
        setLoading(false)

    }, [loading])

    useEffect(() => {
        if(!timeAttack) setTimeAttack(response.type === 'game_attack')
    }, [response])

    useEffect(() => {
        SelectFightOnBody()
    }, [])

    return (
        <section className="section-fight">

            <div className={timeAttack ? "section-fight__lft section-fight__lft_disabled" : "section-fight__lft"}>
                <FightAreaTop userInfo={props.roomData.fight_players[0].user.id === userData.id ? props.roomData.fight_players[0] : props.roomData.fight_players[1]}/>
                <div className="section-fight__persone">
                    <div className="persone__green">
                        <img className="head" src="../images/head.png" alt="Photo"/>
                        <img className="body" src="../images/body.png" alt="Photo"/>
                        <img className="legs" src="../images/legs.png" alt="Photo"/>
                    </div>
                    <div className="persone__start">
                        <img src="../images/persone-nnn.png" alt="Persone"/>
                    </div>
                </div>
                <FightAreaBottom states={props.states}/>
            </div>

            <FightTimer states={props.states}/>

            {timeAttack ?
                <FightPageOpponentSelect userInfo={props.roomData.fight_players[0].user.id !== userData.id ? props.roomData.fight_players[0] : props.roomData.fight_players[1]} states={props.states}/> :
                <FightItemOpponentDisabled userInfo={props.roomData.fight_players[0].user.id !== userData.id ? props.roomData.fight_players[0] : props.roomData.fight_players[1]}/>}
        </section>
    );
};

export default FightPageRunning;