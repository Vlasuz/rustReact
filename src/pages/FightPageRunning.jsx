import React, {useState} from 'react';
import Timer from "../Components/Timer";
import {Link, Navigate} from "react-router-dom";
import FightItemOpponentDisabled from "../Components/ComponentsFightPage/FightItemOpponentDisabled";
import FightPageOpponentSelect from "../Components/ComponentsFightPage/FightPageOpponentSelect";
import FightTimer from "../Components/ComponentsFightPage/FightTimer";

const FightPageRunning = ({arrayForHit, setArrayForHit}) => {

    let [hit, setHit] = useState(false);

    setTimeout(function () {
        setHit(true)
    }, 5000)



    let funcMouseMove = function (e) {
        let attr = e.target.closest('button').getAttribute('data-persone')
        document.querySelector('.' + attr).classList.add('img_hover')
    }
    let funcMouseOut = function (e) {
        let attr = e.target.closest('button').getAttribute('data-persone')
        document.querySelector('.' + attr).classList.remove('img_hover')
    }
    let funcClick = function (e) {
        let attr = e.target.closest('button').getAttribute('data-persone')
        document.querySelector('.' + attr).classList.toggle('img_clicked');
        e.target.closest('button').classList.toggle('button_active')
        let checkNumberClicked = 0;

        for (let check of document.querySelectorAll('.section-fight__select button')) {
            if (check.classList.contains('button_active')) {
                checkNumberClicked++;
            }
        }

        let arrayOfName = ['n', 'n', 'n'];

        for (let check1 of document.querySelectorAll('.section-fight__select button')) {

            if (checkNumberClicked > 1 && !check1.classList.contains('button_active')) {
                check1.classList.add('button_disabled')

            } else {
                check1.classList.remove('button_disabled')
            }


            if (check1.classList.contains('button_active')) {
                let numOfButtons = Array.from(document.querySelectorAll('.section-fight__select button')).indexOf(check1)
                arrayOfName[numOfButtons] = 's';
            } else {
                let numOfButtons = Array.from(document.querySelectorAll('.section-fight__select button')).indexOf(check1)
                arrayOfName[numOfButtons] = 'n';
            }

        }

        let nameOfImage = 'persone-' + arrayOfName.join('') + '.png';

        document.querySelector('.persone__start img').setAttribute('src', 'images/' + nameOfImage)


    }


    return (
        <section className="section-fight">
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
                    <div className="persone__green">
                        <img className="head" src="images/head.png" alt="Photo" width="72"/>
                        <img className="body" src="images/body.png" alt="Photo" width="295"/>
                        <img className="legs" src="images/legs.png" alt="Photo" width="145"/>
                    </div>
                    <div className="persone__start">
                        <img src="images/persone-nnn.png" alt="Persone"/>
                    </div>
                </div>
                <div className="section-fight__bottom">
                    <div className="bottom__info">
                        <p>Выберите 2 области защиты</p>
                    </div>
                    <ul className="section-fight__select">
                        <li>
                            <button
                                data-persone="head"
                                onMouseMove={funcMouseMove}
                                onMouseOut={funcMouseOut}
                                onClick={funcClick}
                            >
                                <span>Голова</span>
                                <img src="images/green-check.svg" alt="Ico"/>
                            </button>
                        </li>
                        <li>
                            <button
                                data-persone="body"
                                onMouseMove={funcMouseMove}
                                onMouseOut={funcMouseOut}
                                onClick={funcClick}
                            >
                                <span>Торс</span>
                                <img src="images/green-check.svg" alt="Ico"/>
                            </button>
                        </li>
                        <li>
                            <button
                                data-persone="legs"
                                onMouseMove={funcMouseMove}
                                onMouseOut={funcMouseOut}
                                onClick={funcClick}
                            >
                                <span>Ноги</span>
                                <img src="images/green-check.svg" alt="Ico"/>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            <FightTimer />
            {hit ? <FightPageOpponentSelect setArrayForHit={setArrayForHit} arrayForHit={arrayForHit}/> : <FightItemOpponentDisabled/>}


        </section>
    );
};

export default FightPageRunning;