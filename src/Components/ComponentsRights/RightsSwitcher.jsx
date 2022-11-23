import React, {useState} from 'react';
import RightsNotice from "./RightsNotice";
import RightsProcessor from "./RightsProcessor";
import RightsChat from "./Chat/RightsChat";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import RightsStorage from "./RightsStorage";
import RightsShop from "./RightsShop/RightsShop";
import RightsAirdrop from "./RightsAirdrop/RightsAirdrop";
import RightsAirdropMoveSleepers from "./RightsAirdrop/RightsAirdropMoveSleepers";

const RightsSwitcher = (props) => {

    let switcherFunction = function () {
        if (props.states.switcherRights === 'pr') {
            return (<RightsProcessor states={props.states}/>)

        } else if (props.states.switcherRights === 'st') {
            return (<RightsStorage states={props.states}/>)

        } else if (props.states.switcherRights === 'sh') {
            return (<RightsShop states={props.states}/>)

        } else if (props.states.switcherRights === 'rights-airdrop') {
            return (<RightsAirdrop states={props.states}/>)

        }


    }

    return (
        <div className="section-right__switcher">
            <RightsNotice/>

            <div className="section-right__item section-right_active">

                {switcherFunction()}

            </div>

            <div className="section-right__item">
                <RightsChat/>
            </div>
        </div>
    );
};

export default RightsSwitcher;