import React from 'react';

const FightItemOpponentDisabled = () => {
    return (
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
                <div className="section-fight__opponent-info">Выбор защиты</div>
            </div>
        </div>
    );
};

export default FightItemOpponentDisabled;