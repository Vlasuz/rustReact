import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import FightAreaTop from "./FightAreaTop";
import {logDOM} from "@testing-library/react";
import {userBalanceAddCoins} from "../../../Redux/Reducers/reducerUserBalance";
import {useNavigate} from "react-router-dom";
import {userInventoryAdd, userInventoryRemove} from "../../../Redux/actions";
import GlobalLink from "../../../Hooks/GlobalLink";

const FightPageFinish = (props) => {

    const userData = useSelector(state => state.reducerUserData.data)
    const response = useSelector(state => state.reducerFightsResponse.response)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [mypersoneWin, setMypersoneWin] = useState(false)
    const [opponetWin, setOpponentWin] = useState(false)
    const [isResults, setIsResults] = useState(false)
    const settings = useSelector(state => state.reducerSettings.settings);

    console.log('finish', response)

    const opponent = response.fight.first_player.user.id === userData.id ? response.fight.second_player : response.fight.first_player
    const myperson = response.fight.first_player.user.id === userData.id ? response.fight.first_player : response.fight.second_player


    const countCoins = (player) => {
        let minusCoinsCount = +document.querySelector('.resources__coins_minus span')?.innerText
        let plusCoinsCount = +document.querySelector('.resources__coins_plus span')?.innerText;


        let coinsCounts = setInterval(function () {

            let itemsLooserPerson = props.roomData.fight_players.filter(item => item.user.id === player[0].user.id)[0].items
            let itemsWinnerPerson = props.roomData.fight_players.filter(item => item.user.id !== player[0].user.id)[0].items

            if (minusCoinsCount === -1) {
                clearInterval(coinsCounts)

                if (player[0].user.id === userData.id) {
                    !itemsWinnerPerson.length && dispatch(userBalanceAddCoins(-1))
                    dispatch(userInventoryAdd([...itemsWinnerPerson, ...itemsLooserPerson]))
                } else {
                    !itemsWinnerPerson.length && dispatch(userBalanceAddCoins(1))
                }

                setTimeout(() => {
                    navigate('/')
                }, 2000)
            } else {

                if (document.querySelector('.resources__coins_minus span')) {

                    document.querySelector('.resources__coins_minus span').innerText = minusCoinsCount--;
                    document.querySelector('.resources__coins_plus span').innerText = plusCoinsCount++;

                    if (!itemsWinnerPerson.length) {
                        if (player[0].user.id === userData.id) {
                            dispatch(userBalanceAddCoins(1))
                        } else {
                            dispatch(userBalanceAddCoins(-1))
                        }
                    }
                }

            }

        }, 2)

    }


    useEffect(() => {

        setTimeout(() => {
            setIsResults(true)
            setMypersoneWin(myperson.win)
            setOpponentWin(opponent.win)
        }, 3000)

        if (response.fight.result === 'end' && (opponetWin || mypersoneWin)) {

            document.querySelector('.section-fight__confetti_active').style.opacity = '1';
            countCoins(response.fight.players.filter(item => item.win))

        }

    }, [opponetWin, mypersoneWin])


    // const opponentDefense = () => {
    //     const armorHead = opponent.user.defense.head ? "x" : "i"
    //     const armorBody = opponent.user.defense.body ? "x" : "i"
    //     const armorLegs = opponent.user.defense.legs ? "x" : "i"
    //
    //     if (opponent?.user?.skin?.gallery) {
    //         let skinSrc = "https://"+GlobalLink()+"/" + opponent.user.skin.gallery[armorHead + armorBody + armorLegs]
    //         return <img src={skinSrc} alt="Persone"/>
    //     } else {
    //         let skinSrc = "https://"+GlobalLink()+"/" + settings.default_fight_skin.gallery[armorHead + armorBody + armorLegs]
    //         return <img src={skinSrc} alt="Persone"/>
    //     }
    //
    // }
    // const mypersonDefense = () => {
    //     const armorHead = myperson.user.defense.head ? "x" : "i"
    //     const armorBody = myperson.user.defense.body ? "x" : "i"
    //     const armorLegs = myperson.user.defense.legs ? "x" : "i"
    //
    //
    //     if(myperson?.user?.skin?.gallery){
    //         let skinSrc = "https://"+GlobalLink()+"/" + myperson.user.skin.gallery[armorHead + armorBody + armorLegs]
    //         return <img src={skinSrc} alt="Persone"/>
    //     } else {
    //         let skinSrc = "https://"+GlobalLink()+"/" + settings.default_fight_skin.gallery[armorHead + armorBody + armorLegs]
    //         return <img src={skinSrc} alt="Persone"/>
    //     }
    // }

    console.log(opponent, myperson)

    return (
        <section className="section-fight">
            <div className="section-fight__lft">
                <div
                    className={"section-fight__confetti " + (isResults && (mypersoneWin ? "section-fight__confetti_active" : ""))}>
                    <img src="../images/confetti-fight.gif" alt="Confetti"/>
                </div>
                {<FightAreaTop userInfo={response?.fight?.first_player?.user.id === userData.id ? response?.fight.first_player : response?.fight.second_player}/>}
                <div className="section-fight__persone">
                    <div className="persone__attacked">
                        <div
                            className={
                                (opponent.attack.includes('head') ? "attacked__bullet_active" : "") +
                                " attacked__bullet attacked__bullet-head" +
                                ((opponent.attack.includes('head') === myperson.defense.includes('head')) ? " attacked__bullet_good" : " attacked__bullet_bad")
                            }
                        >
                            <img src="../images/bullet.svg" alt="Ico"/>
                            <div className="line">

                            </div>
                        </div>
                        <div
                            className={
                                (opponent.attack.includes('body') ? "attacked__bullet_active" : "") +
                                " attacked__bullet attacked__bullet-head" +
                                ((opponent.attack.includes('body') === myperson.defense.includes('body')) ? " attacked__bullet_good" : " attacked__bullet_bad")
                            }
                        >
                            <img src="../images/bullet.svg" alt="Ico"/>
                            <div className="line">

                            </div>
                        </div>
                        <div
                            className={
                                (opponent.attack.includes('legs') ? "attacked__bullet_active" : "") +
                                " attacked__bullet attacked__bullet-head" +
                                ((opponent.attack.includes('legs') === myperson.defense.includes('legs')) ? " attacked__bullet_good" : " attacked__bullet_bad")
                            }
                        >
                            <img src="../images/bullet.svg" alt="Ico"/>
                            <div className="line">

                            </div>
                        </div>
                    </div>
                    <div className="persone__start">
                        {/*{mypersonDefense()}*/}
                    </div>
                </div>
                <div className="section-fight__bottom section-fight__bottom_finish">
                    <div
                        className={"bottom__status " + (isResults && (mypersoneWin ? "bottom__status_winner" : "bottom__status_looser"))}
                    >
                        {(isResults && response.fight.result === 'end') &&
                            <img
                                src={"../images/" + (isResults && (mypersoneWin ? "victory-cup.svg" : "fight-looser.svg"))}
                                alt="Win"/>}
                    </div>
                </div>
            </div>
            <div className="section-fight__center">
                <div className="center__finish">
                    <svg className={"svgTimer"} width="110" height="110" viewBox="-1 -1 110 110">

                        <mask id="msk1">
                            <rect className="maskCircle maskCircle__inner" strokeOpacity=".1" rx="20">

                            </rect>
                        </mask>
                        <mask id="msk2">
                            <rect className="maskCircle maskCircle__inner" strokeOpacity=".2" rx="20">

                            </rect>
                        </mask>
                        <mask id="msk3">
                            <rect className="maskCircle maskCircle__inner" strokeOpacity=".3" rx="20">

                            </rect>
                        </mask>
                        <mask id="msk4">
                            <rect className="maskCircle maskCircle__inner" strokeOpacity=".4" rx="20">

                            </rect>
                        </mask>
                        <mask id="msk5">
                            <rect className="maskCircle maskCircle__inner" strokeOpacity=".5" rx="20">

                            </rect>
                        </mask>
                        <mask id="msk6">
                            <rect className="maskCircle maskCircle__inner" strokeOpacity=".6" rx="20">

                            </rect>
                        </mask>
                        <mask id="msk7">
                            <rect className="maskCircle maskCircle__inner" strokeOpacity=".7" rx="20">

                            </rect>
                        </mask>
                        <mask id="msk8">
                            <rect className="maskCircle maskCircle__inner" strokeOpacity=".8" rx="20">

                            </rect>
                        </mask>
                        <mask id="msk9">
                            <rect className="maskCircle maskCircle__inner" strokeOpacity=".9" rx="20">

                            </rect>
                        </mask>
                        <mask id="msk10">
                            <rect className="maskCircle maskCircle__inner" strokeOpacity="1" rx="20">

                            </rect>
                        </mask>


                        <rect className="maskCircle" rx="20" mask="url(#msk1)"></rect>
                        <rect className="maskCircle" rx="20" mask="url(#msk2)"></rect>
                        <rect className="maskCircle" rx="20" mask="url(#msk3)"></rect>
                        <rect className="maskCircle" rx="20" mask="url(#msk4)"></rect>
                        <rect className="maskCircle" rx="20" mask="url(#msk5)"></rect>
                        <rect className="maskCircle" rx="20" mask="url(#msk6)"></rect>
                        <rect className="maskCircle" rx="20" mask="url(#msk7)"></rect>
                        <rect className="maskCircle" rx="20" mask="url(#msk8)"></rect>
                        <rect className="maskCircle" rx="20" mask="url(#msk9)"></rect>
                        <rect className="maskCircle" rx="20" mask="url(#msk10)"></rect>

                    </svg>
                    <img src="../images/fight-finish-icon.svg" alt="Ico"/>
                    <p>Дуэль</p>
                </div>
            </div>
            <div className="section-fight__rht">
                <div
                    className={"section-fight__confetti " + (isResults && (opponetWin ? "section-fight__confetti_active" : ""))}>
                    <img src="../images/confetti-fight.gif" alt="Confetti"/>
                </div>
                {<FightAreaTop userInfo={response?.fight?.first_player?.user.id !== userData.id ? response?.fight.first_player : response?.fight.second_player}/>}
                <div className="section-fight__persone section-fight__persone-hit">
                    <div className="persone__attacked">
                        <div
                            className={
                                (myperson.attack.includes('head') ? "attacked__bullet_active" : "") +
                                " attacked__bullet attacked__bullet-head" +
                                ((opponent.defense.includes('head') === myperson.attack.includes('head')) ? " attacked__bullet_good" : " attacked__bullet_bad")
                            }
                        >
                            <img src="../images/bullet.svg" alt="Ico"/>
                            <div className="line"/>
                        </div>
                        <div
                            className={
                                (myperson.attack.includes('body') ? "attacked__bullet_active" : "") +
                                " attacked__bullet attacked__bullet-body" +
                                ((opponent.defense.includes('body') === myperson.attack.includes('body')) ? " attacked__bullet_good" : " attacked__bullet_bad")
                            }
                        >
                            <img src="../images/bullet.svg" alt="Ico"/>
                            <div className="line"/>
                        </div>
                        <div
                            className={
                                (myperson.attack.includes('legs') ? "attacked__bullet_active" : "") +
                                " attacked__bullet attacked__bullet-legs" +
                                ((opponent.defense.includes('legs') === myperson.attack.includes('legs')) ? " attacked__bullet_good" : " attacked__bullet_bad")
                            }
                        >
                            <img src="../images/bullet.svg" alt="Ico"/>
                            <div className="line"/>
                        </div>
                    </div>
                    <div className="persone__red">
                        <img className="head-hit" src="../images/head-hit.png" alt="Photo" width="72"/>
                        <img className="body-hit" src="../images/body-hit.png" alt="Photo" width="300"/>
                        <img className="legs-hit" src="../images/legs-hit.png" alt="Photo" width="300"/>
                    </div>
                    <div className="persone__start">
                        {/*{opponentDefense()}*/}
                    </div>
                </div>
                <div className="section-fight__bottom section-fight__bottom_finish">
                    <div
                        className={"bottom__status " + (isResults && (opponetWin ? "bottom__status_winner" : "bottom__status_looser"))}>
                        {(isResults && response.fight.result === 'end') &&
                            <img
                                src={"../images/" + (isResults && (opponetWin ? "victory-cup.svg" : "fight-looser.svg"))}
                                alt="Win"/>}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FightPageFinish;