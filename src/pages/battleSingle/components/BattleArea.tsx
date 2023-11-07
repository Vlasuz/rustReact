import React, {useContext, useEffect, useRef, useState} from 'react'
import {CrateItem} from "./CrateItem";
import CrateBig from "../../../assets/images/CrateBig.svg";
import {animated, useSpring} from "@react-spring/web";
import {useDrag} from "react-use-gesture";
import {IBattleCreate} from "../../../model";

import coins from "./../../../assets/images/header__coins.svg"
import {GameState} from "../BattleSingle";

interface IBattleAreaProps {
    blockArea: any
    gameType: IBattleCreate
}

export const BattleArea: React.FC<IBattleAreaProps> = ({blockArea, gameType}) => {

    const [{x, y}, api] = useSpring(() => ({x: 0, y: 0,}))

    const [coodY, setCoodY] = useState(0)

    const blockCenter: any = useRef(null)

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

        if(gameStep !== "process") {
            api({
                x: offset[0],
                y: offset[1],
            })
        }

    })

    useEffect(() => {
        if (gameStep !== "process") {
            return;
        } else if (gameStep === "process") {
            api({
                x: 0,
                y: 0,
            })
        }

        let coodYnew = 0

        let intervalScrolling = setInterval(() => {
            console.log(123)

            coodYnew -= 100

            api({
                x: 0,
                y: coodYnew,
            })
        }, 3000)

        if (gameStep !== "process") {
            return (() => {
                clearInterval(intervalScrolling)
            })
        }

    }, [gameStep])

    return (
        <animated.div ref={blockCenter} style={{x, y}} {...bindDrag()}
                      className={`battle-area__center battle-area__${gameStep}`}>

            <div className="crate crate__single">
                <img src={CrateBig} alt=""/>
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
                    <CrateItem/>
                    <CrateItem/>
                    <CrateItem/>
                    {gameStep === "start" && <div className="crate crate__empty">
                        <img src={CrateBig} alt=""/>
                    </div>}
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
                    <CrateItem/>
                    <CrateItem/>
                    <CrateItem/>
                    {gameStep === "start" && <div className="crate crate__empty">
                        <img src={CrateBig} alt=""/>
                    </div>}
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
                    <CrateItem/>
                    <CrateItem/>
                    <CrateItem/>
                    {gameStep === "start" && <div className="crate crate__empty">
                        <img src={CrateBig} alt=""/>
                    </div>}
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
                    <CrateItem/>
                    <CrateItem/>
                    <CrateItem/>
                    {gameStep === "start" && <div className="crate crate__empty">
                        <img src={CrateBig} alt=""/>
                    </div>}
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

            <div className="crate crate__end">
                <span>
                    Выбивает
                </span>
                <div className="coins">
                    <img src={coins} alt=""/>
                    <span>
                        30002
                    </span>
                </div>
            </div>

            {/*general-block-end_all-side*/}
            {/*general-block-end_left-side*/}
            {/*general-block-end_right-side*/}
            {/*general-block-end_left-half-side*/}
            {/*general-block-end_right-half-side*/}
            {gameStep === "ended" &&
                <div className={`general-block general-block-end area-${gameType.type}-${gameType.option}`}>
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
                </div>}

        </animated.div>
    )
}
