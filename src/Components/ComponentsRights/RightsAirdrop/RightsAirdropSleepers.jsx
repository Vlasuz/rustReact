import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {airdropCountSleepers, airdropStepRights} from "../../../Redux/actions";
import {buySleepers, setSleepers} from "../../../Redux/Reducers/reducerAirdropMySleepers";
import {userBalanceRemoveCoins} from "../../../Redux/Reducers/reducerUserBalance";
import Translate from "../../../Hooks/Translate";
import {setNotice} from "../../../Redux/Reducers/reducerNotice";
import {setSound} from "../../../Redux/Reducers/reducerSound";

const RightsAirdropSleepers = () => {

    const dispatch = useDispatch();
    const [countSleepers, setCountSleepers] = useState(0)
    const balance = useSelector(state => state.reducerUserBalance.balance)
    const settings = useSelector(state => state.reducerSettings.settings)

    let chooseSleepers = function (e, sleeper) {

        dispatch(setSound(''))
        setTimeout(() => {
            dispatch(setSound('sound18'))
        }, 10)

        setCountSleepers(sleeper)

        document.querySelector('.airdrop__sleepers .button_active')?.classList.remove('button_active')
        e.target.closest('li').classList.add('button_active')
    }


    const sleepers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const handleBuySleepers = () => {
        dispatch(setSound('sound19'))
        dispatch(airdropStepRights(2))
        dispatch(buySleepers(countSleepers))
        dispatch(setNotice("success_to_buy_bags"))
    }


    return (
        <div className="airdrop__sleepers">
            <h3>
                <Translate>count_of_bags</Translate>:
            </h3>
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
                countSleepers === 0 ?
                    <button className="sleepers__buy">
                        <span style={{color: '#777'}}>
                            <Translate>choose_count_of_bags</Translate>
                        </span>
                    </button>
                    :
                    balance >= countSleepers * settings.airdrop_bag_price ?
                        <button onClick={handleBuySleepers} className="sleepers__buy">
                            <span>
                                <Translate>buy</Translate>
                            </span>
                            <img src="../images/header__coins.svg" alt="Coin"/>
                            <span>
                                {countSleepers * settings.airdrop_bag_price}
                            </span>
                        </button>
                        :
                        <button className="sleepers__buy">
                            <span style={{color: '#777'}}>
                                <Translate>you_dont_have_enough_money_short</Translate>
                            </span>
                            <img src="../images/header__coins.svg" alt="Coin"/>
                            <span style={{color: '#777'}}>
                                {countSleepers * settings.airdrop_bag_price}
                            </span>
                        </button>
            }

        </div>
    );
};

export default RightsAirdropSleepers;