import React, {useState} from 'react';
import Timer from "../Timer";
import RightsAirdropSleepers from "./RightsAirdropSleepers";
import RightsAirdropMoveSleepers from "./RightsAirdropMoveSleepers";
import RightsAirdropMember from "./RightsAirdropMember";

const RightsAirdrop = ({onCoinsChange, onCoins}) => {

    const [numSwitch, setNumSwitch] = useState(1)
    const [sleepersCount, setSleepersCount] = useState(0)

    function func () {
        if(document.querySelector('.trajectory'))
            document.querySelector('.trajectory').classList.add('trajectory_active')
    }

    let funcNumSwitch = function () {
        if(numSwitch == 1){
            return (
                <RightsAirdropSleepers
                    setSleepersCount={setSleepersCount}
                    onCoins={onCoins}
                    onCoinsChange={onCoinsChange}
                    setNumSwitch={setNumSwitch}
                />
            )
        } else if(numSwitch == 2){
            return (
                <RightsAirdropMoveSleepers
                    sleepersCount={sleepersCount}
                    setNumSwitch={setNumSwitch}
                />
            )
        } else if (numSwitch == 3){
            return (
                <RightsAirdropMember />
            )
        }
    }

    return (
        <>
            <div className="section-right__airdrop">
                <div className="airdrop__block">
                    <div className="airdrop__fly">
                        <div className="fly__top">
                            <p>До вылета:</p>
                            <div className="timer">
                                <Timer
                                    parent={".timer"}
                                    time={5}
                                    func={func}
                                />
                            </div>
                        </div>
                        <div className="fly__bottom">
                            <div className="fly__timer">
                                <img src="images/line-for-right.svg" alt="Ico"/>
                                <div className="line">
                                    <div className="line_done">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="airdrop__bank">
                        <p>В банке</p>
                        <div className="coins">
                            <img src="images/header__coins.svg" alt="Ico"/>
                            <span>
                                {onCoins}
                            </span>
                        </div>
                    </div>
                </div>
                {funcNumSwitch()}
            </div>
            {/*section-right__players section-right__players_none*/}
            <div className="section-right__players">
                {/*<big>Ставок нет</big>*/}
                <div className="players__top">
                    <h3>Игроки</h3>
                    <div className="count">
                        <img src="images/players.svg" alt="Ico"/>
                        <span>18</span>
                    </div>
                </div>
                <div className="players__item">
                    <div className="item__photo">
                        <img src="images/user.jpeg" alt="User"/>
                    </div>
                    <p className="item__name">Семён</p>
                    <div className="item__coins">
                        <img src="images/header__coins.svg" alt="Coins"/>
                        <span>50</span>
                    </div>
                </div>
                <div className="players__item">
                    <div className="item__photo">
                        <img src="images/user.jpeg" alt="User"/>
                    </div>
                    <p className="item__name">Семён</p>
                    <div className="item__coins">
                        <img src="images/header__coins.svg" alt="Coins"/>
                        <span>100</span>
                    </div>
                </div>
                <div className="players__item">
                    <div className="item__photo">
                        <img src="images/user.jpeg" alt="User"/>
                    </div>
                    <p className="item__name">Семён</p>
                    <div className="item__coins">
                        <img src="images/header__coins.svg" alt="Coins"/>
                        <span>100</span>
                    </div>
                </div>
                <div className="players__item">
                    <div className="item__photo">
                        <img src="images/user.jpeg" alt="User"/>
                    </div>
                    <p className="item__name">Семён</p>
                    <div className="item__coins">
                        <img src="images/header__coins.svg" alt="Coins"/>
                        <span>50</span>
                    </div>
                </div>
                <div className="players__item">
                    <div className="item__photo">
                        <img src="images/user.jpeg" alt="User"/>
                    </div>
                    <p className="item__name">Семён</p>
                    <div className="item__coins">
                        <img src="images/header__coins.svg" alt="Coins"/>
                        <span>100</span>
                    </div>
                </div>
                <div className="players__item">
                    <div className="item__photo">
                        <img src="images/user.jpeg" alt="User"/>
                    </div>
                    <p className="item__name">Семён</p>
                    <div className="item__coins">
                        <img src="images/header__coins.svg" alt="Coins"/>
                        <span>100</span>
                    </div>
                </div>
                <div className="players__item">
                    <div className="item__photo">
                        <img src="images/user.jpeg" alt="User"/>
                    </div>
                    <p className="item__name">Семён</p>
                    <div className="item__coins">
                        <img src="images/header__coins.svg" alt="Coins"/>
                        <span>50</span>
                    </div>
                </div>
                <div className="players__item">
                    <div className="item__photo">
                        <img src="images/user.jpeg" alt="User"/>
                    </div>
                    <p className="item__name">Семён</p>
                    <div className="item__coins">
                        <img src="images/header__coins.svg" alt="Coins"/>
                        <span>100</span>
                    </div>
                </div>
                <div className="players__item">
                    <div className="item__photo">
                        <img src="images/user.jpeg" alt="User"/>
                    </div>
                    <p className="item__name">Семён</p>
                    <div className="item__coins">
                        <img src="images/header__coins.svg" alt="Coins"/>
                        <span>100</span>
                    </div>
                </div>
                <div className="players__item">
                    <div className="item__photo">
                        <img src="images/user.jpeg" alt="User"/>
                    </div>
                    <p className="item__name">Семён</p>
                    <div className="item__coins">
                        <img src="images/header__coins.svg" alt="Coins"/>
                        <span>50</span>
                    </div>
                </div>
                <div className="players__item">
                    <div className="item__photo">
                        <img src="images/user.jpeg" alt="User"/>
                    </div>
                    <p className="item__name">Семён</p>
                    <div className="item__coins">
                        <img src="images/header__coins.svg" alt="Coins"/>
                        <span>100</span>
                    </div>
                </div>
                <div className="players__item">
                    <div className="item__photo">
                        <img src="images/user.jpeg" alt="User"/>
                    </div>
                    <p className="item__name">Семён</p>
                    <div className="item__coins">
                        <img src="images/header__coins.svg" alt="Coins"/>
                        <span>100</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RightsAirdrop;