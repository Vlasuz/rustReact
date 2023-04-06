import React, {useEffect, useState} from 'react';
import {NavLink, useLocation, useParams} from "react-router-dom";
import {setSound} from "../../Redux/Reducers/reducerSound";
import {useDispatch} from "react-redux";

const AsideFight = () => {

    const location = useLocation();
    const dispatch = useDispatch()
    const [isActive, setIsActive] = useState('')

    useEffect(() => {
        setIsActive(location.pathname === "/" ? 'aside__fight aside__fight_active' : 'aside__fight')

        if(location.pathname.includes('airdrop')) {
            // document.cookie = 'prevPage=airdrop';
        }

        console.log('cookie')

    }, [location.pathname])

    const goToGame = () => {
        dispatch(setSound(''))
        setTimeout(() => {
            dispatch(setSound('sound12'))
        }, 10)
    }

    return (
        <NavLink to={"/"} onClick={goToGame} className={isActive}>
            <img src="../images/fight.svg" alt="Fight" />
        </NavLink>
    );
};

export default AsideFight;