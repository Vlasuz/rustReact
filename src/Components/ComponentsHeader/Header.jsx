import React, {useEffect, useState} from 'react';
import HeaderLogo from "./HeaderLogo";
import HeaderLanguages from "./HeaderLanguages";
import HeaderVolume from "./HeaderVolume";
import HeaderSupport from "./HeaderSupport";
import HeaderSocials from "./HeaderSocials";
import HeaderRight from "./HeaderRight";
import {useDispatch} from "react-redux";
import axios from "axios";
import {setSettings} from "../../Redux/Reducers/reducerSettings";
import GlobalLink from "../../Hooks/GlobalLink";

const Header = () => {
    return (
        <header className="header">
            <div className="wrapper">
                <div className="header__inner">
                    <HeaderLogo />
                    <HeaderLanguages />
                    <HeaderVolume />

                    <div className="header__lowright">
                        <HeaderSupport />
                        <HeaderSocials />
                    </div>

                    <HeaderRight/>
                </div>
            </div>
        </header>
    );
};

export default Header;