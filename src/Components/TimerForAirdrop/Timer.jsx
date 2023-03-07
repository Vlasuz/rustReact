import TimerSeconds from "./TimerSeconds";
import TimerMilliseconds from "./TimerMilliseconds";
import {useSelector} from "react-redux";

const Timer = () => {
    return (
        <div className="timer">
            <TimerSeconds/>
            <TimerMilliseconds/>
        </div>
    );
};

export default Timer;