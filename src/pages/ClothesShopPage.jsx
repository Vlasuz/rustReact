import React from 'react';
import FightTop from "../Components/ComponentsFightPage/FightTop";
import ShopTop from "../Components/ComponentsShop/ShopTop";
import ShopList from "../Components/ComponentsShop/ShopList";

const ClothesShopPage = ({dataInfo}) => {
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