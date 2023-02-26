import React, {useState} from 'react';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    airdropDropIsDropDown,
    airdropDropSetCoods, airdropMembers,
    airdropStep, airdropStepRights,
    airdropTimerSeconds,
    airdropTrajectoryPlane
} from "../../Redux/actions";
import {userBalanceAddCoins} from "../../Redux/Reducers/reducerUserBalance";
import {handleSubmitAirdrop} from "../../Redux/Reducers/reducerSubmitAirdrop";
import {clearSleeper} from "../../Redux/Reducers/reducerAirdropMySleepers";
import {setSocketAirdrop, setSocketAirdropResponse} from "../../Redux/Reducers/reducerAirdropSocket";
import {useWebworker} from "../../Hooks/use-webworker";
import GlobalLink from "../../Hooks/GlobalLink";

let socket = new WebSocket("wss://" + GlobalLink() + '/ws/api/airdrop/')
const TimerSeconds = () => {

    useWebworker()

    const seconds = useSelector(state => state.reducerAirdropTimerSecond.seconds)
    const dispatch = useDispatch()
    const submitToGame = useSelector(state => state.reducerSubmitAirdrop.data)
    const session = useSelector(state => state.reducerSession.session)
    const [response, setResponse] = useState({})

    useEffect(() => {

        dispatch(setSocketAirdrop(socket))

        socket.onopen = () => {
            // console.log('open')
        }
        socket.onerror = () => {
            // console.log('error')
        }
        socket.onclose = () => {
            // console.log('close')
        }
    }, [])

    socket.onmessage = (e) => {
        const data = JSON.parse(JSON.parse(e.data))
        steps[data.airdrop.game_state].func(data, session)

        setResponse(data)

        dispatch(setSocketAirdropResponse(data))
        dispatch(airdropStep(data.airdrop.game_state))
        dispatch(airdropTimerSeconds(data.timer))
        dispatch(airdropTrajectoryPlane(data.airdrop.y_pos * 1500));
        dispatch(airdropDropSetCoods(data.airdrop.x_pos * 1500));
        dispatch(airdropMembers(data.airdrop.players))

    }

    useEffect(() => {
        if (response?.airdrop?.players.some(item => item.user.id === session?.id)) {
            dispatch(airdropStepRights(3))
        }
    }, [session, response])

    const ChooseSleepers = () => {

    }

    const FlyPlane = (data) => {

        document.querySelectorAll('.sleepers__item')?.forEach(item => item?.remove())

        if (!submitToGame) {
            dispatch(clearSleeper())
        }

        let timerForDrop = Math.floor(((data.airdrop.x_pos * 1500 / 25) * 1000) + 1500) - ((60 - data.timer) * 1000)


        setTimeout(() => {
            dispatch(airdropDropIsDropDown(true))
        }, timerForDrop)

    }


    const winnerLogic = (data, isSkip) => {
        let result;
        let array = [];

        data?.airdrop?.players.map(player => {
            player.bags.map(bag => {
                let bag_x = bag.x_pos * 1500
                let bag_y = bag.y_pos * 1500
                let radius;

                const drop_x = data.airdrop.x_pos * 1500
                const drop_y = data.airdrop.y_pos * 1500

                bag_x -= drop_x
                bag_y -= drop_y
                result = Math.sqrt(Math.pow(bag_x, 2) + Math.pow(bag_y, 2))

                console.log("result", result)
                console.log("bag_y", bag_y)
                radius = Math.asin((Math.abs(bag_y) + 10) / result) * (180 / Math.PI)


                if (bag.x_pos * 1500 > drop_x && bag.y_pos * 1500 > drop_y) {
                    console.log(4, radius)
                    radius = 360 - radius
                } else if (bag.x_pos * 1500 < drop_x && bag.y_pos * 1500 > drop_y) {
                    console.log(3, radius)
                    radius = 180 + radius
                } else if (bag.x_pos * 1500 < drop_x && bag.y_pos * 1500 < drop_y) {
                    console.log(2, radius)
                    radius = 180 - radius
                }


                array.push({
                    result,
                    radius,
                    bag
                })

            })
        })

        const pointWinner = !!array.length && array.reduce((prev, cur) => (cur.result < prev.result ? cur : prev));
        !isSkip && (!!array.length && document.querySelector(`.map__points li[data-x="${pointWinner.bag.x_pos}"][data-y="${pointWinner.bag.y_pos}"]`)?.classList.add('sleepers__item_winner'))

        console.log(pointWinner)

        document.querySelector('.line-to-winner')?.classList.add('line-to-winner_active')
        if (document.querySelector('.line-to-winner')) document.querySelector('.line-to-winner').style.transform = `rotate(-${pointWinner.radius}deg)`
        if (document.querySelector('.line-to-winner')) document.querySelector('.line-to-winner').style.width = `${pointWinner.result}px`
    }

    const SkipGame = (data, session) => {

        winnerLogic(data, true)


        setTimeout(() => {
            if (document.querySelector('.line-to-winner')) document.querySelector('.line-to-winner').style.width = `0px`
            dispatch(airdropDropIsDropDown(false))
            dispatch(airdropDropSetCoods(0))
            dispatch(airdropStepRights(1))
            dispatch(clearSleeper())
            dispatch(handleSubmitAirdrop(false))
            if (data.airdrop?.winner && (session.id === data.airdrop?.winner?.user?.id)) {
                dispatch(userBalanceAddCoins(data.airdrop.bank))
            }
        }, 9000)

    }

    const ChooseWinner = (data, session) => {

        winnerLogic(data, false)

        setTimeout(() => {
            if (document.querySelector('.line-to-winner')) document.querySelector('.line-to-winner').style.width = `0px`
            dispatch(airdropDropIsDropDown(false))
            dispatch(airdropDropSetCoods(0))
            dispatch(airdropStepRights(1))
            dispatch(clearSleeper())
            dispatch(handleSubmitAirdrop(false))
            if (data.airdrop?.winner && (session?.id === data.airdrop?.winner?.user?.id)) {
                dispatch(userBalanceAddCoins(data.airdrop.bank))
            }
        }, 9000)
    }

    const [steps, setSteps] = useState(
        {
            "waiting": {
                func: ChooseSleepers
            },
            "process": {
                func: FlyPlane
            },
            "skipped": {
                func: SkipGame
            },
            "ended": {
                func: ChooseWinner
            },
        }
    )

    useEffect(() => {

        const time = setInterval(() => dispatch(airdropTimerSeconds()), 1000)

        return () => clearInterval(time);
    }, [seconds]);

    return (
        <div className="min">
            <span>
                {seconds < 10 ? "0" + seconds : seconds}
            </span>
        </div>
    );
};

export default TimerSeconds;