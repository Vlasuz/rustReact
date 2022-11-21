import React from 'react';
import {Link} from "react-router-dom";

const HeaderUser = () => {
    return (
        <Link className="header__user" to={"/"}>


            <img src="images/user.jpeg" alt="User"/>
            <span>Volaratice</span>
        </Link>
    );
};

export default HeaderUser;