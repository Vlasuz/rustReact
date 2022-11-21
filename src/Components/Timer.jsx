import TimerSeconds from "./TimerSeconds";
import TimerMilliseconds from "./TimerMilliseconds";
import States from "../States";

const Timer = (props) => {

    const states = States()

    return (
        <div className="timer">
            <TimerSeconds
                setNumSwitch={props.setNumSwitch}
                setListAirdropsMembers={props.setListAirdropsMembers}
                setShowTimerToFly={props.setShowTimerToFly}
                states={states}
            />
            <TimerMilliseconds/>
        </div>
    );
};

export default Timer;