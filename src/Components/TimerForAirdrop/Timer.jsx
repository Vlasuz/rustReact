import TimerSeconds from "./TimerSeconds";
import TimerMilliseconds from "./TimerMilliseconds";

const Timer = (props) => {

    return (
        <div className="timer">
            <TimerSeconds states={props.states}/>
            <TimerMilliseconds states={props.states}/>
        </div>
    );
};

export default Timer;