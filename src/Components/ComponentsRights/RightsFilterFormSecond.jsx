import React, {useEffect} from 'react';
import RightsSearch from "./RightsSearch";
import {useState} from "react";
import RightsSortable from "./RightsSortable";
import RightsSortableSecond from "./RightsSortableSecond";

const RightsFilterForm = (props) => {

    const [inputSearch, setInputSearch] = useState('')
    const [sortByGame, setSortByGame] = useState(false);
    const [sortByPrice, setSortByPrice] = useState(false);

    useEffect(() => {
        props.setSortArray({
            search: inputSearch,
            byPrice: sortByPrice,
            byGame: sortByGame
        })
    }, [inputSearch, sortByPrice, sortByGame])

    return (
        <>
            <RightsSearch
                inputSearch={inputSearch}
                setInputSearch={setInputSearch}
                setSortArray={props.setSortArray}
            />
            <form action="#">
                <RightsSortableSecond
                    setSortByGame={setSortByGame}
                    setSortByPrice={setSortByPrice}
                />
            </form>
        </>
    );
};

export default RightsFilterForm;