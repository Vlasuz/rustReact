import React, {useState} from 'react';

const RightsShopRange = ({valueOfRange, setValueOfRange, sumOfRange, setSumOfRange, maxCoins}) => {

    let changeRange = function (e) {
        let sum = Math.round(maxCoins * e.target.value / 100)

        setValueOfRange(e.target.value)
        setSumOfRange(sum)
    }

    return (
        <div className="postamat__range">
            <input
                type="range"
                onChange={e => changeRange(e)}
                value={valueOfRange}
            />
            <div className="range__text">
                <img src="images/header__coins.svg" alt="Coin"/>
                <p>{sumOfRange} — {maxCoins}</p>
            </div>
        </div>
    );
};

export default RightsShopRange;