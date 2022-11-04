import React from 'react';

const FightAreaBottom = () => {

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
    );
};

export default FightAreaBottom;