import React, {useEffect, useState} from 'react';

const Technical = ({ technicalDate }) => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const deadline = `${monthNames[Number(technicalDate.slice(3, 5) - 1)]}, ${technicalDate.slice(0, 2)}, ${technicalDate.slice(6, 10)}`;

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();

        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <main className="tech-work">
            <div className="ico">
                <img src="../images/tech-work-ico.svg" alt="Ico" />
            </div>
            <h1>Технические работы</h1>
            <p>На данный момент мы улучшаем сайт и стараемся сделать его еще лучше!
                <br/>Сайт заработает через:</p>
            <time>
                <span className="day">
                    <span>{days < 10 ? "0" + days : days}</span>
                </span>
                <span className="hour">:
                    <span>{hours < 10 ? "0" + hours : hours}</span>
                </span>
                <span className="min">:
                    <span>{minutes < 10 ? "0" + minutes : minutes}</span>
                </span>
                <span className="sec">:
                    <span>{seconds < 10 ? "0" + seconds : seconds}</span>
                </span>
            </time>
        </main>
    );
};

export default Technical;