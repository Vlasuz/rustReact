import React, {useState} from 'react';
import RightsShopItem from "./RightsShopItem";
import {useSelector} from "react-redux";

const RightsShopList = ({listItems, setIsAddCart, setListToCart, listToCart}) => {

    const list = useSelector(state => state.reducerShopListAdded.list)

    return (
        <div className="postamat__block">

            {
                list.map(item =>
                    <RightsShopItem
                        key={item.id}
                        listItems={item}
                        setIsAddCart={setIsAddCart}
                        setListToCart={setListToCart}
                        listToCart={listToCart}
                    />
                )
            }


        </div>
    );
};

export default RightsShopList;