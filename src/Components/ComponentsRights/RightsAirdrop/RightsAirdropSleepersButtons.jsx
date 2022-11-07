import React from 'react';

const RightsAirdropSleepersButtons = ({setNumSwitch}) => {

    let emptySleepers = function () {

        let lengthSleepers = document.querySelectorAll('.airdrop__move ul li').length;

        if (lengthSleepers > 0) {
            return (
                <button
                    className="move__submit"
                    disabled
                >
                    <span>Перетащите спальники</span>
                </button>
            )
        } else {
            return (
                <button
                    className="move__submit"
                    onClick={() => setNumSwitch(3)}
                >
                    <span>Подтвердить</span>
                </button>
            )
        }
    }


    const randomMove = () => {

        document.querySelectorAll('.airdrop__move ul li').forEach((item, itemNum) => {

            let maxX = document.querySelector('.section-map__map').clientWidth - 20
            let maxY = document.querySelector('.section-map__map').clientHeight - 20

            let randomX = Math.floor(Math.random() * (maxX - 0) + 0 );
            let randomY = Math.floor(Math.random() * (maxY - 0) + 0 );

            item.classList.add('sleepers__item_moved');

            item.style.left = randomX + 'px';
            item.style.top = randomY + 'px';
            item.style.position = 'absolute';
            item.style.zIndex = '1000';
            item.style.display = 'flex';

            document.querySelector('.section-map__map').append(item)

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
            {emptySleepers()}
        </div>
    );
};

export default RightsAirdropSleepersButtons;