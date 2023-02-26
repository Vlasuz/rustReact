import React from 'react';
import Translate from "../../Hooks/Translate";

const RightsSortableSecond = (props) => {

    let changeRatio = (e) => {
        props.setFilterRadio(e.target.checked ? e.target.id : '')
        props.setFilterCheckbox(e.target.nextSibling.querySelector('input').checked)
    }

    return (
        <div className="postamat__filter">
            <input
                type="radio"
                name="filter"
                id="filterPrice1"
                onChange={e => changeRatio(e)}
            />
            <label className="filter__item filter__price" htmlFor="filterPrice1">
                <span>
                    <Translate>sort_by_price</Translate>
                </span>
                <input
                    type="checkbox"
                    name="upDown"
                    onChange={e => props.filterRadio == e.target.closest('label').getAttribute('for') ? props.setFilterCheckbox(e.target.checked) : ''}
                />
                <img src="../images/filter.svg" alt="filter"/>
            </label>
            <input
                type="radio"
                name="filter"
                id="filterCool1"
                onChange={e => changeRatio(e)}
            />
            <label className="filter__item filter__item_active filter__cool"
                   htmlFor="filterCool1">
                <span>
                    <Translate>sort_by_rarity</Translate>
                </span>
                <input
                    type="checkbox"
                    name="upDown"
                    onChange={e => props.filterRadio == e.target.closest('label').getAttribute('for') ? props.setFilterCheckbox(e.target.checked) : ''}
                />
                <img src="../images/filter.svg" alt="filter"/>
            </label>
            <button
                type={"submit"}
                className="filter__reload"
            >
                <img src="../images/reload.svg" alt="filter"/>
                <span>
                    <Translate>sort_update</Translate>
                </span>
            </button>
        </div>
    );
};

export default RightsSortableSecond;