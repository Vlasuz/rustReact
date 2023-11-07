import React, {useEffect, useRef, useState} from 'react'
import {AirdropStyled} from "./airdrop.styles";

import mapPhoto from './../../assets/images/map.png'
import {animated, useSpring} from "@react-spring/web";
import {useDrag} from "react-use-gesture";
import {Stage, Layer, Circle} from "react-konva";


interface IAirdropProps {

}

export const Airdrop: React.FC<IAirdropProps> = () => {


    const [{x, y}, api] = useSpring(() => ({x: 0, y: 0,}))

    const blockScale: any = useRef(null)
    const blockArea: any = useRef(null)
    const blockCenter: any = useRef(null)
    const blockMap: any = useRef(null)

    const bindDrag = useDrag(({offset}) => {

        const maxScrollHeight = blockCenter.current.getBoundingClientRect().height - blockArea.current.getBoundingClientRect().height
        const maxScrollWidth = blockMap.current.getBoundingClientRect().width - blockArea.current.getBoundingClientRect().width

        if (offset[0] < -maxScrollWidth) {
            offset[0] = -maxScrollWidth
        } else if (offset[0] > 0) {
            offset[0] = 0
        }

        if (offset[1] < -maxScrollHeight) {
            offset[1] = -maxScrollHeight
        } else if (offset[1] > 0) {
            offset[1] = 0
        }

        api({
            x: offset[0],
            y: offset[1],
        })

    })

    const [wheelValue, setWheelValue] = useState(1)

    const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
        if(wheelValue < 1) {
            setWheelValue(prev => prev - (e.deltaY / 1000))
        } else {
            setWheelValue(1)
        }
    }

    return (
        <AirdropStyled onWheel={handleWheel} ref={blockArea} className="section-map">
            <animated.div ref={blockCenter} style={{x, y}} {...bindDrag()}>
                <div ref={blockScale} className="transform-scale">
                    <div ref={blockMap} className="map__photo">
                        <img src={mapPhoto} alt=""/>
                    </div>

                    <ul className="bags">
                        <li/>
                    </ul>
                </div>
            </animated.div>
        </AirdropStyled>
    )
}
