import React from 'react';

const PopupCloseCross = () => {

    let closePopup = function () {
        document.querySelectorAll('.popup').forEach(function (pp) {
            pp.classList.remove('popup_active')
        })
    }

    return (
        <div className="popup__cross popup__close" onClick={closePopup}>
            <img src="images/cross.svg" alt="Close"/>
        </div>
    );
};

export default PopupCloseCross;