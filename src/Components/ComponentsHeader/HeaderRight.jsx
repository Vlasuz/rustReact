import React from 'react';
import HeaderLoginButton from "./HeaderLoginButton";
import HeaderLogged from "./HeaderLogged";
import {useSelector} from "react-redux";

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