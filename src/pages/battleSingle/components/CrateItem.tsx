import React, {createContext, useContext, useEffect, useRef, useState} from 'react'

import lineToOpen from "../../../assets/images/lineToOpenCrate.png";
import coin from "../../../assets/images/header__coins.svg";
import battleCaseLock from "../../../assets/images/battle-case-lock.svg";

import {GameSocket, GameState} from "../BattleSingle";
import {useDispatch, useSelector} from 'react-redux';
import {ICrate, ICrateItem, IUser} from "../../../model";
import {changeBattleCrate, removeBattleCrate, setSound} from '../../../redux/toolkitSlice';
import {getApiLink} from "../../../functions/getApiLink";
import useSound from "use-sound";
import spinTick from "../../../assets/audio/sound-spin-tick.webm";
import getCookies from "../../../functions/getCookie";

interface ICrateItemProps {
    data: ICrate
    isOpened: boolean
    openedItem?: any
    position?: any
}

export const CrateItem: React.FC<ICrateItemProps> = ({data, isOpened, openedItem, position}) => {

    const [count, setCount] = useState(1)

    const gameStep = useContext(GameState)
    const webSocket: any = useContext(GameSocket)

    const user: IUser = useSelector((state: any) => state.toolkit.user)
    const crates: ICrate[] = useSelector((state: any) => state.toolkit.crates)

    const [itemsToRoll, setItemsToRoll] = useState<any>([])
    useEffect(() => {
        setItemsToRoll([])
        if (!data || !Object.keys(data).length) return

        for (let i = 0; i < 10; i++) {
            const randomIndex = Math.floor(Math.random() * data.items.length);
            const randomItem = data.items[randomIndex];

            setItemsToRoll((prev: any) => [...prev, randomItem])
        }

    }, [data, crates])

    useEffect(() => {
        setItemsToRoll((prev: any) => [...prev.slice(0, 8), openedItem?.item, ...prev.slice(9)])
    }, [openedItem])

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(changeBattleCrate({crate: data, count: count}))

        if (count !== 0) return;

        dispatch(removeBattleCrate(data))
    }, [count])

    const itemsRef = useRef(null)
    const itemRef = useRef(null)

    const isHaveItem = openedItem && Object.keys(openedItem).length
    const isEndGame = webSocket?.battle?.status === "end" && webSocket?.timer < 0

    const [isShowItem, setIsShowItem] = useState(isEndGame)
    const [isSpinItem, setIsSpinItem] = useState(false)

    const [play] = useSound(
        spinTick,
        { volume: getCookies("volume_music_rust") ? (+JSON.parse(`${getCookies("volume_music_rust")}`) / 100) : 0 }
    );

    const [currentTimer, setCurrentTimer] = useState(20);
    const [isStopTick, setIsStopTick] = useState(false)

    useEffect(() => {
        if(isStopTick) return;
        if (!isHaveItem) return;

        const timer = setInterval(() => {
            !isStopTick && play();
            setCurrentTimer(prevTimer => prevTimer + (prevTimer * 1.03));

        }, currentTimer);


        return () => clearInterval(timer);
    }, [isHaveItem, currentTimer, isStopTick]);


    const canvasRef = useRef(null)

    useEffect(() => {
        if(!isHaveItem) return;

        console.log(crates, webSocket)

        setTimeout(() => {
            setIsStopTick(true)

            if(data.price <= openedItem.amount) {
                if(position?.user?.id !== user.id) return;

                dispatch(setSound("sound13_1"))

                if (!canvasRef.current) return;

                // @ts-ignore
                canvasRef.current.confetti = canvasRef.current.confetti || confetti.create(canvasRef.current, {resize: true});

                // @ts-ignore
                canvasRef.current.confetti({
                    spread: 70,
                    origin: {y: 1.2}
                });

            } else {
                dispatch(setSound("sound17"))
            }
        }, 4000)

        setTimeout(() => {
            setIsSpinItem(true)
        },10)
        setTimeout(() => {
            setIsShowItem(true)
        }, 4000)
    }, [isHaveItem, data])

    return (
        <div className="crate crate__start">

            <canvas ref={canvasRef} className="canvas_winner"></canvas>

            {(gameStep === "process" || gameStep === "waiting" || gameStep === "prepare") && isOpened &&
                <div className="crate__lock">
                    <img src={isHaveItem ? openedItem?.item?.item?.image : battleCaseLock} alt="Lock"/>
                </div>}

            {gameStep === "start" && <div className="top">
                <button className="minus" onClick={_ => setCount(prev => prev - 1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="3" viewBox="0 0 16 3" fill="none">
                        <path d="M1.49219 1.09985H14.4922" stroke="#EC5555" strokeOpacity="0.7" strokeWidth="2"
                              strokeLinecap="round"/>
                    </svg>
                </button>
                <input type="number" onChange={(e: any) => setCount(+e.target.value)} value={count}/>
                <button className="plus" onClick={_ => setCount(prev => prev + 1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M6.99219 1.59985C6.99219 1.04757 7.4399 0.599854 7.99219 0.599854C8.54447 0.599854 8.99219 1.04757 8.99219 1.59985V7.09985H14.4922C15.0445 7.09985 15.4922 7.54757 15.4922 8.09985C15.4922 8.65214 15.0445 9.09985 14.4922 9.09985H8.99219V14.5999C8.99219 15.1521 8.54447 15.5999 7.99219 15.5999C7.4399 15.5999 6.99219 15.1521 6.99219 14.5999V9.09985H1.49219C0.939903 9.09985 0.492188 8.65214 0.492188 8.09985C0.492188 7.54757 0.939903 7.09985 1.49219 7.09985H6.99219V1.59985Z"
                              fill="#92C145" fillOpacity="0.7"/>
                    </svg>
                </button>
            </div>}
            <div className="crate__image">

                <div className={`openedItem ${isHaveItem && "opened"}`}>
                    {!isHaveItem && <div className="lock">
                        <img src={getApiLink(`/${data.icon}`)} alt=""/>
                    </div>}
                    {!(gameStep === "waiting" || gameStep === "prepare") && isSpinItem && !isShowItem && !isEndGame && <div className="line">
                        <img src={lineToOpen} alt=""/>
                    </div>}
                    {isShowItem && <div className="item">
                        <img src={isHaveItem ? openedItem?.item?.item?.image : battleCaseLock} alt=""/>
                    </div>}

                    {!isEndGame && isHaveItem && <div ref={itemsRef} className={`items ${isSpinItem && "items_scroll"} ${isShowItem && "items_hidden"}`}>
                        {
                            itemsToRoll.map((item: any, index: number) =>
                                <div ref={itemRef} key={index} className="item">
                                    <img src={item?.item?.image} alt=""/>
                                </div>
                            )
                        }
                    </div>}
                </div>

                {/*{isHaveItem ?*/}
                {/*    <div className="openedItem">*/}
                {/*        <div className="lock">*/}
                {/*            <img src={getApiLink(`/${data.icon}`)} alt=""/>*/}
                {/*        </div>*/}
                {/*        <img src={isHaveItem ? openedItem?.item?.item?.image : battleCaseLock} alt=""/>*/}
                {/*    </div>*/}
                {/*    : <img src={getApiLink(`/${data.icon}`)} alt=""/>}*/}
            </div>


            {isHaveItem && isShowItem && <div className="price">
                <img src={coin} alt=""/>
                <span>
                    {
                        isHaveItem ? openedItem?.item?.price : data?.price
                    }
                </span>
            </div>}
        </div>
    )
}
