
const FightPageOpponentSelect = (props) => {


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

        for (let check of document.querySelectorAll('.section-fight__select-hit button')) {
            if (check.classList.contains('button_active')) {
                checkNumberClicked++;
            }
        }

        for (let check1 of document.querySelectorAll('.section-fight__select-hit button')) {

            if (checkNumberClicked > 1 && !check1.classList.contains('button_active')) {
                check1.classList.add('button_disabled')
            } else {
                check1.classList.remove('button_disabled')
            }

        }


        let arrayOfName = [false, false, false];

        for (let check1 of document.querySelectorAll('.section-fight__select-hit button')) {

            if (checkNumberClicked > 1 && !check1.classList.contains('button_active')) {
                check1.classList.add('button_disabled')

            } else {
                check1.classList.remove('button_disabled')
            }


            if (check1.classList.contains('button_active')) {
                let numOfButtons = Array.from(document.querySelectorAll('.section-fight__select-hit button')).indexOf(check1)
                arrayOfName[numOfButtons] = true;
            } else {
                let numOfButtons = Array.from(document.querySelectorAll('.section-fight__select-hit button')).indexOf(check1)
                arrayOfName[numOfButtons] = false;
            }

        }

        props.states.setArrayForHit(arrayOfName)

    }


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
                    <div className="resources__coins resources__coins_none">
                        <img src="images/header__coins.svg" alt="Ico"/>
                        <span>0</span>
                    </div>
                </div>
            </div>
            <div className="section-fight__persone section-fight__persone-hit">
                <div className="persone__red">
                    <img className="head-hit" src="images/head-hit.png" alt="Photo" width="72"/>
                    <img className="body-hit" src="images/body-hit.png" alt="Photo" width="295"/>
                    <img className="legs-hit" src="images/legs-hit.png" alt="Photo" width="145"/>
                </div>
                <div className="persone__start">
                    <img src="images/persone-siluete.png" alt="Persone"/>
                </div>
            </div>
            <div className="section-fight__bottom">
                <div className="bottom__info">
                    <p>Выберите 2 области атаки</p>
                </div>
                <ul className="section-fight__select-hit">
                    <li>
                        <button
                            data-persone="head-hit"
                            onMouseMove={funcMouseMove}
                            onMouseOut={funcMouseOut}
                            onClick={funcClick}
                        >
                            <span>Голова</span>
                            <img src="images/red-check.svg" alt="Ico"/>
                        </button>
                    </li>
                    <li>
                        <button
                            data-persone="body-hit"
                            onMouseMove={funcMouseMove}
                            onMouseOut={funcMouseOut}
                            onClick={funcClick}
                        >
                            <span>Торс</span>
                            <img src="images/red-check.svg" alt="Ico"/>
                        </button>
                    </li>
                    <li>
                        <button
                            data-persone="legs-hit"
                            onMouseMove={funcMouseMove}
                            onMouseOut={funcMouseOut}
                            onClick={funcClick}
                        >
                            <span>Ноги</span>
                            <img src="images/red-check.svg" alt="Ico"/>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default FightPageOpponentSelect;