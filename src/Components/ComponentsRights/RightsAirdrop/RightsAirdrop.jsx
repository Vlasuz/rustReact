import React from 'react';
import RightsAirdropPlayers from "./RightsAirdropPlayers";
import RightsAirdropSection from "./RightsAirdropSection";

const RightsAirdrop = (props) => {

    return (
        <>
            <RightsAirdropSection states={props.states}/>
            <RightsAirdropPlayers states={props.states}/>
        </>
    );
};

export default RightsAirdrop;