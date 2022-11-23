import React, {useState} from 'react';
import HeaderCoins from "./HeaderCoins";
import HeaderUser from "./HeaderUser";
import HeaderBurgerMenu from "./HeaderBurgerMenu";
import HeaderLoginButton from "./HeaderLoginButton";
import HeaderLogged from "./HeaderLogged";
import States from "../../States";

const HeaderRight = (props) => {

    return (
        <div className="header__right">
            {!props.states.auth ? <HeaderLoginButton/> : <HeaderLogged setAuth={props.states.setAuth} dataInfo={props.states.dataInfo}/>}
        </div>
    );
};

export default HeaderRight;