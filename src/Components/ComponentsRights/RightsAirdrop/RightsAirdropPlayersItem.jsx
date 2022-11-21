import React from 'react';
import RightsAirdropPlayersItemPhoto from "./RightsAirdropPlayersItemPhoto";
import RightsAirdropPlayersItemInfo from "./RightsAirdropPlayersItemInfo";

const RightsAirdropPlayersItem = (props) => {
    return (
        <div className="players__item">
            <RightsAirdropPlayersItemPhoto infoPlayer={props.infoPlayer} />
            <RightsAirdropPlayersItemInfo infoPlayer={props.infoPlayer} />
        </div>
    );
};

export default RightsAirdropPlayersItem;