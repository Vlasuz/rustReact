import React, {useEffect, useState} from 'react'
import coins from "../../../assets/images/header__coins.svg";
import {CSSTransition} from "react-transition-group";

interface IBattleAreaBottomBoxProps {
    blocksOpen: number
    winnerCoins: number
    isWinner: boolean
}

export const BattleAreaBottomBox: React.FC<IBattleAreaBottomBoxProps> = ({blocksOpen, winnerCoins, isWinner}) => {

    const [currentSumWinner, setCurrentSumWinner] = useState(0);

    useEffect(() => {
        if (blocksOpen < 3) return;

        const targetSum = winnerCoins;
        const animationDuration = 1000;

        const start = Date.now();
        const increment = targetSum / animationDuration;

        const animationInterval = setInterval(() => {
            const elapsedTime = Date.now() - start;
            const newSum = Math.min(increment * elapsedTime, targetSum);
            setCurrentSumWinner(newSum);

            if (newSum === targetSum) {
                clearInterval(animationInterval);
            }
        }, 16);

        return () => clearInterval(animationInterval);
    }, [blocksOpen]);

    return (
        <div className={`area__line ${!isWinner && "area__line_disabled"}`}>
            <div className="crate crate__final">
                <span>
                    Выбивает
                </span>
                <div className="coins">
                    <img src={coins} alt=""/>
                    <CSSTransition
                        in={true}
                        timeout={1000}
                        classNames="sum-animation"
                        unmountOnExit
                    >
                                <span>
                                    {
                                        currentSumWinner.toFixed(0)
                                    }
                                </span>
                    </CSSTransition>
                </div>
            </div>
        </div>
    )
}
