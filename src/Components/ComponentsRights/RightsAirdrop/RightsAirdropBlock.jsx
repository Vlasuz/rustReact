import TimerMilliseconds from "../../TimerForAirdrop/TimerMilliseconds";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";


const RightsAirdropBlock = (props) => {

    const seconds = useSelector(state => state.reducerAirdropTimerSecond.seconds)
    const members = useSelector(state => state.reducerAirdropMembers.list)
    const [summary, setSummary] = useState(0)

    useEffect(() => {

        members.forEach(item => setSummary(prev => prev + item.coins))

    }, [members])

    return (
        <div className="airdrop__block">

            <div className={props.states.showTimerToFly ? "airdrop__fly" : "airdrop__timer-to-ready"}>
                {/*<div className="airdrop__timer-to-ready">*/}
                <div className="fly__top">
                    {
                        props.states.showTimerToFly ? <p>До вылета:</p> : ""
                    }
                    <div className="timer">
                        <div className="min">
                                <span>
                                    {seconds < 10 ? "0" + seconds : seconds}
                                </span>
                        </div>
                        <TimerMilliseconds/>
                    </div>
                </div>
                <div className="fly__bottom">
                    <div className="fly__timer">
                        <img src="../images/line-for-right.svg" alt="Ico"/>
                        <div className="line">
                            <div className="line_done">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="airdrop__bank">
                <p>В банке</p>
                <div className="coins">
                    <img src="../images/header__coins.svg" alt="Ico"/>
                    <span>
                        {summary}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default RightsAirdropBlock;