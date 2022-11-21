import React from 'react';
import RightsAirdropPlayers from "./RightsAirdropPlayers";
import RightsAirdropSection from "./RightsAirdropSection";

const RightsAirdrop = (props) => {

    return (
        <>
            <RightsAirdropSection
                onCoinsChange={props.onCoinsChange}
                onCoins={props.onCoins}
                numSwitch={props.numSwitch}
                setNumSwitch={props.setNumSwitch}
                showTimerToFly={props.showTimerToFly}
            />

            <RightsAirdropPlayers
                listAirdropsMembers={props.listAirdropsMembers}
                setListAirdropsMembers={props.setListAirdropsMembers}
            />
        </>
    );
};

export default RightsAirdrop;