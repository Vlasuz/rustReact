import React from 'react';
import {Link, NavLink} from "react-router-dom";

const HeaderLogo = () => {
    return (
        <NavLink to="/" className="header__logo">
            <div className="ico">
                <img src="../images/logo-ico.svg" alt="Ico" />
            </div>
            <span><span>SMALL</span>STASH</span>
        </NavLink>
    );
};

export default HeaderLogo;