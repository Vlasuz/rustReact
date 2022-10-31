import React from 'react';

const RightsStorage = ({dataItems}) => {

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

        <li className="postamat__item">
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

    return (

        <div className="postamat storage">
            <div className="postamat__search">
                <input type="text" placeholder="Поиск"/>
                <button>
                    <img src="images/search.svg" alt="Search"/>
                </button>
            </div>
            <form className="postamat__filter" action="#">
                <input type="radio" checked name="filter" id="filterPrice"/>
                <label className="filter__item filter__price" htmlFor="filterPrice">
                    <span>По цене</span>
                    <input type="checkbox" name="upDown"/>
                    <img src="images/filter.svg" alt="filter"/>
                </label>
                <input type="radio" name="filter" id="filterCool"/>
                <label className="filter__item filter__item_active filter__cool" htmlFor="filterCool">
                    <span>По раритетности</span>
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

                {items}

            </ul>
            <div className="storage__zone">
                <div className="zone__empty">
                    <p>Выберите предмет для вывода</p>
                </div>
                <button className="zone__button">
                    <img src="images/arr-r-t.svg" alt="Ico"/>
                    <span>Вывести предметы</span>
                    <div className="zone__count">2</div>
                </button>
            </div>
        </div>

    );
};

export default RightsStorage;