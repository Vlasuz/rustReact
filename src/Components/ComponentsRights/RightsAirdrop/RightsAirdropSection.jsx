import React from 'react';
import RightsAirdropBlock from "./RightsAirdropBlock";
import RightsAirdropSleepers from "./RightsAirdropSleepers";
import RightsAirdropMoveSleepers from "./RightsAirdropMoveSleepers";
import RightsAirdropMember from "./RightsAirdropMember";
import {useState} from "react";

const RightsAirdropSection = ({onCoinsChange, onCoins, timer}) => {

    const [numSwitch, setNumSwitch] = useState(1)
    const [sleepersCount, setSleepersCount] = useState(0)

    let funcNumSwitch = function () {
        if(numSwitch == 1){
            return (
                <RightsAirdropSleepers
                    setSleepersCount={setSleepersCount}
                    onCoins={onCoins}
                    onCoinsChange={onCoinsChange}
                    setNumSwitch={setNumSwitch}
                />
            )
        } else if(numSwitch == 2){
            return (
                <RightsAirdropMoveSleepers
                    sleepersCount={sleepersCount}
                    setNumSwitch={setNumSwitch}
                />
            )
        } else if (numSwitch == 3){
            return (
                <RightsAirdropMember />
            )
        }
    }

    return (
        <div className="section-right__airdrop">
            <RightsAirdropBlock onCoins={onCoins} timer={timer} />
            {funcNumSwitch()}
        </div>
    );
};

export default RightsAirdropSection;