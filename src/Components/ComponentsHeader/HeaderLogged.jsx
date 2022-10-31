import React from 'react';
import HeaderUser from "./HeaderUser";
import HeaderBurgerMenu from "./HeaderBurgerMenu";
import HeaderCoins from "./HeaderCoins";

const HeaderLogged = ({dataInfo}) => {
    return (
        <>
            <HeaderCoins dataInfo={dataInfo}/>

            <HeaderUser/>

            <HeaderBurgerMenu/>
        </>
    );
};

export default HeaderLogged;