import React, {useState} from 'react';
import RightsItem from "./RightsItem";
import RightsFilterForm from "./RightsFilterForm";

const RightsProcessor = (props) => {
    let ratingColor = function (item) {

        switch (item) {
            case 'green':
                return 'item__cool clothes__cool_green';
                break;
            case 'red':
                return 'item__cool clothes__cool_red';
                break;
            case 'blue':
                return 'item__cool clothes__cool_blue';
                break;
            default:
                return 'item__cool clothes__cool_grey';
                break;

        }
    }

    // function checkListLi(container) {
    //
    //     if( container.querySelectorAll('.popup-new-room__zone ul li').length > 0 && container.querySelector('.popup-new-room__zone p') ){
    //         container.querySelector('.popup-new-room__zone p').style.display = 'none';
    //     } else {
    //         container.querySelector('.ppup-new-room__zone p').style.display = 'block';
    //     }
    //
    // }

    let pererabCoins = function (e) {
        props.onCoinsChange(+props.onCoins + +e.target.closest('.pererab__button').querySelector('.rht span').innerText)
        document.querySelector('.zone__list ul').innerHTML = ''
        document.querySelector('.zone__done').style.display = 'none'
        document.querySelectorAll('.zone__empty').forEach(zone => {
            zone.style.display = 'flex'
        })
        e.target.closest('.pererab__button').querySelector('.rht span').innerHTML = 0
    }


    const [sortArray, setSortArray] = useState(
        {
            search: '',
            filterRadio: '',
            filterCheckbox: false,
        }
    )


    const sortableItem = () => {
        if (sortArray.search && sortArray.filterRadio) {
            return props.dataItems
                .filter(item => item.title.includes(sortArray.search))
                .sort((a, b) => (!sortArray.filterCheckbox) ?
                    ((sortArray.filterRadio === "filterPrice") ? a.cost : a.rarity) - ((sortArray.filterRadio) === "filterPrice" ? b.cost : b.rarity) :
                    ((sortArray.filterRadio === "filterPrice") ? b.cost : b.rarity) - ((sortArray.filterRadio) === "filterPrice" ? a.cost : a.rarity))
                .map((item, itemNum) =>
                    <RightsItem
                        key={itemNum}
                        count={item.count}
                        cools={ratingColor(item.rating)}
                        image={item.image}
                        coins={item.cost}
                    />
                )

        } else if (sortArray.filterRadio) {
            return props.dataItems
                .sort((a, b) => (!sortArray.filterCheckbox) ?
                    ((sortArray.filterRadio === "filterPrice") ? a.cost : a.rarity) - ((sortArray.filterRadio) === "filterPrice" ? b.cost : b.rarity) :
                    ((sortArray.filterRadio === "filterPrice") ? b.cost : b.rarity) - ((sortArray.filterRadio) === "filterPrice" ? a.cost : a.rarity))
                .map((item, itemNum) =>
                    <RightsItem
                        key={itemNum}
                        count={item.count}
                        cools={ratingColor(item.rating)}
                        image={item.image}
                        coins={item.cost}
                    />)
        } else if (sortArray.search) {
            return props.dataItems.filter(item => item.title.includes(sortArray.search)).map((item, itemNum) =>
                <RightsItem
                    key={itemNum}
                    count={item.count}
                    cools={ratingColor(item.rating)}
                    image={item.image}
                    coins={item.cost}
                />)

        } else {
            return props.dataItems.map((item, itemNum) =>
                <RightsItem
                    key={itemNum}
                    count={item.count}
                    cools={ratingColor(item.rating)}
                    image={item.image}
                    coins={item.cost}
                />
            )
        }
    }

    return (
        <div className="postamat pererab">
            <RightsFilterForm
                sortArray={sortArray}
                setSortArray={setSortArray}
            />

            <hr/>
            <ul className="postamat__block">

                {
                    sortableItem()
                }


            </ul>
            <div className="pererab__zone">
                <div className="zone__empty">
                    <p>Зона переработки</p>
                    <img src="images/pererab-ico.svg" alt="Ico"/>
                </div>
                <div className="zone__list">
                    <ul>

                    </ul>
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