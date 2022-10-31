import React, {useState} from 'react';
import RightsNotice from "./RightsNotice";
import RightsProcessor from "./RightsProcessor";
import RightsChat from "./Chat/RightsChat";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RightsStorage from "./RightsStorage";
import RightsShop from "./RightsShop";
import RightsAirdrop from "./RightsAirdrop";
import RightsAirdropMoveSleepers from "./RightsAirdropMoveSleepers";

const RightsSwitcher = ({onCoinsChange, onCoins, dataItems, switcherRights}) => {

    let switcherFunction = function () {
        if (switcherRights == 'pr') {

            return (<RightsProcessor
                onCoinsChange={onCoinsChange}
                onCoins={onCoins}
                dataItems={dataItems}
            />)

        } else if (switcherRights == 'st') {

            return (<RightsStorage
                dataItems={dataItems}
            />)

        } else if (switcherRights == 'sh') {

            return (<RightsShop
                dataItems={dataItems}
            />)

        } else if (switcherRights == 'rights-airdrop') {

            return (<RightsAirdrop
                dataItems={dataItems}
                onCoins={onCoins}
                onCoinsChange={onCoinsChange}
            />)

        } else if (switcherRights == 'rights-airdrop-sleepers') {

            return (<RightsAirdropMoveSleepers
                dataItems={dataItems}
                onCoins={onCoins}
                onCoinsChange={onCoinsChange}
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