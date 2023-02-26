import React, {useState} from 'react';
import {Trans, useTranslation} from "react-i18next";
import Translate from "../../Hooks/Translate";

const RightsSearch = (props) => {

    const submitFilter = (e) => {
        e.preventDefault()

        props.setInputSearch(e.target.value)
        props.setSortArray(
            {
                search: e.target.value,
                filterRadio: '',
                filterCheckbox: false,
            }
        )

    }

    return (
        <div className="postamat__search">
            {
                !props.inputSearch.length &&
                <span className="placeholder-search">
                    <Translate>search</Translate>
                </span>
            }
            <input
                type="text"
                value={props.inputSearch}
                onChange={e => submitFilter(e)}
            />
            <button>
                <img src="../images/search.svg" alt="Search"/>
            </button>
        </div>
    );
};

export default RightsSearch;