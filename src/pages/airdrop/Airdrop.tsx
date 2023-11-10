import React, {useEffect, useRef, useState} from 'react'
import {AirdropStyled} from "./Airdrop.styles";

import mapPhoto from './../../assets/images/map.png'
import {animated, useSpring} from "@react-spring/web";
import {useDrag} from "react-use-gesture";
import {Stage, Layer, Circle} from "react-konva";
import {AirdropSaves} from "./components/AirdropSaves";


interface IAirdropProps {

}

export const Airdrop: React.FC<IAirdropProps> = () => {


    const [{x, y}, api] = useSpring(() => ({x: 0, y: 0,}))

    const blockScale: any = useRef(null)
    const blockArea: any = useRef(null)
    const blockCenter: any = useRef(null)
    const blockMap: any = useRef(null)

    const [wheelValue, setWheelValue] = useState(1)

    const bindDrag = useDrag(({offset}) => {

        const maxScrollHeight = (blockCenter.current.getBoundingClientRect().height / wheelValue ) - blockArea.current.getBoundingClientRect().height
        const maxScrollWidth = (blockMap.current.getBoundingClientRect().width / wheelValue) - blockArea.current.getBoundingClientRect().width
        // const maxScrollHeight = blockCenter.current.clientHeight * wheelValue - blockArea.current.clientHeight * wheelValue
        // const maxScrollWidth = blockMap.current.clientWidth * wheelValue - blockArea.current.clientWidth * wheelValue

        if (offset[0] < -maxScrollWidth) {
            offset[0] = -maxScrollWidth
        } else if (offset[0] > -(maxScrollWidth - maxScrollWidth * wheelValue)) {
            offset[0] = -(maxScrollWidth - maxScrollWidth * wheelValue)
        }


        if (offset[1] < -maxScrollHeight) {
            offset[1] = -maxScrollHeight
        } else if (offset[1] > -(maxScrollHeight - maxScrollHeight * wheelValue)) {
            offset[1] = -(maxScrollHeight - maxScrollHeight * wheelValue)
        }

        api({
            x: offset[0],
            y: offset[1],
        })

    })

    let sum = 0;
    const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
        //
        // let count = e.deltaY / 2000;
        // sum -= count;
        //
        // setWheelValue(sum => sum - count);
        //
        // if (wheelValue >= 1 && wheelValue < 3) {
        //
        // } else if (wheelValue <= 1) {
        //     setWheelValue(1)
        // } else if (wheelValue > 3){
        //     setWheelValue(3)
        // }
        // return;

    }


    return (
        <AirdropStyled ref={blockArea} className="section-map">
            <div ref={blockCenter}
                 onWheel={handleWheel}
                 style={{transform: `scale(${wheelValue < 1 ? 1 : wheelValue > 3 ? 3 : wheelValue})`, transition: "all .1s ease-out", transformOrigin: `50% 50%`}}
                 className="scrolling">
                <animated.div ref={blockScale} style={{x, y}} {...bindDrag()}>
                    <div className="transform-scale">
                        <div ref={blockMap} className="map__photo">
                            <img src={mapPhoto} alt=""/>
                        </div>

                        <ul className="bags">
                            <li/>
                        </ul>
                    </div>
                </animated.div>
            </div>

            <AirdropSaves/>

        </AirdropStyled>
    )
}
