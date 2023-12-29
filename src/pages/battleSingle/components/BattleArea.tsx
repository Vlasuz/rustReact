import React, {useContext, useEffect, useRef, useState} from 'react'
import {CrateItem} from "./CrateItem";
import CrateBig from "../../../assets/images/CrateBig.svg";
import {animated, useSpring} from "@react-spring/web";
import {useDrag} from "react-use-gesture";
import {IBattleCreate, ICrate, ICrateItem} from "../../../model";

import coins from "./../../../assets/images/header__coins.svg"
import {GameSocket, GameState} from "../BattleSingle";
import {useSelector} from 'react-redux';
import {Loader} from "../../../components/loader/Loader";
import {LoadingStyled} from "../../../components/loading/loading.styled";
import {BattleAreaTopBig} from "./BattleAreaTopBig";
import { CSSTransition } from 'react-transition-group';

interface IBattleAreaProps {
    blockArea: any
    gameType: string
    setGameStep: any
}

export const BattleArea: React.FC<IBattleAreaProps> = ({blockArea, gameType, setGameStep}) => {

    const [{x, y}, api] = useSpring(() => ({x: 0, y: 0,}))

    const blockCenter: any = useRef(null)

    const [isCanDrag, setIsCanDrag] = useState(false)
    const [openedCount, setOpenedCount] = useState(0)

    const webSocket: any = useContext(GameSocket)
    const gameStep = useContext(GameState)

    const battleCrates: any = useSelector((state: any) => state.toolkit.battleCrates)

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
    const [isGoCalcWinner, setIsGoCalcWinner] = useState(false)

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

            setIsCanDrag(false)
            setCoodYnew(prev => prev -= 140)


            setTimeout(() => {
                setCoodYnew(prev => prev -= 200)

                setTimeout(() => {
                    setCoodYnew(prev => prev -= 180)

                    setIsGoCalc(true)

                    setTimeout(() => {
                        setCoodYnew(prev => prev -= 50)

                        setIsGoCalcWinner(true)
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

    const position1 = webSocket?.battle?.players.filter((item: any) => item.position === 1)[0]
    const position2 = webSocket?.battle?.players.filter((item: any) => item.position === 2)[0]


    const winnerPosition1v1 = webSocket?.battle?.winners.length && gameType === "1v1" && position1?.user?.id === webSocket?.battle?.winners[0]?.user?.id ? "general-block-end_left-side" : "general-block-end_right-side"
    const isWinnerPosition1In1v1 = webSocket?.battle?.winners.length && gameType === "1v1" && position1?.user?.id === webSocket?.battle?.winners[0]?.user?.id

    console.log(allGameCrates)
    console.log(webSocket?.battle)

    const [currentSum, setCurrentSum] = useState(0);

    useEffect(() => {
        if(!isGoCalc) return ;

        const targetSum = position1.win + position2.win; // Ваша целевая сумма
        const animationDuration = 1000; // Время анимации в миллисекундах

        const start = Date.now();
        const increment = targetSum / animationDuration;

        const animationInterval = setInterval(() => {
            const elapsedTime = Date.now() - start;
            const newSum = Math.min(increment * elapsedTime, targetSum);
            setCurrentSum(newSum);

            if (newSum === targetSum) {
                clearInterval(animationInterval);
            }
        }, 16); // Примерно 60 кадров в секунду

        return () => clearInterval(animationInterval);
    }, [isGoCalc]);


    const [currentSumWinner, setCurrentSumWinner] = useState(0);
    useEffect(() => {
        if(!isGoCalcWinner) return ;

        const targetSum = position1?.win + position2?.win; // Ваша целевая сумма
        const animationDuration = 1000; // Время анимации в миллисекундах

        const start = Date.now();
        const increment = targetSum / animationDuration;

        const animationInterval = setInterval(() => {
            const elapsedTime = Date.now() - start;
            const newSum = Math.min(increment * elapsedTime, targetSum);
            setCurrentSumWinner(newSum);

            if (newSum === targetSum) {
                clearInterval(animationInterval);
            }
        }, 16); // Примерно 60 кадров в секунду

        return () => clearInterval(animationInterval);
    }, [isGoCalcWinner]);

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
                <div className="area__line">

                    {
                        allGameCrates.map((item: any, index: number) => <CrateItem data={item}
                                                                                   openedItem={position1.items[index]}
                                                                                   isOpened={!(index < openedCount)}
                                                                                   key={item.id + index}/>)
                    }

                    {
                        gameStep === "start" && battleCrates.map((item: any, index: number) => <CrateItem
                            data={item.crate}
                            isOpened={false}
                            key={item.id + index}/>)
                    }

                    {gameStep === "start" && <div className="crate crate__empty">
                        <img src={CrateBig} alt=""/>
                    </div>}
                    <div className="crate crate__final">

                        {(gameStep === "calculate" || gameStep === "end") ? <>
                            <span>
                                Выбивает
                            </span>
                                <div className="coins">
                                    <img src={coins} alt=""/>
                                    <span>
                                        {
                                            position1.win
                                        }
                                    </span>
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
                </div>
                <div className="area__line">
                    {
                        allGameCrates?.map((item: any, index: number) => <CrateItem data={item}
                                                                                    openedItem={position2?.items[index]}
                                                                                    isOpened={!(index < openedCount)}
                                                                                    key={item?.id + index}/>)
                    }
                    {gameStep === "start" && <div className="crate crate__empty">
                        <img src={CrateBig} alt=""/>
                    </div>}
                    <div className="crate crate__final">

                        {(gameStep === "calculate" || gameStep === "end") ? <>
                            <span>
                                Выбивает
                            </span>
                                <div className="coins">
                                    <img src={coins} alt=""/>
                                    <span>
                                        {
                                            position2.win
                                        }
                                    </span>
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
                </div>
                <div className="area__line">
                    {
                        allGameCrates.map((item: any, index: number) => <CrateItem data={item}
                                                                                   openedItem={position2?.items[index]}
                                                                                   isOpened={!(index < openedCount)}
                                                                                   key={item.id + index}/>)
                    }
                    {gameStep === "start" && <div className="crate crate__empty">
                        <img src={CrateBig} alt=""/>
                    </div>}
                    <div className="crate crate__final">

                        {(gameStep === "calculate" || gameStep === "end") ? <>
                            <span>
                                Выбивает
                            </span>
                                <div className="coins">
                                    <img src={coins} alt=""/>
                                    <span>
                                        {
                                            position2.win
                                        }
                                    </span>
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
                </div>
                <div className="area__line">
                    {
                        allGameCrates.map((item: any, index: number) => <CrateItem data={item}
                                                                                   openedItem={position2?.items[index]}
                                                                                   isOpened={!(index < openedCount)}
                                                                                   key={item.id + index}/>)
                    }
                    {gameStep === "start" && <div className="crate crate__empty">
                        <img src={CrateBig} alt=""/>
                    </div>}
                    <div className="crate crate__final">

                        {(gameStep === "calculate" || gameStep === "end") ? <>
                            <span>
                                Выбивает
                            </span>
                                <div className="coins">
                                    <img src={coins} alt=""/>
                                    <span>
                                        {
                                            position2.win
                                        }
                                    </span>
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
                </div>
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

            <div className={`crate crate__end ${gameStep === "end" && "crate__end_bottom"}`}>

                {gameStep === "end" ? <>
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
                                        currentSum.toFixed(0)
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

            {/*general-block-end_all-side*/}
            {/*general-block-end_left-side*/}
            {/*general-block-end_right-side*/}
            {/*general-block-end_left-half-side*/}
            {/*general-block-end_right-half-side*/}


            {gameStep === "end" &&
                <div
                    className={`general-block ${winnerPosition1v1} general-block-end area-${gameType}`}>
                    <div className={`area__line ${!isWinnerPosition1In1v1 && "area__line_disabled"}`}>
                        <div className="crate crate__final">
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
                                        currentSumWinner.toFixed(0)
                                    }
                                </span>
                            </CSSTransition>
                            </div>
                        </div>
                    </div>
                    <div className={`area__line ${!isWinnerPosition1In1v1 && "area__line_disabled"}`}>
                        <div className="crate crate__final">
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
                                    currentSumWinner.toFixed(0)
                                }
                            </span>
                            </CSSTransition>
                            </div>
                        </div>
                    </div>
                    <div className={`area__line ${isWinnerPosition1In1v1 && "area__line_disabled"}`}>
                        <div className="crate crate__final">
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
                                    currentSumWinner.toFixed(0)
                                }
                            </span>
                            </CSSTransition>
                            </div>
                        </div>
                    </div>
                    <div className={`area__line ${isWinnerPosition1In1v1 && "area__line_disabled"}`}>
                        <div className="crate crate__final">
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
                                    currentSumWinner.toFixed(0)
                                }
                            </span>
                            </CSSTransition>
                            </div>
                        </div>
                    </div>
                </div>}

        </animated.div>
    )
}
