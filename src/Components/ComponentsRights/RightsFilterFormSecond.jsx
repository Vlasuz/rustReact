import React, {useEffect} from 'react';
import RightsSearch from "./RightsSearch";
import {useState} from "react";
import RightsSortable from "./RightsSortable";
import RightsSortableSecond from "./RightsSortableSecond";

const RightsFilterForm = (props) => {

    const [inputSearch, setInputSearch] = useState('')
    const [filterRadio, setFilterRadio] = useState('')
    const [filterCheckbox, setFilterCheckbox] = useState(false)

    useEffect(() => {
        props.setSortArray({
                search: inputSearch,
                filterRadio: filterRadio,
                filterCheckbox: filterCheckbox
            })
    }, [filterCheckbox, inputSearch, filterCheckbox])

    return (
        <>
            <RightsSearch
                inputSearch={inputSearch}
                setInputSearch={setInputSearch}
                setSortArray={props.setSortArray}
            />
            <form action="#">
                <RightsSortableSecond
                    filterRadio={filterRadio}
                    setFilterRadio={setFilterRadio}
                    setFilterCheckbox={setFilterCheckbox}
                />
            </form>
        </>
    );
};

export default RightsFilterForm;