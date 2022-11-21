import React from 'react';
import HeaderUser from "./HeaderUser";
import HeaderBurgerMenu from "./HeaderBurgerMenu";
import HeaderCoins from "./HeaderCoins";

const HeaderLogged = (props) => {
    return (
        <>
            <HeaderCoins dataInfo={props.dataInfo}/>

            <HeaderUser/>

            <HeaderBurgerMenu setAuth={props.setAuth}/>
        </>
    );
};

export default HeaderLogged;