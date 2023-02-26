import React, {useState} from 'react';
import RightsProcessor from "./RightsProcessor";
import RightsChat from "./Chat/RightsChat";
import RightsStorage from "./RightsStorage";
import RightsShop from "./RightsShop/RightsShop";
import RightsAirdrop from "./RightsAirdrop/RightsAirdrop";
import {useSelector} from "react-redux";

const RightsSwitcher = (props) => {

    const switcherRights = useSelector(state => state.reducerSwitcherRights.data)

    return (
        <div className="section-right__switcher">

            <div className="section-right__item">

                {
                    switcherRights === 'st' ? <RightsStorage states={props.states}/> :
                        switcherRights === 'sh' ? <RightsShop states={props.states}/> :
                            switcherRights === 'ra' ? <RightsAirdrop states={props.states}/> :
                                <RightsProcessor states={props.states}/>
                }

            </div>

            <div className="section-right__item section-right_active section-right__item_change-show">
                <RightsChat/>
            </div>
        </div>
    );
};

export default RightsSwitcher;