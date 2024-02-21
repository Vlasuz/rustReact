import {useContext, useEffect, useState} from "react";
import {AirdropSocketContext} from "../App";

export const useAirdropTimer = (defaultTime: number) => {

    const airdropWsMessages: any = useContext(AirdropSocketContext)

    const [isTimerStart, setIsTimerStart] = useState(false)
    const [time, setTime] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [milliseconds, setMilliseconds] = useState(0)
    const [isPageLoad, setIsPageLoad] = useState(false)


    useEffect(() => {
        // setSeconds(defaultTime && defaultTime > 0 ? defaultTime - 1 : 0)
        // setTime(defaultTime && defaultTime > 0 ? defaultTime - 1 : 0)
        setSeconds(airdropWsMessages?.timer ? (airdropWsMessages?.timer > 0 ? airdropWsMessages?.timer - 1 : 0) : defaultTime ?? 0)
        setTime(airdropWsMessages?.timer ? (airdropWsMessages?.timer > 0 ? airdropWsMessages?.timer - 1 : 0) : defaultTime ?? 0)
        // @ts-ignore
        if(document.querySelector('.section-right__airdrop .fly__timer .line_done')) document.querySelector('.section-right__airdrop .fly__timer .line_done').style.transition = "all .1s linear";

        if(airdropWsMessages?.timer === 0) {
            setMilliseconds(0)
        } else {
            setMilliseconds(99)
            setIsTimerStart(true)
            setTimeout(() => {
                // @ts-ignore
                if(document.querySelector('.section-right__airdrop .fly__timer .line_done')) document.querySelector('.section-right__airdrop .fly__timer .line_done').style.transition = "all 1s linear";
            }, 10)
        }
    }, [airdropWsMessages])

    useEffect(() => {
        if(airdropWsMessages.timer === 0) return;

        setMilliseconds(99);
        const intervalMillisec = setInterval(() => {
            setMilliseconds((num) => num - 1);
            if(seconds <= 0 ) {
                setTimeout(() => {
                    clearInterval(intervalMillisec);
                    setMilliseconds(0)
                    setIsTimerStart(false)
                }, 1000)
            } else if(milliseconds < 0) {
                setMilliseconds(milliseconds < 0 ? 99 :milliseconds);
            }
        }, 10);


        const timeoutId = setTimeout(() => {
            clearInterval(intervalMillisec);
        }, time * 1000);


        return () => {
            clearInterval(intervalMillisec);
            clearTimeout(timeoutId);
        };
    }, [seconds, time, airdropWsMessages]);

    useEffect(() => {
        if(airdropWsMessages.timer === 0) return;

        setMilliseconds(isTimerStart ? 99 : 0)

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
    }, [time, airdropWsMessages]);

    return {seconds, milliseconds}
}