import React, {useState} from 'react';
import {useEffect} from "react";
import SelectWinner from "./SelectWinner";
import TimeBeforeFly from "./TimeBeforeFly";
import RandomDrop from "./RandomDrop";
import TimeToFly from "./TimeToFly";

const TimerSeconds = (props) => {

    useEffect(() => {

        const tim = setInterval(() => {
            props.states.setSeconds(old => old - 1)
        }, 1000)

        if(props.states.airdropStep === 1){

            TimeBeforeFly(props)

        } else if (props.states.airdropStep === 2) {

            TimeToFly(props)

        }

        return () => clearInterval(tim);
    }, [props.states.seconds]);


    return (
        <div className="min">
            <span>
                {props.states.seconds < 10 ? "0" + props.states.seconds : props.states.seconds}
            </span>
        </div>
    );
};

export default TimerSeconds;