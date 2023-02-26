import React from 'react';
import GlobalLink from "./GlobalLink";

const SelectFightOnButtonClick = (e, skin, setting) => {

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
    if(e.target.closest('.section-fight__rht')) {
        setting(prev => !prev)
    }

    if (e.target.closest('.section-fight__lft')) {

        let arrayForImage = []
        arrayOfName.map(item => {
            arrayForImage.push(item ? String(item).replace(true, 'x') : String(item).replace(false, 'i'))
        })
        let nameOfImage = arrayForImage.join('');

        setting(prev => !prev)

        console.log(skin)
        console.log(skin[nameOfImage])
        console.log(nameOfImage)
        document.querySelector('.persone__start img').setAttribute('src', "https://"+GlobalLink()+'/' + skin[nameOfImage])
    }
};

export default SelectFightOnButtonClick;