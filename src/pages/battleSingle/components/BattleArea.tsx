import React, {useContext, useEffect, useRef, useState} from 'react'
import {animated, useSpring} from "@react-spring/web";
import {useDrag} from "react-use-gesture";
import {ICrate} from "../../../model";

import coins from "./../../../assets/images/header__coins.svg"
import {GameSocket, GameState} from "../BattleSingle";
import {LoadingStyled} from "../../../components/loading/loading.styled";
import {BattleAreaTopBig} from "./BattleAreaTopBig";
import {CSSTransition} from 'react-transition-group';
import {BattleAreaLine} from "./BattleAreaLine";
import {BattleAreaBottom} from "./BattleAreaBottom";
import {CrateItem} from "./CrateItem";
import CrateBig from "../../../assets/images/CrateBig.svg";
import {useSelector} from 'react-redux';

interface IBattleAreaProps {
    blockArea: any
    gameType: string
    setGameStep: any
}

export const BattleArea: React.FC<IBattleAreaProps> = ({blockArea, gameType, setGameStep}) => {

    const [{x, y}, api] = useSpring(() => ({x: 0, y: 105,}))

    const blockCenter: any = useRef(null)

    const [isCanDrag, setIsCanDrag] = useState(false)
    const [openedCount, setOpenedCount] = useState(0)

    const webSocket: any = useContext(GameSocket)
    const gameStep = useContext(GameState)

    const bindDrag = useDrag(({offset}) => {

        const maxScrollHeight = blockCenter.current.clientHeight - blockArea.current.clientHeight

        if (offset[0] < -0) {
            offset[0] = -0
        } else if (offset[0] > 0) {
            offset[0] = 0
        }

        if (offset[1] < -maxScrollHeight) {
            offset[1] = -maxScrollHeight
        } else if (offset[1] > 120) {
            offset[1] = 120
        }

        if (isCanDrag) {
            api({
                x: offset[0],
                y: offset[1],
            })
        }

    })

    const [coodYnew, setCoodYnew] = useState(100)

    const [isGoCalc, setIsGoCalc] = useState(false)
    const [blocksOpen, setBlocksOpen] = useState(0)

    useEffect(() => {

        setIsCanDrag(true)

        if (webSocket?.battle?.status === "process" && webSocket?.battle?.crates[0]?.opened === 0) {
            setIsCanDrag(false)
            setCoodYnew(120)
            return;
        } else if (webSocket?.battle?.status === "process") {

            setIsCanDrag(false)
            setCoodYnew(prev => prev -= 140)

        } else if (webSocket?.battle?.status === "end") {

            // if(webSocket?.timer !== 0) {
            //     setIsCanDrag(true)
            //     setIsGoCalc(true)
            //     setBlocksOpen(3)
            //     return;
            // }

            setIsCanDrag(false)
            setCoodYnew(prev => prev -= 140)


            setTimeout(() => {
                setCoodYnew(prev => prev -= 200)
                setBlocksOpen(1)

                setTimeout(() => {
                    setCoodYnew(prev => prev -= 180)
                    setBlocksOpen(2)

                    setIsGoCalc(true)

                    setTimeout(() => {
                        setCoodYnew(prev => prev -= 50)
                        setBlocksOpen(3)

                        setIsCanDrag(true)
                    }, 1500)
                }, 1500)
            }, 3000)

        }

        const openedCount = webSocket?.battle?.crates?.length > 1 ? webSocket?.battle?.crates?.reduce((prev: any, current: any) => {
            return prev + current.opened;
        }, 0) : webSocket?.battle?.crates[0].opened

        setCoodYnew(-(openedCount * 140) + 120)

        setOpenedCount(openedCount)

    }, [webSocket])

    useEffect(() => {
        api({
            x: 0,
            y: coodYnew,
        })
    }, [coodYnew])

    const wsMessage: any = useContext(GameSocket)

    const [allGameCrates, setAllGameCrates] = useState<ICrate[]>([])

    const battleCrates: any = useSelector((state: any) => state.toolkit.battleCrates)

    useEffect(() => {
        if (!wsMessage?.battle?.crates) return;

        let sumAllCrates = 0
        let cratesArray: any = []

        wsMessage?.battle?.crates.map((item: any) => sumAllCrates += item.count)


        wsMessage?.battle?.crates?.map((item: any) => {
            return cratesArray = [...cratesArray, ...Array.from({length: item.count}, () => item.crate)]
        })

        if (allGameCrates.length >= sumAllCrates) return;

        setAllGameCrates(cratesArray)

    }, [wsMessage])


    const [finalAmount, setFinalAmount] = useState(0)

    useEffect(() => {
        if (!isGoCalc) return;

        const targetSum = webSocket?.battle?.players.reduce((current: any, player: any) => {
            current += player.win
            return current
        }, 0); // Ваша целевая сумма
        const animationDuration = 1000; // Время анимации в миллисекундах

        const start = Date.now();
        const increment = targetSum / animationDuration;

        const animationInterval = setInterval(() => {
            const elapsedTime = Date.now() - start;
            const newSum = Math.min(increment * elapsedTime, targetSum);
            setFinalAmount(newSum);

            if (newSum === targetSum) {
                clearInterval(animationInterval);
            }
        }, 16); // Примерно 60 кадров в секунду

        return () => clearInterval(animationInterval);
    }, [isGoCalc]);


    const typeModes: { [key: string]: number } = {
        "two_way": 2,
        "three_way": 3,
        "four_way": 4,
        "two_v_two": 4,
        "two_p": 2,
        "three_p": 3,
        "four_p": 4,
    }


    return (
        <animated.div ref={blockCenter} style={{x, y}} {...bindDrag()}
                      className={`battle-area__center battle-area__${gameStep}`}>

            <BattleAreaTopBig gameStep={gameStep}/>

            <div className={`lines-for-crate area-${gameType}`}>
                <div className="big-line"></div>
                <div className="lines">
                    <div className="area__line"></div>
                    <div className="area__line"></div>
                    <div className="area__line"></div>
                    <div className="area__line"></div>
                </div>
            </div>

            <div className={`general-block area-${gameType}`}>

                {
                    Array.from({length: typeModes[webSocket?.battle?.mode]}, (_, index) => index + 1)?.map(item =>
                        <BattleAreaLine blocksOpen={blocksOpen} openedCount={openedCount}
                                        position={webSocket?.battle?.players.filter((plr: any) => plr.position === item)[0]}/>
                    )
                }

                {gameStep === "start" && <div className="area__line">
                    {
                        battleCrates.map((item: any, index: number) => <CrateItem
                            data={item.crate}
                            isOpened={false}
                            key={item.id + index}/>)
                    }

                    <div className="crate crate__empty">
                        <img src={CrateBig} alt=""/>
                    </div>
                </div>}

            </div>

            <div className={`lines-for-crate lines-for-crate-end area-${gameType}`}>
                <div className="big-line"></div>
                <div className="lines">
                    <div className="area__line"></div>
                    <div className="area__line"></div>
                    <div className="area__line"></div>
                    <div className="area__line"></div>
                </div>
            </div>

            <div className={`crate crate__end ${(gameStep === "end" && blocksOpen >= 3) && "crate__end_bottom"}`}>

                {(gameStep === "end" && blocksOpen >= 2) ? <>
                            <span>
                                Выбивает
                            </span>
                        <div className="coins">
                            <img src={coins} alt=""/>

                            <CSSTransition
                                in={true} // Устанавливаем в true, чтобы активировать анимацию при появлении элемента
                                timeout={1000} // Время анимации в миллисекундах
                                classNames="sum-animation" // Название класса для анимации
                                unmountOnExit
                            >
                                <span>
                                    {
                                        finalAmount.toFixed(0)
                                    }
                                </span>
                            </CSSTransition>
                        </div>
                    </> :
                    <div className="loading">
                        <LoadingStyled className="load">
                            <div className="line"/>
                            <div className="line"/>
                            <div className="line"/>
                        </LoadingStyled>
                        <p>Ожидание</p>
                    </div>
                }

            </div>


            {(gameStep === "end" && blocksOpen >= 3) && <BattleAreaBottom gameType={gameType} blocksOpen={blocksOpen}/>}

        </animated.div>
    )
}
