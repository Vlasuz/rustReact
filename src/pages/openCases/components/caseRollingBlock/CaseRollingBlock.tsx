import React, {useEffect, useState} from 'react'
import coins from "../../../../assets/images/header__coins.svg";
import {ICrate, ICrateItem} from "../../../../model";
import {useSelector} from "react-redux";

interface ICaseRollingBlockProps {
    isActiveSpin: boolean
    isFastActive: boolean
    isWonItemActive: boolean
    winnerItem?: any
}

export const CaseRollingBlock:React.FC<ICaseRollingBlockProps> = ({winnerItem, isActiveSpin, isFastActive, isWonItemActive}) => {

    const chosenCrate = useSelector((state: any) => state.toolkit.chosenCrate)
    const crates = useSelector((state: any) => state.toolkit.crates)

    const [itemsToRoll, setItemsToRoll] = useState<any>([])
    useEffect(() => {
        setItemsToRoll([])
        if (!chosenCrate || !Object.keys(chosenCrate).length) return

        for (let i = 0; i < 70; i++) {
            const randomIndex = Math.floor(Math.random() * chosenCrate.items.length);
            const randomItem = chosenCrate.items[randomIndex];

            setItemsToRoll((prev: any) => [...prev, randomItem])
        }
    }, [chosenCrate, crates])

    return (
        <ul>
            {
                itemsToRoll.map((item: any, index: number) => {
                    const isWinnerItem = winnerItem && !!(Object.keys(winnerItem).length && index === 54)

                    return (
                        <li key={index} style={{transitionDuration: isActiveSpin ? (!isFastActive ? "10s" : ".5s") : ""}}
                            className={`spin__item ${isActiveSpin && "spin-active"} ${isWonItemActive && index === 54 && " won_the_price"}`}>

                            <img src={isWinnerItem ? winnerItem.item.image : item?.item?.image} alt=""/>

                            {isWonItemActive && <div className="price">
                                <img src={coins} alt={item.item}/>
                                <span>{isWinnerItem ? winnerItem.price : item.price}</span>
                            </div>}
                        </li>
                    )
                })
            }
        </ul>
    )
}
