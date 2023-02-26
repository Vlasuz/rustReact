import React from 'react';

const CloseModal = (block, button, e) => {

    if (e.target.closest("." + block) === null && e.target.closest("." + button) === null) {
        if (document.querySelector("." + button + "_active")) document.querySelector("." + button).classList.remove(button + "_active")
        document.querySelectorAll("." + block).forEach(item => {
            item.classList.remove(block + "_active")
        })
    }

};

export default CloseModal;