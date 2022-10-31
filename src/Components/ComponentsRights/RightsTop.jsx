import React from 'react';

const RightsTop = ({switcherRights}) => {

    const switcherButtons = function (thisItem) {
        for( let itemTop1 of document.querySelectorAll('.section-right__switcher .section-right__item') ){
            itemTop1.classList.remove('section-right_active')
        }
        for( let itemTop1 of document.querySelectorAll('.section-right__top .top__item') ){
            itemTop1.classList.remove('top__item_active')
        }

        let arrayOfItems = []
        thisItem.target.closest('.section-right__top').querySelectorAll('.top__item').forEach(item => {
            arrayOfItems.push(item)
        })
        let numberOfBlock = arrayOfItems.indexOf(thisItem.target.closest('.top__item'))

        document.querySelectorAll('.section-right__switcher .section-right__item')[numberOfBlock].classList.add('section-right_active')
        thisItem.target.closest('.top__item').classList.add('top__item_active')
    }

    let chose = function (switcherRights) {
        switch (switcherRights) {
            case 'pr':
                return 'Переработчик';
                break;
            case 'st':
                return 'Хранилище';
                break;
            case 'sh':
                return 'Магазин';
                break;
            case 'rights-airdrop':
                return 'Аирдроп';
                break;
        }
    }

    return (
        <div className="section-right__top">
            <button
                className="top__item top__item_active"
                onClick={switcherButtons}
            >
                <span>
                    {chose(switcherRights)}
                </span>
            </button>
            <button
                className="top__item"
                onClick={switcherButtons}
            >
                <span>Чат</span>
                <div className="people">
                    <img src="images/users.svg" alt="Ico"/><span>176</span>
                </div>
            </button>
        </div>
    );
};

export default RightsTop;