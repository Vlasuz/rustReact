import React from 'react';

const PopupCloseBackground = () => {

    let closePopup = function () {
        document.querySelectorAll('.popup').forEach(function (pp) {
            pp.classList.remove('popup_active')
        })
    }

    return (
        <div className="popup__bgd" onClick={closePopup} />
    );
};

export default PopupCloseBackground;