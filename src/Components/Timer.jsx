import React, {useEffect, useState} from 'react';

const Timer = ({setSeconds, setMilliseconds}) => {

    // const deadline = "December, 31, 2022"
    //
    // const getTime = () => {
    //     const time = Date.parse(deadline) - Date.now()
    //
    //     setSeconds(Math.floor((time / 1000) % 60));
    //     setMilliseconds(Math.floor((time / 10) % 100));
    // }

    // useEffect(() => {
    //     const interval = setInterval(() => getTime(deadline), 1)
    //
    //     return () => clearInterval(interval)
    // }, [])




    return (
        <div className="timer">
            {/*<div className="min">*/}
            {/*    <span></span>*/}
            {/*</div>*/}
            {/*<div className="sec">*/}
            {/*    <small className="dot">.</small>*/}
            {/*    <span>10</span>*/}
            {/*</div>*/}
        </div>
    );
};

export default Timer;