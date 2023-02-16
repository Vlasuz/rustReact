import React from 'react';
import {Trans, useTranslation} from "react-i18next";

const RightsSortable = (props) => {
    const {t} = useTranslation();

    let changeRatio = (e) => {
        props.setFilterRadio(e.target.checked ? e.target.id : '')
        props.setFilterCheckbox(e.target.nextSibling.querySelector('input').checked)
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
                <span>
                    <Trans t={t}>sort_by_price</Trans>
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
                id="filterCool"
                onChange={e => changeRatio(e)}
            />
            <label className="filter__item filter__item_active filter__cool"
                   htmlFor="filterCool">
                <span>
                    <Trans t={t}>sort_by_rarity</Trans>
                </span>
                <input
                    type="checkbox"
                    name="upDown"
                    onChange={e => props.filterRadio === e.target.closest('label').getAttribute('for') ? props.setFilterCheckbox(e.target.checked) : ''}
                />
                <img src="../images/filter.svg" alt="filter"/>
            </label>
            <button
                type={"submit"}
                className="filter__reload"
            >
                <img src="../images/reload.svg" alt="filter"/>
                <span>
                    <Trans t={t}>sort_update</Trans>
                </span>
            </button>
        </div>
    );
};

export default RightsSortable;