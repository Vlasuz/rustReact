import React from 'react';
import {Link, Redirect} from "react-router-dom";

const FightPageWaiting = () => {

    setTimeout(() => {
        document.querySelector('.go-to-fight').click()
    }, 2000)

    return (
        <section className="section-fight">
            <Link className={"go-to-fight"} to={"/fight-running"}>
                Go to fight
            </Link>
            <div className="section-fight__lft">
                <div className="section-fight__top">
                    <div className="section-fight__user">
                        <div className="user__photo">
                            <img src="images/user.jpeg" alt="User"/>
                        </div>
                        <div className="user__name">Семён</div>
                    </div>
                    <div className="section-fight__resources">
                        <div className="resources__clothes">
                            <button className="clothes__head">
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
                    <div className="persone__start">
                        <img src="images/persone-nnn.png" alt="Persone"/>
                    </div>
                </div>
                <div className="section-fight__bottom">

                        <Link className="section-fight__cancel" to={'/fight'}>
                            Отменить игру
                        </Link>
                </div>
            </div>
            <div className="section-fight__center">
                <div className="center__loading">
                    <div className="load">
                        <div className="load__line">

                        </div>
                        <div className="load__line">

                        </div>
                        <div className="load__line">

                        </div>
                    </div>
                    <span>Ожидание</span>
                </div>
            </div>
            <div className="section-fight__rht">
                <div className="section-fight__top">
                    <div className="section-fight__user section-fight__user_hidden">
                        <div className="user__photo">
                            <img src="images/user.jpeg" alt="User"/>
                        </div>
                        <div className="user__name">Семён</div>
                    </div>
                    <div className="section-fight__resources">
                        <div className="resources__clothes">
                            <button className="clothes__head">
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
                        <div className="resources__coins resources__coins_none">
                            <img src="images/header__coins.svg" alt="Ico"/>
                                <span>0</span>
                        </div>
                    </div>
                </div>
                <div className="section-fight__persone">
                    <div className="persone__start">
                        <img src="images/persone-siluete.png" alt="Persone"/>
                    </div>
                </div>
                <div className="section-fight__bottom">
                    <div className="section-fight__opponent-info">Нет игрока</div>
                </div>
            </div>
        </section>
    );
};

export default FightPageWaiting;