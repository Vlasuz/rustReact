import React from 'react';
import {useEffect} from "react";
import TimeBeforeFly from "./TimeBeforeFly";
import TimeToFly from "./TimeToFly";
import {useDispatch, useSelector} from "react-redux";
import {airdropTimerSeconds} from "../../Redux/actions";

const TimerSeconds = (props) => {

    const seconds = useSelector(state => state.reducerAirdropTimerSecond.seconds)
    const dispatch = useDispatch()
    const trajectory = useSelector(state => state.reducerAirdropTrajectoryPlane.data)
    const plane_length = useSelector(state => state.reducerAirdropLengthPlane.length)
    const step = useSelector(state => state.reducerAirdropStep.step)
    const drop_is_down = useSelector(state => state.reducerAirdropDropIsDown.isDropDown)

    useEffect(() => {

        const time = setInterval(() => {

            if (seconds <= 0 && step === 1) {
                dispatch(airdropTimerSeconds(60))
            } else if (seconds <= 0 && step === 2) {
                dispatch(airdropTimerSeconds(10))
            } else {
                dispatch(airdropTimerSeconds())
            }

        }, 1000)

        switch (step) {
            case 1:
                TimeBeforeFly(props, seconds, trajectory, plane_length, step, drop_is_down, dispatch)
                break;
            case 2:
                TimeToFly(props, seconds, trajectory, step, drop_is_down, dispatch)
                break;
        }

        return () => clearInterval(time);
    }, [seconds]);


    return (
        <div className="min">
            <span>
                {seconds < 10 ? "0" + seconds : seconds}
            </span>
        </div>
    );
};

export default TimerSeconds;