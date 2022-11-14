import React, {useEffect, useState} from 'react';

const Timer = (props) => {

    const [seconds, setSeconds] = useState(60)
    const [milliseconds, setMilliseconds] = useState(0)
    const [loading, isLoading] = useState(true)
    const [timeToChooseWinner, setTimeToChooseWinner] = useState(false)


    const deadline = `November, 9, 3000, 12:45:00`;

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now()

        setSeconds(Math.floor((time / 1000) % 60));
        setMilliseconds(Math.floor((time / 10) % 100));

    }

    const isChooseVinner = () => {
        setTimeToChooseWinner(true)
        let listOfPlayersX = [];
        let listOfPlayersY = [];
        let listOfPlayers = [];

        setTimeout(() => {
            document.querySelectorAll('.airdrop-drop-sent').forEach(drop => drop.remove())
            document.querySelectorAll('.sleepers__item').forEach(sleeper => sleeper.remove())
        }, 10000)

        document.querySelectorAll('.map__points li').forEach((item, itemNum) => {
            listOfPlayersX.push(+item.style.left.replace('px', ''))
            listOfPlayersY.push(+item.style.top.replace('px', ''))

            let x = +item.style.left.replace('px', '') - props.coodDrop.x;
            let y = +item.style.top.replace('px', '') - props.coodDrop.y;

            listOfPlayers.push({
                id: itemNum,
                cood: {
                    x: x,
                    y: y
                }
            })
        })


        let closestLeft;
        let closestRight;
        let data = listOfPlayersY;
        let number = props.coodDrop;
        let current;

        for (let i = 0; i < data.length; i++) {
            current = data[i];
            if (current < number.y && (typeof closestLeft === 'undefined' || closestLeft < current)) {
                closestLeft = current;
            } else if (current > number.y && (typeof closestRight === 'undefined' || closestRight > current)) {
                closestRight = current;
            }
        }

        let winner = (props.trajectoryPlane - closestLeft < closestRight - props.trajectoryPlane) ? closestLeft : closestRight

        document.querySelectorAll('.map__points li').forEach((item, itemNum) => {
            if (winner === +item.style.top.replace('px', '')) {
                item.classList.add('sleepers__item_winner')
            }
        })

    }

    if (props.timeout === false && seconds <= 60 && seconds > 45) {
        props.isTimeout(true)
    } else if (props.timeout && seconds <= 50 && seconds >= 50 && timeToChooseWinner === false) {
        isChooseVinner()
    } else if (props.timeout && seconds < 45) {
        console.log(props)
        props.isTimeout(false)
        if (document.querySelector('.dropIsDown')) {
            document.querySelector('.section-map').classList.remove('dropIsDown')
        }
        if (timeToChooseWinner) {
            setTimeToChooseWinner(false)
        }
    }


    if (loading === false) {
        document.querySelector('.aside__plane .timer-line__line_done').style.width = seconds * 100 / 60 + "%"
        if (document.querySelector('.section-right__airdrop .fly__timer .line_done')) {
            document.querySelector('.section-right__airdrop .fly__timer .line_done').style.width = seconds * 100 / 60 + "%"
        }
    }

    useEffect(() => {
        isLoading(false)

        const interval = setInterval(() => getTime(deadline), 1);
        return () => clearInterval(interval);
    }, [])


    return (
        <div className="timer">
            <div className="min">
                <span>
                    {seconds}
                </span>
            </div>
            <div className="sec">
                <small className="dot">.</small>
                <span>
                    {milliseconds}
                </span>
            </div>
        </div>
    );
};

export default Timer;