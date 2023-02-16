import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {airdropCountSleepers, airdropStepRights} from "../../../Redux/actions";

const RightsAirdropSleepers = (props) => {

    const dispatch = useDispatch();
    const costOneSleeper = 100;
    const myCoins = 1000;
    const sleeperNum = useSelector(state => state.reducerAirdropCountSleepers.sleepers)

    let chooseSleepers = function (e, sleeper) {
        dispatch(airdropCountSleepers(sleeper))

        if (document.querySelector('.airdrop__sleepers .button_active'))
            document.querySelector('.airdrop__sleepers .button_active').classList.remove('button_active')

        e.target.closest('li').classList.add('button_active')
    }


    const sleepers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const handleBuySleepers = () => {
        // props.states.setCoins(prev => prev - props.states.sleeperCost);
        dispatch(airdropStepRights(2))
    }


    return (
        <div className="airdrop__sleepers">
            <h3>Кол-во спальников:</h3>
            <ul>
                {
                    sleepers.map((sleeper, sleeperNum) =>
                        <li
                            key={sleeperNum}
                            onClick={e => chooseSleepers(e, sleeper)}>
                            <button>
                                {sleeper}
                            </button>
                        </li>
                    )
                }
            </ul>

            {
                sleeperNum === 0 ?
                    <button className="sleepers__buy">
                        <span style={{color: '#777'}}>Выберите кол-во спальников</span>
                    </button>
                    :
                    myCoins >= props.states.sleeperCost ?
                        <button onClick={handleBuySleepers} className="sleepers__buy">
                            <span>Купить</span>
                            <img src="../images/header__coins.svg" alt="Coin"/>
                            <span>
                                {sleeperNum * costOneSleeper}
                            </span>
                        </button>
                        :
                        <button className="sleepers__buy">
                            <span style={{color: '#777'}}>Недостаточно средств</span>
                            <img src="../images/header__coins.svg" alt="Coin"/>
                            <span style={{color: '#777'}}>
                                {sleeperNum * costOneSleeper}
                            </span>
                        </button>
            }

        </div>
    );
};

export default RightsAirdropSleepers;