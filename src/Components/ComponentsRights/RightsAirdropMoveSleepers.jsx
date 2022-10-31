import React, {useEffect} from 'react';

const RightsAirdropMoveSleepers = ({sleepersCount, setNumSwitch}) => {

    let sleepersCountFunc = function () {

        let sleeper = 1
        let sleepers = [];
        while (sleeper <= sleepersCount) {
            sleepers.push(
                <li className="sleepers__item">
                    <button>

                    </button>
                </li>
            )
            sleeper++
        }
        return sleepers;
    }


    let emptySleepers = function () {

        let lengthSleepers = document.querySelectorAll('.airdrop__move ul li').length;
        console.log(lengthSleepers)

        if(lengthSleepers > 0) {
            return (
                <button
                    className="move__submit"
                    disabled
                >
                    <span>Перетащите спальники</span>
                </button>
            )
        } else {
            return (
                <button
                    className="move__submit"
                    onClick={() => setNumSwitch(3)}
                >
                    <span>Подтвердить</span>
                </button>
            )
        }
    }

    return (
        <div className="airdrop__move">
            <h3>Перетащите спальники:</h3>
            <ul>
                {sleepersCountFunc()}
            </ul>
            <div className="move__buttons">
                <button className="move__random">
                    <span>случайно</span>
                    <img src="images/random.svg" alt="Random"/>
                </button>
                {emptySleepers()}
            </div>
        </div>
    );
};

export default RightsAirdropMoveSleepers;