import React from 'react';

const RightsAirdropSleepers = (props) => {

    let chooseSleepers = function (e) {
        for (let btn of document.querySelectorAll('.airdrop__sleepers li')) {
            btn.querySelector('button').classList.remove('button_active')
        }

        props.states.setSleepersCount(+e.target.closest('li').querySelector('button').innerText);

        e.target.closest('li').querySelector('button').classList.add('button_active')

        props.states.setSleeperCost(+e.target.closest('li').querySelector('button').innerText * 100)
    }

    function countOfSleepers() {
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

        if (props.states.coins >= props.states.sleeperCost) {
            return (
                <button
                    onClick={() => {
                        props.states.setCoins(prev => prev - props.states.sleeperCost);
                        return props.states.setNumSwitch(2)
                    }}
                    className="sleepers__buy"
                >
                    <span>Купить</span>
                    <img src="images/header__coins.svg" alt="Coin"/>
                    <span>{props.states.sleeperCost}</span>
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
                    >{props.states.sleeperCost}</span>
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
            {props.states.sleeperCost !== 0 && isEnough()}
        </div>
    );
};

export default RightsAirdropSleepers;