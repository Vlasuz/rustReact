import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import FightAreaTop from "./FightAreaTop";
import {logDOM} from "@testing-library/react";
import {userBalanceAddCoins} from "../../../Redux/Reducers/reducerUserBalance";
import {useNavigate} from "react-router-dom";
import {userInventoryAdd, userInventoryRemove} from "../../../Redux/actions";
import GlobalLink from "../../../Hooks/GlobalLink";
import Translate from "../../../Hooks/Translate";

const FightPageFinish = (props) => {

    const userData = useSelector(state => state.reducerUserData.data)
    const response = useSelector(state => state.reducerFightsResponse.response)
    const [isResults, setIsResults] = useState(false)
    const settings = useSelector(state => state.reducerSettings.settings);
    const [isActivePage, setIsActivePage] = useState('')
    const dispatch = useDispatch()

    const opponent = response?.fight?.first_player?.user.id === userData?.id ? response?.fight?.second_player : response?.fight?.first_player
    const myperson = response?.fight?.first_player?.user.id === userData?.id ? response?.fight?.first_player : response?.fight?.second_player


    const opponentDefense = () => {
        const armorHead = opponent?.defense.includes("head") ? "x" : "i"
        const armorBody = opponent?.defense.includes("body") ? "x" : "i"
        const armorLegs = opponent?.defense.includes("legs") ? "x" : "i"

        const skin = opponent?.user?.chosen_skin?.gallery ?
            "https://" + GlobalLink() + "/" + opponent?.user?.chosen_skin?.gallery[armorHead + armorBody + armorLegs] :
            "https://" + GlobalLink() + "/" + settings?.default_fight_skin?.gallery[armorHead + armorBody + armorLegs];

        return <img src={skin} alt="Persone"/>

    }
    const mypersonDefense = () => {
        const armorHead = myperson?.defense.includes("head") ? "x" : "i"
        const armorBody = myperson?.defense.includes("body") ? "x" : "i"
        const armorLegs = myperson?.defense.includes("legs") ? "x" : "i"

        const skin = myperson?.user?.chosen_skin?.gallery ?
            "https://" + GlobalLink() + "/" + myperson?.user?.chosen_skin?.gallery[armorHead + armorBody + armorLegs] :
            "https://" + GlobalLink() + "/" + settings?.default_fight_skin?.gallery[armorHead + armorBody + armorLegs];

        return <img src={skin} alt="Persone"/>
    }


    useEffect(() => {

        if(response?.fight?.first_player?.hit !== response?.fight?.second_player.hit) {

            if(response?.fight.game_state === 'ended'){
                setIsResults(true)
                console.log('ended')

                if(userData.id === response.fight.winner.user.id) {
                    console.log('clothes winner')
                    console.log(response?.fight?.first_player)
                    !!response?.fight?.first_player?.items?.length && dispatch(userInventoryAdd([...response?.fight?.first_player.items, ...response?.fight?.second_player.items]))
                }

            }

        } else {
            setTimeout(() => {
                setIsActivePage(' section-fight_hide')
            }, 6500)
        }

    }, [response])

    return (
        <section className={"section-fight" + isActivePage}>
            <div className="section-fight__lft">
                <div
                    className={"section-fight__confetti " + (isResults && response?.fight?.winner?.user?.id === userData?.id ? "section-fight__confetti_active" : "")}>
                    <img src="../images/confetti-fight.gif" alt="Confetti"/>
                </div>
                {<FightAreaTop
                    userInfo={response?.fight?.first_player?.user.id === userData?.id ? response?.fight?.first_player : response?.fight?.second_player}/>}
                <div className="section-fight__persone">
                    <div className="persone__attacked">
                        <div
                            className={
                                (opponent?.attack.includes('head') ? "attacked__bullet_active" : "") +
                                " attacked__bullet attacked__bullet-head" +
                                ((opponent?.attack.includes('head') === myperson?.defense.includes('head')) ? " attacked__bullet_good" : " attacked__bullet_bad")
                            }
                        >
                            <img src="../images/bullet.svg" alt="Ico"/>
                            <div className="line">

                            </div>
                        </div>
                        <div
                            className={
                                (opponent?.attack.includes('body') ? "attacked__bullet_active" : "") +
                                " attacked__bullet attacked__bullet-head" +
                                ((opponent?.attack.includes('body') === myperson?.defense.includes('body')) ? " attacked__bullet_good" : " attacked__bullet_bad")
                            }
                        >
                            <img src="../images/bullet.svg" alt="Ico"/>
                            <div className="line">

                            </div>
                        </div>
                        <div
                            className={
                                (opponent?.attack.includes('legs') ? "attacked__bullet_active" : "") +
                                " attacked__bullet attacked__bullet-head" +
                                ((opponent?.attack.includes('legs') === myperson?.defense.includes('legs')) ? " attacked__bullet_good" : " attacked__bullet_bad")
                            }
                        >
                            <img src="../images/bullet.svg" alt="Ico"/>
                            <div className="line">

                            </div>
                        </div>
                    </div>
                    <div className="persone__start">
                        {mypersonDefense()}
                    </div>
                </div>
                <div className="section-fight__bottom section-fight__bottom_finish">
                    {
                        isResults &&
                        <div className={"bottom__status " + (response?.fight?.winner?.user?.id === userData?.id ? "bottom__status_winner" : "bottom__status_looser")}>
                            <img
                                src={"../images/" + (response?.fight?.winner?.user?.id === userData?.id ? "victory-cup.svg" : "fight-looser.svg")}
                                alt="Win"/>
                        </div>
                    }
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
                    <p>
                        <Translate>duel</Translate>
                    </p>
                </div>
            </div>
            <div className="section-fight__rht">
                <div
                    className={"section-fight__confetti " + (isResults && response?.fight?.winner?.user?.id !== userData?.id ? " section-fight__confetti_active" : "")}>
                    <img src="../images/confetti-fight.gif" alt="Confetti"/>
                </div>
                {<FightAreaTop
                    userInfo={response?.fight?.first_player?.user.id !== userData?.id ? response?.fight?.first_player : response?.fight?.second_player}/>}
                <div className="section-fight__persone section-fight__persone-hit">
                    <div className="persone__attacked">
                        <div
                            className={
                                (myperson?.attack.includes('head') ? "attacked__bullet_active" : "") +
                                " attacked__bullet attacked__bullet-head" +
                                ((opponent?.defense.includes('head') === myperson?.attack.includes('head')) ? " attacked__bullet_good" : " attacked__bullet_bad")
                            }
                        >
                            <img src="../images/bullet.svg" alt="Ico"/>
                            <div className="line"/>
                        </div>
                        <div
                            className={
                                (myperson?.attack.includes('body') ? "attacked__bullet_active" : "") +
                                " attacked__bullet attacked__bullet-body" +
                                ((opponent?.defense.includes('body') === myperson?.attack.includes('body')) ? " attacked__bullet_good" : " attacked__bullet_bad")
                            }
                        >
                            <img src="../images/bullet.svg" alt="Ico"/>
                            <div className="line"/>
                        </div>
                        <div
                            className={
                                (myperson?.attack.includes('legs') ? "attacked__bullet_active" : "") +
                                " attacked__bullet attacked__bullet-legs" +
                                ((opponent?.defense.includes('legs') === myperson?.attack.includes('legs')) ? " attacked__bullet_good" : " attacked__bullet_bad")
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
                        {opponentDefense()}
                    </div>
                </div>
                <div className="section-fight__bottom section-fight__bottom_finish">
                    {
                        isResults &&
                        <div className={"bottom__status " + (response?.fight?.winner?.user?.id !== userData?.id ? "bottom__status_winner" : "bottom__status_looser")}>
                            <img
                                src={"../images/" + (response?.fight?.winner?.user?.id !== userData?.id ? "victory-cup.svg" : "fight-looser.svg")}
                                alt="Win"/>
                        </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default FightPageFinish;