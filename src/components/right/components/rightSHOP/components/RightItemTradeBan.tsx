import React, {useEffect, useState} from 'react'
import lockIcon from "../../../../../assets/images/lock-map.svg";

interface IRightItemTradeBanProps {
    data: any
}

export const RightItemTradeBan: React.FC<IRightItemTradeBanProps> = ({data}) => {

    const [finishTime] = useState(data?.trade_ban ? data?.trade_ban.getTime() : "");
    const [[diffDays, diffH, diffM, diffS], setDiff] = useState([0, 0, 0, 0]);
    const [tick, setTick] = useState(false);

    useEffect(() => {
        let d1 = new Date();
        d1.toUTCString();
        Math.floor(d1.getTime() / 1000)
        let d2: any = new Date(d1.getUTCFullYear(), d1.getUTCMonth(), d1.getUTCDate(), d1.getUTCHours(), d1.getUTCMinutes(), d1.getUTCSeconds());
        d2.toUTCString();
        Math.floor(d2.getTime() / 1000)

        const diff = (finishTime - d2) / 1000;
        if (diff < 0) return // время вышло
        setDiff([
            Math.floor(diff / 86400), // дни
            Math.floor((diff / 3600) % 24),
            Math.floor((diff / 60) % 60),
            Math.floor(diff % 60)
        ])
    }, [tick, finishTime])

    useEffect(() => {
        const timerID = setInterval(() => setTick(!tick), 1000);
        return () => clearInterval(timerID);
    }, [tick])

    // if(!data.trade_ban || (diffDays <= 0 && diffH <= 0 && diffM <= 0 && diffS <= 0)) {
    //     return (
    //         <div className={"item__is-lock"} />
    //     )
    // }


    var weekday = new Array(7);
    weekday[0] = "Mon";
    weekday[1] = "Tues";
    weekday[2] = "Wed";
    weekday[3] = "Thurs";
    weekday[4] = "Fri";
    weekday[5] = "Sat";
    weekday[6] = "Sun";
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const setTrueTime = (data: any) => {
        const tradeBan = data.trade_ban;

        const day = tradeBan?.substr(0, 2);
        const month = monthNames[+tradeBan?.substr(3, 2) - 1];
        const year = tradeBan?.substr(6, 4);
        const time = tradeBan?.slice(tradeBan?.indexOf(' ') + 1);

        const getDayNum = new Date(`${month} ${day}, ${year} ${time}`).getDay()
        const weekdayString = weekday[+getDayNum - 1];


        return new Date(`${weekdayString}, ${day} ${month} ${year} ${time}`)
    }

    // if(data.trade_ban) return <></>;

    return (
        <>
            <div className={"item__is-lock" + (data.trade_ban !== null ? " item__is-lock_active" : "")}>
                <img src={lockIcon} width={'11'} alt=""/>
                <p>
                    {`${diffDays}:${diffH.toString().padStart(2, '0')}:${diffM.toString().padStart(2, '0')}:${diffS.toString().padStart(2, '0')}`}
                </p>
            </div>
        </>
    )
}
