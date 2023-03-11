import React from 'react';
import Translate from "../../Hooks/Translate";
import {logger} from "../../middleware/logger";
import {useLocation} from "react-router-dom";

const HeaderLoginButton = () => {

    // http://localhost:3000
    // https://www.smallstash.gg

    let location = useLocation()

    let auth_params = {
        'openid.ns': 'http://specs.openid.net/auth/2.0',
        'openid.mode': 'checkid_setup',
        'openid.return_to': 'https://www.smallstash.gg' + location.pathname,
        'openid.realm': 'https://www.smallstash.gg' + location.pathname,
        'openid.identity': 'http://specs.openid.net/auth/2.0/identifier_select',
        'openid.claimed_id': 'http://specs.openid.net/auth/2.0/identifier_select'
    }


    // DELETE !!!!!
    if(window.location.href.includes('localhost')) {
        auth_params = {
            'openid.ns': 'http://specs.openid.net/auth/2.0',
            'openid.mode': 'checkid_setup',
            'openid.return_to': 'http://localhost:3000' + location.pathname,
            'openid.realm': 'http://localhost:3000' + location.pathname,
            'openid.identity': 'http://specs.openid.net/auth/2.0/identifier_select',
            'openid.claimed_id': 'http://specs.openid.net/auth/2.0/identifier_select'
        }
    }
    // DELETE !!!!!

    return (
        <a href={"https://steamcommunity.com/openid/login?"+new URLSearchParams(auth_params).toString()} className={"buttonToLogin"}>
            <span>
                <Translate>entry</Translate>
            </span>
            <img src="../images/steam.svg" alt="Login"/>
        </a>
    );
};

export default HeaderLoginButton;