import React from 'react';
import {Trans, useTranslation} from "react-i18next";
import Translate from "../../Hooks/Translate";

const RightsSortable = (props) => {

    // let changeRatio = (e) => {
    //     props.setFilterRadio(e.target.checked ? e.target.id : '')
    //     props.setFilterCheckbox(e.target.nextSibling.querySelector('input').checked)
    // }

    const changeRatio = (e) => {
        props.setFilterRadio(e.target.checked ? e.target.id : '')
        props.setFilterCheckbox(e.target.nextSibling.querySelector('input').checked)

        const checkbox = e.target.closest('.label-changed').querySelector('input[type="checkbox"]')

        checkbox.checked = !checkbox.checked
        props.setFilterCheckbox(checkbox.checked)
    }

    return (
        <div className="postamat__filter">
            <div className="label-changed">
                <input
                    type="radio"
                    name="filter"
                    id="filterPrice"
                    onClick={e => changeRatio(e)}
                />
                <label className="filter__item filter__price" htmlFor="filterPrice">
                    <span>
                        <Translate>sort_by_price</Translate>
                    </span>
                    <input
                        type="checkbox"
                        name="upDown"
                    />
                    <img src="../images/filter.svg" alt="filter"/>
                </label>
            </div>
            <div className="label-changed">
                <input
                    type="radio"
                    name="filter"
                    id="filterCool"
                    onClick={e => changeRatio(e)}
                />
                <label className="filter__item filter__item_active filter__cool"
                       htmlFor="filterCool">
                    <span>
                        <Translate>sort_by_rarity</Translate>
                    </span>
                    <input
                        type="checkbox"
                        name="upDown"
                    />
                    <img src="../images/filter.svg" alt="filter"/>
                </label>
            </div>
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

export default RightsSortable;