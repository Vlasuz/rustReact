import React, {useState} from 'react';
import RightsNotice from "./RightsNotice";
import RightsProcessor from "./RightsProcessor";
import RightsChat from "./Chat/RightsChat";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import RightsStorage from "./RightsStorage";
import RightsShop from "./RightsShop/RightsShop";
import RightsAirdrop from "./RightsAirdrop/RightsAirdrop";
import RightsAirdropMoveSleepers from "./RightsAirdrop/RightsAirdropMoveSleepers";
import {useSelector} from "react-redux";
import {reducerSwitcherRights} from "../../Redux/Reducers/reducerSwitcherRights";

const RightsSwitcher = (props) => {

    const switcherRights = useSelector(state => state.reducerSwitcherRights.data)

    return (
        <div className="section-right__switcher">
            <RightsNotice/>

            <div className="section-right__item section-right_active">

                {
                    switcherRights === 'st' ? <RightsStorage states={props.states}/> :
                        switcherRights === 'sh' ? <RightsShop states={props.states}/> :
                            switcherRights === 'ra' ? <RightsAirdrop states={props.states}/> :
                                <RightsProcessor states={props.states}/>
                }

            </div>

            <div className="section-right__item">
                <RightsChat/>
            </div>
        </div>
    );
};

export default RightsSwitcher;