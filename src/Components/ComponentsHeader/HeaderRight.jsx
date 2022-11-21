import React, {useState} from 'react';
import HeaderCoins from "./HeaderCoins";
import HeaderUser from "./HeaderUser";
import HeaderBurgerMenu from "./HeaderBurgerMenu";
import HeaderLoginButton from "./HeaderLoginButton";
import HeaderLogged from "./HeaderLogged";
import States from "../../States";

const HeaderRight = (props) => {

    const state = States()

    return (
        <div className="header__right">
            {!state.auth ? <HeaderLoginButton/> : <HeaderLogged setAuth={state.setAuth} dataInfo={props.dataInfo}/>}
        </div>
    );
};

export default HeaderRight;