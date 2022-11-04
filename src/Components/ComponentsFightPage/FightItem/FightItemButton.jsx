import React from 'react';

const FightItemButton = ({status, bid, youWon, typePrice}) => {

    let type = typePrice == 'coins' ? ".popup-entry-coins" : ".popup-entry-clothes"

    let statusGame = function () {
        if (status == "waiting") {
            return <button
                className="item__button"
                onClick={e => e.target.closest('.list-games__item').querySelector(type).classList.add('popup_active')}
            >
                <span>Играть за</span>
                <img src="images/header__coins.svg" alt="Ico"/>
                <span>
                        {bid}
                    </span>
            </button>
        } else if (status == "running") {
            return <button className="item__button">
                <img src="images/header__coins.svg" alt="Ico"/>
                <span>
                    {bid}
                </span>
            </button>
        } else if (status == "finish") {
            if (youWon) {
                return <button className="item__button">
                    <div className="winner">
                        <img src="images/header__coins.svg" alt="Ico"/>
                        <span>{bid}</span>
                    </div>
                    <div className="looser">
                        <img src="images/looser.svg" alt="Ico"/>
                    </div>
                </button>
            }
            return <button className="item__button">
                <div className="looser">
                    <img src="images/looser.svg" alt="Ico"/>
                </div>
                <div className="winner">
                    <img src="images/header__coins.svg" alt="Ico"/>
                    <span>{bid}</span>
                </div>
            </button>
        }
    }

    return (
        <>
            {statusGame()}
        </>
    );
};

export default FightItemButton;