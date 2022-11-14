import React, {useEffect, useState} from 'react';

const FightPageFinish = ({arrayForHit, setArrayForHit}) => {

    const [shieldOpponent, setShieldOpponent] = useState([true, false, true])

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

    useEffect(() => {
        setTimeout(function () {
            document.querySelector('.section-fight__confetti_active img').setAttribute('src', 'images/confetti.webp')
            document.querySelector('.section-fight__confetti_active').style.opacity = '1';

            minusingCoins();

        }, 3000)
    })


    return (
        <section className="section-fight">
            <div className="section-fight__lft">
                <div className="section-fight__confetti section-fight__confetti_active">
                    <img src="" alt="Confetti"/>
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
                        <div className="resources__coins">
                            <img src="images/header__coins.svg" alt="Ico"/>
                            <span>100</span>
                        </div>
                    </div>
                </div>
                <div className="section-fight__persone">
                    <div className="persone__attacked">
                        <div className="attacked__bullet attacked__bullet-head">
                            <img src="images/bullet.svg" alt="Ico"/>
                            <div className="line">

                            </div>
                        </div>
                        <div
                            className="attacked__bullet attacked__bullet-body attacked__bullet_active attacked__bullet_good">
                            <img src="images/bullet.svg" alt="Ico"/>
                            <div className="line">

                            </div>
                        </div>
                        <div
                            className="attacked__bullet attacked__bullet-legs attacked__bullet_active attacked__bullet_good">
                            <img src="images/bullet.svg" alt="Ico"/>
                            <div className="line">

                            </div>
                        </div>
                    </div>
                    <div className="persone__green">
                        <img className="head" src="images/head.png" alt="Photo" width="72"/>
                        <img className="body" src="images/body.png" alt="Photo" width="295"/>
                        <img className="legs" src="images/legs.png" alt="Photo" width="145"/>
                    </div>
                    <div className="persone__start">
                        <img src="images/persone-nss.png" alt="Persone"/>
                    </div>
                </div>
                <div className="section-fight__bottom section-fight__bottom_finish">
                    <div className="bottom__status bottom__status_winner">
                        <img src="images/victory-cup.svg" alt="Win"/>
                    </div>
                </div>
            </div>
            <div className="section-fight__center">
                <div className="center__finish">
                    <img src="images/fight-finish-icon.svg" alt="Ico"/>
                    <p>Дуэль</p>
                </div>
            </div>
            <div className="section-fight__rht">
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
                        <div className="resources__coins resources__coins_minus">
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
                                (arrayForHit[0] ? "attacked__bullet_active" : "") +
                                " attacked__bullet attacked__bullet-head" +
                                ((shieldOpponent[0] == arrayForHit[0]) ? " attacked__bullet_good" : " attacked__bullet_bad")
                            }
                        >
                            <img src="images/bullet.svg" alt="Ico"/>
                            <div className="line">

                            </div>
                        </div>
                        <div
                            // className="attacked__bullet attacked__bullet_active attacked__bullet_bad "
                            className={
                                (arrayForHit[1] ? "attacked__bullet_active" : "") +
                                " attacked__bullet attacked__bullet-body" +
                                ((shieldOpponent[1] == arrayForHit[1]) ? " attacked__bullet_good" : " attacked__bullet_bad")
                            }
                        >
                            <img src="images/bullet.svg" alt="Ico"/>
                            <div className="line">

                            </div>
                        </div>
                        <div
                            className={
                                (arrayForHit[2] ? "attacked__bullet_active" : "") +
                                " attacked__bullet attacked__bullet-legs" +
                                ((shieldOpponent[2] == arrayForHit[2]) ? " attacked__bullet_good" : " attacked__bullet_bad")
                            }
                        >
                            <img src="images/bullet.svg" alt="Ico"/>
                            <div className="line">

                            </div>
                        </div>
                    </div>
                    <div className="persone__red">
                        <img className="head-hit" src="images/head-hit.png" alt="Photo" width="72"/>
                        <img className="body-hit" src="images/body-hit.png" alt="Photo" width="295"/>
                        <img className="legs-hit" src="images/legs-hit.png" alt="Photo" width="145"/>
                    </div>
                    <div className="persone__start">
                        <img src="images/persone-sns.png" alt="Persone"/>
                    </div>
                </div>
                <div className="section-fight__bottom section-fight__bottom_finish">
                    <div className="bottom__status bottom__status_looser">
                        <img src="images/fight-looser.svg" alt="Looser"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FightPageFinish;