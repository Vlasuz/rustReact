import React from 'react';
import HeaderLogo from "./HeaderLogo";
import HeaderLanguages from "./HeaderLanguages";
import HeaderVolume from "./HeaderVolume";
import HeaderSupport from "./HeaderSupport";
import HeaderSocials from "./HeaderSocials";
import HeaderRight from "./HeaderRight";

const Header = (props) => {
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

                    <HeaderRight setAuth={props.setAuth} dataInfo={props.dataInfo} />
                </div>
            </div>
        </header>
    );
};

export default Header;