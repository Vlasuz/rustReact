import React from 'react';

const RightsFilter = ({setFilterChange}) => {
    return (
        <div className="postamat__filter">
            <input
                type="radio"
                checked
                name="filter"
                id="filterPrice"
                // onChange={e => setFilterChange(e.target.checked)}
            />
            <label className="filter__item filter__price" htmlFor="filterPrice">
                <span>По цене</span>
                <input type="checkbox" name="upDown"/>
                <img src="images/filter.svg" alt="filter"/>
            </label>
            <input
                type="radio"
                name="filter"
                id="filterCool"
                // onChange={e => setFilterChange(e.target.checked)}
            />
            <label className="filter__item filter__item_active filter__cool"
                   htmlFor="filterCool">
                <span>По раритетности</span>
                <input type="checkbox" name="upDown"/>
                <img src="images/filter.svg" alt="filter"/>
            </label>
            <button type={"submit"} className="filter__reload">
                <img src="images/reload.svg" alt="filter"/>
                <span>Обновить</span>
            </button>
        </div>
    );
};

export default RightsFilter;