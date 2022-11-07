import React, {useState} from 'react';
import RightsShopItem from "./RightsShopItem";

const RightsShopList = ({listItems, setIsAddCart, setListToCart, listToCart}) => {



    return (
        <div className="postamat__block">

            {
                listItems.map(item =>
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