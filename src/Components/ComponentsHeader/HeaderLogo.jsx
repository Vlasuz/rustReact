import React from 'react';
import {Link} from "react-router-dom";

const HeaderLogo = () => {
    return (
        <Link to="/" className="header__logo">
            <div className="ico">
                <img src="../images/logo-ico.svg" alt="Ico" />
            </div>
            <span><span>SMALL</span>STASH</span>
        </Link>
    );
};

export default HeaderLogo;