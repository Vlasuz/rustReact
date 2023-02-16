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

const Header = () => {

    const [socials, setSocials] = useState({})
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('https://rust.onefut.net/api/base/settings/').then(res => {
            setSocials(res.data)
            dispatch(setSettings(res.data))
        })
    }, [])

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