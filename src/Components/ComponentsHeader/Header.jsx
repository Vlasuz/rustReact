import React from 'react';
import HeaderLogo from "./HeaderLogo";
import HeaderLanguages from "./HeaderLanguages";
import HeaderVolume from "./HeaderVolume";
import HeaderSupport from "./HeaderSupport";
import HeaderSocials from "./HeaderSocials";
import HeaderCoins from "./HeaderCoins";
import HeaderUser from "./HeaderUser";
import HeaderBurgerMenu from "./HeaderBurgerMenu";
import HeaderRight from "./HeaderRight";

const Header = ({dataInfo}) => {
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

                    <HeaderRight dataInfo={dataInfo} />
                </div>
            </div>
        </header>
    );
};

export default Header;