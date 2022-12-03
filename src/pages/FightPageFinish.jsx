import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const FightPageFinish = (props) => {

    const [shieldOpponent, setShieldOpponent] = useState([true, false, true])
    const [hitMeOpponents, setHitMeOpponents] = useState(['', true, true])

    const [isWinLFT, setIsWinLFT] = useState(false)
    const [isWinRHT, setIsWinRHT] = useState(false)

    const [isFinishFight, setIsFinishFight] = useState(false)


    function minusingCoins() {
        let minusCoinsCount = +document.querySelector('.resources__coins_minus span').innerText

        let minusCounts = setInterval(function () {
            for (minusCoinsCount; minusCoinsCount >= 0;) {
                document.querySelector('.resources__coins_minus span').innerText = minusCoinsCount--;
                break;
            }
            if (minusCoinsCount == -1) {
                document.querySelector('.resources__coins_minus').classList.add('resources__coins_none')
                clearInterval(minusCounts)
            }
        }, 20)
    }


    // WHO WINNER
    let winnerLFT = true;
    let winnerRHT = true;

    hitMeOpponents.map((item, itemNum) => {
        if (item !== '' && winnerLFT) {
            if (item === props.states.fightsYourArmor[itemNum]) {
                winnerLFT = true
            } else {
                winnerLFT = false
            }
        }
    })
    props.states.arrayForHit.map((item, itemNum) => {
        if (item !== '' && winnerRHT) {
            if (item === shieldOpponent[itemNum]) {
                winnerRHT = true
            } else {
                winnerRHT = false
            }
        }
    })

    let isWinnerLFT = () => false;
    let isWinnerRHT = () => false;

    setTimeout(() => {
        if (winnerLFT !== winnerRHT) {

            setIsFinishFight(true)

            if (winnerLFT) {
                setIsWinLFT(true)
            } else {
                setIsWinLFT(false)
            }

            if (winnerRHT) {
                setIsWinRHT(true)
            } else {
                setIsWinRHT(false)
            }

        } else {
            document.querySelector('.link-to-hit').click()
        }
    }, 3000)

    // WHO WINNER


    useEffect(() => {
        setTimeout(function () {
            // document.querySelector('.section-fight__confetti_active img').setAttribute('src', 'images/confetti.gif')
            document.querySelector('.section-fight__confetti_active').style.opacity = '1';

            minusingCoins();

        }, 3000)
    })

    const finishArmorImage = () => {
        let arrayForImage = []
        props.states.fightsYourArmor.map(item => {
            arrayForImage.push(item ? String(item).replace(true, 's') : String(item).replace(false, 'n'))
        })
        let nameOfImage = 'persone-' + arrayForImage.join('') + '.png';
        return 'images/' + nameOfImage;
    }

    return (
        <section className="section-fight">
            <Link className={"link-to-hit"} to={'/fight-running'}/>
            <div className="section-fight__lft">
                <div className={"section-fight__confetti " + (isWinLFT ? "section-fight__confetti_active" : "")}>
                    <img src="images/confetti.gif" alt="Confetti"/>
                </div>
                <div className="section-fight__top">
                    <div className="section-fight__user">
                        <div className="user__photo">
                            <img src="images/user.jpeg" alt="User"/>
                        </div>
                        <div className="user__name">Семён</div>
                    </div>
                    <div className="section-fight__resources">
                        <div className="resources__clothes">
                            <button
                                className="clothes__head"
                                onClick={e => e.target.closest('.resources__clothes').querySelector('.clothes__body').classList.toggle('clothes__body_active')}
                            >
                                <img src="images/clothes.svg" alt="Ico"/>
                            </button>
                            <div className="clothes__body">
                                <ul>
                                    <li>
                                        <div className="clothes__cool clothes__cool_green">

                                        </div>
                                        <img src="images/weapon.png" alt="Photo"/>
                                    </li>
                                    <li>
                                        <div className="clothes__cool clothes__cool_green">

                                        </div>
                                        <img src="images/weapon.png" alt="Photo"/>
                                    </li>
                                    <li>
                                        <div className="clothes__cool clothes__cool_green">

                                        </div>
                                        <img src="images/weapon.png" alt="Photo"/>
                                    </li>
                                    <li>
                                        <div className="clothes__cool clothes__cool_green">

                                        </div>
                                        <img src="images/weapon.png" alt="Photo"/>
                                    </li>
                                    <li>
                                        <div className="clothes__cool clothes__cool_green">

                                        </div>
                                        <img src="images/weapon.png" alt="Photo"/>
                                    </li>
                                    <li>
                                        <div className="clothes__cool clothes__cool_green">

                                        </div>
                                        <img src="images/weapon.png" alt="Photo"/>
                                    </li>
                                    <li className="count">
                                        <span>+3</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={"resources__coins " + (isWinLFT ? "" : "resources__coins_minus")}>
                            <img src="images/header__coins.svg" alt="Ico"/>
                            <span>100</span>
                        </div>
                    </div>
                </div>
                <div className="section-fight__persone">
                    <div className="persone__attacked">
                        <div
                            className={
                                (hitMeOpponents[0] ? "attacked__bullet_active" : "") +
                                " attacked__bullet attacked__bullet-head" +
                                ((hitMeOpponents[0] === props.states.fightsYourArmor[0]) ? " attacked__bullet_good" : " attacked__bullet_bad")
                            }
                        >
                            <img src="images/bullet.svg" alt="Ico"/>
                            <div className="line">

                            </div>
                        </div>
                        <div
                            className={
                                (hitMeOpponents[1] ? "attacked__bullet_active" : "") +
                                " attacked__bullet attacked__bullet-head" +
                                ((hitMeOpponents[1] === props.states.fightsYourArmor[1]) ? " attacked__bullet_good" : " attacked__bullet_bad")
                            }
                        >
                            <img src="images/bullet.svg" alt="Ico"/>
                            <div className="line">

                            </div>
                        </div>
                        <div
                            className={
                                (hitMeOpponents[2] ? "attacked__bullet_active" : "") +
                                " attacked__bullet attacked__bullet-head" +
                                ((hitMeOpponents[2] === props.states.fightsYourArmor[2]) ? " attacked__bullet_good" : " attacked__bullet_bad")
                            }
                        >
                            <img src="images/bullet.svg" alt="Ico"/>
                            <div className="line">

                            </div>
                        </div>
                    </div>
                    <div className="persone__start">
                        <img src={finishArmorImage()} alt="Persone"/>
                    </div>
                </div>
                <div className="section-fight__bottom section-fight__bottom_finish">
                    <div
                        className={"bottom__status " + (isWinLFT ? "bottom__status_winner" : "bottom__status_looser")}
                    >
                        {isFinishFight && <img src={"images/" + (isWinLFT ? "victory-cup.svg" : "fight-looser.svg")} alt="Win"/>}
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
                    <img src="images/fight-finish-icon.svg" alt="Ico"/>
                    <p>Дуэль</p>
                </div>
            </div>
            <div className="section-fight__rht">
                <div className={"section-fight__confetti " + (isWinRHT ? "section-fight__confetti_active" : "")}>
                    <img src="images/confetti.gif" alt="Confetti"/>
                </div>
                <div className="section-fight__top">
                    <div className="section-fight__user">
                        <div className="user__photo">
                            <img src="images/user.jpeg" alt="User"/>
                        </div>
                        <div className="user__name">Семён</div>
                    </div>
                    <div className="section-fight__resources">
                        <div className="resources__clothes">
                            <button
                                className="clothes__head"
                                onClick={e => e.target.closest('.resources__clothes').querySelector('.clothes__body').classList.toggle('clothes__body_active')}
                            >
                                <img src="images/clothes.svg" alt="Ico"/>
                            </button>
                            <div className="clothes__body">
                                <ul>
                                    <li>
                                        <div className="clothes__cool clothes__cool_green">

                                        </div>
                                        <img src="images/weapon.png" alt="Photo"/>
                                    </li>
                                    <li>
                                        <div className="clothes__cool clothes__cool_green">

                                        </div>
                                        <img src="images/weapon.png" alt="Photo"/>
                                    </li>
                                    <li>
                                        <div className="clothes__cool clothes__cool_green">

                                        </div>
                                        <img src="images/weapon.png" alt="Photo"/>
                                    </li>
                                    <li>
                                        <div className="clothes__cool clothes__cool_green">

                                        </div>
                                        <img src="images/weapon.png" alt="Photo"/>
                                    </li>
                                    <li>
                                        <div className="clothes__cool clothes__cool_green">

                                        </div>
                                        <img src="images/weapon.png" alt="Photo"/>
                                    </li>
                                    <li>
                                        <div className="clothes__cool clothes__cool_green">

                                        </div>
                                        <img src="images/weapon.png" alt="Photo"/>
                                    </li>
                                    <li className="count">
                                        <span>+3</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={"resources__coins " + (isWinRHT ? "" : "resources__coins_minus")}>
                            <img src="images/header__coins.svg" alt="Ico"/>
                            <span>100</span>
                        </div>
                    </div>
                </div>
                <div className="section-fight__persone section-fight__persone-hit">
                    <div className="persone__attacked">
                        <div
                            // className="attacked__bullet_good"
                            className={
                                (props.states.arrayForHit[0] ? "attacked__bullet_active" : "") +
                                " attacked__bullet attacked__bullet-head" +
                                ((shieldOpponent[0] === props.states.arrayForHit[0]) ? " attacked__bullet_good" : " attacked__bullet_bad")
                            }
                        >
                            <img src="images/bullet.svg" alt="Ico"/>
                            <div className="line">

                            </div>
                        </div>
                        <div
                            // className="attacked__bullet attacked__bullet_active attacked__bullet_bad "
                            className={
                                (props.states.arrayForHit[1] ? "attacked__bullet_active" : "") +
                                " attacked__bullet attacked__bullet-body" +
                                ((shieldOpponent[1] === props.states.arrayForHit[1]) ? " attacked__bullet_good" : " attacked__bullet_bad")
                            }
                        >
                            <img src="images/bullet.svg" alt="Ico"/>
                            <div className="line">

                            </div>
                        </div>
                        <div
                            className={
                                (props.states.arrayForHit[2] ? "attacked__bullet_active" : "") +
                                " attacked__bullet attacked__bullet-legs" +
                                ((shieldOpponent[2] === props.states.arrayForHit[2]) ? " attacked__bullet_good" : " attacked__bullet_bad")
                            }
                        >
                            <img src="images/bullet.svg" alt="Ico"/>
                            <div className="line">

                            </div>
                        </div>
                    </div>
                    <div className="persone__red">
                        <img className="head-hit" src="images/head-hit.png" alt="Photo" width="72"/>
                        <img className="body-hit" src="images/body-hit.png" alt="Photo" width="300"/>
                        <img className="legs-hit" src="images/legs-hit.png" alt="Photo" width="300"/>
                    </div>
                    <div className="persone__start">
                        <img src="images/persone-sns.png" alt="Persone"/>
                    </div>
                </div>
                <div className="section-fight__bottom section-fight__bottom_finish">
                    <div
                        className={"bottom__status " + (isWinRHT ? "bottom__status_winner" : "bottom__status_looser")}
                    >
                        {isFinishFight && <img src={"images/" + (isWinRHT ? "victory-cup.svg" : "fight-looser.svg")} alt="Win"/>}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FightPageFinish;