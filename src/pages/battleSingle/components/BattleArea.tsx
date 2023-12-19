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
import {useFightTimer} from "../../../hooks/fightTimer";
import {FightSingleSvgTimer} from "../../fightSingle/components/FightSingleSvgTimer";
import {log} from "util";
import {BattleAreaTopBig} from "./BattleAreaTopBig";

interface IBattleAreaProps {
    blockArea: any
    gameType: string
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

        if (gameStep === "waiting" || gameStep === "start" || gameStep === "calculate" || gameStep === "end") {
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

                if (cratesCount < allGameCrates.length) {
                    coodYnew -= 140
                } else if (cratesCount === allGameCrates.length) {
                    setGameStep("calculate")
                    coodYnew -= 210
                } else if (cratesCount === allGameCrates.length + 1) {
                    setGameStep("end")
                    coodYnew -= 192
                }

                cratesCount += 1;
                setNumberToOpen(prev => prev + 1)

                api({
                    x: 0,
                    y: coodYnew,
                })

                if (cratesCount >= allGameCrates.length + 2) {
                    clearInterval(intervalScrolling)
                }

                return (() => {
                    clearInterval(intervalScrolling)
                })
            }, 2000)
        }


    }, [gameStep])

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



    const webSocket: any = useContext(GameSocket)
    const position1 = webSocket?.battle?.players.filter((item: any) => item.position === 1)[0]
    const position2 = webSocket?.battle?.players.filter((item: any) => item.position === 2)[0]

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
                                                                                   isOpened={numberToOpen <= index}
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
                        allGameCrates.map((item: any, index: number) => <CrateItem data={item}
                                                                                   openedItem={position2.items[index]}
                                                                                   isOpened={numberToOpen <= index}
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
                                                                                   openedItem={position2.items[index]}
                                                                                   isOpened={numberToOpen <= index}
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
                                                                                   openedItem={position2.items[index]}
                                                                                   isOpened={numberToOpen <= index}
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
                                <span>
                                    {
                                        position1.win + position2.win
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

            {/*general-block-end_all-side*/}
            {/*general-block-end_left-side*/}
            {/*general-block-end_right-side*/}
            {/*general-block-end_left-half-side*/}
            {/*general-block-end_right-half-side*/}
            {gameStep === "end" &&
                <div
                    className={`general-block general-block-end_left-side general-block-end area-${gameType}`}>
                    <div className="area__line">
                        <div className="crate crate__final">
                        <span>
                            Выбивает
                        </span>
                            <div className="coins">
                                <img src={coins} alt=""/>
                                <span>
                                    {
                                        position1.win + position2.win
                                    }
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
                                {
                                    position2.win
                                }
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
                                {
                                    position2.win
                                }
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
                                {
                                    position2.win
                                }
                            </span>
                            </div>
                        </div>
                    </div>
                </div>}

        </animated.div>
    )
}
