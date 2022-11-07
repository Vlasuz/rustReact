import React from 'react';
import FightTop from "../Components/ComponentsFightPage/FightTop";
import ShopTop from "../Components/ComponentsShop/ShopTop";
import ShopList from "../Components/ComponentsShop/ShopList";
import {useEffect, useState} from "react";

const ClothesShopPage = ({dataInfo}) => {

    const [loader, isLoader] = useState(true)
    useEffect(() => {
        isLoader(false)
    })
    if(loader) {
        return(
            <section className="section-shop">
                <div className="loading">
                    <div className="load">
                        <div className="load__line">

                        </div>
                        <div className="load__line">

                        </div>
                        <div className="load__line">

                        </div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="section-shop">
            <FightTop dataInfo={dataInfo}/>
            <div className="section-shop__skins">
                <ShopTop />
                <ShopList />
            </div>
        </section>
    );
};

export default ClothesShopPage;