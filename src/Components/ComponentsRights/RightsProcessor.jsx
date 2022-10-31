import React from 'react';
import RightsItem from "./RightsItem";

const RightsProcessor = ({onCoinsChange, onCoins, dataItems}) => {


    let ratingColor = function (item) {

        switch (item.rating) {
            case 'green':
                return 'clothes__cool_green';
                break;
            case 'red':
                return 'clothes__cool_red';
                break;
            case 'blue':
                return 'clothes__cool_blue';
                break;
            default:
                return 'clothes__cool_grey';
                break;

        }
    }

    function checkListLi(container) {

        if( container.querySelectorAll('.popup-new-room__zone ul li').length > 0 && container.querySelector('.popup-new-room__zone p') ){
            container.querySelector('.popup-new-room__zone p').style.display = 'none';
        } else {
            container.querySelector('.ppup-new-room__zone p').style.display = 'block';
        }

    }

    let pererabCoins = function (e) {
        onCoinsChange(+onCoins + +e.target.closest('.pererab__button').querySelector('.rht span').innerText)
        document.querySelector('.zone__list ul').innerHTML = ''
        document.querySelector('.zone__done').style.display = 'none'
        document.querySelectorAll('.zone__empty').forEach(zone => {
            zone.style.display = 'flex'
        })
        e.target.closest('.pererab__button').querySelector('.rht span').innerHTML = 0
    }

    return (
        <div className="postamat pererab">
            <div className="postamat__search">
                <input type="text" placeholder="Поиск"/>
                <button>
                    <img src="images/search.svg" alt="Search"/>
                </button>
            </div>
            <form className="postamat__filter" action="#">
                {/*checked*/}
                <input type="radio" name="filter" id="filterPrice"/>
                <label className="filter__item filter__price" htmlFor="filterPrice"><span>По цене</span>
                    <input type="checkbox" name="upDown"/>
                    <img src="images/filter.svg" alt="filter"/>
                </label>
                <input type="radio" name="filter" id="filterCool"/>
                <label className="filter__item filter__item_active filter__cool"
                       htmlFor="filterCool"><span>По раритетности</span>
                    <input type="checkbox" name="upDown"/>
                    <img src="images/filter.svg" alt="filter"/>
                </label>
                <button className="filter__reload">
                    <img src="images/reload.svg" alt="filter"/>
                    <span>Обновить</span>
                </button>
            </form>
            <hr/>
            <ul className="postamat__block">

                {dataItems.map((item, itemNum) =>
                    <RightsItem
                        key={itemNum}
                        count={item.count}
                        cools={ratingColor(item.rating)}
                        image={item.image}
                        coins={item.cost}
                    />
                )}


            </ul>
            <div className="pererab__zone">
                <div className="zone__empty">
                    <p>Зона переработки</p>
                    <img src="images/pererab-ico.svg" alt="Ico"/>
                </div>
                <div className="zone__list">
                    <ul></ul>
                </div>
            </div>
            <div className="pererab__button">
                <div className="zone__empty">
                    <p>Разборщик пуст</p>
                </div>
                <button
                    className="zone__done"
                    onClick={pererabCoins}
                >
                    <div className="lft">
                        <img src="images/pererab-button.svg" alt="Ico"/>
                        <span>Переработать</span>
                    </div>
                    <div className="rht">
                        <img src="images/header__coins.svg" alt="Ico"/>
                        <span>0</span>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default RightsProcessor;