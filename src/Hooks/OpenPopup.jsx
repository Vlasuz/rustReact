import React from 'react';

const OpenPopup = (nextPopup) => {
    if (document.querySelector('.popup_active')) {
        document.querySelector('.popup_active').classList.remove('popup_active')
    }
    document.querySelector('.' + nextPopup).classList.add('popup_active')
};

export default OpenPopup;