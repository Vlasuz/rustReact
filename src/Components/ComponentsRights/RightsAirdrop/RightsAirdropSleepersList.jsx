import React from 'react';

const RightsAirdropSleepersList = (props) => {

    let sleepersCountFunc = function () {

        let sleeper = 1
        let sleepers = [];
        while (sleeper <= props.states.sleepersCount) {
            sleepers.push(
                <li
                    key={sleeper}
                    className="sleepers__item"
                >
                    <div className="point__winner-table">
                        <div className="table__left">
                            <img src="images/user.jpeg" alt="Photo"/>
                            <span>CulverCriegi</span>
                        </div>
                        <div className="table__right">
                            <p>Забирает банк:</p>
                            <div className="right__bottom">
                                <img src="images/header__coins.svg" alt="Coins"/>
                                <span>750</span>
                            </div>
                        </div>
                    </div>
                    <button>

                    </button>
                </li>
            )
            sleeper++
        }
        return sleepers;
    }

    return (
        <>
            <h3>Перетащите спальники:</h3>
            <ul>
                {sleepersCountFunc()}
            </ul>
        </>
    );
};

export default RightsAirdropSleepersList;