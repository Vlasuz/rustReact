import React, {useEffect, useState} from 'react';
import HeaderCoins from "./HeaderCoins";
import HeaderUser from "./HeaderUser";
import HeaderBurgerMenu from "./HeaderBurgerMenu";
import HeaderLoginButton from "./HeaderLoginButton";
import HeaderLogged from "./HeaderLogged";
import States from "../../States";
import {useSelector} from "react-redux";
import {reducerAuth} from "../../Redux/Reducers/reducerAuth";

const HeaderRight = () => {

    const auth = useSelector(state => state.reducerAuth.auth)

    return (
        <div className="header__right">
            {
                auth ? <HeaderLogged/> : <HeaderLoginButton/>
            }
        </div>
    );
};

export default HeaderRight;