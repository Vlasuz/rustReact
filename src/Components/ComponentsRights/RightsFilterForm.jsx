import React, {useEffect} from 'react';
import RightsSearch from "./RightsSearch";
import {useState} from "react";
import RightsSortable from "./RightsSortable";
import RightsShopRange from "./RightsShop/RightsShopRange";
import {useSelector} from "react-redux";
import {logger} from "../../middleware/logger";

const RightsFilterForm = (props) => {

    const [inputSearch, setInputSearch] = useState('')
    const [filterRadio, setFilterRadio] = useState('')
    const [filterCheckbox, setFilterCheckbox] = useState(false)
    const [rangeValue, setRangeValue] = useState(0)
    const isActiveRange = useSelector(state => state.reducerSwitcherRights.data) === 'sh'

    const submitFilter = (e) => {
        e.preventDefault()

        props.setSortArray(
            {
                search: inputSearch,
                filterRadio: filterRadio,
                filterCheckbox: filterCheckbox,
                rangePrice: rangeValue
            }
        )

    }

    useEffect(() => {

        props.setSortArray(
            {
                search: inputSearch,
                filterRadio: filterRadio,
                filterCheckbox: filterCheckbox,
                rangePrice: rangeValue
            }
        )

    }, [rangeValue, inputSearch, filterRadio, filterCheckbox])

    return (
        <>

            <RightsSearch
                inputSearch={inputSearch}
                setInputSearch={setInputSearch}
                setSortArray={props.setSortArray}
            />
            {isActiveRange &&
                <RightsShopRange setRangeValue={setRangeValue}/>}
            <form action="#" onSubmit={e => submitFilter(e)}>
                <RightsSortable
                    filterRadio={filterRadio}
                    setFilterRadio={setFilterRadio}
                    setFilterCheckbox={setFilterCheckbox}
                />
            </form>
        </>
    );
};

export default RightsFilterForm;