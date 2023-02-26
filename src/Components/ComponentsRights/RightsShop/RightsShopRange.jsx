import React, {useEffect, useState} from 'react';
import MultiRangeSlider from "../../../Hooks/MultiRangeSlider";
import {useSelector} from "react-redux";

const RightsShopRange = ({ setRangeValue }) => {

    const shopListReducer = useSelector(state => state.reducerShopList.list)
    const [lftValue, setLftValue] = useState(0)
    const [rhtValue, setRhtValue] = useState(0)
    const [maxValue, setMaxValue] = useState(0)

    useEffect(() => {
        setMaxValue(Math.max(...shopListReducer.map(item => item.price.value)))
    }, [shopListReducer])

    useEffect(() => {
        setRangeValue({
            min: lftValue,
            max: rhtValue
        })
    }, [lftValue, rhtValue])

    const handleRange = ({ min, max }) => {
        setRhtValue(max)
        setLftValue(min)
    }

    return (
        <div className="postamat__range">
            {maxValue > 0 && <MultiRangeSlider
                min={0}
                max={maxValue}
                onChange={handleRange}
            />}
            <div className="range__text">
                <img src="../images/header__coins.svg" alt="Coin"/>
                <p>{lftValue} — {rhtValue}</p>
            </div>
        </div>
    );
};

export default RightsShopRange;