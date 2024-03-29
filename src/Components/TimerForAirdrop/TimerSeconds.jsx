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
import {
    userBalanceAddCoins,
    userBalanceRemoveCoins,
    userBalanceSetCoins
} from "../../Redux/Reducers/reducerUserBalance";
import {handleSubmitAirdrop} from "../../Redux/Reducers/reducerSubmitAirdrop";
import {clearSleeper} from "../../Redux/Reducers/reducerAirdropMySleepers";
import {setSocketAirdrop, setSocketAirdropResponse} from "../../Redux/Reducers/reducerAirdropSocket";
import {useWebworker} from "../../Hooks/use-webworker";
import GlobalLink from "../../Hooks/GlobalLink";
import {logger} from "../../middleware/logger";
import {useLocation} from "react-router-dom";
import {setCoods} from "../../Redux/Reducers/reducerCoodsSwipeMap";
import {reducerSound, setSound} from "../../Redux/Reducers/reducerSound";
import axios from "axios";
import {getCookie} from "../../Hooks/GetCookies";

let socket = new WebSocket("wss://" + GlobalLink() + '/ws/api/airdrop/')
const TimerSeconds = () => {

    useWebworker()

    const location = useLocation()
    const seconds = useSelector(state => state.reducerAirdropTimerSecond.seconds)
    const dispatch = useDispatch()
    const submitToGame = useSelector(state => state.reducerSubmitAirdrop.data)
    const session = useSelector(state => state.reducerSession.session)
    const [response, setResponse] = useState({})
    const track = useSelector(state => state.reducerSound.sound)

    useEffect(() => {

        dispatch(setSocketAirdrop(socket))

    }, [])

    socket.onmessage = (e) => {
        const data = JSON.parse(JSON.parse(e.data))
        steps[data.airdrop.game_state]?.func(data, session)

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

    const ChooseSleepers = (data, session) => {

        if (document.querySelector('.section-map .trajectory')) {
            document.querySelector('.section-map .trajectory').style.transform = `rotate(0deg)`;
            document.querySelector('.section-map .trajectory').style.transformOrigin = `0px 0px`;
        }

        if (document.querySelector('.section-map__map') && data.timer > 29) {
            dispatch(setSound(''))
            setTimeout(() => {
                dispatch(setSound('sound14'))
            }, 10)
        }

        if (document.querySelector('.section-map__map')) {
            document.querySelector('.section-map__map')?.classList.remove('section-map__map_disabled')
        }

        if (document.querySelector(".map__container")) {
            document.querySelector(".map__container")?.classList.remove('map__container_dark')
        }
    }

    const FlyPlane = (data) => {

        if (document.querySelector('.section-map .trajectory')) {

            const mLeft = data.airdrop.x_pos < 0.5 ? `-${(data.airdrop.x_pos * 1500)}px` : `${data.airdrop.x_pos * 1500}px`

            // document.querySelector('.section-map .trajectory').style.marginLeft = mLeft;
            // document.querySelector('.section-map .trajectory').style.transform = `rotate(${data.airdrop.degree}deg)`;
            // document.querySelector('.section-map .trajectory').style.transformOrigin = `${data.airdrop.x_pos * 1500}px 0px`;
        }


        if (document.querySelector('.section-map__map')) {
            dispatch(setSound('sound11'))
        }

        document.querySelector('.section-map__map')?.classList.remove('section-map__map_disabled')
        document.querySelector(".map__container")?.classList.remove('map__container_dark')
        if (document.querySelector('.sleepers__item')) {
            document.querySelectorAll('.sleepers__item')?.forEach(item => item?.remove())
        }

        if (!submitToGame) {
            dispatch(clearSleeper())
        }

        // let timerForDrop = Math.floor(((data.airdrop.x_pos * 1500 / 50) * 1000) + 1500) - ((30 - data.timer) * 1000)

        // setTimeout(() => {
        //     dispatch(airdropDropIsDropDown(true))
        //
        //     if (document.querySelector('.section-map__map')) {
        //         dispatch(setSound('sound10'))
        //     }
        // }, timerForDrop)

    }


    const winnerLogic = (data, isSkip) => {

        let array = [];

        if (!!data.airdrop.players.length) {

            document.querySelectorAll('.point')?.forEach(bag => {
                let dropX = +getComputedStyle(document.querySelector('.airdrop-drop-sent'))?.left.replace('px', '') + 1
                let dropY = +getComputedStyle(document.querySelector('.airdrop-drop-sent'))?.top.replace('px', '') + 1
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

            document.querySelectorAll('.map__points .point')?.forEach((bag, index) => {

                let dropX = +getComputedStyle(document.querySelector('.airdrop-drop-sent')).left.replace('px', '') + 1
                let dropY = +getComputedStyle(document.querySelector('.airdrop-drop-sent')).top.replace('px', '') + 1
                let bagX = +getComputedStyle(bag).left.replace('px', '')
                let bagY = +getComputedStyle(bag).top.replace('px', '')

                if (pointWinner.bagY === bagY && pointWinner.bagX === bagX) {
                    bag.classList.add('sleepers__item_winner')
                    bagX = +getComputedStyle(bag.closest('.point')).left.replace('px', '')
                    bagY = +getComputedStyle(bag.closest('.point')).top.replace('px', '')

                    swipeToWinner(bagX, bagY)

                    bagX -= dropX;
                    bagY -= dropY;

                    let result = +Math.sqrt(Math.pow(bagX, 2) + Math.pow(bagY, 2)).toFixed(2)
                    document.querySelector('.line-to-winner').style.width = result + "px"
                    document.querySelector('.line-to-winner')?.classList.add('line-to-winner_active')


                    let radius = Math.asin(Math.abs(bagY) / result) * (180 / Math.PI).toFixed(2)
                    dropX = +getComputedStyle(document.querySelector('.airdrop-drop-sent')).left.replace('px', '') + 1
                    dropY = +getComputedStyle(document.querySelector('.airdrop-drop-sent')).top.replace('px', '') + 1
                    bagX = +getComputedStyle(bag.closest('.point')).left.replace('px', '')
                    bagY = +getComputedStyle(bag.closest('.point')).top.replace('px', '')

                    if (bagX >= dropX && bagY >= dropY) {
                        radius = 360 - radius
                    } else if (bagX <= dropX && bagY >= dropY) {
                        radius = 180 + radius
                    } else if (bagX <= dropX && bagY <= dropY) {
                        radius = 180 - radius
                    }
                    document.querySelector('.line-to-winner').style.transform = `rotate(-${radius}deg)`;
                }
            })
        }

    }

    const swipeToWinner = (bagX, bagY) => {

        const windowScreenWidth = document.querySelector('.map__container').offsetWidth
        const windowScreenHeight = document.querySelector('.map__container').offsetHeight

        const x = ((windowScreenWidth / 2) - bagX);
        const y = ((windowScreenHeight / 2) - bagY);

        dispatch(setCoods({x, y}))

        // document.querySelector('.section-map__map').style.transform = `translate3d(${x}px, ${y}px, 0px)`
        document.querySelector('.section-map__map')?.classList.add('section-map__map_disabled')
    }

    const SkipGame = (data, session) => {

        winnerLogic(data, true)

        if (document.querySelector('.section-map__map')) {
            if (data.airdrop?.winner && (session?.id === data.airdrop?.winner?.user?.id)) {
                dispatch(setSound('sound13_1'))
            } else {
                dispatch(setSound('sound17'))
            }
        }

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
                    for (let i = 0; i < +data.airdrop.bank; i++) {
                        let adding = setInterval(() => {
                            dispatch(userBalanceAddCoins(1))
                            if (data.airdrop.bank >= i) {
                                axios.defaults.headers.get['Authorization'] = `Bearer ${getCookie('access_token')}`;
                                axios.get("https://" + GlobalLink() + '/api/user/info/').then(res => {
                                    dispatch(userBalanceSetCoins(res.data.balance))
                                })
                                clearInterval(adding)
                            }
                        }, 1)
                    }
                }

            }, 1000)

        }, 9000)


    }

    const ChooseWinner = (data, session) => {

        winnerLogic(data, false)

        if (document.querySelector('.section-map__map')) {
            if (data.airdrop?.winner && (session?.id === data.airdrop?.winner?.user?.id)) {
                dispatch(setSound('sound13_1'))
            } else {
                dispatch(setSound('sound17'))
            }
        }

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
                    for (let i = 0; i < +data.airdrop.bank; i++) {
                        let adding = setInterval(() => {
                            dispatch(userBalanceAddCoins(1))
                            if (data.airdrop.bank >= i) {
                                axios.defaults.headers.get['Authorization'] = `Bearer ${getCookie('access_token')}`;
                                axios.get("https://" + GlobalLink() + '/api/user/info/').then(res => {
                                    dispatch(userBalanceSetCoins(res.data.balance))
                                })
                                clearInterval(adding)
                            }
                        }, 1)
                    }
                }

            }, 1000)

        }, 9000)
    }

    const PrepareGame = () => {

        if (document.querySelector('.section-map__map')) {
            dispatch(setSound(''))
            setTimeout(() => {
                dispatch(setSound('sound14'))
            }, 10)
        }

        document.querySelector(".map__container")?.classList.add('map__container_dark')
    }

    const dropIsDow = () => {
        dispatch(airdropDropIsDropDown(true))

        if (document.querySelector('.section-map__map')) {
            dispatch(setSound('sound10'))
        }
    };


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
            "drop": {
                func: dropIsDow
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