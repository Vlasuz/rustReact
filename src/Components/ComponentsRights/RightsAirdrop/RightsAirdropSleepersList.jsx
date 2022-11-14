import React from 'react';

const RightsAirdropSleepersList = ({sleepersCount}) => {

    let sleepersCountFunc = function () {

        let sleeper = 1
        let sleepers = [];
        while (sleeper <= sleepersCount) {
            sleepers.push(
                <li
                    className="sleepers__item"
                >
                    <div className="li__winner-block">
                        <div className="circle1">

                        </div>
                        <div className="circle2">

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