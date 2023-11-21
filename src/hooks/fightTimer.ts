import {useContext, useEffect, useState} from "react";
import {AirdropSocketContext} from "../App";
import {WSFight} from "../pages/fightSingle/FightSingle";

export const useFightTimer = () => {

    const fightWsMessages: any = useContext(WSFight)

    // console.log(fightWsMessages)

    const [isTimerStart, setIsTimerStart] = useState(false)
    const [time, setTime] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [milliseconds, setMilliseconds] = useState(0)

    useEffect(() => {
        setSeconds(fightWsMessages[1]?.timer > 0 ? fightWsMessages[1]?.timer - 1 : 0)
        setTime(fightWsMessages[1]?.timer > 0 ? fightWsMessages[1]?.timer - 1 : 0)

        if(fightWsMessages[1]?.timer === 0) {
            setMilliseconds(0)
        } else {
            setMilliseconds(99)
            setIsTimerStart(true)
        }
    }, [fightWsMessages])

    useEffect(() => {
        const intervalMillisec = setInterval(() => {
            setMilliseconds((num) => num - 1);
            if(seconds <= 0 ) {
                setTimeout(() => {
                    clearInterval(intervalMillisec);
                    setMilliseconds(0)
                    setIsTimerStart(false)
                }, 1000)
            }
        }, 10);

        const timeoutId = setTimeout(() => {
            clearInterval(intervalMillisec);
        }, time * 1000);


        return () => {
            clearInterval(intervalMillisec);
            clearTimeout(timeoutId);
        };
    }, [seconds, time, fightWsMessages]);

    useEffect(() => {
        const intervaSecond = setInterval(() => {
            setSeconds((num) => num - 1);
            setMilliseconds(isTimerStart ? 99 : 0)
        }, 1000);

        const timeoutId = setTimeout(() => {
            clearInterval(intervaSecond);
            setMilliseconds(isTimerStart ? 99 : 0);
        }, time * 1000);

        return () => {
            clearInterval(intervaSecond);
            clearTimeout(timeoutId);
        };
    }, [time, fightWsMessages]);

    return {seconds, milliseconds}

}