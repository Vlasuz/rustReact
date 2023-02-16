import React, {useEffect, useState} from 'react';
import {NavLink, useLocation, useParams} from "react-router-dom";

const AsideFight = () => {

    const location = useLocation();

    const [isActive, setIsActive] = useState('')

    useEffect(() => {
        setIsActive(location.pathname === "/" ? 'aside__fight aside__fight_active' : 'aside__fight')

        if(location.pathname.includes('airdrop')) {
            document.cookie = 'prevPage=airdrop';
        }

    }, [location.pathname])

    return (
        <NavLink to={"/"} className={isActive}>
            <img src="../images/fight.svg" alt="Fight" />
        </NavLink>
    );
};

export default AsideFight;