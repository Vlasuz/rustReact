import React from 'react';

const HeaderLoginButton = () => {
    return (
        <button className={"buttonToLogin"}>
            <span>Войти</span>
            <img src="images/steam.svg" alt="Login"/>
        </button>
    );
};

export default HeaderLoginButton;