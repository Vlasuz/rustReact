import React, {useEffect} from 'react';

const RightsTop = (props) => {

    const switcherButtons = function (thisItem) {

        document.querySelector('.section-right__switcher')?.classList.remove('section-right__switcher-airdrop')
        document.querySelector('.section-right__item_show')?.classList.remove('section-right__item_show')
        document.querySelector('.section-right__item_change-show')?.classList.remove('section-right__item_change-show')
        document.querySelector('.section-right__top .top__item.top__item_active').classList.remove('top__item_active')
        document.querySelector('.section-right .section-right_active').classList.add('section-right__item_change-hidden')

        let arrayOfItems = []
        thisItem.target.closest('.section-right__top').querySelectorAll('.top__item').forEach(item => {
            arrayOfItems.push(item)
        })
        let numberOfBlock = arrayOfItems.indexOf(thisItem.target.closest('.top__item'))

        thisItem.target.closest('.top__item').classList.add('top__item_active')

        setTimeout(() => {
            document.querySelector('.section-right_active').classList.remove('section-right_active')
            document.querySelector('.section-right .section-right__item_change-hidden').classList.remove('section-right__item_change-hidden')

            document.querySelectorAll('.section-right__switcher .section-right__item')[numberOfBlock].classList.add('section-right_active')

            setTimeout(() => {
                document.querySelector('.section-right__switcher .section-right_active').classList.add('section-right__item_change-show')
            }, 10)

            document.querySelector('.section-right__switcher')?.classList.add('section-right__switcher-airdrop')

        }, 300)

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
                    {chose(props.states.switcherRights)}
                </span>
            </button>
            <button
                className="top__item"
                onClick={switcherButtons}
            >
                <span>Чат</span>
                <div className="people">
                    <img src="images/users.svg" alt="Ico"/>
                    <span>176</span>
                </div>
            </button>
        </div>
    );
};

export default RightsTop;