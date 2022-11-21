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
        if (props.switcherRights == 'pr') {
            return (<RightsProcessor
                onCoinsChange={props.onCoinsChange}
                onCoins={props.onCoins}
                dataItems={props.dataItems}
            />)

        } else if (props.switcherRights == 'st') {

            return (<RightsStorage
                dataItems={props.dataItems}
            />)

        } else if (props.switcherRights == 'sh') {

            return (<RightsShop
                dataItems={props.dataItems}
            />)

        } else if (props.switcherRights == 'rights-airdrop') {

            return (<RightsAirdrop
                dataItems={props.dataItems}
                onCoins={props.onCoins}
                onCoinsChange={props.onCoinsChange}

                numSwitch={props.numSwitch}
                setNumSwitch={props.setNumSwitch}
                listAirdropsMembers={props.listAirdropsMembers}
                setListAirdropsMembers={props.setListAirdropsMembers}
                showTimerToFly={props.showTimerToFly}
            />)

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