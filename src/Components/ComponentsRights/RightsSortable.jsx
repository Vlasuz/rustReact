import React, {useState} from 'react';

const RightsSortable = ({filterRadio, setFilterRadio, setFilterCheckbox}) => {

    let changeRatio = (e) => {
        setFilterRadio(e.target.checked ? e.target.id : '')
        setFilterCheckbox(e.target.nextSibling.querySelector('input').checked)
    }

    return (
        <div className="postamat__filter">
            <input
                type="radio"
                name="filter"
                id="filterPrice"
                onChange={e => changeRatio(e)}
            />
            <label className="filter__item filter__price" htmlFor="filterPrice">
                <span>По цене</span>
                <input
                    type="checkbox"
                    name="upDown"
                    onChange={e => filterRadio == e.target.closest('label').getAttribute('for') ? setFilterCheckbox(e.target.checked) : ''}
                />
                <img src="images/filter.svg" alt="filter"/>
            </label>
            <input
                type="radio"
                name="filter"
                id="filterCool"
                onChange={e => changeRatio(e)}
            />
            <label className="filter__item filter__item_active filter__cool"
                   htmlFor="filterCool">
                <span>По раритетности</span>
                <input
                    type="checkbox"
                    name="upDown"
                    onChange={e => filterRadio == e.target.closest('label').getAttribute('for') ? setFilterCheckbox(e.target.checked) : ''}
                />
                <img src="images/filter.svg" alt="filter"/>
            </label>
            <button
                type={"submit"}
                className="filter__reload"
            >
                <img src="images/reload.svg" alt="filter"/>
                <span>Обновить</span>
            </button>
        </div>
    );
};

export default RightsSortable;