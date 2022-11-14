import React from 'react';

const RightsAirdropSleepersButtons = ({setNumSwitch, setTimeToFly}) => {


    const letsStart = () => {
        console.log('lets start')
        setTimeToFly(start => !start)
        setNumSwitch(3)
    }


    const randomMove = () => {

        document.querySelectorAll('.airdrop__move ul li').forEach((item, itemNum) => {

            let maxX = document.querySelector('.section-map__map').clientWidth - 150
            let maxY = document.querySelector('.section-map__map').clientHeight - 150
            let min = 150

            let randomX = Math.floor(Math.random() * (maxX - min) + min );
            let randomY = Math.floor(Math.random() * (maxY - min) + min );

            item.classList.add('sleepers__item_moved');

            item.style.left = randomX + 'px';
            item.style.top = randomY + 'px';

            document.querySelector('.map__points').append(item)

        })

    }



    return (
        <div className="move__buttons">
            <button
                className="move__random"
                onClick={() => randomMove()}
            >
                <span>случайно</span>
                <img src="images/random.svg" alt="Random"/>
            </button>
            <button
                className="move__submit"
                onClick={() => letsStart()}
            >
                <span>Подтвердить</span>
            </button>
        </div>
    );
};

export default RightsAirdropSleepersButtons;