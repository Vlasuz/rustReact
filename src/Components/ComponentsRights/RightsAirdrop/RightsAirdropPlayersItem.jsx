import React from 'react';
import RightsAirdropPlayersItemPhoto from "./RightsAirdropPlayersItemPhoto";
import RightsAirdropPlayersItemInfo from "./RightsAirdropPlayersItemInfo";

const RightsAirdropPlayersItem = ({infoPlayer}) => {
    return (
        <div className="players__item">
            <RightsAirdropPlayersItemPhoto infoPlayer={infoPlayer} />
            <RightsAirdropPlayersItemInfo infoPlayer={infoPlayer} />
        </div>
    );
};

export default RightsAirdropPlayersItem;