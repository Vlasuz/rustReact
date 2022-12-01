import React from 'react';
import {useState} from "react";
import RightsFilterForm from "./RightsFilterForm";
import RightsItemStorage from "./RightsItemStorage";
import OpenPopup from "../../Hooks/OpenPopup";

const RightsStorage = (props) => {

    const clickToSelect = (e) => {

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

    const [sortArray, setSortArray] = useState(
        {
            search: '',
            filterRadio: '',
            filterCheckbox: false,
        }
    )
    // const sortableItem = () => {
    //     if (sortArray.search && sortArray.filterRadio) {
    //         return
    //
    //     } else if (sortArray.filterRadio) {
    //         return props.states.dataItems
    //             .sort((a, b) => (!sortArray.filterCheckbox) ?
    //                 ((sortArray.filterRadio === "filterPrice") ? a.cost : a.rarity) - ((sortArray.filterRadio) === "filterPrice" ? b.cost : b.rarity) :
    //                 ((sortArray.filterRadio === "filterPrice") ? b.cost : b.rarity) - ((sortArray.filterRadio) === "filterPrice" ? a.cost : a.rarity))
    //             .map((item, itemNum) =>
    //                 <RightsItemStorage
    //                     clickToSelectItem={clickToSelectItem}
    //                     key={itemNum}
    //                     count={item.count}
    //                     cools={ratingColor(item.rating)}
    //                     image={item.image}
    //                     coins={item.cost}
    //                 />)
    //     } else if (sortArray.search) {
    //         return props.states.dataItems.filter(item => item.title.includes(sortArray.search)).map((item, itemNum) =>
    //             <RightsItemStorage
    //                 clickToSelectItem={clickToSelectItem}
    //                 key={itemNum}
    //                 count={item.count}
    //                 cools={ratingColor(item.rating)}
    //                 image={item.image}
    //                 coins={item.cost}
    //             />)
    //
    //     } else {
    //         return props.states.dataItems.map((item, itemNum) =>
    //             <RightsItemStorage
    //                 clickToSelectItem={clickToSelectItem}
    //                 key={itemNum}
    //                 count={item.count}
    //                 cools={ratingColor(item.rating)}
    //                 image={item.image}
    //                 coins={item.cost}
    //             />
    //         )
    //     }
    // }

    return (

        <div className="postamat storage">
            <RightsFilterForm
                sortArray={sortArray}
                setSortArray={setSortArray}
            />

            <hr/>

            <ul className="postamat__block">

                {
                    props.states.dataItems
                        ?.filter(item => item.title.includes(sortArray.search))
                        ?.sort((a, b) => (!sortArray.filterCheckbox) ?
                            ((sortArray.filterRadio === "filterPrice") ? a.cost : a.rarity) - ((sortArray.filterRadio) === "filterPrice" ? b.cost : b.rarity) :
                            ((sortArray.filterRadio === "filterPrice") ? b.cost : b.rarity) - ((sortArray.filterRadio) === "filterPrice" ? a.cost : a.rarity))
                        .map((item, itemNum) =>
                            <RightsItemStorage
                                key={itemNum}
                                item={item}
                                clickToSelect={clickToSelect}
                            />
                        )
                }

            </ul>

            <div className="storage__zone">
                <div className="zone__empty">
                    <p>Выберите предмет для вывода</p>
                </div>
                <button
                    className="zone__button"
                    onClick={() => OpenPopup('popup-pull')}
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