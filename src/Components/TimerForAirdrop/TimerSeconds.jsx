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
import {logger} from "../../middleware/logger";
import {useLocation} from "react-router-dom";

let socket = new WebSocket("wss://" + GlobalLink() + '/ws/api/airdrop/')
const TimerSeconds = () => {

    useWebworker()

    const location = useLocation()
    const seconds = useSelector(state => state.reducerAirdropTimerSecond.seconds)
    const dispatch = useDispatch()
    const submitToGame = useSelector(state => state.reducerSubmitAirdrop.data)
    const session = useSelector(state => state.reducerSession.session)
    const [response, setResponse] = useState({})

    useEffect(() => {

        dispatch(setSocketAirdrop(socket))

        socket.onopen = () => {
            console.log('AIRDROP open')
        }
        socket.onerror = () => {
            console.log('AIRDROP error')
        }
        socket.onclose = () => {
            console.log('AIRDROP close')
        }
    }, [])

    socket.onmessage = (e) => {
        const data = JSON.parse(JSON.parse(e.data))
        steps[data.airdrop.game_state]?.func(data, session)

        setResponse(data)

        console.log(data)
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
        document.querySelector(".map__container")?.classList.remove('map__container_dark')
    }

    const FlyPlane = (data) => {

        document.querySelectorAll('.sleepers__item')?.forEach(item => item?.remove())

        if (!submitToGame) {
            dispatch(clearSleeper())
        }

        let timerForDrop = Math.floor(((data.airdrop.x_pos * 1500 / 50) * 1000) + 1500) - ((30 - data.timer) * 1000)


        setTimeout(() => {
            dispatch(airdropDropIsDropDown(true))
        }, timerForDrop)

    }


    // const winnerLogic = (data, isSkip) => {
    //     let result;
    //     let array = [];
    //
    //     data?.airdrop?.players.map(player => {
    //         player.bags.map(bag => {
    //             let bag_x = +(+bag.x_pos.toFixed(2) * 1500).toFixed(2)
    //             let bag_y = +(+bag.y_pos.toFixed(2) * 1500).toFixed(2)
    //             let radius;
    //
    //             const drop_x = +(+data.airdrop.x_pos.toFixed(2) * 1500).toFixed(2)
    //             const drop_y = +(+data.airdrop.y_pos.toFixed(2) * 1500).toFixed(2)
    //
    //
    //             bag_x -= +drop_x.toFixed(2)
    //             bag_y -= +drop_y.toFixed(2)
    //             result = +Math.sqrt(Math.pow(bag_x, 2) + Math.pow(bag_y, 2)).toFixed(2)
    //
    //             console.log(bag_x, bag_y, drop_x, drop_y)
    //             console.log("result гипотенуза тип", result)
    //             console.log("Разбор asin поэтапно: 1 PI >>>", 180 / Math.PI)
    //             console.log("Разбор asin поэтапно: 2 >>>", Math.abs(bag_y) / result)
    //             console.log("Разбор asin поэтапно: 3 >>>", Math.asin(Math.abs(bag_y) / result))
    //             console.log("Разбор asin поэтапно: 4 >>>", Math.asin(Math.abs(bag_y) / result) * (180 / Math.PI))
    //
    //             radius = Math.asin(Math.abs(bag_y) / result) * (180 / Math.PI).toFixed(2)
    //             console.log("radius угол поворота полоски", radius)
    //
    //             bag_x = +(+bag.x_pos.toFixed(2) * 1500).toFixed(2)
    //             bag_y = +(+bag.y_pos.toFixed(2) * 1500).toFixed(2)
    //
    //             if (bag_x > drop_x && bag_y > drop_y) {
    //                 console.log(4, radius)
    //                 radius = 360 - radius
    //             } else if (bag_x < drop_x && bag_y > drop_y) {
    //                 console.log(3, radius)
    //                 radius = 180 + radius
    //             } else if (bag_x < drop_x && bag_y < drop_y) {
    //                 console.log(2, radius)
    //                 radius = 180 - radius
    //             }
    //
    //
    //             array.push({
    //                 result,
    //                 radius,
    //                 bag
    //             })
    //
    //         })
    //     })
    //
    //     const pointWinner = !!array.length && array.reduce((prev, cur) => (cur.result < prev.result ? cur : prev));
    //     !isSkip && (!!array.length && document.querySelector(`.map__points li[data-x="${pointWinner.bag.x_pos}"][data-y="${pointWinner.bag.y_pos}"]`)?.classList.add('sleepers__item_winner'))
    //
    //     document.querySelector('.line-to-winner')?.classList.add('line-to-winner_active')
    //     if (document.querySelector('.line-to-winner')) document.querySelector('.line-to-winner').style.transform = `rotate(-${pointWinner.radius}deg)`
    //     if (document.querySelector('.line-to-winner')) document.querySelector('.line-to-winner').style.width = `${pointWinner.result}px`
    // }

    const winnerLogic = (data, isSkip) => {

        let array = [];
        document.querySelectorAll('.point').forEach(bag => {
            let dropX = +getComputedStyle(document.querySelector('.airdrop-drop-sent')).left.replace('px', '') + 1
            let dropY = +getComputedStyle(document.querySelector('.airdrop-drop-sent')).top.replace('px', '') + 1
            let bagX = +getComputedStyle(bag).left.replace('px', '')
            let bagY = +getComputedStyle(bag).top.replace('px', '')

            bagX -= dropX;
            bagY -= dropY;

            let result = +Math.sqrt(Math.pow(bagX, 2) + Math.pow(bagY, 2)).toFixed(2)

            bagX = +getComputedStyle(bag).left.replace('px', '')
            bagY = +getComputedStyle(bag).top.replace('px', '')

            array.push({
                result,
                bagX, bagY
            })


        })

        let pointWinner = array.length && array?.reduce((prev, cur) => {
            return cur.result < prev.result ? cur : prev
        });

        document.querySelectorAll('.point').forEach((bag, index) => {
            let dropX = +getComputedStyle(document.querySelector('.airdrop-drop-sent')).left.replace('px', '') + 1
            let dropY = +getComputedStyle(document.querySelector('.airdrop-drop-sent')).top.replace('px', '') + 1
            let bagX = +getComputedStyle(bag).left.replace('px', '')
            let bagY = +getComputedStyle(bag).top.replace('px', '')

            if(pointWinner.bagY === bagY && pointWinner.bagX === bagX){
                bag.classList.add('sleepers__item_winner')
                bagX = +getComputedStyle(document.querySelectorAll('.point')[index]).left.replace('px', '')
                bagY = +getComputedStyle(document.querySelectorAll('.point')[index]).top.replace('px', '')

                bagX -= dropX;
                bagY -= dropY;

                let result = +Math.sqrt(Math.pow(bagX, 2) + Math.pow(bagY, 2)).toFixed(2)
                document.querySelector('.line-to-winner').style.width = result+"px"
                document.querySelector('.line-to-winner')?.classList.add('line-to-winner_active')

                let radius = Math.asin(Math.abs(bagY) / result) * (180 / Math.PI).toFixed(2)
                dropX = +getComputedStyle(document.querySelector('.airdrop-drop-sent')).left.replace('px', '') + 1
                dropY = +getComputedStyle(document.querySelector('.airdrop-drop-sent')).top.replace('px', '') + 1
                bagX = +getComputedStyle(document.querySelectorAll('.point')[index]).left.replace('px', '')
                bagY = +getComputedStyle(document.querySelectorAll('.point')[index]).top.replace('px', '')

                if (bagX >= dropX && bagY >= dropY) {
                    console.log(4, radius)
                    radius = 360 - radius
                } else if (bagX <= dropX && bagY >= dropY) {
                    console.log(3, radius)
                    radius = 180 + radius
                } else if (bagX <= dropX && bagY <= dropY) {
                    console.log(2, radius)
                    radius = 180 - radius
                }
                document.querySelector('.line-to-winner').style.transform = `rotate(-${radius}deg)`;
            }
        })

    }

    const SkipGame = (data, session) => {

        winnerLogic(data, true)


        setTimeout(() => {

            document.querySelectorAll(".map__points li")?.forEach(item => item.classList.add('li_hide'))
            document.querySelector(".airdrop-drop-sent")?.classList.add('airdrop-drop-sent_hide')

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

            }, 1000)

        }, 9000)


    }

    const ChooseWinner = (data, session) => {

        winnerLogic(data, false)

        setTimeout(() => {

            document.querySelectorAll(".map__points li")?.forEach(item => item.classList.add('li_hide'))
            document.querySelector(".airdrop-drop-sent")?.classList.add('airdrop-drop-sent_hide')

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

            }, 1000)

        }, 9000)
    }

    const PrepareGame = () => {
        document.querySelector(".map__container")?.classList.add('map__container_dark')
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
            "prepare": {
                func: PrepareGame
            },
        }
    )

    useEffect(() => {

        const time = setInterval(() => dispatch(airdropTimerSeconds()), 1000)

        // if(seconds < 0) {
        //     dispatch(airdropTimerSeconds(0))
        //     socket.onopen = () => {
        //         console.log('open again')
        //     }
        // }

        return () => clearInterval(time);
    }, [seconds]);

    return (
        <div className="min">
            <span>
                {
                    seconds < 0 ? '00' : seconds < 10 ? "0" + seconds : seconds
                }
            </span>
        </div>
    );
};

export default TimerSeconds;