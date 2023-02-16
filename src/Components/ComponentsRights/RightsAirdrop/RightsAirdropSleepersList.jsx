import React from 'react';
import {useSelector} from "react-redux";

const RightsAirdropSleepersList = (props) => {

    const sleepersList = useSelector(state => state.reducerAirdropCountSleepers.sleepers)

    let sleepersCountFunc = function () {

        let sleeper = 1
        let sleepers = [];
        while (sleeper <= sleepersList) {
            sleepers.push(
                <li
                    key={sleeper}
                    className="sleepers__item">
                    <div className="point__winner-table">
                        <img className={'confetti-image'} src="../images/confetti-map.gif" alt="ico"/>
                        <div className="table__left">
                            <img src="../images/user.jpeg" alt="Photo"/>
                            <span>CulverCriegi</span>
                        </div>
                        <div className="table__right">
                            <p>Забирает банк:</p>
                            <div className="right__bottom">
                                <img src="../images/header__coins.svg" alt="Coins"/>
                                <span>750</span>
                            </div>
                        </div>
                    </div>
                    <button />
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