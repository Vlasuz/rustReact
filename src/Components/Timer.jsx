import TimerSeconds from "./TimerSeconds";
import TimerMilliseconds from "./TimerMilliseconds";
import States from "../States";

const Timer = (props) => {

    const states = States()

    return (
        <div className="timer">
            <TimerSeconds
                setNumSwitch={states.setNumSwitch}
                setListAirdropsMembers={states.setListAirdropsMembers}
                setShowTimerToFly={props.states.setShowTimerToFly}
                seconds={states.seconds}
                setSeconds={states.setSeconds}
                states={states}
                setNumSwitch={props.states.setNumSwitch}
            />
            <TimerMilliseconds/>
        </div>
    );
};

export default Timer;