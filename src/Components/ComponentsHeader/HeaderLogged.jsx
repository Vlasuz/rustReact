import React from 'react';
import HeaderUser from "./HeaderUser";
import HeaderBurgerMenu from "./HeaderBurgerMenu";
import HeaderCoins from "./HeaderCoins";

const HeaderLogged = () => {
    return (
        <>
            <HeaderCoins/>
            <HeaderUser/>
            <HeaderBurgerMenu/>
        </>
    );
};

export default HeaderLogged;