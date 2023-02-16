import React from 'react';

const HeaderLoginButton = () => {

    const auth_params = {
        'openid.ns': 'http://specs.openid.net/auth/2.0',
        'openid.mode': 'checkid_setup',
        'openid.return_to': 'http://localhost:3000',
        'openid.realm': 'http://localhost:3000',
        'openid.identity': 'http://specs.openid.net/auth/2.0/identifier_select',
        'openid.claimed_id': 'http://specs.openid.net/auth/2.0/identifier_select'
    }

    return (
        <a href={"https://steamcommunity.com/openid/login?openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.mode=checkid_setup&openid.return_to=https%3A%2F%2Frust.webline.space%2F&openid.realm=ht\n" +
            "tps%3A%2F%2Frust.webline.space%2F&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_\n" +
            "select"} className={"buttonToLogin"}>
        {/*<a href={"https://steamcommunity.com/openid/login?"+new URLSearchParams(auth_params).toString()} className={"buttonToLogin"}>*/}
            <span>Войти</span>
            <img src="../images/steam.svg" alt="Login"/>
        </a>
    );
};

export default HeaderLoginButton;