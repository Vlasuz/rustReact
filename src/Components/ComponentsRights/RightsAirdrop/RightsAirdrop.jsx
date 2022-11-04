import React from 'react';
import RightsAirdropPlayers from "./RightsAirdropPlayers";
import RightsAirdropSection from "./RightsAirdropSection";

const RightsAirdrop = ({onCoinsChange, onCoins, timer}) => {

    return (
        <>
            <RightsAirdropSection
                onCoinsChange={onCoinsChange}
                onCoins={onCoins}

                timer={timer}
            />

            <RightsAirdropPlayers/>
        </>
    );
};

export default RightsAirdrop;