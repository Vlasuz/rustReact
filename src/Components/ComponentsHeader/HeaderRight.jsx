import React, {useState} from 'react';
import HeaderCoins from "./HeaderCoins";
import HeaderUser from "./HeaderUser";
import HeaderBurgerMenu from "./HeaderBurgerMenu";
import HeaderLoginButton from "./HeaderLoginButton";
import HeaderLogged from "./HeaderLogged";

const HeaderRight = ({dataInfo}) => {

    const [auth, setAuth] = useState(true);


    return (
        <div className="header__right">

            {!auth ? <HeaderLoginButton/> : <HeaderLogged dataInfo={dataInfo}/>}



        </div>
    );
};

export default HeaderRight;