import React from 'react';
import FightTop from "../Components/ComponentsFightPage/FightTop";
import ShopTop from "../Components/ComponentsShop/ShopTop";
import ShopList from "../Components/ComponentsShop/ShopList";
import Loader from "../Hooks/Loader";
import {useSelector} from "react-redux";

const ClothesShopPage = () => {
    Loader()

    return (
        <section className="section-shop">
            <FightTop/>

            <div className="section-shop__skins">
                <ShopTop/>
                <ShopList/>
            </div>

        </section>
    );
};

export default ClothesShopPage;