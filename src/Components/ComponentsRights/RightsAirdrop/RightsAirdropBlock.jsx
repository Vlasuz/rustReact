import {useEffect} from "react";
import Timer from "../../TimerForAirdrop/Timer";
import TimerMilliseconds from "../../TimerForAirdrop/TimerMilliseconds";


const RightsAirdropBlock = (props) => {

    return (
        <div className="airdrop__block">
            {props.states.showTimerToFly ?
                <div className="airdrop__fly">
                    <div className="fly__top">
                        <p>До вылета:</p>
                        {/*<Timer states={props.states}/>*/}
                        <div className="timer">
                            <div className="min">
                                <span>
                                    {props.states.seconds < 10 ? "0" + props.states.seconds : props.states.seconds}
                                </span>
                            </div>
                            {/*<div className="sec">*/}
                            {/*    <small className="dot">.</small>*/}
                            {/*    <span>*/}
                            {/*        {props.states.milliseconds < 10 ? "0" + props.states.milliseconds : props.states.milliseconds}*/}
                            {/*    </span>*/}
                            {/*</div>*/}
                            {TimerMilliseconds()}
                        </div>
                    </div>
                    <div className="fly__bottom">
                        <div className="fly__timer">
                            <img src="images/line-for-right.svg" alt="Ico"/>
                            <div className="line">
                                <div className="line_done">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="airdrop__timer-to-ready">
                    <div className="fly__top">
                        {/*<Timer states={props.states}/>*/}
                        <div className="timer">
                            <div className="min">
                                <span>
                                    {props.states.seconds < 10 ? "0" + props.states.seconds : props.states.seconds}
                                </span>
                            </div>
                            {/*<div className="sec"><small className="dot">.</small>*/}
                            {/*    <span>*/}
                            {/*        /!*{props.states.milliseconds < 10 ? "0" + props.states.milliseconds : props.states.milliseconds}*!/*/}

                            {/*    </span>*/}
                            {/*</div>*/}
                            {TimerMilliseconds()}
                        </div>
                    </div>
                    <div className="fly__bottom">
                        <div className="fly__timer">
                            <img src="images/line-for-right.svg" alt="Ico"/>
                            <div className="line">
                                <div className="line_done">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <div className="airdrop__bank">
                <p>В банке</p>
                <div className="coins">
                    <img src="images/header__coins.svg" alt="Ico"/>
                    <span>
                        {props.states.coins}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default RightsAirdropBlock;