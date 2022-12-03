import React from 'react';

const SelectFightOnButtonClick = (e, states) => {

    let attr = e.target.closest('button').getAttribute('data-persone')
    document.querySelector('.' + attr).classList.toggle('img_clicked');
    e.target.closest('button').classList.toggle('button_active')
    let checkNumberClicked = 0;
    let sf_select = e.target.closest('.section-fight__lft') ?
        document.querySelectorAll('.section-fight__select button') :
        document.querySelectorAll('.section-fight__select-hit button')

    for (let check of sf_select) {
        if (check.classList.contains('button_active')) {
            checkNumberClicked++;
        }
    }

    if (checkNumberClicked > 0) {
        if (e.target.closest('.section-fight__lft')) e.target.closest('.section-fight__lft').querySelector('.bottom__info').style.opacity = 0
        if (e.target.closest('.section-fight__rht')) e.target.closest('.section-fight__rht').querySelector('.bottom__info').style.opacity = 0
    } else {
        if (e.target.closest('.section-fight__lft')) e.target.closest('.section-fight__lft').querySelector('.bottom__info').style.opacity = 1
        if (e.target.closest('.section-fight__rht')) e.target.closest('.section-fight__rht').querySelector('.bottom__info').style.opacity = 1
    }

    let arrayOfName = [false, false, false];

    for (let check1 of sf_select) {

        if (checkNumberClicked > 1 && !check1.classList.contains('button_active')) {
            check1.classList.add('button_disabled')
        } else {
            check1.classList.remove('button_disabled')
        }


        if (check1.classList.contains('button_active')) {
            let numOfButtons = Array.from(sf_select).indexOf(check1)
            arrayOfName[numOfButtons] = true;

        } else {
            let numOfButtons = Array.from(sf_select).indexOf(check1)
            arrayOfName[numOfButtons] = false
        }

    }
    if(e.target.closest('.section-fight__rht')) states.setArrayForHit(arrayOfName)

    if (e.target.closest('.section-fight__lft')) {

        let arrayForImage = []
        arrayOfName.map(item => {
            arrayForImage.push(item ? String(item).replace(true, 's') : String(item).replace(false, 'n'))
        })
        let nameOfImage = 'persone-' + arrayForImage.join('') + '.png';

        states.setFightsYourArmor(arrayOfName)

        document.querySelector('.persone__start img').setAttribute('src', 'images/' + nameOfImage)
    }
};

export default SelectFightOnButtonClick;