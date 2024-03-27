import React, {useEffect, useState} from 'react';
import lockIcon from "../../../../../assets/images/lock-map.svg";

interface IRightItemTradeBanProps {
    data: any;
}

export const RightItemTradeBan: React.FC<IRightItemTradeBanProps> = ({data}) => {

    const calculateTimeLeft = () => {
        if (!data?.trade_ban) return;

        const difference = new Date(+new Date(data?.trade_ban) - +new Date());

        return {
            days: difference.getDay(),
            hours: difference.getHours(),
            minutes: difference.getMinutes(),
            seconds: difference.getSeconds()
        };
    };

    const [timeLeft, setTimeLeft] = useState<any>(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    if (!data?.trade_ban) return <></>;

    return (
        <div className={`item__is-lock${data?.trade_ban ? " item__is-lock_active" : ""}`}>
            <img src={lockIcon} width={11} alt="" />
            <p>
                <span>{timeLeft.days < 10 ? "0" + timeLeft.days : timeLeft.days}</span>
                :
                <span>{timeLeft.hours < 10 ? "0" + timeLeft.hours : timeLeft.hours}</span>
                :
                <span>{timeLeft.minutes < 10 ? "0" + timeLeft.minutes : timeLeft.minutes}</span>
                :
                <span>{timeLeft.seconds < 10 ? "0" + timeLeft.seconds : timeLeft.seconds}</span>
            </p>
        </div>
    );
};
