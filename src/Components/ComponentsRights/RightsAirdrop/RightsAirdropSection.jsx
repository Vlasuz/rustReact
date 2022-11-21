import React from 'react';
import RightsAirdropBlock from "./RightsAirdropBlock";
import RightsAirdropSleepers from "./RightsAirdropSleepers";
import RightsAirdropMoveSleepers from "./RightsAirdropMoveSleepers";
import RightsAirdropMember from "./RightsAirdropMember";
import {useState} from "react";
import States from "../../../States";

const RightsAirdropSection = (props) => {

    const [sleepersCount, setSleepersCount] = useState(0)


    let funcNumSwitch = function () {
        if(props.numSwitch === 1){
            return (
                <RightsAirdropSleepers
                    setSleepersCount={setSleepersCount}
                    onCoins={props.onCoins}
                    onCoinsChange={props.onCoinsChange}
                    setNumSwitch={props.setNumSwitch}
                />
            )
        } else if(props.numSwitch === 2){
            return (
                <RightsAirdropMoveSleepers
                    sleepersCount={sleepersCount}
                    setNumSwitch={props.setNumSwitch}
                />
            )
        } else if (props.numSwitch === 3){
            return (
                <RightsAirdropMember/>
            )
        }
    }

    return (
        <div className="section-right__airdrop">
            <RightsAirdropBlock
                numSwitch={props.numSwitch}
                setNumSwitch={props.setNumSwitch}
                onCoins={props.onCoins}
                showTimerToFly={props.showTimerToFly}
            />
            {funcNumSwitch()}
        </div>
    );
};

export default RightsAirdropSection;