import React from 'react';
import {useState} from "react";

const RightsAirdropSleepers = (props) => {

    const [sleeperCost, setSleeperCost] = useState(0);

    let chooseSleepers = function (e) {
        for (let btn of document.querySelectorAll('.airdrop__sleepers li')) {
            btn.querySelector('button').classList.remove('button_active')
        }

        props.setSleepersCount(+e.target.closest('li').querySelector('button').innerText);

        e.target.closest('li').querySelector('button').classList.add('button_active')

        setSleeperCost(+e.target.closest('li').querySelector('button').innerText * 100)
    }

    function countOfSleepers () {
        let sleeper = 1
        let sleepers = [];
        while (sleeper <= 9) {
            sleepers.push(
                <li
                    key={sleeper}
                    onClick={chooseSleepers}
                >
                    <button>
                        {sleeper}
                    </button>
                </li>
            )
            sleeper++
        }
        return sleepers
    }

    let isEnough = function () {

        if(props.onCoins >= sleeperCost) {
            return (
                <button
                    onClick={() => { props.onCoinsChange(prev => prev - sleeperCost); return props.setNumSwitch(2) } }
                    className="sleepers__buy"
                >
                    <span>Купить</span>
                    <img src="images/header__coins.svg" alt="Coin"/>
                    <span>{sleeperCost}</span>
                </button>
            )
        } else {
            return (
                <button
                    className="sleepers__buy"
                >
                    <span
                        style={
                            {color: '#777'}
                        }
                    >Недостаточно средств</span>
                    <img src="images/header__coins.svg" alt="Coin"/>
                    <span
                        style={
                            {color: '#777'}
                        }
                    >{sleeperCost}</span>
                </button>
            )
        }

    }

    return (
        <div className="airdrop__sleepers">
            <h3>Кол-во спальников:</h3>
            <ul>
                {countOfSleepers()}
            </ul>
            {isEnough()}
        </div>
    );
};

export default RightsAirdropSleepers;