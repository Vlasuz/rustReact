import React from 'react';
import RightsAirdropPlayers from "./RightsAirdropPlayers";
import RightsAirdropSection from "./RightsAirdropSection";

const RightsAirdrop = ({onCoinsChange, onCoins, timer, setTimeToFly, isAirdropEnd}) => {

    return (
        <>
            <RightsAirdropSection
                onCoinsChange={onCoinsChange}
                onCoins={onCoins}

                timer={timer}
                setTimeToFly={setTimeToFly}
                isAirdropEnd={isAirdropEnd}
            />

            <RightsAirdropPlayers/>
        </>
    );
};

export default RightsAirdrop;