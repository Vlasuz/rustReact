import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {reducerUserData} from "../../Redux/Reducers/reducerUserData";

const HeaderUser = () => {

    const userData = useSelector(state => state.reducerUserData.data)

    return (
        <Link className="header__user" to={"/profile"}>
            <img src={userData.avatar} alt="User"/>
            <span>{userData.name}</span>
        </Link>
    );
};

export default HeaderUser;