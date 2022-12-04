import React from 'react';

const RandomDrop = (props) => {

    if (props.states.isDropDown && !document.querySelector('.airdrop-drop-sent')) {

        let drop = document.createElement('div')
        drop.classList.add('airdrop-drop-sent');

        if (props.states.trajectoryPlane > 0 && document.querySelector('.section-map__map')) {
            document.querySelector('.section-map__map').append(drop)
            document.querySelector('.airdrop-drop-sent').innerHTML = "<div class='point'></div><div class='line-to-winner'></div>";
            document.querySelector('.airdrop-drop-sent').style.left = props.states.randomTimerToDrop - 250 + 'px';
            document.querySelector('.airdrop-drop-sent').style.top = props.states.trajectoryPlane + 19 + 'px';
        }
    }
}

export default RandomDrop;