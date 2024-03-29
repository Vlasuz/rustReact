import React, {useState} from 'react';
import {airdropStepRights} from "../../../Redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {handleSubmitAirdrop} from "../../../Redux/Reducers/reducerSubmitAirdrop";
import axios from "axios";
import {reducerAirdropSocket} from "../../../Redux/Reducers/reducerAirdropSocket";
import {getCookie} from "../../../Hooks/GetCookies";
import {
    buySleepers,
    clearSleeper,
    removeBoughtSleeper, removeSetSleeper,
    setSleepers
} from "../../../Redux/Reducers/reducerAirdropMySleepers";
import {userBalanceRemoveCoins, userBalanceSetCoins} from "../../../Redux/Reducers/reducerUserBalance";
import {setNotice} from "../../../Redux/Reducers/reducerNotice";
import GlobalLink from "../../../Hooks/GlobalLink";
import Translate from "../../../Hooks/Translate";
import {setSound} from "../../../Redux/Reducers/reducerSound";

const RightsAirdropSleepersButtons = () => {

    const dispatch = useDispatch()
    const responseAirdrop = useSelector(state => state.reducerAirdropSocket.response)
    const sleepers = useSelector(state => state.reducerMySleepers)
    const settings = useSelector(state => state.reducerSettings.settings)
    const [isSubmitGame, setIsSubmitGame] = useState(false)

    const letsStart = () => {
        setIsSubmitGame(true)
        axios.defaults.headers.post['Authorization'] = `Bearer ${getCookie('access_token')}`;
        axios.post("https://"+GlobalLink()+'/api/airdrop/bags/choose?game_id=' + responseAirdrop.airdrop.id, {
            "bags": sleepers.setSleepers
        }).then(res => {

            if(res.data.message === 'not_enable_now') return dispatch((setNotice('not_enable_airdrop')));

            if(res.data.status) {
                dispatch(airdropStepRights(3))
                dispatch(userBalanceSetCoins(+res.data.message))
                dispatch(handleSubmitAirdrop(true))
                document.querySelectorAll('.sleepers__item')?.forEach(item => item?.remove())
                dispatch(setSound('sound6'))
            }
        })
    }


    const randomMove = () => {
        dispatch(removeSetSleeper())
        dispatch(setSound(''))

        setTimeout(() => {
            dispatch(setSound('sound16'))
        }, 10)

        document.querySelectorAll('.sleepers__item').forEach((item, itemNum) => {

            let maxX = document.querySelector('.section-map__map').clientWidth - 150
            let maxY = document.querySelector('.section-map__map').clientHeight - 150

            let randomX = Math.floor(Math.random() * (maxX - 150) + 150);
            let randomY = Math.floor(Math.random() * (maxY - 150) + 150);

            item.style.position = 'absolute';
            item.style.left = randomX + 'px';
            item.style.top = randomY + 'px';

            if (!item.classList.contains('sleepers__item_moved')) {
                document.querySelector('.map__points').append(item)

                dispatch(setSleepers({
                    x_pos: Number(randomX / 1500),
                    y_pos: Number(randomY / 1500)
                }))

                dispatch(removeBoughtSleeper())
                item.classList.add('sleepers__item_moved');
            } else {
                dispatch(setSleepers({
                    x_pos: Number(randomX / 1500),
                    y_pos: Number(randomY / 1500)
                }))
            }


        })

    }


    return (
        <div className="move__buttons">
            <button
                className="move__random"
                onClick={() => randomMove()}>
                <span>
                    <Translate>random</Translate>
                </span>
                <img src="../images/random.svg" alt="Random"/>
            </button>
            {
                (!!sleepers.boughtSleepers.length || isSubmitGame) ?
                    <button className="move__random" onClick={e => dispatch(setNotice("not_set_all_sleepers"))}>
                        <span>
                            <Translate>submit</Translate>
                        </span>
                    </button> :
                    <button
                        className="move__submit"
                        onClick={() => letsStart()}>
                        <span>
                            <Translate>submit</Translate>
                        </span>
                    </button>
            }
        </div>
    );
};

export default RightsAirdropSleepersButtons;