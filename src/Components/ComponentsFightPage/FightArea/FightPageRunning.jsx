import React, {useEffect, useState} from 'react';
import SelectFightOnBody from "../../../Hooks/SelectFightOnBody";
import FightTimer from "../FightTimer";
import FightPageOpponentSelect from "../FightPageOpponentSelect";
import FightItemOpponentDisabled from "../FightItem/FightItemOpponentDisabled";
import FightAreaTop from "./FightAreaTop";
import FightAreaBottom from "./FightAreaBottom";
import {useSelector} from "react-redux";

const FightPageRunning = (props) => {
    
    const userData = useSelector(state => state.reducerUserData.data)
    const response = useSelector(state => state.reducerFightsResponse.response)
    const [timeAttack, setTimeAttack] = useState(false)
    const [time, setTime] = useState(response.timer - 1)

    useEffect(() => {
        if(!timeAttack) {
            setTimeAttack(response?.fight?.game_state === 'attack' || response?.type === 'attack')
            document.querySelector('.section-fight__lft')?.classList.remove('section-fight__lft_disabled')
        }

        if(response?.fight?.game_state === 'attack') {
            document.querySelector('.section-fight__rht .section-fight__bottom')?.classList.add('section-fight__bottom_hide')
        } else {
            document.querySelector('.section-fight__rht .section-fight__bottom')?.classList.add('section-fight__bottom_active')
            document.querySelector('.section-fight__rht .section-fight__bottom')?.classList.remove('section-fight__bottom_hide')
        }
    }, [response])

    useEffect(() => {
        SelectFightOnBody()
    }, [])

    return (
        <section className={"section-fight"}>

            <div className={timeAttack ? "section-fight__lft section-fight__lft_disabled" : "section-fight__lft"}>
                <FightAreaTop userInfo={props?.roomData?.first_player?.user?.id === userData?.id ? props?.roomData?.first_player : props?.roomData?.second_player}/>
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
                {
                    <FightAreaBottom/>
                }
            </div>

            <FightTimer time={time} setTime={setTime}/>

            {timeAttack && time <= 10 ?
                <FightPageOpponentSelect userInfo={props?.roomData?.first_player.user.id !== userData?.id ? props?.roomData?.first_player : props?.roomData?.second_player} states={props.states}/> :
                <FightItemOpponentDisabled userInfo={props?.roomData?.first_player.user.id !== userData?.id ? props?.roomData?.first_player : props?.roomData?.second_player}/>}
        </section>
    );
};

export default FightPageRunning;