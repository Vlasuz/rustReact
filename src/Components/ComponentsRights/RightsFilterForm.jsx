import React from 'react';
import RightsSearch from "./RightsSearch";
import {useState} from "react";
import RightsSortable from "./RightsSortable";

const RightsFilterForm = ({sortArray, setSortArray}) => {

    const [inputSearch, setInputSearch]         = useState('')
    const [filterRadio, setFilterRadio]         = useState('')
    const [filterCheckbox, setFilterCheckbox]   = useState(false)


    const submitFilter = (e) => {
        e.preventDefault()

        setSortArray(
            {
                search: inputSearch,
                filterRadio: filterRadio,
                filterCheckbox: filterCheckbox
            }
        )

    }

    return (
        <form
            className=""
            action="#"
            onSubmit={e => submitFilter(e)}
        >
            <RightsSearch
                inputSearch={inputSearch}
                setInputSearch={setInputSearch}
            />
            <RightsSortable
                filterRadio={filterRadio}
                setFilterRadio={setFilterRadio}
                setFilterCheckbox={setFilterCheckbox}
            />
        </form>
    );
};

export default RightsFilterForm;