import React, {useEffect, useState} from 'react'
import coins from "../../../../assets/images/header__coins.svg";
import {ICrate} from "../../../../model";
import {useSelector} from "react-redux";

interface ICaseRollingBlockProps {
    isActiveSpin: boolean
    isFastActive: boolean
    isWonItemActive: boolean
}

export const CaseRollingBlock:React.FC<ICaseRollingBlockProps> = ({isActiveSpin, isFastActive, isWonItemActive}) => {

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
                itemsToRoll.map((item: any, index: number) =>
                    <li key={index} style={{transition: isActiveSpin && !isFastActive ? "all 10s ease-in-out" : ""}}
                        className={"spin__item" + (!!item.item && isWonItemActive && index === 54 ? " won_the_price" : "")}>
                        <img src={item.item.image} alt=""/>
                        {!!item.item && <div className="price">
                            <img src={coins} alt={item.item}/>
                            <span>{item.price}</span>
                        </div>}
                    </li>
                )
            }
        </ul>
    )
}
