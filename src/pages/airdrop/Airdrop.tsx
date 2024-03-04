import React, {useContext, useEffect, useRef, useState} from 'react'
import {AirdropStyled} from "./Airdrop.styles";

import mapPhoto from './../../assets/images/map.png'
import shieldIcon from './../../assets/images/shield-map.svg'
import planeIcon from './../../assets/images/plane_new.svg'
import dropCircle from './../../assets/images/dropCircle.svg'
import coinsIcon from './../../assets/images/header__coins.svg'
import {animated, useSpring} from "@react-spring/web";
import {useDrag} from "react-use-gesture";
import {AirdropSaves} from "./components/AirdropSaves";
import {useDrop} from "react-dnd";
import {ItemTypes} from "../../constants/ItemTypes";
import {AirdropBagsItem} from "./components/AirdropBagsItem";
import {useDispatch, useSelector} from "react-redux";
import {addAirdropBagsMap, removeAirdropBagMap, removeAirdropBags, setSound} from "../../redux/toolkitSlice";
import {AirdropSocketContext} from "../../App";
import {AirdropPlayersBags} from "./components/AirdropPlayersBags";
import {ConfettiFireworks} from "../../components/confetti/ConfettiFireworks";


interface IAirdropProps {

}

export const Airdrop: React.FC<IAirdropProps> = () => {


    const [{x, y}, api] = useSpring(() => ({x: 100, y: -100,}))

    const dispatch = useDispatch()

    const blockScale: any = useRef(null)
    const blockArea: any = useRef(null)
    const blockCenter: any = useRef(null)
    const blockMap: any = useRef(null)

    const airdropWsMessages: any = useContext(AirdropSocketContext)

    const [wheelValue, setWheelValue] = useState(1)

    const bindDrag = useDrag(({offset}) => {

        api({
            x: offset[0],
            y: offset[1],
        })

    })

    let sum = 0;
    const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {

        let count = e.deltaY / 2000;
        sum -= count;

        setWheelValue(sum => sum - count);

        if (wheelValue >= 1 && wheelValue < 3) {

        } else if (wheelValue <= 1) {
            setWheelValue(1)
        } else if (wheelValue > 3){
            setWheelValue(3)
        }
        return;

    }

    const fixTimer: any = {
        "waiting": 30,
        "process": 30,
        "drop": 5,
        "ended": 10,
        "prepare": 5,
        "start": 1,
    }

    const [planeDistance, setPlaneDistance] = useState(0)

    useEffect(() => {
        setPlaneDistance(0)
        let numsCount = 30
        if (airdropWsMessages?.airdrop?.game_state !== "process") return;

        const stepNum = 1600 / 30;
        setPlaneDistance(1600 / fixTimer[airdropWsMessages.airdrop.game_state] * (fixTimer[airdropWsMessages.airdrop.game_state] - airdropWsMessages.timer));

        const intervalToFly = setInterval(() => {
            numsCount--
            setPlaneDistance(prev => prev + stepNum)
        }, 1000)

        setTimeout(() => {
            clearInterval(intervalToFly)
        }, (airdropWsMessages.timer + 1) * 1000)
    }, [airdropWsMessages])

    useEffect(() => {
        if (airdropWsMessages?.airdrop?.game_state === "ended") {
            lineToWinner(document.querySelector(".point_winner"))
        }
    }, [airdropWsMessages])


    const [bagsCoods, setBagsCoods] = useState<any>([])
    const [oldItemCoods, setOldItemCoods] = useState<any>({})

    const airdropBags = useSelector((state: any) => state.toolkit.airdropBagsMap)
    const userInfo = useSelector((state: any) => state.toolkit.user)

    const [{isOver}, drop] = useDrop(() => ({
        accept: ItemTypes.BAG,
        drop: () => droppableItem(),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    }))

    useEffect(() => {
        setBagsCoods(airdropBags)
    }, [airdropBags])

    function droppableItem(e?: any, num?: number) {
        // @ts-ignore
        document.querySelectorAll('.bags li').forEach(item => item.style.transition = "none");

        if (Object.keys(oldItemCoods).length) {

            // return setBagsCoods(bagsCoods.filter((item: any) => item.x !== oldItemCoods.x && item.y !== oldItemCoods.y));
        }

        const block: any = document.querySelector('.bags')
        const event: any = window.event || undefined;

        if (event) {
            const rect = block.getBoundingClientRect();
            const mouseX = event.pageX - rect.left - window.scrollX;
            const mouseY = event.pageY - rect.top - window.scrollY;

            // @ts-ignore
            const scaleValue: any = document.querySelector(".scrolling").getAttribute("data-scale")

            setBagsCoods((prev: any) => [...prev, {x: mouseX / scaleValue, y: mouseY / scaleValue}])

            dispatch(addAirdropBagsMap({x: mouseX / scaleValue, y: mouseY / scaleValue}));
        }

    }

    useEffect(() => {
        if (!oldItemCoods.x && !oldItemCoods.y) return;

        droppableItem(true, 0)
    }, [oldItemCoods])


    const airdropDrop: any = useRef(null);
    const airdropLine: any = useRef(null);
    const [radiusLine, setRadiusLine] = useState(0)

    const lineToWinner = (bag: any) => {
        let dropX = +getComputedStyle(airdropDrop.current).left.replace('px', '') + 1
        let dropY = +getComputedStyle(airdropDrop.current).top.replace('px', '') + 1
        let bagX = +getComputedStyle(bag).left.replace('px', '')
        let bagY = +getComputedStyle(bag).top.replace('px', '')

        bag.classList.add('sleepers__item_winner')
        bagX = +getComputedStyle(bag.closest('.point')).left.replace('px', '')
        bagY = +getComputedStyle(bag.closest('.point')).top.replace('px', '')

        console.log(dropX, dropY)
        console.log(bagX, bagY)

        bagX -= dropX;
        bagY -= dropY;

        let result = +Math.sqrt(Math.pow(bagX, 2) + Math.pow(bagY, 2)).toFixed(2)
        airdropLine.current.style.width = result + "px"
        airdropLine.current.classList.add('line-to-winner_active')

        setTimeout(() => {
            airdropLine.current.style.width = "0px"
        }, 15000)

        // @ts-ignore
        let radius = Math.asin(Math.abs(bagY) / result) * (180 / Math.PI).toFixed(2)
        dropX = +getComputedStyle(airdropDrop.current).left.replace('px', '') + 1
        dropY = +getComputedStyle(airdropDrop.current).top.replace('px', '') + 1
        bagX = +getComputedStyle(bag.closest('.point')).left.replace('px', '')
        bagY = +getComputedStyle(bag.closest('.point')).top.replace('px', '')

        if (bagX >= dropX && bagY >= dropY) {
            radius = 360 - radius
        } else if (bagX <= dropX && bagY >= dropY) {
            radius = 180 + radius
        } else if (bagX <= dropX && bagY <= dropY) {
            radius = 180 - radius
        }

        setRadiusLine(radius)
    }


    const handleTouchStart = (e: any) => {
        e.preventDefault();
        // @ts-ignore
        document.querySelector('body').style.overflow = 'hidden'
    }
    const handleTouchEnd = (e: any) => {
        e.preventDefault();
        // @ts-ignore
        document.querySelector('body').style.overflow = 'auto'
    }

    const [isActiveConfetti, setIsActiveConfetti] = useState(false)

    useEffect(() => {

        if(airdropWsMessages?.airdrop?.game_state === "process") {
            setTimeout(() => {
                dispatch(setSound('sound11'))
            }, 400)
        }

        if(airdropWsMessages?.airdrop?.game_state === "ended") {
            if(airdropWsMessages?.airdrop?.winner.user.id === userInfo.id) {
                setIsActiveConfetti(true)

                setTimeout(() => {
                    setIsActiveConfetti(false)
                }, 500)
            }
        }

    }, [airdropWsMessages])


    return (
        <AirdropStyled ref={blockArea} className="section-map">

            {isActiveConfetti && <ConfettiFireworks timeToEnd={5}/>}

            <div className="section-map__top">
                <div className="section-map__game-is">Игра#{airdropWsMessages?.airdrop?.game_id}</div>
                <div className="section-map__code">
                    <img src={shieldIcon} alt="Ico"/>
                    <span className="random_hash">
                        {airdropWsMessages?.airdrop?.random_hash.substr(0, 4) + "..." + airdropWsMessages?.airdrop?.random_hash.substr(-4, 4)}
                    </span>
                </div>
            </div>
            <div ref={blockCenter}
                 onWheel={handleWheel}
                 onTouchStart={handleTouchStart}
                 onTouchEnd={handleTouchEnd}
                 data-scale={wheelValue < 1 ? 1 : wheelValue > 3 ? 3 : wheelValue}
                 style={{
                     transform: `scale(${wheelValue < 1 ? 1 : wheelValue > 3 ? 3 : wheelValue})`,
                     transition: "all .1s ease-out",
                     transformOrigin: `50% 50%`
                 }}
                 className="scrolling">
                <animated.div className={"moving"} ref={blockScale} style={{x, y}} {...bindDrag()}>
                    <div className="transform-scale">
                        <div ref={blockMap} className="map__photo">
                            <img src={mapPhoto} alt=""/>
                        </div>

                        {/*<div className="trajectory" style={{width: 1600 / 30 * (30 - 5), marginLeft: "0px", transition: airdropWsMessages?.airdrop?.game_state === "drop" ? "all 5s linear" : "all 1s linear", top: (1 * 1484) + "px"}}>*/}
                        {(airdropWsMessages?.airdrop?.game_state === "process" || airdropWsMessages?.airdrop?.game_state === "drop") &&
                            <div className="trajectory" style={{
                                width: airdropWsMessages?.airdrop?.game_state === "drop" ? "1600px" : `${planeDistance}px`,
                                transition: airdropWsMessages?.airdrop?.game_state === "drop" ? "all 5s linear" : "all 1s linear",
                                top: (airdropWsMessages?.airdrop?.y_pos * 1484) + "px"
                            }}>
                                <div className="plane">
                                    <img src={planeIcon} alt="Plane" width="54"/>
                                </div>
                            </div>}

                        <div className="section-map__map">
                            <ul className="map__points">

                                {
                                    airdropWsMessages?.airdrop?.players?.map((player: any, index: number) =>
                                        <AirdropPlayersBags key={player.bags[index] + player.user.id} player={player}/>)
                                }

                            </ul>
                        </div>

                        {/*<div className="drop" style={{top: `${.5 * 1484}px`, left: `${.5 * 1484}px`, display: true ? "flex" :"none"}}>*/}
                        <div className="drop" ref={airdropDrop} style={{
                            top: `${airdropWsMessages?.airdrop?.y_pos * 1484}px`,
                            left: `${airdropWsMessages?.airdrop?.x_pos * 1484}px`,
                            display: airdropWsMessages?.airdrop?.game_state === "drop" || airdropWsMessages?.airdrop?.game_state === "ended" ? "flex" : "none"
                        }}>
                            <img src={dropCircle} alt=""/>
                            <img src={dropCircle} alt=""/>

                            <div className='line-to-winner line-to-winner_active'
                                 style={{transform: `rotate(-${radiusLine}deg)`, width: "0px"}} ref={airdropLine}/>
                        </div>

                        <ul className="bags" ref={drop}>

                            {
                                bagsCoods.map((item: any, index: number) =>
                                    <AirdropBagsItem
                                        key={index}
                                        setOldItemCoods={setOldItemCoods}
                                        data={item}
                                    />
                                )
                            }

                        </ul>
                    </div>
                </animated.div>
            </div>

            <AirdropSaves/>

        </AirdropStyled>
    )
}
