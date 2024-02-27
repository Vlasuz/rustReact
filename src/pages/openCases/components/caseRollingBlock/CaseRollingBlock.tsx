import React, {useEffect, useState} from 'react'
import coins from "../../../../assets/images/header__coins.svg";
import {useSelector} from "react-redux";
import axios from "axios";
import {getApiLink} from "../../../../functions/getApiLink";
import useSound from 'use-sound';
import spinTick from "./../../../../assets/audio/sound-spin-tick.webm"
import {prettyCoinValues} from "../../../../functions/prettyCoinValues";

interface ICaseRollingBlockProps {
    isActiveSpin: boolean
    isFastActive: boolean
    isWonItemActive: boolean
    winnerItem?: any
    isMultiple?: boolean
}

export const CaseRollingBlock:React.FC<ICaseRollingBlockProps> = ({winnerItem, isActiveSpin, isFastActive, isWonItemActive, isMultiple}) => {

    const chosenCrate = useSelector((state: any) => state.toolkit.chosenCrate)
    const crates = useSelector((state: any) => state.toolkit.crates)

    const [itemsToRoll, setItemsToRoll] = useState<any>([])
    useEffect(() => {
        if(isActiveSpin) return;

        setItemsToRoll([])
        if (!chosenCrate || !Object.keys(chosenCrate).length) return

        for (let i = 0; i < 70; i++) {
            const randomIndex = Math.floor(Math.random() * chosenCrate.items.length);
            const randomItem = chosenCrate.items[randomIndex];

            setItemsToRoll((prev: any) => [...prev, randomItem])
        }
    }, [chosenCrate, crates, isActiveSpin])

    console.log(isActiveSpin)

    const [randomFinishPosition, setRandomFinishPosition] = useState((Math.random() - 0.5) * 100)
    const [marginLeftSpin, setMarginLeftSpin] = useState(`calc(-1 * ((170.1px * 50) - 50vw) + ${randomFinishPosition}px)`)
    const [transitionDuration, setTransitionDuration] = useState(isActiveSpin ? (!isFastActive ? "10s" : ".5s") : "")

    console.log(marginLeftSpin)

    useEffect(() => {
        setTransitionDuration(isActiveSpin ? (!isFastActive ? "10s" : ".5s") : "")
        setMarginLeftSpin("0px")

        if(!isActiveSpin) return;

        setRandomFinishPosition((Math.random() - 0.5) * 100)
        setMarginLeftSpin(isMultiple ? `calc(-1 * (146px * 50 + (15px * 51)) + ${randomFinishPosition}px)` : `calc(-1 * ((170.1px * 50) - 50vw) + ${randomFinishPosition}px)`)

        setTimeout(() => {
            setTransitionDuration(".2s")
            setMarginLeftSpin(isMultiple ? `calc(-1 * (146px * 50 + (15px * 51)))` : `calc(-1 * ((170.1px * 50) - 50vw))`)
        }, !isFastActive ? 11000 : 700)

    }, [isActiveSpin])

    const [itemRarities, setItemRarities]: any[] = useState([])
    useEffect(() => {
        axios.get(getApiLink("api/crate/items/rarities/")).then(({data}) => {
            setItemRarities(data)
        })
    }, [])


    return (
        <ul>

            {
                itemsToRoll.map((item: any, index: number) => {
                    const isWinnerItem = winnerItem && !!(Object.keys(winnerItem).length && index === 54)
                    const rarityColor = itemRarities?.filter((item2: any) => item.price > item2.price_from && item.price < item2.price_to && item)[0]?.color

                    return (
                        <li key={item.id + index} style={{transitionDuration: transitionDuration, marginLeft: !isMultiple && isActiveSpin && index === 0 ? marginLeftSpin : "", marginTop: isMultiple && isActiveSpin && index === 0 ? marginLeftSpin : ""}}
                            className={`spin__item ${isActiveSpin && "spin-active"} ${isWonItemActive && index === 54 && " won_the_price"}`}>

                            <span style={{background: isWonItemActive && index === 54 ? `linear-gradient(0deg, ${rarityColor} 0%, rgba(146, 193, 69, 0.00) 100%)` : ""}} className={`rarity`}></span>

                            <img src={isWinnerItem ? winnerItem.item.image : item?.item?.image} alt=""/>

                            {isWonItemActive && <div className="price">
                                <img src={coins} alt={item.item}/>
                                <span>{prettyCoinValues(isWinnerItem ? winnerItem.price : item.price)}</span>
                            </div>}
                        </li>
                    )
                })
            }
        </ul>
    )
}
