import React from 'react';
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import RightsSortable from "./RightsSortable";

const RightsStorage = ({dataItems}) => {

    let openPopup = function (nextPopup) {
        if(document.querySelector('.popup_active')){
            document.querySelector('.popup_active').classList.remove('popup_active')
        }
        document.querySelector('.'+nextPopup).classList.add('popup_active')
    }

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


    let items = dataItems.map((item, itemNum) =>

        <li
            className="postamat__item"
            key={itemNum}
            onClick={(e) => clickToSelectItem(e)}
        >
            <div className="item__check">
                <img src="images/green-check.svg" alt="Check"/>
            </div>
            <div className="item__count">
                {item.count}
            </div>
            <div className={"item__cool " + ratingColor(item)}>

            </div>
            <div className="item__photo">
                <img src={item.image} alt="Skin"/>
            </div>
            <div className="item__price">
                <img src="images/header__coins.svg" alt="Ico"/>
                <span>{item.cost}</span>
            </div>
        </li>
    )


    const clickToSelectItem = function (e) {

        let storItem = e.target.closest('.postamat__item')

        function storItemsCheck() {

            let sumItems = 0

            for (let i = 0; i < document.querySelectorAll('.storage .postamat__item').length; i++) {
                if (document.querySelectorAll('.storage .postamat__item')[i].classList.contains('postamat__item_active')) {
                    sumItems++
                }
            }

            return sumItems;

        }

        storItem.classList.toggle('postamat__item_active')

        let checkedItemsActive = storItemsCheck();

        document.querySelector('.zone__count').innerText = checkedItemsActive

        if (checkedItemsActive >= 1) {

            document.querySelector('.storage__zone .zone__empty').style.display = 'none';
            document.querySelector('.storage__zone .zone__button').style.display = 'flex';

        } else {

            document.querySelector('.storage__zone .zone__empty').style.display = 'flex';
            document.querySelector('.storage__zone .zone__button').style.display = 'none';

        }


    }

    return (

        <div className="postamat storage">
            <div className="postamat__search">
                <input type="text" placeholder="Поиск"/>
                <button>
                    <img src="images/search.svg" alt="Search"/>
                </button>
            </div>
            {/*<form className="postamat__filter" action="#">*/}
            {/*    <input type="radio" checked name="filter" id="filterPrice"/>*/}
            {/*    <label className="filter__item filter__price" htmlFor="filterPrice">*/}
            {/*        <span>По цене</span>*/}
            {/*        <input type="checkbox" name="upDown"/>*/}
            {/*        <img src="images/filter.svg" alt="filter"/>*/}
            {/*    </label>*/}
            {/*    <input type="radio" name="filter" id="filterCool"/>*/}
            {/*    <label className="filter__item filter__item_active filter__cool" htmlFor="filterCool">*/}
            {/*        <span>По раритетности</span>*/}
            {/*        <input type="checkbox" name="upDown"/>*/}
            {/*        <img src="images/filter.svg" alt="filter"/>*/}
            {/*    </label>*/}
            {/*    <button className="filter__reload">*/}
            {/*        <img src="images/reload.svg" alt="filter"/>*/}
            {/*        <span>Обновить</span>*/}
            {/*    </button>*/}
            {/*</form>*/}
            <RightsSortable />
            <hr/>
            <ul className="postamat__block">

                {items}

            </ul>
            <div className="storage__zone">
                <div className="zone__empty">
                    <p>Выберите предмет для вывода</p>
                </div>
                <button
                    className="zone__button"
                    onClick={() => openPopup('popup-pull')}
                >
                    <img src="images/arr-r-t.svg" alt="Ico"/>
                    <span>Вывести предметы</span>
                    <div className="zone__count">2</div>
                </button>
            </div>
        </div>

    );
};

export default RightsStorage;