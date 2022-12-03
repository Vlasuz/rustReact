import React from 'react';
import FightTop from "../Components/ComponentsFightPage/FightTop";
import ShopTop from "../Components/ComponentsShop/ShopTop";
import ShopList from "../Components/ComponentsShop/ShopList";
import Loader from "../Hooks/Loader";

const ClothesShopPage = (props) => {
    Loader()

    return (
        <section className="section-shop">
            <FightTop states={props.states}/>

            <div className="section-shop__skins">
                <ShopTop />
                <ShopList states={props.states} />
            </div>
        </section>
    );
};

export default ClothesShopPage;