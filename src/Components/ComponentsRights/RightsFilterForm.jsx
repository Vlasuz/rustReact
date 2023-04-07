import React, {useEffect} from 'react';
import RightsSearch from "./RightsSearch";
import {useState} from "react";
import RightsSortable from "./RightsSortable";
import RightsShopRange from "./RightsShop/RightsShopRange";
import {useSelector} from "react-redux";
import {logger} from "../../middleware/logger";

const RightsFilterForm = (props) => {

    const [sortByGame, setSortByGame] = useState(false);
    const [sortByPrice, setSortByPrice] = useState(false);
    const [inputSearch, setInputSearch] = useState('')
    const [rangeValue, setRangeValue] = useState(0)
    const isActiveRange = useSelector(state => state.reducerSwitcherRights.data) === 'sh'

    const submitFilter = (e) => {
        e.preventDefault()

        props.setSortArray(
            {
                search: inputSearch,
                rangePrice: rangeValue,
                byPrice: sortByPrice,
                byGame: sortByGame
            }
        )

    }

    useEffect(() => {

        props.setSortArray(
            {
                search: inputSearch,
                rangePrice: rangeValue,
                byPrice: sortByPrice,
                byGame: sortByGame
            }
        )

    }, [rangeValue, inputSearch, sortByGame, sortByPrice])

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
                    setSortByGame={setSortByGame}
                    setSortByPrice={setSortByPrice}
                />
            </form>
        </>
    );
};

export default RightsFilterForm;