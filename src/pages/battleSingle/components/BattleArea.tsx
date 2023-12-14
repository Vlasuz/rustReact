import React, {useContext, useEffect, useRef, useState} from 'react'
import {CrateItem} from "./CrateItem";
import CrateBig from "../../../assets/images/CrateBig.svg";
import {animated, useSpring} from "@react-spring/web";
import {useDrag} from "react-use-gesture";
import {IBattleCreate, ICrate} from "../../../model";

import coins from "./../../../assets/images/header__coins.svg"
import {GameState} from "../BattleSingle";
import {useSelector} from 'react-redux';
import {Loader} from "../../../components/loader/Loader";
import {LoadingStyled} from "../../../components/loading/loading.styled";
import {useFightTimer} from "../../../hooks/fightTimer";
import {FightSingleSvgTimer} from "../../fightSingle/components/FightSingleSvgTimer";

interface IBattleAreaProps {
    blockArea: any
    gameType: IBattleCreate
    setGameStep: any
}

export const BattleArea: React.FC<IBattleAreaProps> = ({blockArea, gameType, setGameStep}) => {

    const [{x, y}, api] = useSpring(() => ({x: 0, y: 0,}))

    const [numberToOpen, setNumberToOpen] = useState(0)

    const blockCenter: any = useRef(null)

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

        if (gameStep === "waiting" || gameStep === "start" || gameStep === "calculate" || gameStep === "ended") {
            api({
                x: offset[0],
                y: offset[1],
            })
        }

    })


    useEffect(() => {
        let coodYnew = 100
        let cratesCount = 0;

        if (gameStep === "prepare") {
            api({
                x: 0,
                y: 120,
            })
            return;
        } else if (gameStep === "process") {

            let intervalScrolling = setInterval(() => {

                if (cratesCount < battleCrates.length) {
                    coodYnew -= 140
                } else if (cratesCount === battleCrates.length) {
                    setGameStep("calculate")
                    coodYnew -= 210
                } else if (cratesCount === battleCrates.length + 1) {
                    setGameStep("ended")
                    coodYnew -= 192
                }

                cratesCount += 1;
                setNumberToOpen(prev => prev + 1)

                api({
                    x: 0,
                    y: coodYnew,
                })

                if (cratesCount >= battleCrates.length + 2) {
                    clearInterval(intervalScrolling)
                }

                return (() => {
                    clearInterval(intervalScrolling)
                })
            }, 2000)
        }


    }, [gameStep])

    const timer = 5

    const {seconds, milliseconds} = useFightTimer(timer, gameStep)

    return (
        <animated.div ref={blockCenter} style={{x, y}} {...bindDrag()}
                      className={`battle-area__center battle-area__${gameStep}`}>

            <div className="crate crate__single">
                {gameStep === "start" && <img src={CrateBig} alt=""/>}

                {gameStep === "waiting" &&
                    <div className="loading">
                        <LoadingStyled className="load">
                            <div className="line"/>
                            <div className="line"/>
                            <div className="line"/>
                        </LoadingStyled>
                        <p>Ожидание</p>
                    </div>
                }

                {gameStep === "prepare" && <FightSingleSvgTimer isFight={false} gameState={gameStep} seconds={+timer}/>}
                {gameStep === "prepare" && <div className="center__running">
                    <span>Начало</span>
                    <div className="timer">
                        <div className="min">
                            <span>{seconds < 10 ? "0" + seconds : seconds}</span>
                        </div>
                        <div className="sec">
                            <span>.{milliseconds < 10 ? "0" + milliseconds : milliseconds}</span>
                        </div>
                    </div>
                </div>}
            </div>

            <div className={`lines-for-crate area-${gameType.type}-${gameType.option}`}>
                <div className="big-line"></div>
                <div className="lines">
                    <div className="area__line"></div>
                    <div className="area__line"></div>
                    <div className="area__line"></div>
                    <div className="area__line"></div>
                </div>
            </div>

            <div className={`general-block area-${gameType.type}-${gameType.option}`}>
                <div className="area__line">

                    {
                        battleCrates.map((item: any, index: number) => <CrateItem data={item.crate} isOpened={numberToOpen <= index}
                                                                     key={item.id}/>)
                    }

                    {gameStep === "start" && <div className="crate crate__empty">
                        <img src={CrateBig} alt=""/>
                    </div>}
                    <div className="crate crate__final">

                        {(gameStep === "calculate" || gameStep === "ended") ? <>
                            <span>
                                Выбивает
                            </span>
                                <div className="coins">
                                    <img src={coins} alt=""/>
                                    <span>
                                    3000
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
                        battleCrates.map((item: any, index: number) => <CrateItem data={item.crate} isOpened={numberToOpen <= index}
                                                                     key={item.id}/>)
                    }
                    {gameStep === "start" && <div className="crate crate__empty">
                        <img src={CrateBig} alt=""/>
                    </div>}
                    <div className="crate crate__final">

                        {(gameStep === "calculate" || gameStep === "ended") ? <>
                            <span>
                                Выбивает
                            </span>
                                <div className="coins">
                                    <img src={coins} alt=""/>
                                    <span>
                                    3000
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
                        battleCrates.map((item: any, index: number) => <CrateItem data={item.crate} isOpened={numberToOpen <= index}
                                                                     key={item.id}/>)
                    }
                    {gameStep === "start" && <div className="crate crate__empty">
                        <img src={CrateBig} alt=""/>
                    </div>}
                    <div className="crate crate__final">

                        {(gameStep === "calculate" || gameStep === "ended") ? <>
                            <span>
                                Выбивает
                            </span>
                                <div className="coins">
                                    <img src={coins} alt=""/>
                                    <span>
                                    3000
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
                        battleCrates.map((item: any, index: number) => <CrateItem data={item.crate} isOpened={numberToOpen <= index}
                                                                     key={item.id}/>)
                    }
                    {gameStep === "start" && <div className="crate crate__empty">
                        <img src={CrateBig} alt=""/>
                    </div>}
                    <div className="crate crate__final">

                        {(gameStep === "calculate" || gameStep === "ended") ? <>
                            <span>
                                Выбивает
                            </span>
                                <div className="coins">
                                    <img src={coins} alt=""/>
                                    <span>
                                    3000
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

            <div className={`lines-for-crate lines-for-crate-end area-${gameType.type}-${gameType.option}`}>
                <div className="big-line"></div>
                <div className="lines">
                    <div className="area__line"></div>
                    <div className="area__line"></div>
                    <div className="area__line"></div>
                    <div className="area__line"></div>
                </div>
            </div>

            <div className={`crate crate__end ${gameStep === "ended" && "crate__end_bottom"}`}>

                {gameStep === "ended" ? <>
                            <span>
                                Выбивает
                            </span>
                        <div className="coins">
                            <img src={coins} alt=""/>
                            <span>
                                    3000
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

            {/*general-block-end_all-side*/}
            {/*general-block-end_left-side*/}
            {/*general-block-end_right-side*/}
            {/*general-block-end_left-half-side*/}
            {/*general-block-end_right-half-side*/}
            {gameStep === "ended" &&
                <div
                    className={`general-block general-block-end_left-side general-block-end area-${gameType.type}-${gameType.option}`}>
                    <div className="area__line">
                        <div className="crate crate__final">
                        <span>
                            Выбивает
                        </span>
                            <div className="coins">
                                <img src={coins} alt=""/>
                                <span>
                                3000
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="area__line">
                        <div className="crate crate__final">
                        <span>
                            Выбивает
                        </span>
                            <div className="coins">
                                <img src={coins} alt=""/>
                                <span>
                                3000
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="area__line area__line_disabled">
                        <div className="crate crate__final">
                        <span>
                            Выбивает
                        </span>
                            <div className="coins">
                                <img src={coins} alt=""/>
                                <span>
                                3000
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="area__line area__line_disabled">
                        <div className="crate crate__final">
                        <span>
                            Выбивает
                        </span>
                            <div className="coins">
                                <img src={coins} alt=""/>
                                <span>
                                3000
                            </span>
                            </div>
                        </div>
                    </div>
                </div>}

        </animated.div>
    )
}
