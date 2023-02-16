import React, {useState} from 'react';
import {Trans, useTranslation} from "react-i18next";

const RightsSearch = (props) => {
    const {t} = useTranslation();

    const [placeholder, setPlaceholder] = useState(<Trans t={t}>search</Trans>)

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
                    <Trans t={t}>search</Trans>
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