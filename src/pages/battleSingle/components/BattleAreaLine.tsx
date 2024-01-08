import React, {useContext, useEffect, useState} from 'react'
import {CrateItem} from "./CrateItem";
import CrateBig from "../../../assets/images/CrateBig.svg";
import coins from "../../../assets/images/header__coins.svg";
import {LoadingStyled} from "../../../components/loading/loading.styled";
import {GameSocket, GameState} from "../BattleSingle";
import {useSelector} from "react-redux";
import {ICrate} from "../../../model";

interface IBattleAreaLineProps {
    blocksOpen: number
    openedCount: number
    position: any
}

export const BattleAreaLine: React.FC<IBattleAreaLineProps> = ({blocksOpen, openedCount, position}) => {

    const gameStep = useContext(GameState)
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


    const [animationAmount, setAnimationAmount] = useState(0)
    useEffect(() => {
        if (animationAmount > 0 && blocksOpen > 1) return;

        const targetSum = position?.win;
        const animationDuration = 1000;

        const start = Date.now();
        const increment = targetSum / animationDuration;

        const animationInterval = setInterval(() => {
            const elapsedTime = Date.now() - start;
            const newSum = Math.min(increment * elapsedTime, targetSum);
            setAnimationAmount(newSum);

            if (newSum === targetSum) {
                clearInterval(animationInterval);
            }
        }, 16);

        return () => clearInterval(animationInterval);
    }, [blocksOpen]);

    return (
        <div className="area__line">
            {
                allGameCrates.map((item: any, index: number) => <CrateItem data={item}
                                                                           openedItem={position?.items[index]}
                                                                           isOpened={!(index < openedCount)}
                                                                           key={item.id + index}/>)
            }
            {gameStep === "start" && <div className="crate crate__empty">
                <img src={CrateBig} alt=""/>
            </div>}
            <div className="crate crate__final">

                {(gameStep === "end" && blocksOpen >= 1) ? <>
                            <span>
                                Выбивает
                            </span>
                        <div className="coins">
                            <img src={coins} alt=""/>
                            <span>
                                        {
                                            animationAmount.toFixed(0)
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
    )
}
