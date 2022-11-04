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

    return (
        <div className="move__buttons">
            <button className="move__random">
                <span>случайно</span>
                <img src="images/random.svg" alt="Random"/>
            </button>
            {emptySleepers()}
        </div>
    );
};

export default RightsAirdropSleepersButtons;