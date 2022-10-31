import React from 'react';

const FightItemType = (props) => {

    let typeOfCoins = function () {
        if (props.typePrice == "coins") {
            return <div className="item__type item__type_coins"><img src="images/header__coins.svg" alt="Ico"/>
            </div>
        } else {
            return <div className="item__type item__type_clothes" onClick={e => e.target.closest('.list-games__item').classList.toggle('list-games__item_active')}><img
                src="images/clothes.svg"
                alt="Ico"/></div>
        }
    }

    return (
        <>
            {typeOfCoins()}
        </>
    );
};

export default FightItemType;