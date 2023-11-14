import React, {useEffect, useRef, useState} from 'react'
import {AirdropStyled} from "./Airdrop.styles";

import mapPhoto from './../../assets/images/map.png'
import shieldIcon from './../../assets/images/shield-map.svg'
import planeIcon from './../../assets/images/plane_new.svg'
import {animated, useSpring} from "@react-spring/web";
import {useDrag} from "react-use-gesture";
import {AirdropSaves} from "./components/AirdropSaves";
import {useDrop} from "react-dnd";
import {ItemTypes} from "../../constants/ItemTypes";
import {AirdropBagsItem} from "./components/AirdropBagsItem";
import {useDispatch, useSelector} from "react-redux";
import {removeAirdropBags} from "../../redux/toolkitSlice";


interface IAirdropProps {

}

export const Airdrop: React.FC<IAirdropProps> = () => {


    const [{x, y}, api] = useSpring(() => ({x: 0, y: 0,}))

    const dispatch = useDispatch()

    const blockScale: any = useRef(null)
    const blockArea: any = useRef(null)
    const blockCenter: any = useRef(null)
    const blockMap: any = useRef(null)

    const [wheelValue, setWheelValue] = useState(1)

    const bindDrag = useDrag(({offset}) => {

        const maxScrollHeight = (blockCenter.current.getBoundingClientRect().height / wheelValue) - blockArea.current.getBoundingClientRect().height
        const maxScrollWidth = (blockMap.current.getBoundingClientRect().width / wheelValue) - blockArea.current.getBoundingClientRect().width

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

    // let sum = 0;
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

    const distance = 1500;
    const time = 15;
    const planeStep = distance / time;

    const [planeDistance, setPlaneDistance] = useState(0)

    useEffect(() => {
        const intervalToFly = setInterval(() => {
            setPlaneDistance(prev => prev + planeStep)
        }, 1000)

        setTimeout(() => {
            clearInterval(intervalToFly)
        }, (time + 1) * 1000)
    }, [])


    const [bagsCoods, setBagsCoods] = useState<any>([])
    const [oldItemCoods, setOldItemCoods] = useState<any>({})
    const airdropBags = useSelector((state: any) => state.toolkit.airdropBagsMap)

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
            return setBagsCoods(bagsCoods.filter((item: any) => item.x !== oldItemCoods.x && item.y !== oldItemCoods.y));
        }

        const block: any = document.querySelector('.bags')
        const event: any = window.event || undefined;

        if (event) {
            const rect = block.getBoundingClientRect();
            const mouseX = event.pageX - rect.left - window.scrollX;
            const mouseY = event.pageY - rect.top - window.scrollY;

            setBagsCoods((prev: any) => [...prev, {x: mouseX / wheelValue, y: mouseY / wheelValue}])
        }

    }

    useEffect(() => {
        if (!oldItemCoods.x && !oldItemCoods.y) return;

        droppableItem(true, 0)
    }, [oldItemCoods])

    return (
        <AirdropStyled ref={blockArea} className="section-map">
            <div className="section-map__top">
                <div className="section-map__game-is">Игра#</div>
                <div className="section-map__code">
                    <img src={shieldIcon} alt="Ico"/>
                    <span className="random_hash">undefined...undefined</span>
                </div>
            </div>
            <div ref={blockCenter}
                 onWheel={handleWheel}
                 style={{
                     transform: `scale(${wheelValue < 1 ? 1 : wheelValue > 3 ? 3 : wheelValue})`,
                     transition: "all .1s ease-out",
                     transformOrigin: `50% 50%`
                 }}
                 className="scrolling">
                <animated.div ref={blockScale} style={{x, y}} {...bindDrag()}>
                    <div className="transform-scale">
                        <div ref={blockMap} className="map__photo">
                            <img src={mapPhoto} alt=""/>
                        </div>

                        <div className="trajectory" style={{width: planeDistance}}>
                            <div className="plane">
                                <img src={planeIcon} alt="Plane" width="54"/>
                            </div>
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
