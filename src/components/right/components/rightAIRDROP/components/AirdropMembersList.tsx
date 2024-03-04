import React, {useContext, useEffect} from 'react'
import { useSelector } from 'react-redux';
import {AirdropSocketContext} from "../../../../../App";
import { prettyCoinValues } from '../../../../../functions/prettyCoinValues';
import {IUser} from "../../../../../model";
import coins from './../../../../../assets/images/header__coins.svg'
import {NavLink} from "react-router-dom";
import {Translate} from "../../../../translate/Translate";

interface IAirdropMembersListProps {

}

export const AirdropMembersList: React.FC<IAirdropMembersListProps> = () => {

    const airdropWsMessages: any = useContext(AirdropSocketContext)

    const isHaveUsers = airdropWsMessages?.airdrop?.players.length
    
    const settings = useSelector((state: any) => state.toolkit.siteSettings)

    return (
        <div className={"section-right__players" + (!isHaveUsers ? " section-right__players_none" : "")}>
            {!isHaveUsers && <big>
                <Translate>not_a_bid</Translate>
            </big>}
            <div className="players__list">

                {
                    airdropWsMessages?.airdrop?.players?.map((item: any) =>
                        <div key={item.user.id} className="players__item">
                            <NavLink className="item__photo" to={"/user/" + (item.user.id)}>
                                <img src={item.user.avatar} alt="User"/>
                            </NavLink>
                            <NavLink className="item__name" to={"/user/" + (item.user.id)}>
                                {item.user.name}
                            </NavLink>
                            <div className="item__coins">
                                <img src={coins} alt="Coins"/>
                                <p>
                                    {
                                        prettyCoinValues((item.bags.length && settings?.airdrop_bag_price) && item?.bags?.length * settings?.airdrop_bag_price)
                                    }
                                </p>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    )
}
