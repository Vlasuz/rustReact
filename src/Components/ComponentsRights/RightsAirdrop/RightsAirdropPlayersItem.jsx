import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const RightsAirdropPlayersItem = ({ data }) => {

    const settings = useSelector(state => state.reducerSettings.settings)

    return (
        <div className="players__item">
            <NavLink to={'/user/'+data.user.id} className="item__photo">
                <img src={data.user.avatar} alt="User"/>
            </NavLink>
            <NavLink to={'/user/'+data.user.id} className="item__name">
                {data.user.name}
            </NavLink>
            <div className="item__coins">
                <img src="../images/header__coins.svg" alt="Coins"/>
                <span>
                    {data?.bags?.length && settings?.airdrop_bag_price && data?.bags?.length * settings?.airdrop_bag_price}
                </span>
            </div>
        </div>
    );
};

export default RightsAirdropPlayersItem;