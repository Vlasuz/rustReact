import React, {useEffect, useRef} from 'react'
import {CrateItem} from "./CrateItem";
import CrateBig from "../../../assets/images/CrateBig.svg";
import {animated, useSpring} from "@react-spring/web";
import {useDrag} from "react-use-gesture";
import {IBattleCreate} from "../../../model";

interface IBattleAreaProps {
    blockArea: any
    gameType: IBattleCreate
}

export const BattleArea:React.FC<IBattleAreaProps> = ({blockArea, gameType}) => {

    const [{x, y}, api] = useSpring(() => ({x: 0, y: 0,}))

    const blockCenter: any = useRef(null)

    const bindDrag = useDrag(({offset}) => {

        const maxScrollHeight = blockCenter.current.clientHeight - blockArea.current.clientHeight

        if(offset[0] < -0) {
            offset[0] = -0
        } else if (offset[0] > 0) {
            offset[0] = 0
        }

        if(offset[1] < -maxScrollHeight) {
            offset[1] = -maxScrollHeight
        } else if (offset[1] > 120) {
            offset[1] = 120
        }

        api({
            x: offset[0],
            y: offset[1],
        })

    })

    return (
        <animated.div ref={blockCenter} style={{x, y}} {...bindDrag()} className={`battle-area__center area-${gameType.type}-${gameType.option}`}>
            <div className="area__line">
                <CrateItem/>
                <CrateItem/>
                <CrateItem/>
                <div className="crate crate__empty">
                    <img src={CrateBig} alt=""/>
                </div>
            </div>
            <div className="area__line">
                <CrateItem/>
                <CrateItem/>
                <CrateItem/>
                <div className="crate crate__empty">
                    <img src={CrateBig} alt=""/>
                </div>
            </div>
            <div className="area__line">
                <CrateItem/>
                <CrateItem/>
                <CrateItem/>
                <div className="crate crate__empty">
                    <img src={CrateBig} alt=""/>
                </div>
            </div>
            <div className="area__line">
                <CrateItem/>
                <CrateItem/>
                <CrateItem/>
                <div className="crate crate__empty">
                    <img src={CrateBig} alt=""/>
                </div>
            </div>
        </animated.div>
    )
}