import React from 'react';
import RightsSearch from "../RightsSearch";
import RightsShopRange from "./RightsShopRange";
import RightsSortable from "../RightsSortable";
import {useState} from "react";

const RightsShopTop = () => {

    const [valueOfRange, setValueOfRange]   = useState(0);
    const [sumOfRange, setSumOfRange]       = useState(0);
    const [maxCoins, setMaxCoins]           = useState(7892);

    const [filterChange, setFilterChange]   = useState('')

    const [inputSearch, setInputSearch]     = useState('')


    const sendForm = function (e) {
        e.preventDefault();

        console.log('Range: ' + sumOfRange)
        console.log('Search: ' + inputSearch)
        console.log(e.target.querySelector('input[type=radio]:checked').id)
        console.log(e.target.querySelector('input[type=radio]:checked + label input[type="checkbox"]').checked)
    }

    return (
        <form
            action="#"
            onSubmit={sendForm}
        >
            <RightsSearch
                inputSearch={inputSearch}
                setInputSearch={setInputSearch}
            />
            <RightsShopRange
                valueOfRange={valueOfRange}
                setValueOfRange={setValueOfRange}
                sumOfRange={sumOfRange}
                setSumOfRange={setSumOfRange}
                maxCoins={maxCoins}
            />
            <RightsSortable
                filterChange={filterChange}
                setFilterChange={setFilterChange}
            />
        </form>
    );
};

export default RightsShopTop;