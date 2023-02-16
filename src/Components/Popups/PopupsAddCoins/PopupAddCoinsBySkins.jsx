import React, {useState} from 'react';
import PopupCloseBackground from "../PopupCloseBackground";
import PopupCloseCross from "../PopupCloseCross";
import PopupAddCoinsBySkinsList from "./PopupAddCoinsBySkins/PopupAddCoinsBySkinsList";
import RightsSortable from "../../ComponentsRights/RightsSortable";
import RightsSortableSecond from "../../ComponentsRights/RightsSortableSecond";
import PopupAddCoinsBySkinsItem from "./PopupAddCoinsBySkins/PopupAddCoinsBySkinsItem";
import RightsItemStorage from "../../ComponentsRights/RightsItemStorage";
import RightsFilterForm from "../../ComponentsRights/RightsFilterForm";
import RightsFilterFormSecond from "../../ComponentsRights/RightsFilterFormSecond";
import {useSelector} from "react-redux";

const PopupAddCoinsBySkins = (props) => {

    const [sortArray, setSortArray] = useState(
        {
            search: '',
            filterRadio: '',
            filterCheckbox: false,
        }
    )
    const [sumOfCoins, setSumOfCoins] = useState(0)
    const listOfItems = useSelector(state => state.reducerUserInventory.list)

    const addCoinsFunction = () => {
        props.states.setCoins(old => old + sumOfCoins)
        setSumOfCoins(0)



        document.querySelectorAll('.skins__block .postamat__item').forEach(item => {
            item.classList.remove('skins__item_active')
        })
    }

    const clickToSelect = (e) => {
        e.target.closest('.postamat__item').classList.toggle('skins__item_active')

        e.target.closest('.postamat__item').classList.contains('skins__item_active') ?
            setSumOfCoins(prev => prev + +e.target.closest('.postamat__item').querySelector('.item__price span').textContent) :
            setSumOfCoins(prev => prev - +e.target.closest('.postamat__item').querySelector('.item__price span').textContent)
    }

    return (
        <div className="popup popup-add-coins-skins">
            <PopupCloseBackground />
            <div className="popup__content">
                <h2>Инвентарь Steam</h2>
                <p>Выберите скины для пополнения</p>
                <PopupCloseCross />

                <RightsFilterFormSecond
                    sortArray={sortArray}
                    setSortArray={setSortArray}
                />

                <div className="skins__inner">
                    <div className="skins__block">

                        {
                            listOfItems
                                ?.filter(item => item.title.toLowerCase().includes(sortArray.search.toLowerCase()))
                                ?.sort((a, b) => (!sortArray.filterCheckbox) ?
                                    ((sortArray.filterRadio === "filterPrice1") ? a.cost : a.rarity) - ((sortArray.filterRadio) === "filterPrice1" ? b.cost : b.rarity) :
                                    ((sortArray.filterRadio === "filterPrice1") ? b.cost : b.rarity) - ((sortArray.filterRadio) === "filterPrice1" ? a.cost : a.rarity))
                                .map((item, itemNum) =>
                                    <RightsItemStorage
                                        key={itemNum}
                                        item={item}
                                        clickToSelect={clickToSelect}
                                    />
                                )
                        }

                    </div>
                </div>
                <hr />
                <div className="skins__price">
                    <p>Зачисление на баланс:</p>
                    <div className="price__block">
                        <span>${(sumOfCoins * 0.038).toFixed(2)}</span>
                        <div className="ico">
                            <img src="../images/change-arr.svg" alt="Ico"/>
                        </div>
                        <div className="coins">
                            <img src="../images/header__coins.svg" alt="Ico" />
                            <span>
                                {sumOfCoins}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="skins__button">
                    <button className="grey">
                        <img src="../images/reload.svg" alt="ico" />
                        <span>Обновить</span>
                    </button>
                    <button
                        onClick={() => addCoinsFunction()}
                    >
                        <span>Пополнить скинами</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PopupAddCoinsBySkins;