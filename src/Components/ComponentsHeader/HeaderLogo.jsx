import React from 'react';
import {Link, NavLink, useLocation, useNavigate} from "react-router-dom";
import {switcherRights} from "../../Redux/actions";
import {useDispatch, useSelector} from "react-redux";

const HeaderLogo = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    const whichBlockRights = useSelector(state => state.reducerSwitcherRights.data)

    const handleNavigate = () => {
        if(!location.pathname.includes("airdrop")) navigate("/airdrop")

        if(whichBlockRights !== "ra"){
            setTimeout(() => {
                dispatch(switcherRights('ra'))
            }, 300)

            document.querySelector('.aside__list .li_active')?.classList.remove('li_active')
            document.querySelector('.section-right__top .top__item:first-child').click()
        }
    }

    return (
        <button onClick={handleNavigate} className="header__logo">
            <div className="ico">
                <img src="../images/logo-ico.svg" alt="Ico" />
            </div>
            <span><span>SMALL</span>STASH</span>
        </button>
    );
};

export default HeaderLogo;